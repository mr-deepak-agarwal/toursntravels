import { NextResponse } from "next/server";
import { Resend } from "resend";
import { createAdminClient } from "@/lib/supabase/admin";

const VALID_SOURCES = ["contact", "taxi_booking", "enquiry"] as const;
type Source = (typeof VALID_SOURCES)[number];

const SOURCE_LABELS: Record<Source, string> = {
  contact: "Contact Form",
  taxi_booking: "Taxi Booking",
  enquiry: "Plan Your Goa Story",
};

// Only these columns exist on the `enquiries` table — anything else in the
// request body is ignored so a stray/renamed field can't break the insert.
const ALLOWED_FIELDS = [
  "full_name",
  "phone",
  "email",
  "message",
  "destination",
  "travel_date",
  "service",
  "passengers",
  "trip_type",
  "pickup_location",
  "drop_location",
  "pickup_date",
  "pickup_time",
  "vehicle_type",
] as const;

const DATE_FIELDS = new Set(["travel_date", "pickup_date"]);
const MAX_LEN = 300;
const MAX_MESSAGE_LEN = 2000;

// Best-effort rate limit (per server instance). Stops simple form-spam loops without needing Redis.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 8;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear(); // keep memory bounded
  return recent.length > MAX_PER_WINDOW;
}

function labelize(key: string) {
  return key
    .replace(/_/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function escapeHtml(value: unknown) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

type Attribution = Record<string, unknown>;

/** Turn first-touch attribution into one readable line so the inbox shows which page / campaign produced the lead. */
function describeOrigin(page: unknown, attribution: unknown) {
  const parts: string[] = [];
  if (typeof page === "string" && page) parts.push(`Form page: ${page.slice(0, 120)}`);
  if (attribution && typeof attribution === "object") {
    const a = attribution as Attribution;
    const pick = (k: string) => (typeof a[k] === "string" && a[k] ? String(a[k]).slice(0, 80) : "");
    if (pick("landing_page")) parts.push(`Landing page: ${pick("landing_page")}`);
    if (pick("referrer")) parts.push(`Referrer: ${pick("referrer")}`);
    const utm = ["utm_source", "utm_medium", "utm_campaign", "utm_term"].map((k) => (pick(k) ? `${k}=${pick(k)}` : "")).filter(Boolean);
    if (utm.length) parts.push(utm.join(", "));
    if (a.gclid) parts.push("Google Ads click");
  }
  return parts.length ? `— ${parts.join(" | ")}` : "";
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  // Honeypot: real visitors never fill this hidden field. Pretend success so bots don't retry.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ success: true });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests. Please call or WhatsApp us." }, { status: 429 });
  }

  const source = body.source as Source;
  if (!VALID_SOURCES.includes(source)) {
    return NextResponse.json({ error: "Invalid source" }, { status: 400 });
  }

  const row: Record<string, unknown> = { source };
  for (const field of ALLOWED_FIELDS) {
    const value = body[field];
    if (value === undefined || value === null || value === "") continue;

    if (field === "passengers") {
      const n = Number(value);
      row[field] = Number.isFinite(n) && n > 0 && n < 1000 ? Math.floor(n) : null;
    } else if (DATE_FIELDS.has(field)) {
      // An invalid date string would make the whole insert fail, so drop it instead.
      row[field] = typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value) ? value : null;
    } else {
      const text = String(value).trim();
      row[field] = text.slice(0, field === "message" ? MAX_MESSAGE_LEN : MAX_LEN);
    }
  }

  // phone is NOT NULL in the table: require something that looks like a phone number.
  const phoneDigits = typeof row.phone === "string" ? row.phone.replace(/\D/g, "") : "";
  if (phoneDigits.length < 7 || phoneDigits.length > 15) {
    return NextResponse.json({ error: "Please enter a valid phone number" }, { status: 400 });
  }

  if (typeof row.email === "string" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(row.email)) {
    delete row.email; // optional field: don't lose the lead over a typo
  }

  // Attribution rides along in the message column so no schema change is needed.
  const origin = describeOrigin(body.page, body.attribution);
  if (origin) {
    const existing = typeof row.message === "string" ? `${row.message}\n\n` : "";
    row.message = `${existing}${origin}`.slice(0, MAX_MESSAGE_LEN + 400);
  }

  const supabase = createAdminClient();
  const { error: insertError } = await supabase.from("enquiries").insert(row);

  if (insertError) {
    console.error("Enquiry insert failed:", insertError);
    return NextResponse.json({ error: "Could not save enquiry" }, { status: 500 });
  }

  // Email notification is best-effort: the enquiry is already saved, so a
  // failure here must never turn into a failure response for the visitor.
  try {
    const notifyTo = process.env.NOTIFY_EMAIL;
    if (notifyTo && process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const rows = ALLOWED_FIELDS.filter((f) => row[f] !== undefined)
        .map(
          (f) =>
            `<tr><td style="padding:4px 12px 4px 0;color:#666;white-space:nowrap;vertical-align:top;">${escapeHtml(labelize(f))}</td><td style="padding:4px 0;font-weight:600;white-space:pre-wrap;">${escapeHtml(row[f])}</td></tr>`
        )
        .join("");

      await resend.emails.send({
        from: process.env.NOTIFY_FROM || "Zorvana Tours <onboarding@resend.dev>",
        to: notifyTo,
        replyTo: typeof row.email === "string" ? row.email : undefined,
        subject: `New Enquiry — ${SOURCE_LABELS[source]}${row.full_name ? ` from ${String(row.full_name).replace(/[\r\n]+/g, " ")}` : ""}`,
        html: `
          <div style="font-family:sans-serif;max-width:480px;">
            <h2 style="margin:0 0 12px;">New ${escapeHtml(SOURCE_LABELS[source])} Enquiry</h2>
            <table cellspacing="0" cellpadding="0">${rows}</table>
          </div>
        `,
      });
    }
  } catch (emailError) {
    console.error("Enquiry email notification failed:", emailError);
  }

  return NextResponse.json({ success: true });
}

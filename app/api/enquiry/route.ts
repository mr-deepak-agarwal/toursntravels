import { NextResponse } from "next/server";
import { Resend } from "resend";
import { createAdminClient } from "@/lib/supabase/admin";

const resend = new Resend(process.env.RESEND_API_KEY);

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

function labelize(key: string) {
  return key
    .replace(/_/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const source = body.source as Source;
  if (!VALID_SOURCES.includes(source)) {
    return NextResponse.json({ error: "Invalid source" }, { status: 400 });
  }

  const row: Record<string, unknown> = { source };
  for (const field of ALLOWED_FIELDS) {
    if (body[field] !== undefined && body[field] !== "") {
      row[field] = field === "passengers" ? Number(body[field]) || null : body[field];
    }
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
      const rows = ALLOWED_FIELDS.filter((f) => row[f] !== undefined)
        .map((f) => `<tr><td style="padding:4px 12px 4px 0;color:#666;white-space:nowrap;">${labelize(f)}</td><td style="padding:4px 0;font-weight:600;">${row[f]}</td></tr>`)
        .join("");

      await resend.emails.send({
        from: process.env.NOTIFY_FROM || "Zorvana Tours <onboarding@resend.dev>",
        to: notifyTo,
        replyTo: typeof row.email === "string" ? row.email : undefined,
        subject: `New Enquiry — ${SOURCE_LABELS[source]}${row.full_name ? ` from ${row.full_name}` : ""}`,
        html: `
          <div style="font-family:sans-serif;max-width:480px;">
            <h2 style="margin:0 0 12px;">New ${SOURCE_LABELS[source]} Enquiry</h2>
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

"use client";

import { useState, FormEvent } from "react";
import { Button } from "./Button";
import { Check, Loader2 } from "lucide-react";

type Variant = "taxi" | "tour" | "hotel" | "contact";

const variantCopy: Record<Variant, { title: string; sub: string; cta: string }> = {
  taxi: {
    title: "Get a taxi quote",
    sub: "Tell us your route and dates — we'll WhatsApp you a fixed price within the hour.",
    cta: "Get My Quote",
  },
  tour: {
    title: "Enquire about this package",
    sub: "Share your travel dates and group size for a tailored itinerary and price.",
    cta: "Send Enquiry",
  },
  hotel: {
    title: "Check availability",
    sub: "Tell us your dates and we'll confirm the best rate for this stay.",
    cta: "Check Availability",
  },
  contact: {
    title: "Plan your trip",
    sub: "Tell us what you have in mind — taxi, a tour, a stay, or all three.",
    cta: "Send Message",
  },
};

export default function EnquiryForm({
  variant = "contact",
  presetItem,
  dark = false,
}: {
  variant?: Variant;
  presetItem?: string;
  dark?: boolean;
}) {
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");
  const copy = variantCopy[variant];

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    try {
      await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ variant, ...payload }),
      });
    } catch {
      // fail silently in this demo — swap for real error handling once wired to email/CRM
    }
    setStatus("done");
  }

  const inputClass = dark
    ? "w-full bg-ivory/10 border border-ivory/25 rounded-lg px-4 py-3 text-sm text-ivory placeholder:text-ivory/40 focus:border-gold outline-none transition-colors"
    : "w-full bg-white border border-line rounded-lg px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60 focus:border-laterite outline-none transition-colors";

  const labelClass = `block text-xs font-stamp uppercase mb-1.5 ${dark ? "text-ivory/60" : "text-ink-soft"}`;

  if (status === "done") {
    return (
      <div
        className={`rounded-2xl p-8 flex flex-col items-center text-center gap-3 ${
          dark ? "bg-ivory/10" : "bg-sand"
        }`}
      >
        <div className="w-12 h-12 rounded-full bg-laterite flex items-center justify-center">
          <Check size={22} className="text-ivory" />
        </div>
        <p className={`font-display text-xl ${dark ? "text-ivory" : "text-ink"}`}>
          Got it — thank you.
        </p>
        <p className={`text-sm ${dark ? "text-ivory/60" : "text-ink-soft"}`}>
          We&apos;ll reply on WhatsApp or phone within a few hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <h3 className={`font-display text-2xl mb-1.5 ${dark ? "text-ivory" : "text-ink"}`}>
          {copy.title}
        </h3>
        <p className={`text-sm ${dark ? "text-ivory/60" : "text-ink-soft"}`}>{copy.sub}</p>
      </div>

      {presetItem && (
        <input type="hidden" name="item" value={presetItem} />
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Full name</label>
          <input required name="name" className={inputClass} placeholder="Your name" />
        </div>
        <div>
          <label className={labelClass}>Phone / WhatsApp</label>
          <input required name="phone" className={inputClass} placeholder="+91 XXXXX XXXXX" />
        </div>
      </div>

      {variant === "taxi" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Pickup location</label>
            <input required name="pickup" className={inputClass} placeholder="e.g. Dabolim Airport" />
          </div>
          <div>
            <label className={labelClass}>Drop location</label>
            <input required name="drop" className={inputClass} placeholder="e.g. Calangute" />
          </div>
          <div>
            <label className={labelClass}>Travel date</label>
            <input required type="date" name="date" className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Trip type</label>
            <select name="tripType" className={inputClass}>
              <option>Local (within Goa)</option>
              <option>Outstation</option>
              <option>Self-drive rental</option>
              <option>Airport transfer</option>
            </select>
          </div>
        </div>
      )}

      {(variant === "tour" || variant === "contact") && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Preferred travel date</label>
            <input name="date" type="date" className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Group size</label>
            <input name="groupSize" className={inputClass} placeholder="e.g. 4 adults, 2 children" />
          </div>
        </div>
      )}

      {variant === "hotel" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Check-in</label>
            <input name="checkin" type="date" className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Check-out</label>
            <input name="checkout" type="date" className={inputClass} />
          </div>
        </div>
      )}

      <div>
        <label className={labelClass}>Anything else we should know?</label>
        <textarea name="message" rows={3} className={inputClass} placeholder="Optional" />
      </div>

      <Button type="submit" size="lg" className="mt-2" disabled={status === "loading"}>
        {status === "loading" ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Sending
          </>
        ) : (
          copy.cta
        )}
      </Button>
    </form>
  );
}

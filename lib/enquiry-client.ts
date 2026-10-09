"use client";

import { getAttribution } from "@/lib/attribution";
import { trackLead } from "@/lib/analytics";

/**
 * Single place that posts every form to /api/enquiry.
 * Adds the current page + first-touch attribution (so the admin inbox shows which page or
 * campaign produced the lead), passes the spam honeypot, and fires the GA4 `generate_lead` event.
 */
export async function submitEnquiry(source: "contact" | "taxi_booking" | "enquiry", fields: Record<string, unknown>, honeypot = ""): Promise<boolean> {
  try {
    const res = await fetch("/api/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        source,
        ...fields,
        website: honeypot, // honeypot: real users leave this empty
        page: window.location.pathname,
        attribution: getAttribution(),
      }),
    });
    if (!res.ok) return false;
    trackLead(source, { service: typeof fields.service === "string" ? fields.service : undefined });
    return true;
  } catch {
    return false;
  }
}

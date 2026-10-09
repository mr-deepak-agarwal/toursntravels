"use client";

import { sendGAEvent } from "@next/third-parties/google";

type Params = Record<string, string | number | boolean | undefined>;

/** Safe wrapper — never throws if GA is blocked (ad-blockers, consent, SSR). */
export function track(event: string, params: Params = {}) {
  try {
    if (typeof window === "undefined") return;
    sendGAEvent("event", event, params);
  } catch {
    /* analytics must never break the UI */
  }
}

/** Fired when any enquiry / booking form is successfully submitted. Mark as a Key Event in GA4. */
export function trackLead(source: string, extra: Params = {}) {
  track("generate_lead", { lead_source: source, page_path: typeof window !== "undefined" ? window.location.pathname : "", ...extra });
}

export function trackWhatsApp(placement: string) {
  track("whatsapp_click", { placement, page_path: typeof window !== "undefined" ? window.location.pathname : "" });
}

export function trackCall(placement: string) {
  track("call_click", { placement, page_path: typeof window !== "undefined" ? window.location.pathname : "" });
}

export function trackOpenEnquiry(placement: string) {
  track("open_enquiry_form", { placement, page_path: typeof window !== "undefined" ? window.location.pathname : "" });
}

"use client";

const KEY = "gbd_attribution";

export type Attribution = {
  landing_page?: string;
  referrer?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  gclid?: boolean;
};

/** Remember where the visitor first arrived (landing page, referrer, UTM tags) for this browser session. */
export function captureAttribution() {
  try {
    if (typeof window === "undefined" || sessionStorage.getItem(KEY)) return;
    const q = new URLSearchParams(window.location.search);
    const data: Attribution = {
      landing_page: window.location.pathname,
      referrer: document.referrer ? new URL(document.referrer).hostname : "direct",
      utm_source: q.get("utm_source") ?? undefined,
      utm_medium: q.get("utm_medium") ?? undefined,
      utm_campaign: q.get("utm_campaign") ?? undefined,
      utm_term: q.get("utm_term") ?? undefined,
      gclid: q.has("gclid") || undefined,
    };
    sessionStorage.setItem(KEY, JSON.stringify(data));
  } catch {
    /* storage can be blocked — attribution is best-effort */
  }
}

export function getAttribution(): Attribution {
  try {
    return JSON.parse(sessionStorage.getItem(KEY) || "{}") as Attribution;
  } catch {
    return {};
  }
}

"use client";

import { FaWhatsapp } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { telHref, whatsappUrl } from "@/lib/seo";
import { trackCall, trackWhatsApp } from "@/lib/analytics";
import { siteConfig } from "@/lib/data";

/** WhatsApp CTA with a page-specific prefilled message and GA4 tracking. */
export function WhatsAppCta({ message, placement, label = "WhatsApp us", className }: { message: string; placement: string; label?: string; className?: string }) {
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsApp(placement)}
      className={
        className ??
        "inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-95"
      }
    >
      <FaWhatsapp size={18} /> {label}
    </a>
  );
}

export function CallCta({ placement, label, className }: { placement: string; label?: string; className?: string }) {
  return (
    <a
      href={telHref}
      onClick={() => trackCall(placement)}
      className={
        className ??
        "inline-flex items-center justify-center gap-2 rounded-full border border-navy-900/15 bg-white px-5 py-2.5 text-sm font-semibold text-navy-900 transition hover:bg-sand-200"
      }
    >
      <FiPhone size={16} /> {label ?? siteConfig.phone}
    </a>
  );
}

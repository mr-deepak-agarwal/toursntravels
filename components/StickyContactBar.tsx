"use client";

import { FaWhatsapp } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { usePathname } from "next/navigation";
import { telHref, whatsappUrl } from "@/lib/seo";
import { trackCall, trackWhatsApp } from "@/lib/analytics";

/** Mobile-only bottom bar: most Goa visitors browse on a phone, so Call + WhatsApp are always one tap away. */
export default function StickyContactBar() {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-navy-900/10 bg-white/95 p-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom))] backdrop-blur md:hidden">
      <a
        href={telHref}
        onClick={() => trackCall("sticky_bar")}
        className="flex flex-1 items-center justify-center gap-2 rounded-full bg-navy-900 py-3 text-sm font-semibold text-sand-100"
      >
        <FiPhone size={16} /> Call now
      </a>
      <a
        href={whatsappUrl(`Hi! I'd like a quote. (Page: ${pathname})`)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsApp("sticky_bar")}
        className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] py-3 text-sm font-semibold text-white"
      >
        <FaWhatsapp size={18} /> WhatsApp
      </a>
    </div>
  );
}

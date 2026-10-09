"use client";

import { FaWhatsapp } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { whatsappUrl } from "@/lib/seo";
import { trackWhatsApp } from "@/lib/analytics";

export default function WhatsAppButton() {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) return null;

  return (
    <motion.a
      href={whatsappUrl("Hi! I'd like to plan a trip to Goa.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      onClick={() => trackWhatsApp("floating_button")}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
      whileHover={{ scale: 1.08 }}
      className="fixed bottom-6 right-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-premium md:flex"
    >
      <FaWhatsapp size={28} />
    </motion.a>
  );
}

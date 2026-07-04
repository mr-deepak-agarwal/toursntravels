"use client";

import { FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "@/lib/data";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${siteConfig.whatsapp}?text=Hi! I'd like to plan a trip to Goa.`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
      whileHover={{ scale: 1.08 }}
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-premium"
    >
      <FaWhatsapp size={28} />
    </motion.a>
  );
}

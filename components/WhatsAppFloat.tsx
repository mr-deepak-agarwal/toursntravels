"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/config";

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={whatsappLink("Hi! I'd like to know more about your Goa taxi/tour/hotel services.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.8, type: "spring", stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 md:bottom-7 md:right-7"
    >
      <MessageCircle size={26} fill="white" strokeWidth={0} />
    </motion.a>
  );
}

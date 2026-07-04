"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import type { TaxiService } from "@/lib/data/taxi";
import { whatsappLink } from "@/lib/config";

export default function TaxiCard({ service, index = 0 }: { service: TaxiService; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col rounded-2xl bg-paper p-6 shadow-sm ring-1 ring-ink/5"
    >
      <h3 className="font-display text-xl font-semibold text-ink">{service.title}</h3>
      <p className="mt-2 text-sm text-ink-soft/80">{service.description}</p>
      <ul className="mt-4 flex-1 space-y-2">
        {service.points.map((point) => (
          <li key={point} className="flex items-start gap-2 text-sm text-ink-soft/80">
            <Check size={15} className="mt-0.5 shrink-0 text-palm" /> {point}
          </li>
        ))}
      </ul>
      <div className="mt-5 flex items-center justify-between border-t border-ink/5 pt-4">
        <span className="text-sm font-semibold text-laterite">{service.priceNote}</span>
        <a
          href={whatsappLink(`Hi, I'd like to book: ${service.title}`)}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-azulejo px-4 py-2 text-xs font-semibold text-paper transition-transform hover:scale-105 hover:bg-azulejo-dim"
        >
          Enquire
        </a>
      </div>
    </motion.div>
  );
}

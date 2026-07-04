"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import PlaceholderPhoto from "./PlaceholderPhoto";
import type { Hotel } from "@/lib/data/hotels";
import { whatsappLink } from "@/lib/config";

export default function HotelCard({ hotel, index = 0 }: { hotel: Hotel; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="overflow-hidden rounded-2xl bg-paper shadow-sm ring-1 ring-ink/5 transition-shadow hover:shadow-lg"
    >
      <PlaceholderPhoto gradient={hotel.image} label={hotel.area} className="h-44 w-full" />
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-lg font-semibold text-ink">{hotel.name}</h3>
          <span className="rounded-full bg-sand px-2.5 py-1 text-[11px] font-semibold text-azulejo">
            {hotel.category}
          </span>
        </div>
        <p className="mt-1 flex items-center gap-1 text-xs text-ink-soft/70">
          <MapPin size={12} /> {hotel.area}
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {hotel.amenities.map((a) => (
            <span key={a} className="rounded-full bg-sand-dim px-2.5 py-1 text-[11px] text-ink-soft/80">
              {a}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between border-t border-ink/5 pt-3">
          <div>
            <span className="text-[11px] text-ink-soft/60">Per night from</span>
            <div className="font-display text-lg font-semibold text-laterite">
              ₹{hotel.priceFrom.toLocaleString("en-IN")}
            </div>
          </div>
          <a
            href={whatsappLink(`Hi, I'd like to check availability for: ${hotel.name}`)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-azulejo px-4 py-2 text-xs font-semibold text-paper transition-transform hover:scale-105 hover:bg-azulejo-dim"
          >
            Check Availability
          </a>
        </div>
      </div>
    </motion.div>
  );
}

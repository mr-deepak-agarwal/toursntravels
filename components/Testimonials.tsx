"use client";

import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="container-lux py-24">
      <div className="mb-14 max-w-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-turquoise-600">Traveller stories</p>
        <h2 className="heading-hero mt-3 text-4xl text-navy-900 md:text-5xl">Real trips, real words</h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="rounded-3xl bg-navy-900 p-6 text-sand-100"
          >
            <div className="mb-3 flex gap-1 text-sunset-400">
              {Array.from({ length: t.rating }).map((_, idx) => (
                <FiStar key={idx} fill="currentColor" size={14} />
              ))}
            </div>
            <p className="text-sm text-sand-100/85">&ldquo;{t.quote}&rdquo;</p>
            <p className="mt-4 text-sm font-semibold">{t.name}</p>
            <p className="text-xs text-sand-100/50">{t.origin}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

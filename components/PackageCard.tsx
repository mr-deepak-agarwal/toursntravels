"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock, MapPin } from "lucide-react";
import PlaceholderPhoto from "./PlaceholderPhoto";
import type { TourPackage } from "@/lib/data/tours";

export default function PackageCard({ pkg, index = 0 }: { pkg: TourPackage; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-2xl bg-paper shadow-sm ring-1 ring-ink/5 transition-shadow hover:shadow-lg"
    >
      <Link href={`/tours/${pkg.slug}`}>
        <PlaceholderPhoto gradient={pkg.image} label={pkg.location} className="h-48 w-full" />
        <div className="p-5">
          <div className="flex items-center justify-between gap-2">
            <span className="rounded-full bg-sand px-2.5 py-1 text-[11px] font-semibold text-azulejo">
              {pkg.region}
            </span>
            <span className="flex items-center gap-1 text-[11px] font-medium text-ink-soft/70">
              <Clock size={12} /> {pkg.duration}
            </span>
          </div>
          <h3 className="mt-3 font-display text-lg font-semibold text-ink">{pkg.title}</h3>
          <p className="mt-1 flex items-center gap-1 text-xs text-ink-soft/70">
            <MapPin size={12} /> {pkg.location}
          </p>
          <p className="mt-2.5 line-clamp-2 text-sm text-ink-soft/80">{pkg.summary}</p>
          <div className="mt-4 flex items-center justify-between border-t border-ink/5 pt-3">
            <div>
              <span className="text-[11px] text-ink-soft/60">From</span>
              <div className="font-display text-lg font-semibold text-laterite">
                ₹{pkg.priceFrom.toLocaleString("en-IN")}
              </div>
            </div>
            <span className="flex items-center gap-1 text-sm font-medium text-azulejo transition-transform group-hover:translate-x-0.5">
              Details <ArrowUpRight size={15} />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

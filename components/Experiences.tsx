"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { experiences } from "@/lib/data";

export default function Experiences() {
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-navy-950 py-24">
      <div className="container-lux mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-turquoise-400">Goa experiences</p>
          <h2 className="heading-hero mt-3 max-w-xl text-4xl text-sand-100 md:text-5xl">
            Drag through the coast
          </h2>
        </div>
        <p className="max-w-sm text-sand-100/60">
          Many moods, one destination. Scroll or drag the filmstrip below.
        </p>
      </div>

      <div
        ref={trackRef}
        className="flex gap-5 overflow-x-auto px-6 pb-4 [scrollbar-width:none] md:px-16 [&::-webkit-scrollbar]:hidden"
      >
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.title}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            whileHover={{ y: -8 }}
            className="group relative h-80 w-64 flex-shrink-0 overflow-hidden rounded-3xl md:h-96 md:w-72"
          >
            <Image src={exp.image} alt={exp.title} fill className="object-cover transition duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <h3 className="font-display text-2xl text-sand-100">{exp.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

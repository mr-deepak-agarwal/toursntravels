"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section className="container-lux pt-40 pb-24 md:pt-48">
      <div className="mb-14 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-turquoise-600">What we do</p>
          <h2 className="heading-hero mt-3 max-w-xl text-4xl text-navy-900 md:text-5xl">
            Everything your Goa trip needs, in one place
          </h2>
        </div>
        <p className="max-w-sm text-navy-900/60">
          From the moment you land to the moment you don&apos;t want to leave, we handle the logistics.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <motion.div
            key={s.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
            className={`group relative overflow-hidden rounded-4xl bg-navy-900 ${i === 0 ? "md:col-span-2 lg:col-span-2" : ""}`}
          >
            <Link href={s.href} className="block h-full">
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent" />
              </div>
              <div className="relative -mt-16 p-6">
                <span className="mb-2 inline-block rounded-full bg-turquoise-500/20 px-3 py-1 text-xs font-medium text-turquoise-300">
                  {s.tag}
                </span>
                <h3 className="font-display text-2xl text-sand-100">{s.title}</h3>
                <p className="mt-2 text-sm text-sand-100/70">{s.desc}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {s.points.map((p) => (
                    <li key={p} className="rounded-full border border-sand-100/15 px-3 py-1 text-xs text-sand-100/70">
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-sunset-400">
                  Explore <FiArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

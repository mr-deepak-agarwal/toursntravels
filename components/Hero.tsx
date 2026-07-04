"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiMapPin, FiCalendar, FiUsers, FiSearch } from "react-icons/fi";

const tabs = ["Book Taxi", "Plan Holiday", "Book Hotel"];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-[100vh] min-h-[720px] w-full overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=2400&auto=format&fit=crop"
          alt="Aerial view of a Goa beach at golden hour"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-navy-950/30 to-navy-950/85" />
      </motion.div>

      <motion.div style={{ opacity }} className="container-lux relative z-10 flex h-full flex-col justify-center pt-24">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mb-4 flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-turquoise-400"
        >
          North Goa · South Goa · Beyond
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="heading-hero max-w-3xl text-balance text-5xl font-medium leading-[1.05] text-sand-100 md:text-7xl"
        >
          Explore Goa,
          <br />
          <span className="italic text-sunset-400">unhurried.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.7 }}
          className="mt-6 max-w-lg text-lg text-sand-100/80"
        >
          Premium taxi services, self drive cars, hand-picked hotels and holiday
          packages, built for travellers who want the coast on their own terms.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <Link href="/taxi" className="rounded-full bg-sunset-500 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-sunset-600">
            Book Taxi
          </Link>
          <Link href="/holiday-packages" className="rounded-full border border-sand-100/30 px-7 py-3.5 text-sm font-semibold text-sand-100 backdrop-blur transition hover:bg-sand-100/10">
            Plan Holiday
          </Link>
          <Link href="/hotels" className="rounded-full border border-sand-100/30 px-7 py-3.5 text-sm font-semibold text-sand-100 backdrop-blur transition hover:bg-sand-100/10">
            Book Hotel
          </Link>
        </motion.div>
      </motion.div>

      {/* Floating glass booking widget */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.7 }}
        className="glass absolute inset-x-0 bottom-0 z-20 mx-auto w-[92%] max-w-4xl translate-y-1/2 rounded-4xl p-2 shadow-premium md:w-full"
      >
        <div className="flex gap-1 rounded-full bg-navy-950/30 p-1">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              className={`flex-1 rounded-full px-4 py-2 text-xs font-semibold transition md:text-sm ${
                i === 0 ? "bg-sand-100 text-navy-900" : "text-sand-100/80"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-3 p-4 md:grid-cols-[1.4fr_1.4fr_1fr_1fr_auto]">
          <div className="flex items-center gap-2 rounded-2xl bg-white/90 px-4 py-3">
            <FiMapPin className="text-turquoise-600" />
            <input placeholder="Pickup location" className="w-full bg-transparent text-sm text-navy-900 outline-none placeholder:text-navy-900/40" />
          </div>
          <div className="flex items-center gap-2 rounded-2xl bg-white/90 px-4 py-3">
            <FiMapPin className="text-sunset-500" />
            <input placeholder="Drop location" className="w-full bg-transparent text-sm text-navy-900 outline-none placeholder:text-navy-900/40" />
          </div>
          <div className="flex items-center gap-2 rounded-2xl bg-white/90 px-4 py-3">
            <FiCalendar className="text-navy-900/50" />
            <input type="date" className="w-full bg-transparent text-sm text-navy-900 outline-none" />
          </div>
          <div className="flex items-center gap-2 rounded-2xl bg-white/90 px-4 py-3">
            <FiUsers className="text-navy-900/50" />
            <input type="number" min={1} placeholder="Guests" className="w-full bg-transparent text-sm text-navy-900 outline-none placeholder:text-navy-900/40" />
          </div>
          <button className="flex items-center justify-center gap-2 rounded-2xl bg-navy-900 px-6 py-3 text-sm font-semibold text-sand-100 transition hover:bg-navy-800">
            <FiSearch /> Search
          </button>
        </div>
      </motion.div>
    </section>
  );
}

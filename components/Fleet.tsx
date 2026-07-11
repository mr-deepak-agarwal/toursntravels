"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiUsers, FiBriefcase, FiWind } from "react-icons/fi";
import { fleet } from "@/lib/data";
import { useEnquiry } from "./EnquiryFormContext";

export default function Fleet() {
  const { open } = useEnquiry();

  return (
    <section className="bg-sand-200/60 py-24">
      <div className="container-lux">
        <div className="mb-14 max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sunset-600">Vehicle fleet</p>
          <h2 className="heading-hero mt-3 text-4xl text-navy-900 md:text-5xl">A ride for every kind of trip</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {fleet.map((v, i) => (
            <motion.div
              key={v.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="overflow-hidden rounded-3xl bg-white shadow-premium"
            >
              <div className="relative h-48 w-full">
                <Image src={v.image} alt={v.name} fill className="object-cover" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl text-navy-900">{v.name}</h3>
                <p className="mt-1 text-xs text-navy-900/50">{v.example}</p>
                <div className="mt-4 flex gap-4 text-xs text-navy-900/60">
                  <span className="flex items-center gap-1"><FiUsers /> {v.passengers}</span>
                  <span className="flex items-center gap-1"><FiBriefcase /> {v.luggage} bags</span>
                  <span className="flex items-center gap-1"><FiWind /> AC</span>
                </div>
                <button
                  onClick={open}
                  className="mt-5 w-full rounded-full bg-navy-900 py-2.5 text-sm font-semibold text-sand-100 transition hover:bg-navy-800"
                >
                  Book Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

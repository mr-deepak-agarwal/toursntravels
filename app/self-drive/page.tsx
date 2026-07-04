"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiUsers, FiSettings } from "react-icons/fi";
import { fleet } from "@/lib/data";
import { useEnquiry } from "@/components/EnquiryFormContext";

const filters = ["All", "Automatic", "Manual", "SUV", "Hatchback", "Luxury"];

export default function SelfDrivePage() {
  const [active, setActive] = useState("All");
  const { open } = useEnquiry();
  const selfDriveFleet = fleet.filter((v) => v.name !== "Tempo Traveller");

  return (
    <div className="pt-28">
      <section className="container-lux pb-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-turquoise-600">Self drive cars</p>
        <h1 className="heading-hero mx-auto mt-3 max-w-2xl text-4xl text-navy-900 md:text-5xl">
          Your journey, your pace, your playlist
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-navy-900/65">
          Hourly, daily or weekly hire with doorstep delivery across North Goa. Unlimited kilometres available on select vehicles.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                active === f ? "bg-navy-900 text-sand-100" : "bg-sand-200/70 text-navy-900/70"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      <section className="container-lux pb-24">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {selfDriveFleet.map((v, i) => (
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
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-xl text-navy-900">{v.name}</h3>
                  <span className="text-sm font-semibold text-emerald-600">{v.price}</span>
                </div>
                <p className="mt-1 text-xs text-navy-900/50">{v.example}</p>
                <div className="mt-4 flex gap-4 text-xs text-navy-900/60">
                  <span className="flex items-center gap-1"><FiUsers /> {v.passengers} seats</span>
                  <span className="flex items-center gap-1"><FiSettings /> Automatic/Manual</span>
                </div>
                <button
                  onClick={open}
                  className="mt-5 w-full rounded-full bg-navy-900 py-2.5 text-sm font-semibold text-sand-100 transition hover:bg-navy-800"
                >
                  Reserve This Car
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

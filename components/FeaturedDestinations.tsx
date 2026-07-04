"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { destinations } from "@/lib/data";

export default function FeaturedDestinations() {
  return (
    <section className="bg-sand-200/60 py-24">
      <div className="container-lux">
        <div className="mb-14 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sunset-600">Featured places</p>
            <h2 className="heading-hero mt-3 max-w-xl text-4xl text-navy-900 md:text-5xl">
              Six places worth rearranging your itinerary for
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5">
          {destinations.map((d, i) => (
            <motion.div
              key={d.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className={`group relative overflow-hidden rounded-3xl ${
                i === 0 ? "col-span-2 row-span-2 h-[420px] md:col-span-1 md:row-span-2 md:h-[520px]" : "h-[200px] md:h-[250px]"
              }`}
            >
              <Image
                src={d.image}
                alt={d.name}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/10 to-transparent transition group-hover:from-navy-950/90" />
              <div className="absolute bottom-0 p-4 md:p-5">
                <p className="text-xs font-medium uppercase tracking-wider text-turquoise-300">{d.region}</p>
                <h3 className="font-display text-lg text-sand-100 md:text-xl">{d.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

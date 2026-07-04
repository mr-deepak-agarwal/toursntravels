"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus } from "react-icons/fi";
import { faqs } from "@/lib/data";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-sand-200/60 py-24">
      <div className="container-lux max-w-3xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sunset-600">FAQ</p>
          <h2 className="heading-hero mt-3 text-4xl text-navy-900 md:text-5xl">Good to know</h2>
        </div>

        <div className="divide-y divide-navy-900/10 rounded-3xl bg-white shadow-premium">
          {faqs.map((f, i) => (
            <div key={f.q} className="px-6">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
              >
                <span className="font-medium text-navy-900">{f.q}</span>
                <motion.span animate={{ rotate: openIndex === i ? 45 : 0 }} className="shrink-0 text-turquoise-600">
                  <FiPlus size={18} />
                </motion.span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 text-sm leading-relaxed text-navy-900/65">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

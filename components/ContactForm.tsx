"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="rounded-4xl bg-white p-8 shadow-premium">
      {submitted ? (
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="py-12 text-center">
          <FiCheckCircle className="mx-auto mb-4 text-emerald-500" size={48} />
          <p className="font-display text-xl text-navy-900">Message sent</p>
          <p className="mt-2 text-sm text-navy-900/60">We usually reply within a couple of hours.</p>
        </motion.div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="grid grid-cols-1 gap-4"
        >
          <input required placeholder="Full name" className="input-lux" />
          <input required type="email" placeholder="Email address" className="input-lux" />
          <input required type="tel" placeholder="Phone number" className="input-lux" />
          <textarea required rows={4} placeholder="How can we help?" className="input-lux" />
          <button type="submit" className="mt-1 rounded-full bg-sunset-500 py-3.5 text-sm font-semibold text-white shadow-premium transition hover:bg-sunset-600">
            Send message
          </button>
        </form>
      )}
    </div>
  );
}

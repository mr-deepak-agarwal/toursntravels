"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const res = await fetch("/api/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        source: "contact",
        full_name: formData.get("full_name") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string,
        message: formData.get("message") as string,
      }),
    });

    setLoading(false);

    if (!res.ok) {
      setError("Something went wrong. Please try again or WhatsApp us.");
      return;
    }

    setSubmitted(true);
  }

  return (
    <div className="rounded-4xl bg-white p-8 shadow-premium">
      {submitted ? (
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="py-12 text-center">
          <FiCheckCircle className="mx-auto mb-4 text-emerald-500" size={48} />
          <p className="font-display text-xl text-navy-900">Message sent</p>
          <p className="mt-2 text-sm text-navy-900/60">We usually reply within a couple of hours.</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
          <input name="full_name" required placeholder="Full name" className="input-lux" />
          <input name="email" required type="email" placeholder="Email address" className="input-lux" />
          <input name="phone" required type="tel" placeholder="Phone number" className="input-lux" />
          <textarea name="message" required rows={4} placeholder="How can we help?" className="input-lux" />
          {error && <p className="text-sm text-red-500">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="mt-1 rounded-full bg-sunset-500 py-3.5 text-sm font-semibold text-white shadow-premium transition hover:bg-sunset-600 disabled:opacity-60"
          >
            {loading ? "Sending…" : "Send message"}
          </button>
        </form>
      )}
    </div>
  );
}

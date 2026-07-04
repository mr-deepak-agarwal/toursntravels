"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";

type Props = {
  defaultSubject?: string;
  compact?: boolean;
};

export default function InquiryForm({ defaultSubject = "", compact = false }: Props) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: defaultSubject,
    travelDate: "",
    message: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center gap-3 rounded-2xl bg-paper p-10 text-center ring-1 ring-ink/5"
      >
        <CheckCircle2 size={40} className="text-palm" />
        <h3 className="font-display text-xl font-semibold text-ink">Request sent</h3>
        <p className="text-sm text-ink-soft/70">
          We usually reply within a few hours. You can also reach us directly on WhatsApp for a faster response.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`grid gap-4 ${compact ? "" : "md:grid-cols-2"}`}>
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium text-ink-soft/80">Full name</label>
        <input
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="rounded-lg border border-ink/10 bg-paper px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-azulejo"
          placeholder="Your name"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium text-ink-soft/80">Phone / WhatsApp</label>
        <input
          required
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="rounded-lg border border-ink/10 bg-paper px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-azulejo"
          placeholder="+91 9XXXXXXXXX"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium text-ink-soft/80">Email</label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="rounded-lg border border-ink/10 bg-paper px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-azulejo"
          placeholder="you@example.com"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium text-ink-soft/80">Travel date</label>
        <input
          type="date"
          value={form.travelDate}
          onChange={(e) => setForm({ ...form, travelDate: e.target.value })}
          className="rounded-lg border border-ink/10 bg-paper px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-azulejo"
        />
      </div>
      <div className="flex flex-col gap-1.5 md:col-span-2">
        <label className="text-xs font-medium text-ink-soft/80">What do you need?</label>
        <input
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
          className="rounded-lg border border-ink/10 bg-paper px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-azulejo"
          placeholder="e.g. Airport taxi, Goa 3N/4D package, hotel in Colva"
        />
      </div>
      <div className="flex flex-col gap-1.5 md:col-span-2">
        <label className="text-xs font-medium text-ink-soft/80">Message (optional)</label>
        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          rows={3}
          className="rounded-lg border border-ink/10 bg-paper px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-azulejo"
          placeholder="Number of travellers, budget, anything else that helps us plan"
        />
      </div>

      {status === "error" && (
        <p className="md:col-span-2 text-sm text-laterite">
          Something went wrong sending that — try WhatsApp instead, or try again in a moment.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="md:col-span-2 mt-1 flex items-center justify-center gap-2 rounded-full bg-laterite px-6 py-3.5 text-sm font-semibold text-paper transition-transform hover:scale-[1.01] hover:bg-laterite-dim disabled:opacity-70"
      >
        {status === "loading" && <Loader2 size={16} className="animate-spin" />}
        {status === "loading" ? "Sending..." : "Send enquiry"}
      </button>
    </form>
  );
}

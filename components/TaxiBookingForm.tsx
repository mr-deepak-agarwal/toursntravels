"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const vehicleTypes = ["Hatchback", "Sedan", "MUV", "SUV", "Tempo Traveller", "Luxury"];

export default function TaxiBookingForm() {
  const [tripType, setTripType] = useState<"oneway" | "round" | "airport">("airport");
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
        source: "taxi_booking",
        trip_type: tripType,
        pickup_location: formData.get("pickup_location") as string,
        drop_location: formData.get("drop_location") as string,
        pickup_date: (formData.get("pickup_date") as string) || null,
        pickup_time: formData.get("pickup_time") as string,
        passengers: Number(formData.get("passengers")) || null,
        vehicle_type: formData.get("vehicle_type") as string,
        phone: formData.get("phone") as string,
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-28 rounded-4xl border border-white/60 bg-white/95 p-6 shadow-premium backdrop-blur-xl md:p-8"
    >
      <div className="mb-5 flex gap-2 rounded-full bg-sand-200 p-1">
        {[
          { key: "airport", label: "Airport" },
          { key: "oneway", label: "One Way" },
          { key: "round", label: "Round Trip" },
        ].map((t) => (
          <button
            key={t.key}
            type="button"
            onClick={() => setTripType(t.key as typeof tripType)}
            className={`flex-1 rounded-full py-2 text-xs font-semibold transition ${
              tripType === t.key ? "bg-navy-900 text-sand-100" : "text-navy-900/60"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {submitted ? (
        <div className="py-10 text-center">
          <p className="font-display text-xl text-navy-900">Booking request sent</p>
          <p className="mt-2 text-sm text-navy-900/60">We&apos;ll confirm your cab within 15 minutes.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <input name="pickup_location" required placeholder="Pickup location" className="input-lux sm:col-span-2" />
          <input name="drop_location" required placeholder="Drop location" className="input-lux sm:col-span-2" />
          <input name="pickup_date" required type="date" className="input-lux" />
          <input name="pickup_time" required type="time" className="input-lux" />
          <input name="passengers" required type="number" min={1} placeholder="Passengers" className="input-lux" />
          <select name="vehicle_type" required defaultValue="" className="input-lux">
            <option value="" disabled>Vehicle type</option>
            {vehicleTypes.map((v) => (
              <option key={v} value={v}>{v}</option>
            ))}
          </select>
          <input name="phone" required type="tel" placeholder="Phone number" className="input-lux sm:col-span-2" />
          {error && <p className="text-sm text-red-500 sm:col-span-2">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="sm:col-span-2 mt-1 rounded-full bg-sunset-500 py-3.5 text-sm font-semibold text-white shadow-premium transition hover:bg-sunset-600 disabled:opacity-60"
          >
            {loading ? "Sending…" : "Book Now"}
          </button>
        </form>
      )}
    </motion.div>
  );
}

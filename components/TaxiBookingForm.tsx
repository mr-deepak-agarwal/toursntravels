"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const vehicleTypes = ["Sedan", "SUV", "Innova", "Tempo Traveller", "Luxury"];

export default function TaxiBookingForm() {
  const [tripType, setTripType] = useState<"oneway" | "round" | "airport">("airport");
  const [submitted, setSubmitted] = useState(false);

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
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2"
        >
          <input required placeholder="Pickup location" className="input-lux sm:col-span-2" />
          <input required placeholder="Drop location" className="input-lux sm:col-span-2" />
          <input required type="date" className="input-lux" />
          <input required type="time" className="input-lux" />
          <input required type="number" min={1} placeholder="Passengers" className="input-lux" />
          <select required defaultValue="" className="input-lux">
            <option value="" disabled>Vehicle type</option>
            {vehicleTypes.map((v) => (
              <option key={v} value={v}>{v}</option>
            ))}
          </select>
          <input required type="tel" placeholder="Phone number" className="input-lux sm:col-span-2" />
          <button
            type="submit"
            className="sm:col-span-2 mt-1 rounded-full bg-sunset-500 py-3.5 text-sm font-semibold text-white shadow-premium transition hover:bg-sunset-600"
          >
            Book Now
          </button>
        </form>
      )}
    </motion.div>
  );
}

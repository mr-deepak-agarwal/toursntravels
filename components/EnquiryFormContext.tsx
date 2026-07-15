"use client";

import { createContext, useContext, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiX, FiCheckCircle } from "react-icons/fi";
import { createClient } from "@/lib/supabase/client";

type EnquiryContextType = {
  open: () => void;
};

const EnquiryContext = createContext<EnquiryContextType>({ open: () => {} });

export const useEnquiry = () => useContext(EnquiryContext);

const services = [
  "Taxi Booking",
  "Self Drive Car",
  "Sightseeing Tour",
  "Hotel Booking",
  "Holiday Package",
];

export default function EnquiryFormProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function open() {
    setSubmitted(false);
    setError("");
    setIsOpen(true);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const supabase = createClient();
    const { error: insertError } = await supabase.from("enquiries").insert({
      source: "enquiry",
      full_name: formData.get("full_name") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      destination: formData.get("destination") as string,
      travel_date: (formData.get("travel_date") as string) || null,
      service: formData.get("service") as string,
      passengers: Number(formData.get("passengers")) || null,
      message: formData.get("message") as string,
    });

    setLoading(false);

    if (insertError) {
      setError("Something went wrong. Please try again or WhatsApp us.");
      return;
    }

    setSubmitted(true);
  }

  return (
    <EnquiryContext.Provider value={{ open }}>
      {children}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-950/60 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ type: "spring", damping: 24, stiffness: 260 }}
              className="relative w-full max-w-lg rounded-4xl border border-white/60 bg-sand-100 p-8 shadow-premium backdrop-blur-xl md:p-10"
            >
              <button
                aria-label="Close enquiry form"
                onClick={() => setIsOpen(false)}
                className="absolute right-5 top-5 rounded-full p-2 text-navy-900/60 transition hover:bg-navy-900/5 hover:text-navy-900"
              >
                <FiX size={20} />
              </button>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-10 text-center"
                >
                  <FiCheckCircle className="mb-4 text-emerald-500" size={56} />
                  <h3 className="font-display text-2xl text-navy-900">Enquiry received</h3>
                  <p className="mt-2 max-w-xs text-navy-900/70">
                    Our travel designers will reach out within the hour. Bookmark this while you wait.
                  </p>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="mt-6 rounded-full bg-navy-900 px-6 py-3 text-sm font-medium text-sand-100"
                  >
                    Done
                  </button>
                </motion.div>
              ) : (
                <>
                  <h3 className="font-display text-2xl text-navy-900 md:text-3xl">
                    Plan your Goa story
                  </h3>
                  <p className="mt-2 text-sm text-navy-900/70">
                    Tell us what you have in mind, we&apos;ll handle the rest.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <input name="full_name" required placeholder="Full name" className="input-lux sm:col-span-2" />
                    <input name="phone" required type="tel" placeholder="Phone number" className="input-lux" />
                    <input name="email" required type="email" placeholder="Email address" className="input-lux" />
                    <input name="destination" placeholder="Destination" className="input-lux" />
                    <input name="travel_date" type="date" placeholder="Travel date" className="input-lux" />
                    <select name="service" required defaultValue="" className="input-lux sm:col-span-2">
                      <option value="" disabled>
                        Service required
                      </option>
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    <input name="passengers" type="number" min={1} placeholder="Passengers" className="input-lux sm:col-span-2" />
                    <textarea name="message" placeholder="Anything else we should know?" rows={3} className="input-lux sm:col-span-2" />
                    {error && <p className="text-sm text-red-500 sm:col-span-2">{error}</p>}

                    <button
                      type="submit"
                      disabled={loading}
                      className="sm:col-span-2 mt-1 rounded-full bg-sunset-500 px-6 py-3.5 text-sm font-semibold text-white shadow-premium transition hover:bg-sunset-600 disabled:opacity-60"
                    >
                      {loading ? "Sending…" : "Send enquiry"}
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </EnquiryContext.Provider>
  );
}

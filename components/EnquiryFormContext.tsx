"use client";

import { createContext, useContext, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiX, FiCheckCircle } from "react-icons/fi";

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

  function open() {
    setSubmitted(false);
    setIsOpen(true);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
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
              className="glass relative w-full max-w-lg rounded-4xl bg-sand-100/95 p-8 shadow-premium md:p-10"
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
                    <input required placeholder="Full name" className="input-lux sm:col-span-2" />
                    <input required type="tel" placeholder="Phone number" className="input-lux" />
                    <input required type="email" placeholder="Email address" className="input-lux" />
                    <input placeholder="Destination" className="input-lux" />
                    <input type="date" placeholder="Travel date" className="input-lux" />
                    <select required defaultValue="" className="input-lux sm:col-span-2">
                      <option value="" disabled>
                        Service required
                      </option>
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    <input type="number" min={1} placeholder="Passengers" className="input-lux sm:col-span-2" />
                    <textarea placeholder="Anything else we should know?" rows={3} className="input-lux sm:col-span-2" />

                    <button
                      type="submit"
                      className="sm:col-span-2 mt-1 rounded-full bg-sunset-500 px-6 py-3.5 text-sm font-semibold text-white shadow-premium transition hover:bg-sunset-600"
                    >
                      Send enquiry
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

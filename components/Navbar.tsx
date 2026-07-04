"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { nav, siteConfig } from "@/lib/data";
import { useEnquiry } from "./EnquiryFormContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { open } = useEnquiry();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`container-lux flex items-center justify-between rounded-full px-5 py-2.5 transition-all duration-500 ${
          scrolled ? "glass-dark shadow-premium" : "bg-transparent"
        }`}
      >
        <Link href="/" className="flex items-center gap-2">
          <span className="font-display text-xl font-medium text-sand-100 md:text-2xl">
            Azure<span className="text-turquoise-400">Goa</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-sand-100/85 transition hover:text-turquoise-400"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={`tel:${siteConfig.phone}`} className="text-sm font-medium text-sand-100/85 hover:text-turquoise-400">
            {siteConfig.phone}
          </a>
          <button
            onClick={open}
            className="rounded-full bg-sunset-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sunset-600"
          >
            Plan My Trip
          </button>
        </div>

        <button
          className="rounded-full p-2 text-sand-100 lg:hidden"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <FiMenu size={26} />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-navy-950/95 backdrop-blur-lg lg:hidden"
          >
            <div className="flex justify-end p-6">
              <button onClick={() => setMenuOpen(false)} aria-label="Close menu" className="p-2 text-sand-100">
                <FiX size={28} />
              </button>
            </div>
            <motion.nav
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.06 } } }}
              className="flex flex-col items-center gap-6 pt-6"
            >
              {nav.map((item) => (
                <motion.div
                  key={item.href}
                  variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-display text-2xl text-sand-100"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <button
                onClick={() => {
                  setMenuOpen(false);
                  open();
                }}
                className="mt-4 rounded-full bg-sunset-500 px-8 py-3 text-sm font-semibold text-white"
              >
                Plan My Trip
              </button>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

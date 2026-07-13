"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiMail, FiPhone, FiInstagram, FiFacebook, FiTwitter, FiYoutube } from "react-icons/fi";
import { nav, siteConfig } from "@/lib/data";
import { useEnquiry } from "./EnquiryFormContext";

const socialLinks = [FiInstagram, FiFacebook, FiTwitter, FiYoutube];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { open } = useEnquiry();

  // Contact info now lives in the top utility bar, so it's dropped from the main pill nav.
  const primaryNav = nav.filter((item) => item.label !== "Contact");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Secondary utility bar: email, phone, socials — collapses away on scroll */}
      <div
        className={`overflow-hidden transition-all duration-500 ${
          scrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100"
        }`}
      >
        <div className="container-lux hidden items-center justify-between py-2 text-xs text-sand-100/70 md:flex">
          <div className="flex items-center gap-5">
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-1.5 hover:text-turquoise-400">
              <FiMail size={13} /> {siteConfig.email}
            </a>
            <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-1.5 hover:text-turquoise-400">
              <FiPhone size={13} /> {siteConfig.phone}
            </a>
          </div>
          <div className="flex items-center gap-4">
            {socialLinks.map((Icon, i) => (
              <a key={i} href="#" aria-label="Social link" className="hover:text-turquoise-400">
                <Icon size={13} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div
        className={`transition-all duration-500 ${scrolled ? "py-3" : "py-2 md:py-3"}`}
      >
        <div className="container-lux glass-dark flex items-center justify-between rounded-full px-5 py-2.5 shadow-premium transition-all duration-500">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Goa Best Deals Tours & Travels" width={100} height={110} className="h-14 w-auto" priority />
          </Link>

          <nav className="hidden items-center gap-5 xl:flex">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="whitespace-nowrap text-sm font-medium text-sand-100/85 transition hover:text-turquoise-400"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 xl:flex">
            <button
              onClick={open}
              className="whitespace-nowrap rounded-full bg-sunset-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sunset-600"
            >
              Plan My Trip
            </button>
          </div>

          <button
            className="rounded-full p-2 text-sand-100 xl:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <FiMenu size={26} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-navy-950/95 backdrop-blur-lg xl:hidden"
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
              <div className="mt-6 flex flex-col items-center gap-3 text-sm text-sand-100/70">
                <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 hover:text-turquoise-400">
                  <FiPhone size={14} /> {siteConfig.phone}
                </a>
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 hover:text-turquoise-400">
                  <FiMail size={14} /> {siteConfig.email}
                </a>
                <div className="mt-2 flex items-center gap-4">
                  {socialLinks.map((Icon, i) => (
                    <a key={i} href="#" aria-label="Social link" className="hover:text-turquoise-400">
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { brand, nav } from "@/lib/config";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(22,48,46,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="font-display text-xl font-semibold tracking-tight text-ink">
          {brand.shortName}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm font-medium transition-colors ${
                  active ? "text-azulejo" : "text-ink-soft hover:text-azulejo"
                }`}
              >
                {item.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 h-[2px] w-full bg-laterite"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`tel:${brand.phoneRaw}`}
            className="flex items-center gap-1.5 text-sm font-medium text-ink-soft hover:text-azulejo"
          >
            <Phone size={15} /> {brand.phone}
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-laterite px-5 py-2.5 text-sm font-semibold text-paper transition-transform hover:scale-[1.03] hover:bg-laterite-dim"
          >
            Get a Quote
          </Link>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-ink md:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden bg-paper md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 pb-5">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-lg px-3 py-2.5 text-base font-medium ${
                    pathname === item.href ? "bg-sand text-azulejo" : "text-ink-soft"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-2 rounded-full bg-laterite px-5 py-3 text-center text-sm font-semibold text-paper"
              >
                Get a Quote
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

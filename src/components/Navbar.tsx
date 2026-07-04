"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { LinkButton } from "./Button";

const links = [
  { href: "/taxi", label: "Taxi & Self-Drive" },
  { href: "/tours", label: "Tour Packages" },
  { href: "/hotels", label: "Stays in Goa" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ivory/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(32,28,23,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex items-center justify-between h-20">
        <Link
          href="/"
          className={`font-display italic text-2xl md:text-[26px] tracking-tight transition-colors ${
            scrolled ? "text-indigo" : "text-ivory"
          }`}
        >
          Placeholder Goa Travels
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors hover:opacity-70 ${
                scrolled ? "text-ink" : "text-ivory"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+919921880362"
            className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
              scrolled ? "text-ink" : "text-ivory"
            }`}
          >
            <Phone size={15} />
            +91 99218 80362
          </a>
          <LinkButton href="/contact" size="md">
            Plan My Trip
          </LinkButton>
        </div>

        <button
          className={`lg:hidden p-2 -mr-2 ${scrolled ? "text-ink" : "text-ivory"}`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-ivory border-t border-line px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-base font-medium text-ink"
            >
              {l.label}
            </Link>
          ))}
          <LinkButton href="/contact" size="md" className="mt-2 self-start">
            Plan My Trip
          </LinkButton>
        </div>
      )}
    </header>
  );
}

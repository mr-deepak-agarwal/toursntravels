import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight, FiMoon } from "react-icons/fi";
import { packages } from "@/lib/data";

export const metadata: Metadata = {
  title: "Holiday Packages — Kullu-Manali-Shimla, Kashmir & Goa",
  description:
    "Handcrafted holiday packages including a budget-friendly Kullu-Manali-Shimla tour, Kashmir Paradise Tour and our Goa Signature Holiday. Fully customisable itineraries, quoted on request.",
  alternates: { canonical: "/holiday-packages" },
};

export default function PackagesPage() {
  return (
    <div className="pt-28">
      <section className="container-lux pb-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-turquoise-600">Holiday packages</p>
        <h1 className="heading-hero mx-auto mt-3 max-w-2xl text-4xl text-navy-900 md:text-5xl">
          Beyond Goa, when you&apos;re ready
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-navy-900/65">
          Every itinerary below is a starting point. Tell us your dates and we&apos;ll tailor the pace, hotels and
          budget, then send you a quote. Looking for a pilgrimage tour instead? <Link href="/pilgrimage-tours" className="underline underline-offset-2 hover:text-turquoise-700">See Pilgrimage Tours</Link>.
        </p>
      </section>

      <section className="container-lux grid grid-cols-1 gap-6 pb-24 sm:grid-cols-2 lg:grid-cols-3">
        {packages.map((p) => (
          <Link
            key={p.slug}
            href={`/holiday-packages/${p.slug}`}
            className="group overflow-hidden rounded-4xl bg-white shadow-premium"
          >
            <div className="relative h-56 w-full overflow-hidden">
              <Image src={p.image} alt={p.name} fill className="object-cover transition duration-700 group-hover:scale-110" />
              <span className="absolute left-4 top-4 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-navy-900">
                <FiMoon size={12} /> {p.nights} nights
              </span>
            </div>
            <div className="p-6">
              <p className="text-xs font-medium uppercase tracking-wider text-sunset-600">{p.region}</p>
              <h3 className="mt-1 font-display text-xl text-navy-900">{p.name}</h3>
              <ul className="mt-3 space-y-1 text-sm text-navy-900/60">
                {p.highlights.map((h) => (
                  <li key={h}>• {h}</li>
                ))}
              </ul>
              <div className="mt-5 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wide text-emerald-600">Get Quote</span>
                <FiArrowUpRight className="text-navy-900 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}

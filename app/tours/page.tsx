"use client";

import { useState } from "react";
import { Map } from "lucide-react";
import Reveal from "@/components/Reveal";
import PackageCard from "@/components/PackageCard";
import { tourPackages } from "@/lib/data/tours";

export default function ToursPage() {
  const [filter, setFilter] = useState<"All" | "Goa" | "Pan-India">("All");

  const visible =
    filter === "All" ? tourPackages : tourPackages.filter((p) => p.region === filter);

  return (
    <>
      <section className="bg-ink py-16 text-paper md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-paper/10 px-3.5 py-1.5 text-xs font-medium text-gold">
              <Map size={14} /> Tour Packages
            </span>
            <h1 className="mt-5 max-w-2xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
              Goa circuits, and beyond.
            </h1>
            <p className="mt-4 max-w-lg text-paper/70">
              Day trips around Goa's beaches and forts, or multi-day journeys across India's
              signature destinations — all with a private car and driver.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="flex gap-2">
          {(["All", "Goa", "Pan-India"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                filter === tab
                  ? "bg-laterite text-paper"
                  : "bg-paper text-ink-soft ring-1 ring-ink/10 hover:bg-sand"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {visible.map((pkg, i) => (
            <PackageCard key={pkg.slug} pkg={pkg} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import { FiStar, FiMapPin } from "react-icons/fi";
import { hotels } from "@/lib/data";
import BookButton from "@/components/BookButton";

export const metadata: Metadata = {
  title: "Goa Hotels — Beach Resorts, Villas & Boutique Stays",
  description:
    "Browse vetted Goa hotels, from boutique beach villas in Assagao to full-service resorts in Candolim. Honest ratings, instant enquiry, best-price quotes on request.",
  alternates: { canonical: "/hotels" },
};

export default function HotelsPage() {
  return (
    <div className="pt-28">
      <section className="container-lux pb-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-turquoise-600">Stays</p>
        <h1 className="heading-hero mx-auto mt-3 max-w-2xl text-4xl text-navy-900 md:text-5xl">
          Sleep somewhere worth waking up in
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-navy-900/65">
          Every property here has been visited, vetted, and cross-checked against real guest reviews.
        </p>
      </section>

      <section className="container-lux grid grid-cols-1 gap-6 pb-24 md:grid-cols-2">
        {hotels.map((h) => (
          <div key={h.slug} className="overflow-hidden rounded-4xl bg-white shadow-premium">
            <div className="relative h-64 w-full">
              <Image src={h.image} alt={h.name} fill className="object-cover" />
              <span className="absolute left-4 top-4 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-navy-900">
                <FiStar className="text-sunset-500" fill="currentColor" size={12} /> {h.rating}
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl text-navy-900">{h.name}</h3>
              <p className="mt-1 flex items-center gap-1 text-sm text-navy-900/55">
                <FiMapPin size={14} /> {h.location}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {h.amenities.map((a) => (
                  <span key={a} className="rounded-full bg-sand-200/70 px-3 py-1 text-xs text-navy-900/70">
                    {a}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex items-center justify-end">
                <BookButton label="Enquire for Best Price" />
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

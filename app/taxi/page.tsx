import type { Metadata } from "next";
import Image from "next/image";
import { fleet } from "@/lib/data";
import TaxiBookingForm from "@/components/TaxiBookingForm";

export const metadata: Metadata = {
  title: "Goa Taxi Service — Pickup & Drop Anywhere in Goa",
  description:
    "Book reliable Goa taxis for pickup and drop anywhere in Goa — airport transfers, railway pickups, North & South Goa sightseeing and outstation trips at the best price. Verified drivers, 24x7 support.",
  alternates: { canonical: "/taxi" },
};

const routes = [
  { from: "Goa Airport (Dabolim/Mopa)", to: "Calangute / Baga" },
  { from: "Goa Airport", to: "Palolem, South Goa" },
  { from: "Madgaon Railway", to: "Anjuna" },
  { from: "North Goa", to: "South Goa (round trip)" },
  { from: "Anywhere in Goa", to: "Anywhere in Goa" },
];

export default function TaxiPage() {
  return (
    <div className="pt-28">
      <section className="container-lux pb-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-turquoise-600">Goa taxi</p>
            <h1 className="heading-hero mt-3 text-4xl text-navy-900 md:text-5xl">
              Pickup and drop, anywhere in Goa
            </h1>
            <p className="mt-4 max-w-md text-navy-900/65">
              Airport transfers, railway pickups, hotel transfers and outstation trips across
              North and South Goa — at the best price. No haggling, no surge pricing. Contact us for a quote.
            </p>

            <div className="mt-8 relative h-64 overflow-hidden rounded-4xl md:h-80">
              <Image
                src="https://images.unsplash.com/photo-1754229291743-86880815413e?q=80&w=1600&auto=format&fit=crop"
                alt="Taxi ready for pickup on a Goa road"
                fill
                className="object-cover"
              />
            </div>

            <div className="mt-8 space-y-3">
              <h2 className="font-display text-lg text-navy-900">Popular routes</h2>
              {routes.map((r) => (
                <div key={r.from + r.to} className="flex items-center justify-between rounded-2xl bg-sand-200/60 px-4 py-3 text-sm">
                  <span className="text-navy-900/75">{r.from} → {r.to}</span>
                  <span className="text-xs font-semibold uppercase tracking-wide text-emerald-600">Get Quote</span>
                </div>
              ))}
            </div>
          </div>

          <TaxiBookingForm />
        </div>
      </section>

      <section className="bg-sand-200/60 py-16">
        <div className="container-lux">
          <h2 className="heading-hero mb-8 text-3xl text-navy-900">Choose your vehicle</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {fleet.slice(0, 3).map((v) => (
              <div key={v.name} className="overflow-hidden rounded-3xl bg-white shadow-premium">
                <div className="relative h-40 w-full">
                  <Image src={v.image} alt={v.name} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-display text-lg text-navy-900">{v.name}</h3>
                  <p className="text-sm text-navy-900/60">{v.example} · {v.passengers} seats</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

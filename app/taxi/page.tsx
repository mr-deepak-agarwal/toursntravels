import type { Metadata } from "next";
import Image from "next/image";
import { fleet } from "@/lib/data";
import Link from "next/link";
import TaxiBookingForm from "@/components/TaxiBookingForm";
import { CallCta, WhatsAppCta } from "@/components/ContactLinks";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import FAQList from "@/components/seo/FAQList";
import JsonLd from "@/components/seo/JsonLd";
import { taxiRoutes, categoryLabels, routeTitle, type RouteCategory } from "@/lib/taxi-routes";
import { absoluteUrl, businessRef } from "@/lib/seo";
import { faqs as siteFaqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Goa Taxi Service — Pickup & Drop Anywhere in Goa",
  description:
    "Book reliable Goa taxis for pickup and drop anywhere in Goa — airport transfers, railway pickups, North & South Goa sightseeing and outstation trips. Clear quotes, no haggling.",
  alternates: { canonical: "/taxi" },
};

const categoryOrder: RouteCategory[] = ["airport", "railway", "inter-region", "outstation"];

const taxiFaqs = [
  ...siteFaqs.filter((f) => f.q.toLowerCase().includes("taxi") || f.q.toLowerCase().includes("pricing")),
  {
    q: "Which airport should I fly into for Goa: Mopa or Dabolim?",
    a: "Mopa (Manohar International) in Pernem is closer to North Goa beaches like Arambol, Anjuna, Vagator, Candolim and Calangute. Dabolim is closer to Panjim and South Goa (Colva, Benaulim, Palolem). Pick the airport nearer to where you are staying if fares are similar. We run transfers from both.",
  },
  {
    q: "Should I share my flight or train details?",
    a: "Yes, it helps. Share your flight number or train number and PNR when you book so the pick-up can be planned around your actual arrival.",
  },
  {
    q: "Can I book a taxi for the whole day or for several days?",
    a: "Yes. Full-day local use, multi-day trips and outstation journeys are all available. Tell us your dates and route for a quote.",
  },
];

export default function TaxiPage() {
  return (
    <div className="pt-28">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TaxiService",
          name: "Goa Taxi Service",
          serviceType: "Taxi, airport transfer and outstation cab",
          url: absoluteUrl("/taxi"),
          provider: businessRef,
          areaServed: { "@type": "State", name: "Goa" },
        }}
      />
      <Breadcrumbs crumbs={[{ name: "Taxi", href: "/taxi" }]} />
      <section className="container-lux pb-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-turquoise-600">Goa taxi</p>
            <h1 className="heading-hero mt-3 text-4xl text-navy-900 md:text-5xl">
              Pickup and drop, anywhere in Goa
            </h1>
            <p className="mt-4 max-w-md text-navy-900/65">
              Airport transfers, railway pickups, hotel transfers and outstation trips across
              North and South Goa. Clear quotes, no haggling. Contact us for a quote.
            </p>

            <div className="mt-8 relative h-64 overflow-hidden rounded-4xl md:h-80">
              <Image
                src="https://images.unsplash.com/photo-1754229291743-86880815413e?q=80&w=1600&auto=format&fit=crop"
                alt="Taxi ready for pickup on a Goa road"
                fill
                className="object-cover"
              />
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <WhatsAppCta message="Hi! I'd like a taxi quote. Pickup: ____ Drop: ____ Date: ____" placement="taxi_hub" label="Get a quote on WhatsApp" />
              <CallCta placement="taxi_hub" />
            </div>
          </div>

          <TaxiBookingForm />
        </div>
      </section>

      <section className="container-lux pb-16">
        <h2 className="heading-hero text-3xl text-navy-900">Popular Goa taxi routes</h2>
        <p className="mt-2 max-w-2xl text-sm text-navy-900/65">
          Pick your route for distance, drive time, local tips and a quick quote.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          {categoryOrder.map((cat) => (
            <div key={cat}>
              <h3 className="font-display text-lg text-navy-900">{categoryLabels[cat]}</h3>
              <ul className="mt-3 space-y-2">
                {taxiRoutes.filter((r) => r.category === cat).map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`/taxi/${r.slug}`}
                      className="flex items-center justify-between rounded-2xl bg-sand-200/60 px-4 py-3 text-sm text-navy-900/80 transition hover:bg-sand-200 hover:text-turquoise-600"
                    >
                      <span>{routeTitle(r)}</span>
                      <span aria-hidden>→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-sand-200/60 py-16">
        <div className="container-lux">
          <h2 className="heading-hero mb-8 text-3xl text-navy-900">Choose your vehicle</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {fleet.slice(0, 3).map((v) => (
              <div key={v.name} className="overflow-hidden rounded-3xl bg-white shadow-premium">
                <div className="relative h-40 w-full">
                  <Image src={v.image} alt={v.name} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
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

      <section className="container-lux max-w-3xl py-16">
        <FAQList items={taxiFaqs} title="Goa taxi: common questions" />
      </section>
    </div>
  );
}

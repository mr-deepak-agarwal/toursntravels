import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig, stats } from "@/lib/data";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import BookButton from "@/components/BookButton";
import { CallCta, WhatsAppCta } from "@/components/ContactLinks";

export const metadata: Metadata = {
  title: "About Us — Goa Taxi, Tours & Holiday Planners",
  description:
    "Goa Best Deals Tours & Travels arranges taxis, self drive cars, sightseeing, hotel bookings, holiday packages and pilgrimage tours across Goa and beyond, with honest quotes and local knowledge.",
  alternates: { canonical: "/about" },
};

const offerings = [
  { href: "/taxi", title: "Taxi & transfers", text: "Airport, railway and outstation cabs across Goa and neighbouring states." },
  { href: "/self-drive", title: "Self drive cars", text: "Hourly, daily and weekly rentals with doorstep delivery in North Goa." },
  { href: "/sightseeing", title: "Sightseeing", text: "North Goa, South Goa, Old Goa, river cruises and Dudhsagar." },
  { href: "/hotels", title: "Hotel booking help", text: "Help choosing the right area and stay for your dates and budget." },
  { href: "/holiday-packages", title: "Holiday packages", text: "Goa, Kullu-Manali-Shimla and Kashmir, tailored to your plan." },
  { href: "/pilgrimage-tours", title: "Pilgrimage tours", text: "Guided journeys, starting with the Ajmer Sharif Dargah yatra." },
];

export default function AboutPage() {
  return (
    <div className="pt-28">
      <Breadcrumbs crumbs={[{ name: "About", href: "/about" }]} />
      <section className="container-lux grid grid-cols-1 gap-10 pb-20 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-turquoise-600">About us</p>
          <h1 className="heading-hero mt-3 text-4xl text-navy-900 md:text-5xl">
            One Goa-based team for your whole trip
          </h1>
          <p className="mt-5 text-navy-900/70">
            Goa Best Deals Tours &amp; Travels is a travel company based in {siteConfig.locality}, North Goa. We arrange
            taxis, self drive cars, sightseeing, hotel bookings, holiday packages and pilgrimage tours for visitors
            to Goa and for travellers heading beyond it.
          </p>
          <p className="mt-4 text-navy-900/70">
            The idea is simple: give an honest quote, show up on time and make the trip easy to plan. Instead of
            booking a cab, a stay and a tour with three different people, you can sort it all with one team, on
            WhatsApp, by phone or through the enquiry form.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <BookButton label="Plan My Trip" placement="about_hero" />
            <WhatsAppCta message="Hi! I'd like to plan a trip with Goa Best Deals." placement="about_hero" />
            <CallCta placement="about_hero" />
          </div>
        </div>
        <div className="relative h-80 overflow-hidden rounded-4xl md:h-96">
          <Image
            src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1600&auto=format&fit=crop"
            alt="Goa coastline"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="bg-sand-200/60 py-16">
        <div className="container-lux grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-4xl bg-white p-8 shadow-premium">
            <h2 className="font-display text-xl text-navy-900">How we work</h2>
            <p className="mt-3 text-sm text-navy-900/65">
              Every trip is quoted individually, based on your dates, group size and plan, so you pay for what you
              actually need. We confirm what is included in writing before you book.
            </p>
          </div>
          <div className="rounded-4xl bg-white p-8 shadow-premium">
            <h2 className="font-display text-xl text-navy-900">What we care about</h2>
            <p className="mt-3 text-sm text-navy-900/65">
              Clear communication, punctual pick-ups and practical local advice, so that your time in Goa goes to the
              beach and not to logistics.
            </p>
          </div>
        </div>
      </section>

      <section className="container-lux py-20">
        <h2 className="font-display text-2xl text-navy-900">What we do</h2>
        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {offerings.map((o) => (
            <li key={o.href}>
              <Link href={o.href} className="block h-full rounded-3xl bg-white p-6 shadow-premium transition hover:-translate-y-0.5">
                <p className="font-display text-lg text-navy-900">{o.title}</p>
                <p className="mt-2 text-sm text-navy-900/65">{o.text}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {stats.length > 0 && (
        <section className="container-lux grid grid-cols-2 gap-8 pb-24 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-3xl text-navy-900 md:text-4xl">{s.value.toLocaleString()}{s.suffix}</p>
              <p className="mt-1 text-sm text-navy-900/60">{s.label}</p>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}

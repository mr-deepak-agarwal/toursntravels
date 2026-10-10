import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FiStar, FiMapPin } from "react-icons/fi";
import { hotels } from "@/lib/data";
import BookButton from "@/components/BookButton";
import { CallCta, WhatsAppCta } from "@/components/ContactLinks";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import FAQList from "@/components/seo/FAQList";

export const metadata: Metadata = {
  title: "Goa Hotel Booking Help — Beach Resorts, Villas & Homestays",
  description:
    "Tell us your dates, budget and preferred area and we will help you find and book a Goa hotel, villa or homestay, with airport transfers and tours arranged together.",
  alternates: { canonical: "/hotels" },
};

const areas = [
  { name: "Candolim & Sinquerim", note: "Beach access, restaurants and a calmer feel, with Fort Aguada nearby." },
  { name: "Calangute & Baga", note: "Nightlife, shacks and water sports on your doorstep." },
  { name: "Anjuna, Vagator & Assagao", note: "Cliffside cafés, boutique stays and villas." },
  { name: "Mandrem, Morjim & Arambol", note: "Quieter northern beaches, closest to Mopa airport." },
  { name: "Colva, Benaulim & Cavelossim", note: "Larger resorts and long, calm beaches in South Goa." },
  { name: "Palolem, Patnem & Agonda", note: "Huts, homestays and a laid-back far-south pace." },
];

const steps = [
  { t: "Tell us your plan", d: "Dates, number of guests, budget and the kind of stay you want." },
  { t: "Get options", d: "We suggest suitable areas and stays, with a clear quote." },
  { t: "Book with transfers", d: "Add an airport pick-up, a taxi or tours to the same booking if you like." },
];

const faqs = [
  {
    q: "Can you book hotels in both North and South Goa?",
    a: "Yes. Tell us where you want to stay, or share your plans and we will suggest the area that fits.",
  },
  {
    q: "Can I combine a hotel booking with a taxi or tour?",
    a: "Yes. Airport pick-ups, taxis, self-drive cars and sightseeing tours can be added to the same enquiry.",
  },
  {
    q: "Why aren't hotel prices listed?",
    a: "Rates change with dates, room type and season, so we quote each stay individually based on your plan.",
  },
];

export default function HotelsPage() {
  const hasHotels = hotels.length > 0;

  return (
    <div className="pt-28">
      <Breadcrumbs crumbs={[{ name: "Hotels", href: "/hotels" }]} />
      <section className="container-lux pb-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-turquoise-600">Stays</p>
        <h1 className="heading-hero mx-auto mt-3 max-w-2xl text-4xl text-navy-900 md:text-5xl">
          Find the right stay in Goa
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-navy-900/65">
          Tell us your dates, budget and favourite kind of beach, and we will help you pick and book the stay, then
          sort the transfers too.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <BookButton label="Enquire About a Stay" service="Hotel Booking" placement="hotels_hero" />
          <WhatsAppCta message="Hi! I need help finding a hotel in Goa. Dates: ____ Guests: ____ Budget: ____" placement="hotels_hero" />
          <CallCta placement="hotels_hero" />
        </div>
      </section>

      {hasHotels && (
        <section className="container-lux grid grid-cols-1 gap-6 pb-16 md:grid-cols-2">
          {hotels.map((h) => (
            <div key={h.slug} className="overflow-hidden rounded-4xl bg-white shadow-premium">
              <div className="relative h-64 w-full">
                <Image src={h.image} alt={h.name} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
                {h.rating !== undefined && (
                  <span className="absolute left-4 top-4 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-navy-900">
                    <FiStar className="text-sunset-500" fill="currentColor" size={12} /> {h.rating}
                  </span>
                )}
              </div>
              <div className="p-6">
                <h2 className="font-display text-xl text-navy-900">{h.name}</h2>
                <p className="mt-1 flex items-center gap-1 text-sm text-navy-900/55">
                  <FiMapPin size={14} /> {h.location}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {h.amenities.map((a) => (
                    <span key={a} className="rounded-full bg-sand-200/70 px-3 py-1 text-xs text-navy-900/70">{a}</span>
                  ))}
                </div>
                <div className="mt-5 flex items-center justify-end">
                  <BookButton label="Enquire for Best Price" service="Hotel Booking" destination={h.name} placement="hotels_card" />
                </div>
              </div>
            </div>
          ))}
        </section>
      )}

      <section className="container-lux pb-16">
        <h2 className="font-display text-2xl text-navy-900">Where to stay in Goa</h2>
        <p className="mt-2 max-w-2xl text-sm text-navy-900/65">
          Each area has a different feel. Here is a quick guide, or read our{" "}
          <Link href="/blog/best-hotels-goa-2026" className="underline underline-offset-2 hover:text-turquoise-700">longer area guide</Link>.
        </p>
        <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((a) => (
            <li key={a.name} className="rounded-3xl bg-sand-200/60 p-5">
              <p className="font-medium text-navy-900">{a.name}</p>
              <p className="mt-1 text-sm text-navy-900/65">{a.note}</p>
            </li>
          ))}
        </ul>

        <h2 className="mt-14 font-display text-2xl text-navy-900">How it works</h2>
        <ol className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.t} className="rounded-3xl bg-white p-5 shadow-sm">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy-900 text-xs font-semibold text-sand-100">{i + 1}</span>
              <p className="mt-3 font-medium text-navy-900">{s.t}</p>
              <p className="mt-1 text-sm text-navy-900/65">{s.d}</p>
            </li>
          ))}
        </ol>

        <div className="max-w-3xl"><FAQList items={faqs} title="Hotel booking: common questions" /></div>
      </section>
    </div>
  );
}

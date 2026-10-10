import type { Metadata } from "next";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms for using the ${siteConfig.name} website and booking taxis, self drive cars, tours, hotels and packages with us.`,
  alternates: { canonical: "/terms" },
};

const sections = [
  {
    h: "About these terms",
    p: [`These terms apply to your use of this website and to services you book with ${siteConfig.name} ("we", "us"). By using the site or booking with us you agree to them. If a written quote or booking confirmation we send you says something different for your trip, that document applies to that trip.`],
  },
  {
    h: "Quotes and bookings",
    ul: [
      "Prices are not listed on the website. Every trip is quoted individually based on your dates, route, group size and requirements.",
      "A quote is an estimate until we confirm your booking. A booking is confirmed when we confirm it to you in writing, including by WhatsApp or email, with what is and is not included.",
      "Please check the details in the confirmation (names, dates, times, pick-up and drop points) and tell us straight away if anything is wrong.",
    ],
  },
  {
    h: "Payments, cancellations and refunds",
    p: [
      "Advance payment, balance payment, cancellation and refund terms depend on the service (for example a taxi transfer, a self drive rental, a hotel stay or a package). They are stated in your quote or booking confirmation. Hotels, operators and other partners may apply their own cancellation charges, which we pass on to you.",
    ],
  },
  {
    h: "Self drive rentals",
    p: [
      "Self drive cars are rented under a separate rental agreement. You will need a valid driving licence and a government photo ID, and a refundable security deposit is normally taken. You are responsible for the vehicle while it is with you, including traffic fines, tolls, fuel as agreed and any damage as set out in the rental agreement.",
    ],
  },
  {
    h: "Your responsibilities",
    ul: [
      "Give us accurate details, including your flight or train number where relevant, and a phone number on which you can be reached during your trip.",
      "Carry valid ID and any documents needed for your trip.",
      "Behave lawfully and respectfully towards drivers, staff, other guests and property, and follow local rules, including those at beaches, wildlife areas and places of worship.",
    ],
  },
  {
    h: "Third-party services",
    p: [
      "Some parts of your trip, such as hotels, river cruises, forest or park entry and jeep safaris, are run by third parties who set their own rules, prices, timings and safety requirements. We arrange them for you but do not control them.",
    ],
  },
  {
    h: "Weather, access and changes",
    p: [
      "Weather, road conditions, traffic, closures and official restrictions (for example access to waterfalls or beaches during the monsoon) can change plans. Travel times, distances, itineraries and descriptions on this website are indicative. We will do our best to offer a sensible alternative when something changes, but cannot be responsible for events outside our reasonable control.",
    ],
  },
  {
    h: "Liability",
    p: [
      "We will provide our services with reasonable care and skill. To the extent the law permits, we are not liable for indirect or consequential losses, or for loss caused by third parties or by events outside our reasonable control. Nothing in these terms limits liability that cannot be limited by law.",
    ],
  },
  {
    h: "Website content",
    p: [
      "The content, text and design of this website belong to us or our licensors. Please do not copy or reuse it for commercial purposes without our permission. We try to keep information accurate, but it may change without notice.",
    ],
  },
  {
    h: "Governing law",
    p: ["These terms are governed by the laws of India. Disputes are subject to the jurisdiction of the competent courts in Goa."],
  },
  {
    h: "Contact",
    p: [`Questions about these terms? Email ${siteConfig.email} or call ${siteConfig.phone}.`],
  },
];

export default function TermsPage() {
  return (
    <div className="container-lux max-w-2xl pt-32 pb-24">
      <h1 className="heading-hero text-4xl text-navy-900">Terms of Service</h1>
      <p className="mt-3 text-sm text-navy-900/50">Last updated: October 2026</p>
      {sections.map((s) => (
        <section key={s.h} className="mt-8">
          <h2 className="font-display text-xl text-navy-900">{s.h}</h2>
          {s.p?.map((t, i) => (
            <p key={i} className="mt-3 leading-relaxed text-navy-900/70">{t}</p>
          ))}
          {s.ul && (
            <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-navy-900/70">
              {s.ul.map((li) => <li key={li}>{li}</li>)}
            </ul>
          )}
        </section>
      ))}
    </div>
  );
}

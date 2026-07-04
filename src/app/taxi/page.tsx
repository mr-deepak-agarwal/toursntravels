import type { Metadata } from "next";
import { Car, MapPin, ShieldCheck, Fuel, Users, Luggage } from "lucide-react";
import Reveal from "@/components/Reveal";
import Eyebrow from "@/components/Eyebrow";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Goa Taxi, Outstation Cabs & Self-Drive Rentals",
  description:
    "Book local Goa taxis, outstation cabs, and self-drive car rentals. Fixed prices, verified drivers, no bargaining.",
};

const fleet = [
  { name: "Hatchback", eg: "Swift, i10", seats: 4, luggage: 2, gradient: "from-[#16324f] to-[#3d6b93]" },
  { name: "Sedan", eg: "Dzire, Etios", seats: 4, luggage: 3, gradient: "from-[#8f3220] to-[#d3a34c]" },
  { name: "SUV", eg: "Ertiga, Innova", seats: 7, luggage: 5, gradient: "from-[#16324f] to-[#8f3220]" },
  { name: "Self-Drive Scooty", eg: "Activa, Access", seats: 2, luggage: 1, gradient: "from-[#b8452e] to-[#d3a34c]" },
];

const services = [
  {
    icon: MapPin,
    title: "Local Goa Rides",
    desc: "Point-to-point or full-day hire within Goa — airport runs, beach hopping, market trips.",
  },
  {
    icon: Car,
    title: "Outstation Trips",
    desc: "Comfortable cabs to Hampi, Gokarna, Kolhapur and beyond, with an experienced outstation driver.",
  },
  {
    icon: Fuel,
    title: "Self-Drive Rentals",
    desc: "Scooters and cars on your own terms — valid license and ID required, fuel not included.",
  },
];

export default function TaxiPage() {
  return (
    <>
      <section className="relative bg-indigo-deep pt-36 pb-24 grain overflow-hidden">
        <div className="absolute inset-0 tile-texture-light opacity-[0.08]" aria-hidden />
        <div className="container-page relative z-10">
          <Reveal>
            <Eyebrow tone="gold">Taxi & Self-Drive</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-display text-4xl md:text-5xl text-ivory max-w-2xl leading-tight">
              A ride that shows up on time, at the price you agreed.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="text-ivory/70 max-w-xl mt-5 leading-relaxed">
              Local Goa rides, outstation trips, and self-drive rentals — one fleet,
              fixed pricing, no meter surprises.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container-page grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="h-full bg-white border border-line rounded-2xl p-7">
                <div className="w-11 h-11 rounded-xl bg-sand flex items-center justify-center mb-5 text-indigo">
                  <s.icon size={20} />
                </div>
                <h3 className="font-display text-xl text-ink mb-2">{s.title}</h3>
                <p className="text-sm text-ink-soft leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-24 bg-sand/40">
        <div className="container-page">
          <Reveal>
            <Eyebrow>Our Fleet</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl text-ink mb-12 max-w-lg">
              Pick what fits your trip
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fleet.map((f, i) => (
              <Reveal key={f.name} delay={i * 0.07}>
                <div className="bg-white border border-line rounded-2xl overflow-hidden">
                  <PhotoPlaceholder gradient={f.gradient} label={f.name} className="h-36 w-full" />
                  <div className="p-5">
                    <h3 className="font-display text-lg text-ink mb-1">{f.name}</h3>
                    <p className="text-xs text-ink-soft mb-3">{f.eg}</p>
                    <div className="flex items-center gap-4 text-xs text-ink-soft">
                      <span className="flex items-center gap-1"><Users size={13} /> {f.seats}</span>
                      <span className="flex items-center gap-1"><Luggage size={13} /> {f.luggage} bags</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-start">
          <Reveal>
            <div>
              <Eyebrow tone="indigo">Why book direct</Eyebrow>
              <h2 className="font-display text-3xl md:text-4xl text-ink mb-6 max-w-md">
                No app, no surge pricing, no call centre
              </h2>
              <ul className="space-y-4">
                {[
                  "Price confirmed on WhatsApp before the trip starts",
                  "Drivers who know the Goa roads, shortcuts included",
                  "Sanitised, well-maintained vehicles, checked before every trip",
                  "Same-day bookings for local rides, subject to availability",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <ShieldCheck size={18} className="text-laterite shrink-0 mt-0.5" />
                    <span className="text-sm text-ink-soft leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="bg-white border border-line rounded-3xl p-8 shadow-[0_20px_60px_-20px_rgba(32,28,23,0.15)]">
              <EnquiryForm variant="taxi" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

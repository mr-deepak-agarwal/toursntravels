import type { Metadata } from "next";
import Image from "next/image";
import { stats } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us — Our Goa Story",
  description:
    "Goa Best Deals Tours & Travels has been arranging taxis, self drive cars, hotels, holidays and pilgrimage tours across Goa since 2014, built on honest quotes and local knowledge.",
  alternates: { canonical: "/about" },
};

const team = [
  { name: "Rohan D'Souza", role: "Founder & Operations", image: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?q=80&w=800&auto=format&fit=crop" },
  { name: "Meera Fernandes", role: "Head of Travel Design", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop" },
  { name: "Alex Pereira", role: "Fleet & Logistics", image: "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?q=80&w=800&auto=format&fit=crop" },
];

export default function AboutPage() {
  return (
    <div className="pt-28">
      <section className="container-lux grid grid-cols-1 gap-10 pb-20 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-turquoise-600">Our story</p>
          <h1 className="heading-hero mt-3 text-4xl text-navy-900 md:text-5xl">
            Started with one taxi, one honest fare
          </h1>
          <p className="mt-5 text-navy-900/70">
            In 2014, Goa Best Deals Tours &amp; Travels began with a single sedan and a simple idea: give an
            honest quote, show up on time, and treat every guest like a returning one. Over a decade later,
            that same promise now covers a full fleet, a curated hotel network, holiday packages that
            stretch to the Himalayas, and guided pilgrimage tours.
          </p>
          <p className="mt-4 text-navy-900/70">
            We&apos;re still headquartered on Beach Road in Candolim, still run by people who grew up on
            these roads, and still measure success one unhurried trip at a time.
          </p>
        </div>
        <div className="relative h-80 overflow-hidden rounded-4xl md:h-96">
          <Image
            src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1600&auto=format&fit=crop"
            alt="Goa coastline where Goa Best Deals Tours & Travels is based"
            fill
            className="object-cover"
          />
        </div>
      </section>

      <section className="bg-sand-200/60 py-16">
        <div className="container-lux grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-4xl bg-white p-8 shadow-premium">
            <h2 className="font-display text-xl text-navy-900">Mission</h2>
            <p className="mt-3 text-sm text-navy-900/65">
              Make travelling through Goa and beyond feel effortless, with honest quotes,
              verified partners and support that actually answers the phone.
            </p>
          </div>
          <div className="rounded-4xl bg-white p-8 shadow-premium">
            <h2 className="font-display text-xl text-navy-900">Vision</h2>
            <p className="mt-3 text-sm text-navy-900/65">
              To be the first name Indian and international travellers think of for coastal India,
              known for reliability as much as for the destinations themselves.
            </p>
          </div>
        </div>
      </section>

      <section className="container-lux py-20">
        <h2 className="font-display text-2xl text-navy-900">The team behind the trips</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {team.map((m) => (
            <div key={m.name} className="overflow-hidden rounded-3xl bg-white shadow-premium">
              <div className="relative h-64 w-full">
                <Image src={m.image} alt={m.name} fill className="object-cover" />
              </div>
              <div className="p-4">
                <p className="font-display text-lg text-navy-900">{m.name}</p>
                <p className="text-sm text-navy-900/55">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-lux grid grid-cols-2 gap-8 pb-24 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-display text-3xl text-navy-900 md:text-4xl">{s.value.toLocaleString()}{s.suffix}</p>
            <p className="mt-1 text-sm text-navy-900/60">{s.label}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

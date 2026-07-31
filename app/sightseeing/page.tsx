import type { Metadata } from "next";
import Image from "next/image";
import { FiClock } from "react-icons/fi";
import BookButton from "@/components/BookButton";

export const metadata: Metadata = {
  title: "Goa Sightseeing Tours — North Goa, South Goa & Old Goa",
  description:
    "Guided Goa sightseeing tours covering forts, churches, beaches and sunset points. Half-day and full-day options with private and custom tours available.",
  alternates: { canonical: "/sightseeing" },
};

const tours = [
  {
    name: "North Goa Sightseeing",
    duration: "Full day, 8 hrs",
    desc: "Fort Aguada, Calangute, Baga, Anjuna flea market and Vagator's cliffside views.",
    image: "https://images.unsplash.com/photo-1596395463075-9cfa2ffdaf25?q=80&w=1400&auto=format&fit=crop",
  },
  {
    name: "South Goa Sightseeing",
    duration: "Full day, 8 hrs",
    desc: "Colva, Benaulim, Palolem beach and the quieter Cavelossim coastline.",
    image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=1400&auto=format&fit=crop",
  },
  {
    name: "Old Goa Heritage Tour",
    duration: "Half day, 4 hrs",
    desc: "Basilica of Bom Jesus, Se Cathedral and the Portuguese-era lanes of Fontainhas.",
    image: "https://images.unsplash.com/photo-1590373572466-1f2e02b8bb99?q=80&w=1400&auto=format&fit=crop",
  },
  {
    name: "Boat Cruise",
    duration: "Half day, 2-3 hrs",
    desc: "A relaxed Mandovi river cruise with live music and views of Goa's riverside forts.",
    image: "https://images.unsplash.com/photo-1437243964124-5379b751d09a?q=80&w=1400&auto=format&fit=crop",
  },
  {
    name: "Dinner Boat Cruise",
    duration: "Evening, 2-3 hrs",
    desc: "Sunset over the Mandovi followed by a plated dinner and live music on board.",
    image: "https://images.unsplash.com/photo-1706010382755-6ce076a4e978?q=80&w=1400&auto=format&fit=crop",
  },
  {
    name: "Adventure Trip: Dudhsagar Waterfall",
    duration: "Full day, 8-9 hrs",
    desc: "A jeep trek to Goa's tallest waterfall through Bhagwan Mahaveer Wildlife Sanctuary, with a stop for a swim at the base.",
    image: "https://images.unsplash.com/photo-1613844838171-e649c7ed3e0d?q=80&w=1400&auto=format&fit=crop",
  },
  {
    name: "Customised Tour",
    duration: "Flexible",
    desc: "Tell us what you want to see and skip, we'll build the day around it.",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1400&auto=format&fit=crop",
  },
];

export default function SightseeingPage() {
  return (
    <div className="pt-28">
      <section className="container-lux pb-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-turquoise-600">Sightseeing</p>
        <h1 className="heading-hero mx-auto mt-3 max-w-2xl text-4xl text-navy-900 md:text-5xl">
          Days out, paced like you mean it
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-navy-900/65">
          Guided tours through Goa&apos;s forts, churches, beaches and backroads. Private vehicles, English &amp; Hindi-speaking guides.
        </p>
      </section>

      <section className="container-lux grid grid-cols-1 gap-6 pb-24 sm:grid-cols-2 lg:grid-cols-3">
        {tours.map((t) => (
          <div key={t.name} className="overflow-hidden rounded-3xl bg-white shadow-premium">
            <div className="relative h-44 w-full">
              <Image src={t.image} alt={t.name} fill className="object-cover" />
            </div>
            <div className="p-5">
              <h3 className="font-display text-lg text-navy-900">{t.name}</h3>
              <p className="mt-1 flex items-center gap-1 text-xs text-navy-900/50"><FiClock size={12} /> {t.duration}</p>
              <p className="mt-2 text-sm text-navy-900/65">{t.desc}</p>
              <div className="mt-4 flex items-center justify-end">
                <BookButton label="Book Tour" />
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="container-lux pb-24">
        <h2 className="font-display text-2xl text-navy-900">Where these tours take you</h2>
        <div className="mt-4 h-72 w-full rounded-4xl bg-sand-200/70" aria-label="Interactive map of Goa tour stops placeholder" />
      </section>
    </div>
  );
}

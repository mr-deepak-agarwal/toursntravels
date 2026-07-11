import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { pilgrimages } from "@/lib/data";
import BookButton from "@/components/BookButton";

export function generateStaticParams() {
  return pilgrimages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const pilgrimage = pilgrimages.find((p) => p.slug === slug);
  if (!pilgrimage) return {};
  return {
    title: `${pilgrimage.name} — ${pilgrimage.nights} Nights Pilgrimage Tour`,
    description: `${pilgrimage.name} in ${pilgrimage.region}: ${pilgrimage.highlights.join(", ")}. Contact us for a tailored quote.`,
    alternates: { canonical: `/pilgrimage-tours/${pilgrimage.slug}` },
  };
}

const inclusions = [
  "Comfortable accommodation as per itinerary",
  "Daily breakfast",
  "Private transfers throughout",
  "Local guidance and ziyarat etiquette support",
  "24x7 traveller support",
];

const exclusions = [
  "Travel to/from base city",
  "Lunches and dinners unless specified",
  "Personal expenses and offerings",
  "Travel insurance",
];

export default async function PilgrimageDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pilgrimage = pilgrimages.find((p) => p.slug === slug);
  if (!pilgrimage) return notFound();

  const itinerary = Array.from({ length: pilgrimage.nights }).map((_, i) => ({
    day: i + 1,
    title:
      i === 0
        ? `Arrival in ${pilgrimage.region}`
        : i === pilgrimage.nights - 1
        ? "Departure"
        : pilgrimage.highlights[i % pilgrimage.highlights.length],
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: pilgrimage.name,
    description: `${pilgrimage.nights}-night pilgrimage tour in ${pilgrimage.region}.`,
    touristType: "Religious",
  };

  return (
    <div className="pt-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative h-[50vh] min-h-[360px] w-full">
        <Image src={pilgrimage.image} alt={pilgrimage.name} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-navy-950/10" />
        <div className="container-lux absolute bottom-8 left-0 right-0 text-sand-100">
          <p className="text-xs font-medium uppercase tracking-wider text-turquoise-300">{pilgrimage.region} · {pilgrimage.nights} nights</p>
          <h1 className="heading-hero mt-2 text-4xl md:text-5xl">{pilgrimage.name}</h1>
        </div>
      </section>

      <section className="container-lux grid grid-cols-1 gap-12 py-16 lg:grid-cols-[1.6fr_1fr]">
        <div>
          <h2 className="font-display text-2xl text-navy-900">Highlights</h2>
          <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {pilgrimage.highlights.map((h) => (
              <li key={h} className="rounded-2xl bg-sand-200/60 px-4 py-3 text-sm text-navy-900/75">{h}</li>
            ))}
          </ul>

          <h2 className="mt-10 font-display text-2xl text-navy-900">Day-wise itinerary</h2>
          <div className="mt-4 space-y-3">
            {itinerary.map((d) => (
              <div key={d.day} className="flex gap-4 rounded-2xl bg-white p-4 shadow-sm">
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-navy-900 text-xs font-semibold text-sand-100">
                  D{d.day}
                </span>
                <p className="text-sm text-navy-900/75">{d.title}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <h3 className="font-display text-lg text-navy-900">Inclusions</h3>
              <ul className="mt-3 space-y-2 text-sm text-navy-900/70">
                {inclusions.map((i) => <li key={i}>✓ {i}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-lg text-navy-900">Exclusions</h3>
              <ul className="mt-3 space-y-2 text-sm text-navy-900/70">
                {exclusions.map((i) => <li key={i}>— {i}</li>)}
              </ul>
            </div>
          </div>
        </div>

        <aside className="h-fit rounded-4xl bg-navy-900 p-6 text-sand-100 shadow-premium">
          <p className="text-sm text-sand-100/60">Pricing</p>
          <p className="font-display text-2xl">Get a Quote</p>
          <p className="mt-1 text-xs text-sand-100/50">Land package, twin sharing. Price depends on dates, group size and season.</p>
          <div className="mt-6">
            <BookButton label="Enquire About This Yatra" />
          </div>
          <div className="mt-6 h-40 rounded-2xl bg-navy-800" aria-label={`Map placeholder for ${pilgrimage.region}`} />
        </aside>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { packages } from "@/lib/data";
import BookButton from "@/components/BookButton";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import { absoluteUrl, businessRef } from "@/lib/seo";

export function generateStaticParams() {
  return packages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const pkg = packages.find((p) => p.slug === slug);
  if (!pkg) return {};
  return {
    title: `${pkg.name} — ${pkg.nights} Nights ${pkg.region} Package`,
    description: `${pkg.nights} nights ${pkg.nights + 1} days in ${pkg.region}: ${pkg.highlights.slice(0, 3).join(", ")}. Day-wise itinerary, inclusions and a tailored quote.`,
    alternates: { canonical: `/holiday-packages/${pkg.slug}` },
    openGraph: { title: pkg.name, images: [pkg.image], url: absoluteUrl(`/holiday-packages/${pkg.slug}`) },
  };
}

const inclusions = [
  "Accommodation as per itinerary",
  "Daily breakfast",
  "Private airport / station transfers",
  "All sightseeing as listed",
  "24x7 traveller support",
];

const exclusions = [
  "Flights / train tickets to base city",
  "Lunches and dinners unless specified",
  "Personal expenses and tips",
  "Travel insurance",
];

export default async function PackageDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pkg = packages.find((p) => p.slug === slug);
  if (!pkg) return notFound();

  const itinerary = pkg.itinerary.map((d, i) => ({ day: i + 1, title: d.title, detail: d.detail }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: pkg.name,
    description: `${pkg.nights}-night holiday package in ${pkg.region}: ${pkg.highlights.join(", ")}.`,
    url: absoluteUrl(`/holiday-packages/${pkg.slug}`),
    image: pkg.image,
    touristType: "Leisure",
    provider: businessRef,
    itinerary: {
      "@type": "ItemList",
      itemListElement: itinerary.map((d) => ({ "@type": "ListItem", position: d.day, name: `Day ${d.day}: ${d.title}`, description: d.detail })),
    },
  };

  return (
    <div className="pt-28">
      <JsonLd data={jsonLd} />
      <Breadcrumbs crumbs={[{ name: "Holiday Packages", href: "/holiday-packages" }, { name: pkg.name, href: `/holiday-packages/${pkg.slug}` }]} />

      <section className="relative h-[50vh] min-h-[360px] w-full">
        <Image src={pkg.image} alt={pkg.name} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-navy-950/10" />
        <div className="container-lux absolute bottom-8 left-0 right-0 text-sand-100">
          <p className="text-xs font-medium uppercase tracking-wider text-turquoise-300">{pkg.region} · {pkg.nights} nights</p>
          <h1 className="heading-hero mt-2 text-4xl md:text-5xl">{pkg.name}</h1>
        </div>
      </section>

      <section className="container-lux grid grid-cols-1 gap-12 py-16 lg:grid-cols-[1.6fr_1fr]">
        <div>
          <h2 className="font-display text-2xl text-navy-900">Highlights</h2>
          <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {pkg.highlights.map((h) => (
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
                <div>
                  <p className="text-sm font-medium text-navy-900">{d.title}</p>
                  <p className="mt-1 text-sm text-navy-900/65">{d.detail}</p>
                </div>
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
            <BookButton label="Enquire About This Package" service="Holiday Package" destination={pkg.name} message={`I'm interested in: ${pkg.name} (${pkg.nights} nights)`} placement={`package_${pkg.slug}`} />
          </div>
          <div className="mt-6 h-40 rounded-2xl bg-navy-800" aria-label={`Map placeholder for ${pkg.region}`} />
        </aside>
      </section>
    </div>
  );
}

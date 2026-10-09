import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FiClock } from "react-icons/fi";
import BookButton from "@/components/BookButton";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import { tours } from "@/lib/tours";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Goa Sightseeing Tours — North Goa, South Goa & Old Goa",
  description:
    "Guided Goa sightseeing tours covering forts, churches, beaches, Dudhsagar and river cruises. Half-day and full-day options with private cars and custom tours available.",
  alternates: { canonical: "/sightseeing" },
};

export default function SightseeingPage() {
  return (
    <div className="pt-28">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Goa sightseeing tours",
          itemListElement: tours.map((t, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: t.name,
            url: absoluteUrl(`/sightseeing/${t.slug}`),
          })),
        }}
      />
      <Breadcrumbs crumbs={[{ name: "Sightseeing", href: "/sightseeing" }]} />
      <section className="container-lux pb-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-turquoise-600">Sightseeing</p>
        <h1 className="heading-hero mx-auto mt-3 max-w-2xl text-4xl text-navy-900 md:text-5xl">
          Days out, paced like you mean it
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-navy-900/65">
          Guided tours through Goa&apos;s forts, churches, beaches and backroads. Private vehicles, English &amp; Hindi-speaking guides.
        </p>
      </section>

      <section className="container-lux grid grid-cols-1 gap-6 pb-16 sm:grid-cols-2 lg:grid-cols-3">
        {tours.map((t) => (
          <div key={t.slug} className="overflow-hidden rounded-3xl bg-white shadow-premium">
            <Link href={`/sightseeing/${t.slug}`} className="relative block h-44 w-full">
              <Image src={t.image} alt={t.name} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
            </Link>
            <div className="p-5">
              <h2 className="font-display text-lg text-navy-900">
                <Link href={`/sightseeing/${t.slug}`} className="hover:text-turquoise-600">{t.name}</Link>
              </h2>
              <p className="mt-1 flex items-center gap-1 text-xs text-navy-900/50"><FiClock size={12} /> {t.duration}</p>
              <p className="mt-2 text-sm text-navy-900/65">{t.card}</p>
              <div className="mt-4 flex items-center justify-between">
                <Link href={`/sightseeing/${t.slug}`} className="text-sm font-semibold text-turquoise-600 hover:underline">View details</Link>
                <BookButton label="Book Tour" service="Sightseeing Tour" destination={t.name} placement={`sightseeing_card_${t.slug}`} />
              </div>
            </div>
          </div>
        ))}

        <div className="overflow-hidden rounded-3xl bg-white shadow-premium">
          <div className="relative h-44 w-full">
            <Image src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1400&auto=format&fit=crop" alt="Customised Goa tour" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
          </div>
          <div className="p-5">
            <h2 className="font-display text-lg text-navy-900">Customised Tour</h2>
            <p className="mt-1 flex items-center gap-1 text-xs text-navy-900/50"><FiClock size={12} /> Flexible</p>
            <p className="mt-2 text-sm text-navy-900/65">Tell us what you want to see and skip, we&apos;ll build the day around it.</p>
            <div className="mt-4 flex justify-end">
              <BookButton label="Plan My Day" service="Sightseeing Tour" destination="Custom tour" placement="sightseeing_card_custom" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

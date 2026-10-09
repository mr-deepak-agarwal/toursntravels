import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getTour, tours } from "@/lib/tours";
import { absoluteUrl, businessRef } from "@/lib/seo";
import BookButton from "@/components/BookButton";
import { CallCta, WhatsAppCta } from "@/components/ContactLinks";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import FAQList from "@/components/seo/FAQList";
import JsonLd from "@/components/seo/JsonLd";
import RouteLinks from "@/components/seo/RouteLinks";

export const dynamicParams = false;

export function generateStaticParams() {
  return tours.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const t = getTour(slug);
  if (!t) return {};
  return {
    title: t.h1,
    description: t.metaDescription,
    alternates: { canonical: `/sightseeing/${t.slug}` },
    openGraph: { title: t.h1, description: t.metaDescription, url: absoluteUrl(`/sightseeing/${t.slug}`), type: "website" },
  };
}

export default async function TourPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const t = getTour(slug);
  if (!t) return notFound();

  const others = tours.filter((x) => x.slug !== t.slug).map((x) => ({ href: `/sightseeing/${x.slug}`, label: x.name }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: t.h1,
    description: t.metaDescription,
    url: absoluteUrl(`/sightseeing/${t.slug}`),
    image: t.image,
    touristType: "Sightseeing",
    provider: businessRef,
    itinerary: {
      "@type": "ItemList",
      itemListElement: t.stops.map((s, i) => ({ "@type": "ListItem", position: i + 1, name: s.name })),
    },
    ...(t.fromPrice
      ? { offers: { "@type": "Offer", priceCurrency: "INR", price: t.fromPrice, availability: "https://schema.org/InStock" } }
      : {}),
  };

  return (
    <div className="pt-28">
      <JsonLd data={jsonLd} />
      <Breadcrumbs crumbs={[{ name: "Sightseeing", href: "/sightseeing" }, { name: t.name, href: `/sightseeing/${t.slug}` }]} />

      <section className="container-lux grid grid-cols-1 gap-10 pb-16 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-turquoise-600">{t.duration}</p>
          <h1 className="heading-hero mt-3 text-4xl text-navy-900 md:text-5xl">{t.h1}</h1>
          <div className="relative mt-6 h-64 w-full overflow-hidden rounded-4xl md:h-80">
            <Image src={t.image} alt={t.name} fill priority sizes="(min-width: 1024px) 60vw, 100vw" className="object-cover" />
          </div>
          <p className="mt-6 leading-relaxed text-navy-900/75">{t.intro}</p>

          <h2 className="mt-12 font-display text-2xl text-navy-900">What you will see</h2>
          <ol className="mt-4 space-y-3">
            {t.stops.map((s, i) => (
              <li key={s.name} className="flex gap-4 rounded-2xl bg-white p-4 shadow-sm">
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-navy-900 text-xs font-semibold text-sand-100">{i + 1}</span>
                <div>
                  <p className="font-medium text-navy-900">{s.name}</p>
                  <p className="mt-1 text-sm text-navy-900/65">{s.detail}</p>
                </div>
              </li>
            ))}
          </ol>

          <h2 className="mt-12 font-display text-2xl text-navy-900">Tips for the day</h2>
          <ul className="mt-4 space-y-3">
            {t.tips.map((tip) => (
              <li key={tip} className="rounded-2xl bg-sand-200/60 p-4 text-sm leading-relaxed text-navy-900/75">{tip}</li>
            ))}
          </ul>

          <FAQList items={t.faqs} />
          <RouteLinks title="More Goa tours" links={[...others, { href: "/holiday-packages", label: "Goa holiday packages" }, { href: "/taxi", label: "Taxi services in Goa" }]} />
        </div>

        <aside className="h-fit rounded-4xl bg-navy-900 p-6 text-sand-100 shadow-premium lg:sticky lg:top-28">
          <p className="text-sm text-sand-100/60">Pricing</p>
          <p className="font-display text-2xl">{t.fromPrice ? `From ₹${t.fromPrice.toLocaleString("en-IN")}` : "Get a Quote"}</p>
          <p className="mt-1 text-xs text-sand-100/50">Private vehicle, set to your group size and date. Entry fees and meals as per the quote.</p>
          <div className="mt-6 flex flex-col gap-3">
            <BookButton label="Enquire About This Tour" service="Sightseeing Tour" destination={t.name} message={`I'm interested in: ${t.name}`} placement={`tour_${t.slug}`} />
            <WhatsAppCta message={`Hi! I'd like a quote for the ${t.name}. Date: ____ People: ____`} placement={`tour_${t.slug}`} />
            <CallCta placement={`tour_${t.slug}`} className="inline-flex items-center justify-center gap-2 rounded-full border border-sand-100/25 px-5 py-2.5 text-sm font-semibold text-sand-100" />
          </div>
        </aside>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { fleet } from "@/lib/data";
import { getRoute, routeTitle, taxiRoutes } from "@/lib/taxi-routes";
import { absoluteUrl, businessRef } from "@/lib/seo";
import TaxiBookingForm from "@/components/TaxiBookingForm";
import { CallCta, WhatsAppCta } from "@/components/ContactLinks";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import FAQList from "@/components/seo/FAQList";
import JsonLd from "@/components/seo/JsonLd";
import RouteLinks from "@/components/seo/RouteLinks";

export const dynamicParams = false;

export function generateStaticParams() {
  return taxiRoutes.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const r = getRoute(slug);
  if (!r) return {};
  const title = routeTitle(r);
  const description = `Book a private cab from ${r.from.replace(/ \(.*\)$/, "")} to ${r.to}: ${r.distanceKm}, ${r.duration}. Pre-booked pick-up. Get a quote.`;
  return {
    title,
    description,
    alternates: { canonical: `/taxi/${r.slug}` },
    openGraph: { title, description, url: absoluteUrl(`/taxi/${r.slug}`), type: "website" },
  };
}

const steps = [
  { t: "Send your details", d: "Pickup, drop, date, passengers and flight or train number. Use the form, WhatsApp or call." },
  { t: "Get a confirmed quote", d: "We reply with the vehicle and fare, including what is and is not included." },
  { t: "Meet your driver", d: "The driver meets you at the agreed pick-up point at the agreed time." },
];

export default async function TaxiRoutePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const r = getRoute(slug);
  if (!r) return notFound();

  const title = routeTitle(r);
  const faqs = [
    ...r.faqs,
    {
      q: `How much is a ${r.from.replace(/ \(.*\)$/, "")} to ${r.to} taxi?`,
      a: `The fare depends on the vehicle (hatchback, sedan, MUV, SUV or tempo traveller), the time of day and the season, so we quote each trip individually. Send us your date and group size on the form or WhatsApp and we will reply with a clear quote${r.fromPrice ? `. Fares from ₹${r.fromPrice.toLocaleString("en-IN")}` : ""}.`,
    },
    {
      q: "Can I book a return transfer too?",
      a: "Yes. Tell us your return date and time in the same enquiry and we confirm both legs together.",
    },
  ];

  const related = r.related
    .map((s) => getRoute(s))
    .filter((x): x is NonNullable<typeof x> => Boolean(x))
    .map((x) => ({ href: `/taxi/${x.slug}`, label: routeTitle(x) }));

  const defaultTripType = r.category === "airport" || r.category === "railway" ? "airport" : "oneway";
  const waMessage = `Hi! I'd like a quote for ${r.from} to ${r.to}. Date: ____ Passengers: ____`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: title,
    serviceType: "Private taxi transfer",
    description: `Private ${r.from} to ${r.to} taxi. ${r.distanceKm}, ${r.duration}.`,
    url: absoluteUrl(`/taxi/${r.slug}`),
    provider: businessRef,
    areaServed: [r.from, r.to],
    ...(r.fromPrice
      ? { offers: { "@type": "Offer", priceCurrency: "INR", price: r.fromPrice, availability: "https://schema.org/InStock" } }
      : {}),
  };

  return (
    <div className="pt-28">
      <JsonLd data={jsonLd} />
      <Breadcrumbs crumbs={[{ name: "Taxi", href: "/taxi" }, { name: title, href: `/taxi/${r.slug}` }]} />

      <section className="container-lux grid grid-cols-1 gap-10 pb-12 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-turquoise-600">Private cab · Goa</p>
          <h1 className="heading-hero mt-3 text-4xl text-navy-900 md:text-5xl">{title}</h1>
          <div className="mt-5 flex flex-wrap gap-2 text-xs font-medium text-navy-900/75">
            <span className="rounded-full bg-sand-200 px-3 py-1.5">Distance: {r.distanceKm}</span>
            <span className="rounded-full bg-sand-200 px-3 py-1.5">Drive time: {r.duration}</span>
            {r.fromPrice && <span className="rounded-full bg-sunset-500/15 px-3 py-1.5 text-sunset-600">From ₹{r.fromPrice.toLocaleString("en-IN")}</span>}
          </div>
          <p className="mt-6 leading-relaxed text-navy-900/75">{r.intro}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <WhatsAppCta message={waMessage} placement={`taxi_route_${r.slug}`} label="Get a quote on WhatsApp" />
            <CallCta placement={`taxi_route_${r.slug}`} />
          </div>
          <p className="mt-3 text-xs text-navy-900/50">Distance and time are approximate and vary with traffic and your exact stay.</p>

          <h2 className="mt-12 font-display text-2xl text-navy-900">Good to know before you book</h2>
          <ul className="mt-4 space-y-3">
            {r.tips.map((t) => (
              <li key={t} className="rounded-2xl bg-white p-4 text-sm leading-relaxed text-navy-900/75 shadow-sm">{t}</li>
            ))}
          </ul>

          <h2 className="mt-12 font-display text-2xl text-navy-900">Choose your vehicle</h2>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {fleet.map((v) => (
              <div key={v.name} className="rounded-2xl bg-white p-4 shadow-sm">
                <p className="font-medium text-navy-900">{v.name}</p>
                <p className="mt-1 text-xs text-navy-900/55">{v.example}</p>
                <p className="mt-2 text-xs text-navy-900/70">Up to {v.passengers} passengers</p>
              </div>
            ))}
          </div>

          <h2 className="mt-12 font-display text-2xl text-navy-900">How booking works</h2>
          <ol className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.t} className="rounded-2xl bg-white p-4 shadow-sm">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy-900 text-xs font-semibold text-sand-100">{i + 1}</span>
                <p className="mt-3 font-medium text-navy-900">{s.t}</p>
                <p className="mt-1 text-sm text-navy-900/65">{s.d}</p>
              </li>
            ))}
          </ol>

          <FAQList items={faqs} />
          <RouteLinks title="Related transfers" links={[...related, { href: "/taxi", label: "All taxi services in Goa" }]} />
        </div>

        <div>
          <TaxiBookingForm
            defaultPickup={r.from.replace(/ \(.*\)$/, "")}
            defaultDrop={r.to}
            defaultTripType={defaultTripType}
          />
        </div>
      </section>
    </div>
  );
}

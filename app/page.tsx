import Link from "next/link";
import { ArrowRight, Car, Hotel, Map, ShieldCheck, Clock3, IndianRupee } from "lucide-react";
import RouteLine from "@/components/RouteLine";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import PackageCard from "@/components/PackageCard";
import PlaceholderPhoto from "@/components/PlaceholderPhoto";
import InquiryForm from "@/components/InquiryForm";
import { tourPackages } from "@/lib/data/tours";
import { brand, whatsappLink } from "@/lib/config";

export default function Home() {
  const featured = tourPackages.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-2 md:items-center md:px-8 md:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-paper/10 px-3.5 py-1.5 text-xs font-medium text-gold">
              Taxis · Tours · Hotels — one call away
            </span>
            <h1 className="mt-5 font-display text-4xl font-semibold italic leading-[1.1] tracking-tight md:text-6xl">
              Goa, planned <span className="text-gold not-italic">properly.</span>
            </h1>
            <p className="mt-5 max-w-md text-paper/70">
              Airport pickups, self-drive rentals, curated sightseeing, pan-India tour packages, and
              handpicked stays — {brand.name} runs the trip so you can just show up and enjoy it.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="flex items-center gap-2 rounded-full bg-laterite px-6 py-3.5 text-sm font-semibold text-paper transition-transform hover:scale-[1.03] hover:bg-laterite-dim"
              >
                Plan my trip <ArrowRight size={16} />
              </Link>
              <a
                href={whatsappLink("Hi! I'd like a quick quote for a Goa trip.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-paper/25 px-6 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-paper/10"
              >
                Quick WhatsApp quote
              </a>
            </div>
          </div>

          <div className="relative">
            <RouteLine variant="hero" className="w-full" />
            <div className="mt-2 grid grid-cols-3 gap-3">
              {[
                { icon: Car, label: "Taxi & Self-Drive" },
                { icon: Map, label: "Tour Packages" },
                { icon: Hotel, label: "Hotel Stays" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-2 rounded-xl bg-paper/5 px-3 py-4 text-center ring-1 ring-paper/10"
                >
                  <Icon size={20} className="text-gold" />
                  <span className="text-xs font-medium text-paper/80">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="tile-divider" />

      {/* Three pillars */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <SectionHeading
          eyebrow="Everything, in one place"
          title="Three services. One trip, sorted."
          description="Book them separately or bundle all three — we coordinate the handoffs so nothing falls between the cracks."
          align="center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Car,
              title: "Taxi Services",
              desc: "Airport transfers, local sightseeing, outstation trips, and self-drive rentals.",
              href: "/taxi",
              accent: "bg-azulejo",
            },
            {
              icon: Map,
              title: "Tour Packages",
              desc: "Curated Goa circuits plus pan-India packages to Rajasthan, Kerala, Himachal and more.",
              href: "/tours",
              accent: "bg-laterite",
            },
            {
              icon: Hotel,
              title: "Hotel Booking",
              desc: "Handpicked stays across Goa, from budget inns to beachfront resorts.",
              href: "/hotels",
              accent: "bg-palm",
            },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <Link
                href={item.href}
                className="group flex h-full flex-col rounded-2xl bg-paper p-7 shadow-sm ring-1 ring-ink/5 transition-shadow hover:shadow-lg"
              >
                <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${item.accent} text-paper`}>
                  <item.icon size={20} />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm text-ink-soft/80">{item.desc}</p>
                <span className="mt-4 flex items-center gap-1 text-sm font-medium text-azulejo transition-transform group-hover:translate-x-1">
                  Explore <ArrowRight size={15} />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Featured packages */}
      <section className="bg-sand-dim/60 py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Popular right now"
              title="Featured tour packages"
              description="A mix of quick Goa day-trips and our signature multi-day circuits."
            />
            <Reveal>
              <Link href="/tours" className="flex items-center gap-1 text-sm font-semibold text-azulejo">
                View all packages <ArrowRight size={15} />
              </Link>
            </Reveal>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {featured.map((pkg, i) => (
              <PackageCard key={pkg.slug} pkg={pkg} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <Reveal>
            <PlaceholderPhoto
              gradient="from-gold to-laterite"
              label="Local drivers, local knowledge"
              className="h-80 w-full rounded-2xl"
            />
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Why travellers choose us"
              title="Local drivers. Straight pricing. No surprises."
            />
            <div className="mt-8 space-y-6">
              {[
                {
                  icon: ShieldCheck,
                  title: "Verified drivers & vehicles",
                  desc: "Every driver is background-checked, every cab is GPS-tracked and insured.",
                },
                {
                  icon: IndianRupee,
                  title: "Transparent pricing",
                  desc: "The price you're quoted is the price you pay — no toll or fuel surprises.",
                },
                {
                  icon: Clock3,
                  title: "On-time, every time",
                  desc: "Flight tracking for airport pickups, punctual departures for tours.",
                },
              ].map((item, i) => (
                <Reveal key={item.title} delay={i * 0.1} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sand text-azulejo">
                    <item.icon size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink">{item.title}</h4>
                    <p className="mt-1 text-sm text-ink-soft/75">{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA / form */}
      <section className="bg-ink py-20 text-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2 md:px-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Let's plan it
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Tell us your dates. We'll handle the rest.
            </h2>
            <p className="mt-3 max-w-md text-paper/70">
              One form covers taxis, tour packages, and hotel stays — we'll follow up with a
              tailored plan within a few hours.
            </p>
          </div>
          <div className="rounded-2xl bg-paper p-6 md:p-7">
            <InquiryForm compact />
          </div>
        </div>
      </section>
    </>
  );
}

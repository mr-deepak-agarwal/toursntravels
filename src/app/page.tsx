import Link from "next/link";
import { Car, Compass, BedDouble, ArrowUpRight, ShieldCheck } from "lucide-react";
import Reveal from "@/components/Reveal";
import Stamp from "@/components/Stamp";
import Eyebrow from "@/components/Eyebrow";
import WaveDivider from "@/components/WaveDivider";
import TourCard from "@/components/TourCard";
import HotelCard from "@/components/HotelCard";
import Testimonials from "@/components/Testimonials";
import EnquiryForm from "@/components/EnquiryForm";
import { LinkButton } from "@/components/Button";
import { tourPackages, hotels } from "@/lib/data";

const engines = [
  {
    href: "/taxi",
    icon: Car,
    title: "Taxi & Self-Drive",
    desc: "Local Goa rides, outstation trips, and self-drive rentals — fixed prices, no bargaining.",
  },
  {
    href: "/tours",
    icon: Compass,
    title: "Tour Packages",
    desc: "Curated sightseeing across Goa and handpicked trips to Rajasthan, Kerala, Hampi & beyond.",
  },
  {
    href: "/hotels",
    icon: BedDouble,
    title: "Stays in Goa",
    desc: "Boutique rooms, beachside resorts and city stays — vetted in person, not just listed.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-indigo-deep via-indigo to-laterite-deep min-h-[92vh] flex items-end grain overflow-hidden">
        <div className="absolute inset-0 tile-texture-light opacity-[0.08]" aria-hidden />
        <div className="container-page relative z-10 pt-40 pb-32 w-full">
          <Reveal>
            <p className="font-stamp text-xs uppercase text-gold tracking-widest mb-5">
              Panjim, Goa — built by a local team
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[68px] text-ivory leading-[1.05] max-w-3xl">
              Goa, driven and planned <span className="italic text-gold">by people who live here.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="text-ivory/70 text-base md:text-lg max-w-xl mt-6 leading-relaxed">
              Taxis and self-drive across Goa, curated tours to India&apos;s best-loved
              destinations, and stays we&apos;ve actually walked into. One team, three
              ways to make your trip easier.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="flex flex-wrap gap-4 mt-9">
              <LinkButton href="/contact" size="lg" showArrow>
                Plan My Trip
              </LinkButton>
              <LinkButton href="/tours" variant="ghost" size="lg" className="border-ivory/30 text-ivory hover:bg-ivory/10 hover:border-ivory/30">
                Browse Tour Packages
              </LinkButton>
            </div>
          </Reveal>
        </div>
        <WaveDivider className="absolute bottom-0 left-0 w-full h-16 text-ivory z-10" />
      </section>

      {/* THREE ENGINES — overlapping the hero seam */}
      <section className="relative bg-ivory pb-4">
        <div className="container-page -mt-24 md:-mt-28 relative z-20">
          <div className="grid md:grid-cols-3 gap-5">
            {engines.map((e, i) => (
              <Reveal key={e.href} delay={i * 0.08}>
                <Link
                  href={e.href}
                  className="group block h-full bg-white rounded-2xl p-7 shadow-[0_20px_50px_-16px_rgba(32,28,23,0.25)] border border-line hover:-translate-y-1.5 hover:border-laterite/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-sand flex items-center justify-center mb-5 group-hover:bg-laterite group-hover:text-ivory text-indigo transition-colors">
                    <e.icon size={22} />
                  </div>
                  <h3 className="font-display text-xl text-ink mb-2 flex items-center gap-1.5">
                    {e.title}
                    <ArrowUpRight size={16} className="text-laterite opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </h3>
                  <p className="text-sm text-ink-soft leading-relaxed">{e.desc}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST STAMPS */}
      <section className="py-20 md:py-24">
        <div className="container-page">
          <Reveal>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
              <Stamp line1="Est." line2="2016" rotate={-6} />
              <Stamp line1="Licensed" line2="Operator" rotate={5} tone="laterite" />
              <Stamp line1="5,000+" line2="Trips" rotate={-4} />
              <Stamp line1="Rated" line2="4.8 / 5" rotate={7} tone="laterite" />
              <Stamp line1="Locally" line2="Owned" rotate={-8} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FEATURED TOURS */}
      <section className="py-20 md:py-24 bg-sand/40">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <Reveal>
              <div>
                <Eyebrow>Tour Packages</Eyebrow>
                <h2 className="font-display text-3xl md:text-4xl text-ink max-w-lg">
                  Goa sightseeing, and beyond it
                </h2>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <LinkButton href="/tours" variant="ghost" showArrow>
                View all packages
              </LinkButton>
            </Reveal>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tourPackages.map((t, i) => (
              <Reveal key={t.slug} delay={i * 0.07}>
                <TourCard tour={t} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED HOTELS */}
      <section className="py-20 md:py-24">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <Reveal>
              <div>
                <Eyebrow tone="indigo">Stays in Goa</Eyebrow>
                <h2 className="font-display text-3xl md:text-4xl text-ink max-w-lg">
                  Rooms we&apos;d actually recommend
                </h2>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <LinkButton href="/hotels" variant="ghost" showArrow>
                View all stays
              </LinkButton>
            </Reveal>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hotels.map((h, i) => (
              <Reveal key={h.slug} delay={i * 0.07}>
                <HotelCard hotel={h} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US STRIP */}
      <section className="py-16 bg-indigo-deep text-ivory">
        <div className="container-page grid sm:grid-cols-3 gap-8">
          {[
            { title: "No middlemen markup", desc: "You book with the people actually driving the car and holding the room key." },
            { title: "WhatsApp-first support", desc: "Real replies from a real person, not a ticket queue." },
            { title: "Fixed prices upfront", desc: "Quoted before you travel — no last-minute add-ons." },
          ].map((f) => (
            <div key={f.title} className="flex gap-3">
              <ShieldCheck size={20} className="text-gold shrink-0 mt-0.5" />
              <div>
                <p className="font-medium mb-1">{f.title}</p>
                <p className="text-sm text-ivory/60 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Testimonials />

      {/* CTA */}
      <section className="py-24 bg-sand/40">
        <div className="container-page">
          <div className="max-w-xl mx-auto bg-white border border-line rounded-3xl p-8 md:p-10 shadow-[0_20px_60px_-20px_rgba(32,28,23,0.15)]">
            <EnquiryForm variant="contact" />
          </div>
        </div>
      </section>
    </>
  );
}

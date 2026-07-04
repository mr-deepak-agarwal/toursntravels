import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, X, Clock, MapPin, ChevronLeft } from "lucide-react";
import Reveal from "@/components/Reveal";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import EnquiryForm from "@/components/EnquiryForm";
import { tourPackages } from "@/lib/data";

export function generateStaticParams() {
  return tourPackages.map((t) => ({ slug: t.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const tour = tourPackages.find((t) => t.slug === params.slug);
  if (!tour) return {};
  return {
    title: tour.title,
    description: tour.summary,
  };
}

export default function TourDetailPage({ params }: { params: { slug: string } }) {
  const tour = tourPackages.find((t) => t.slug === params.slug);
  if (!tour) notFound();

  return (
    <>
      <section className="relative pt-36 pb-16 bg-indigo-deep grain overflow-hidden">
        <div className="absolute inset-0 tile-texture-light opacity-[0.08]" aria-hidden />
        <div className="container-page relative z-10">
          <Link href="/tours" className="inline-flex items-center gap-1.5 text-ivory/60 hover:text-ivory text-sm mb-6 transition-colors">
            <ChevronLeft size={15} /> All packages
          </Link>
          <Reveal>
            <p className="font-stamp text-xs uppercase text-gold mb-3">{tour.tag} · {tour.region}</p>
            <h1 className="font-display text-3xl md:text-5xl text-ivory max-w-2xl leading-tight">
              {tour.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 mt-6 text-ivory/70 text-sm">
              <span className="flex items-center gap-1.5"><Clock size={15} /> {tour.days} Days / {tour.nights} Nights</span>
              <span className="flex items-center gap-1.5"><MapPin size={15} /> {tour.region}</span>
              <span className="font-semibold text-ivory text-base">₹{tour.price.toLocaleString("en-IN")} <span className="text-ivory/50 text-xs font-normal">per person</span></span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-page -mt-10 relative z-10">
        <Reveal>
          <PhotoPlaceholder gradient={tour.gradient} label={tour.title} className="w-full h-64 md:h-96 rounded-3xl shadow-[0_20px_60px_-20px_rgba(32,28,23,0.3)]" />
        </Reveal>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-page grid lg:grid-cols-[1fr_380px] gap-14">
          <div>
            <Reveal>
              <p className="text-ink-soft leading-relaxed text-lg">{tour.summary}</p>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="font-display text-2xl text-ink mt-12 mb-5">Highlights</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {tour.highlights.map((h) => (
                  <div key={h} className="flex items-start gap-2.5 bg-sand/50 rounded-xl px-4 py-3">
                    <Check size={16} className="text-laterite shrink-0 mt-0.5" />
                    <span className="text-sm text-ink">{h}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <h2 className="font-display text-2xl text-ink mt-12 mb-6">Day by day</h2>
              <div className="space-y-6">
                {tour.itinerary.map((d) => (
                  <div key={d.day} className="flex gap-5">
                    <div className="flex flex-col items-center">
                      <span className="w-9 h-9 rounded-full bg-indigo text-ivory flex items-center justify-center text-sm font-semibold shrink-0">
                        {d.day}
                      </span>
                      {d.day !== tour.itinerary.length && <span className="w-px flex-1 bg-line mt-2" />}
                    </div>
                    <div className="pb-6">
                      <h3 className="font-display text-lg text-ink mb-1">{d.title}</h3>
                      <p className="text-sm text-ink-soft leading-relaxed">{d.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="grid sm:grid-cols-2 gap-8 mt-12">
                <div>
                  <h3 className="font-display text-xl text-ink mb-4">Inclusions</h3>
                  <ul className="space-y-2.5">
                    {tour.inclusions.map((i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-ink-soft">
                        <Check size={15} className="text-laterite shrink-0 mt-0.5" /> {i}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-display text-xl text-ink mb-4">Exclusions</h3>
                  <ul className="space-y-2.5">
                    {tour.exclusions.map((i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-ink-soft">
                        <X size={15} className="text-ink-soft/50 shrink-0 mt-0.5" /> {i}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:sticky lg:top-28 h-fit">
            <Reveal delay={0.1}>
              <div className="bg-white border border-line rounded-3xl p-7 shadow-[0_20px_60px_-20px_rgba(32,28,23,0.15)]">
                <EnquiryForm variant="tour" presetItem={tour.title} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

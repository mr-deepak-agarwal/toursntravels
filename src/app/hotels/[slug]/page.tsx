import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Star, MapPin, ChevronLeft, Check } from "lucide-react";
import Reveal from "@/components/Reveal";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import EnquiryForm from "@/components/EnquiryForm";
import { hotels } from "@/lib/data";

export function generateStaticParams() {
  return hotels.map((h) => ({ slug: h.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const hotel = hotels.find((h) => h.slug === params.slug);
  if (!hotel) return {};
  return {
    title: hotel.name,
    description: hotel.summary,
  };
}

export default function HotelDetailPage({ params }: { params: { slug: string } }) {
  const hotel = hotels.find((h) => h.slug === params.slug);
  if (!hotel) notFound();

  return (
    <>
      <section className="relative pt-36 pb-16 bg-indigo-deep grain overflow-hidden">
        <div className="absolute inset-0 tile-texture-light opacity-[0.08]" aria-hidden />
        <div className="container-page relative z-10">
          <Link href="/hotels" className="inline-flex items-center gap-1.5 text-ivory/60 hover:text-ivory text-sm mb-6 transition-colors">
            <ChevronLeft size={15} /> All stays
          </Link>
          <Reveal>
            <p className="font-stamp text-xs uppercase text-gold mb-3">{hotel.tag}</p>
            <h1 className="font-display text-3xl md:text-5xl text-ivory max-w-2xl leading-tight">
              {hotel.name}
            </h1>
            <div className="flex flex-wrap items-center gap-6 mt-6 text-ivory/70 text-sm">
              <span className="flex items-center gap-1.5"><MapPin size={15} /> {hotel.area}</span>
              <span className="flex items-center gap-1.5"><Star size={15} className="fill-gold text-gold" /> {hotel.rating} rating</span>
              <span className="font-semibold text-ivory text-base">₹{hotel.pricePerNight.toLocaleString("en-IN")} <span className="text-ivory/50 text-xs font-normal">per night</span></span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-page -mt-10 relative z-10">
        <Reveal>
          <PhotoPlaceholder gradient={hotel.gradient} label={hotel.name} className="w-full h-64 md:h-96 rounded-3xl shadow-[0_20px_60px_-20px_rgba(32,28,23,0.3)]" />
        </Reveal>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-page grid lg:grid-cols-[1fr_380px] gap-14">
          <div>
            <Reveal>
              <p className="text-ink-soft leading-relaxed text-lg">{hotel.summary}</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display text-2xl text-ink mt-12 mb-5">Amenities</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {hotel.amenities.map((a) => (
                  <div key={a} className="flex items-start gap-2.5 bg-sand/50 rounded-xl px-4 py-3">
                    <Check size={16} className="text-indigo shrink-0 mt-0.5" />
                    <span className="text-sm text-ink">{a}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:sticky lg:top-28 h-fit">
            <Reveal delay={0.1}>
              <div className="bg-white border border-line rounded-3xl p-7 shadow-[0_20px_60px_-20px_rgba(32,28,23,0.15)]">
                <EnquiryForm variant="hotel" presetItem={hotel.name} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

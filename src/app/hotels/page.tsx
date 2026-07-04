import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Eyebrow from "@/components/Eyebrow";
import HotelCard from "@/components/HotelCard";
import { hotels } from "@/lib/data";

export const metadata: Metadata = {
  title: "Handpicked Hotels & Stays in Goa",
  description:
    "Boutique rooms, beachside resorts and city stays across North and South Goa — vetted in person, booked directly.",
};

export default function HotelsPage() {
  return (
    <>
      <section className="relative bg-indigo-deep pt-36 pb-24 grain overflow-hidden">
        <div className="absolute inset-0 tile-texture-light opacity-[0.08]" aria-hidden />
        <div className="container-page relative z-10">
          <Reveal>
            <Eyebrow tone="gold">Stays in Goa</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-display text-4xl md:text-5xl text-ivory max-w-2xl leading-tight">
              Rooms we&apos;ve walked into ourselves.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="text-ivory/70 max-w-xl mt-5 leading-relaxed">
              No third-party listings scraped off the internet — every stay here has
              been checked in person for cleanliness, location, and value.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container-page">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotels.map((h, i) => (
              <Reveal key={h.slug} delay={i * 0.06}>
                <HotelCard hotel={h} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

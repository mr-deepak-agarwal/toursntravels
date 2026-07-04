import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Eyebrow from "@/components/Eyebrow";
import TourCard from "@/components/TourCard";
import { tourPackages } from "@/lib/data";

export const metadata: Metadata = {
  title: "Goa Sightseeing & All-India Tour Packages",
  description:
    "Curated Goa sightseeing tours and handpicked packages to Rajasthan, Kerala, Karnataka and Himachal — planned itineraries, fixed pricing.",
};

export default function ToursPage() {
  return (
    <>
      <section className="relative bg-indigo-deep pt-36 pb-24 grain overflow-hidden">
        <div className="absolute inset-0 tile-texture-light opacity-[0.08]" aria-hidden />
        <div className="container-page relative z-10">
          <Reveal>
            <Eyebrow tone="gold">Tour Packages</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-display text-4xl md:text-5xl text-ivory max-w-2xl leading-tight">
              Itineraries planned by people who&apos;ve actually driven them.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="text-ivory/70 max-w-xl mt-5 leading-relaxed">
              From a long weekend of Goa sightseeing to a full circuit across
              Rajasthan or Kerala — every package below can be adjusted to your dates.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container-page">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tourPackages.map((t, i) => (
              <Reveal key={t.slug} delay={i * 0.06}>
                <TourCard tour={t} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

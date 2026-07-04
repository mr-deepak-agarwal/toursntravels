import { notFound } from "next/navigation";
import { Calendar, Check, MapPin } from "lucide-react";
import PlaceholderPhoto from "@/components/PlaceholderPhoto";
import Reveal from "@/components/Reveal";
import InquiryForm from "@/components/InquiryForm";
import { tourPackages } from "@/lib/data/tours";

export function generateStaticParams() {
  return tourPackages.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const pkg = tourPackages.find((p) => p.slug === params.slug);
  return { title: pkg ? `${pkg.title} — Tour Package` : "Tour Package" };
}

export default function TourDetailPage({ params }: { params: { slug: string } }) {
  const pkg = tourPackages.find((p) => p.slug === params.slug);
  if (!pkg) return notFound();

  return (
    <>
      <section className="bg-ink text-paper">
        <PlaceholderPhoto gradient={pkg.image} label={pkg.location} className="h-64 w-full md:h-80" />
        <div className="mx-auto max-w-5xl px-5 py-10 md:px-8">
          <Reveal>
            <span className="rounded-full bg-paper/10 px-3 py-1 text-xs font-medium text-gold">
              {pkg.region}
            </span>
            <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl">
              {pkg.title}
            </h1>
            <div className="mt-3 flex flex-wrap gap-4 text-sm text-paper/70">
              <span className="flex items-center gap-1.5">
                <MapPin size={14} /> {pkg.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={14} /> {pkg.duration}
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <div>
            <Reveal>
              <h2 className="font-display text-2xl font-semibold text-ink">Overview</h2>
              <p className="mt-3 text-ink-soft/80">{pkg.summary}</p>
            </Reveal>
            <Reveal delay={0.1} className="mt-8">
              <h3 className="font-display text-xl font-semibold text-ink">Highlights</h3>
              <ul className="mt-4 space-y-2.5">
                {pkg.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-ink-soft/80">
                    <Check size={16} className="mt-0.5 shrink-0 text-palm" /> {h}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="sticky top-24 rounded-2xl bg-paper p-6 shadow-sm ring-1 ring-ink/5">
              <span className="text-xs text-ink-soft/60">Starting from</span>
              <div className="font-display text-3xl font-semibold text-laterite">
                ₹{pkg.priceFrom.toLocaleString("en-IN")}
              </div>
              <p className="mt-1 text-xs text-ink-soft/60">per person, all-inclusive</p>
              <div className="mt-5 border-t border-ink/5 pt-5">
                <InquiryForm compact defaultSubject={`Tour: ${pkg.title}`} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

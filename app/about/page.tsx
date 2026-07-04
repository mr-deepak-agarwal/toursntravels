import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import PlaceholderPhoto from "@/components/PlaceholderPhoto";
import { brand } from "@/lib/config";

export const metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <>
      <section className="bg-ink py-16 text-paper md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              About {brand.name}
            </span>
            <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
              Run by people who actually drive these roads.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <Reveal>
            <PlaceholderPhoto gradient="from-azulejo to-palm" label="Our team" className="h-80 w-full rounded-2xl" />
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Our story"
              title="Started local, grew because guests kept coming back"
            />
            <p className="mt-5 text-ink-soft/80">
              {brand.name} started as a small taxi service for travellers arriving in Goa who wanted
              a driver they could trust, not a stranger they had to negotiate with at the airport
              exit. Over time, guests kept asking for the same thing — someone to also plan the
              sightseeing, and to recommend somewhere decent to stay.
            </p>
            <p className="mt-4 text-ink-soft/80">
              That's the whole business now: taxis, tours, and hotel stays, run by one small team
              that knows the roads, the seasons, and which beaches are actually worth the drive.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-sand-dim/60 py-16">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <SectionHeading eyebrow="What we stand for" title="How we work" align="center" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Straight pricing",
                desc: "The quote you get is the price you pay — no last-minute additions.",
              },
              {
                title: "Local first",
                desc: "Every driver and every recommended stay is someone we personally know.",
              },
              {
                title: "Plan it once",
                desc: "One conversation covers your taxi, your tour, and your hotel — no juggling three vendors.",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1} className="rounded-2xl bg-paper p-6 ring-1 ring-ink/5">
                <h3 className="font-display text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-soft/80">{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Eyebrow from "@/components/Eyebrow";
import Stamp from "@/components/Stamp";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import { LinkButton } from "@/components/Button";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "A Goa-based taxi, tour and hotel booking team — locally owned, WhatsApp-first, and built on trips we've actually done ourselves.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative bg-indigo-deep pt-36 pb-24 grain overflow-hidden">
        <div className="absolute inset-0 tile-texture-light opacity-[0.08]" aria-hidden />
        <div className="container-page relative z-10">
          <Reveal>
            <Eyebrow tone="gold">About Us</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-display text-4xl md:text-5xl text-ivory max-w-2xl leading-tight">
              We started with one taxi and a lot of opinions about bad itineraries.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container-page grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <PhotoPlaceholder
              gradient="from-[#16324f] to-[#8f3220]"
              label="The team, Panjim"
              className="w-full h-80 md:h-[420px] rounded-3xl"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-ink-soft leading-relaxed mb-5">
              [Replace with the client&apos;s real story.] What began as a single taxi
              running airport transfers around Dabolim grew into a small team that
              also plans full tour itineraries and keeps a shortlist of stays we&apos;d
              actually put a friend in.
            </p>
            <p className="text-ink-soft leading-relaxed mb-5">
              We don&apos;t run a call centre and we&apos;re not a listings site. Every route
              is driven by someone who knows it, every package is planned by
              someone who&apos;s done it, and every recommended stay has been walked
              through in person.
            </p>
            <p className="text-ink-soft leading-relaxed">
              If something in a booking doesn&apos;t go right, you&apos;ll reach an actual
              person on WhatsApp — not a support form.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 bg-sand/40">
        <div className="container-page">
          <Reveal>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
              <Stamp line1="Est." line2="2016" rotate={-6} />
              <Stamp line1="Licensed" line2="Operator" rotate={5} tone="laterite" />
              <Stamp line1="5,000+" line2="Trips" rotate={-4} />
              <Stamp line1="Rated" line2="4.8 / 5" rotate={7} tone="laterite" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 text-center">
        <div className="container-page">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl text-ink mb-6 max-w-xl mx-auto">
              Have a trip in mind? Let&apos;s plan it properly.
            </h2>
            <LinkButton href="/contact" size="lg" showArrow>
              Get in touch
            </LinkButton>
          </Reveal>
        </div>
      </section>
    </>
  );
}

import { Star } from "lucide-react";
import Reveal from "./Reveal";

const testimonials = [
  {
    quote:
      "Booked an outstation taxi to Hampi with almost no notice. Driver was on time, car was spotless, and the price matched what we agreed on WhatsApp — no surprises at drop-off.",
    name: "Rohan Mehta",
    place: "Mumbai",
  },
  {
    quote:
      "The Kerala package was better paced than anything I found on the big booking sites — no rushed mornings, and the houseboat night was the highlight of our trip.",
    name: "Sarah Thompson",
    place: "Auckland, NZ",
  },
  {
    quote:
      "Found our Vagator stay through them and it was exactly as described — quiet, clean, and five minutes from everything. Easier than scrolling through fifty listings.",
    name: "Ananya Rao",
    place: "Bengaluru",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-ivory">
      <div className="container-page">
        <Reveal>
          <p className="font-stamp text-xs uppercase text-laterite mb-3 text-center">
            What travellers say
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-ink text-center mb-14 max-w-xl mx-auto">
            Trip stories, not marketing copy
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div className="h-full bg-white border border-line rounded-2xl p-7 flex flex-col gap-4">
                <div className="flex gap-0.5 text-gold">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={14} className="fill-gold" />
                  ))}
                </div>
                <p className="text-sm text-ink-soft leading-relaxed flex-1">
                  “{t.quote}”
                </p>
                <div className="pt-4 border-t border-line">
                  <p className="text-sm font-semibold text-ink">{t.name}</p>
                  <p className="text-xs text-ink-soft">{t.place}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

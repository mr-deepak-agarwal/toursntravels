import JsonLd from "./JsonLd";
import { faqJsonLd } from "@/lib/seo";

/** Server-rendered FAQ (all answers are in the HTML for crawlers) with FAQPage schema. */
export default function FAQList({ items, title = "Frequently asked questions" }: { items: { q: string; a: string }[]; title?: string }) {
  if (!items.length) return null;
  return (
    <section className="mt-12">
      <JsonLd data={faqJsonLd(items)} />
      <h2 className="font-display text-2xl text-navy-900">{title}</h2>
      <div className="mt-4 divide-y divide-navy-900/10 rounded-3xl bg-white shadow-premium">
        {items.map((f) => (
          <details key={f.q} className="group px-6 py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-navy-900">
              {f.q}
              <span className="text-turquoise-600 transition group-open:rotate-45" aria-hidden>+</span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-navy-900/70">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

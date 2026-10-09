import JsonLd from "@/components/seo/JsonLd";
import FAQList from "@/components/seo/FAQList";
import RouteLinks from "@/components/seo/RouteLinks";
import { CallCta, WhatsAppCta } from "@/components/ContactLinks";
import { faqs as siteFaqs } from "@/lib/data";
import { absoluteUrl, businessRef } from "@/lib/seo";

const selfDriveFaqs = [
  ...siteFaqs.filter((f) => f.q.toLowerCase().includes("self-drive") || f.q.toLowerCase().includes("self drive")),
  {
    q: "Which car is best for Goa?",
    a: "A hatchback is easiest for couples and solo travellers because Goa's village lanes and beach-road parking are tight. Families and groups are more comfortable in a sedan, MUV or SUV with room for luggage.",
  },
  {
    q: "Do you deliver the car to my hotel?",
    a: "Yes, doorstep delivery is available across North Goa. Share your stay and dates and we confirm the pick-up and return plan in the quote.",
  },
  {
    q: "Is driving in Goa difficult for visitors?",
    a: "Main highways are fine, but village roads can be narrow and traffic around Calangute, Baga and Panjim gets heavy in peak season. Drive carefully, avoid unlit roads at night, and never drink and drive.",
  },
];

/** Crawlable text, FAQ and schema rendered below the interactive self-drive page. */
export default function SelfDriveSeoContent() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Self drive car rental in Goa",
          serviceType: "Self-drive car rental",
          url: absoluteUrl("/self-drive"),
          provider: businessRef,
          areaServed: { "@type": "State", name: "Goa" },
        }}
      />
      <section className="container-lux max-w-3xl pb-8">
        <h2 className="heading-hero text-3xl text-navy-900">Self drive car rental in Goa</h2>
        <p className="mt-4 leading-relaxed text-navy-900/75">
          Renting a self-drive car is the easiest way to explore Goa on your own schedule. You can reach quiet beaches, hilltop forts and
          village cafés that tour buses skip, and you are not tied to a driver&apos;s timings. We offer hatchbacks, sedans, MUVs, SUVs and luxury
          cars on hourly, daily and weekly rentals, with doorstep delivery across North Goa.
        </p>
        <h3 className="mt-8 font-display text-xl text-navy-900">Tips for driving in Goa</h3>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-navy-900/70">
          <li>Carry your original driving licence and a government photo ID at all times. Police checks are common, especially in peak season.</li>
          <li>Traffic around Calangute, Baga and Panjim is heaviest in the evening. Plan beach and market visits earlier in the day when you can.</li>
          <li>Many village lanes are narrow and unmarked. Use offline maps and be careful on blind turns.</li>
          <li>Do not drive onto beaches, and park only in marked or legal spots. Towing and fines are common for illegal parking.</li>
          <li>Never drink and drive. Use a taxi for nights out. Enforcement is strict.</li>
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <WhatsAppCta message="Hi! I'd like to rent a self-drive car in Goa. Dates: ____ Car type: ____" placement="self_drive_content" label="Ask about a car" />
          <CallCta placement="self_drive_content" />
        </div>
        <FAQList items={selfDriveFaqs} title="Self drive in Goa: common questions" />
        <RouteLinks
          title="Plan the rest of your trip"
          links={[
            { href: "/taxi", label: "Goa taxi and airport transfers" },
            { href: "/sightseeing", label: "Goa sightseeing tours" },
            { href: "/holiday-packages", label: "Goa holiday packages" },
            { href: "/blog", label: "Goa travel guides" },
          ]}
        />
      </section>
    </>
  );
}

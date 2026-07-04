import { Car } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import TaxiCard from "@/components/TaxiCard";
import InquiryForm from "@/components/InquiryForm";
import { taxiServices } from "@/lib/data/taxi";

export const metadata = {
  title: "Taxi Services in Goa — Airport Transfers, Self-Drive & Outstation",
};

export default function TaxiPage() {
  return (
    <>
      <section className="bg-ink py-16 text-paper md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-paper/10 px-3.5 py-1.5 text-xs font-medium text-gold">
              <Car size={14} /> Taxi Services
            </span>
            <h1 className="mt-5 max-w-2xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
              Every ride in Goa, sorted before you land.
            </h1>
            <p className="mt-4 max-w-lg text-paper/70">
              From the moment your flight touches down to your last outstation trip — pick the ride
              that fits, or let us plan your whole itinerary.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {taxiServices.map((service, i) => (
            <TaxiCard key={service.slug} service={service} index={i} />
          ))}
        </div>
      </section>

      <section className="bg-sand-dim/60 py-16">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Book a ride"
            title="Tell us your route and dates"
            description="Include pickup point, drop point, and travel date — we'll send a fixed quote."
            align="center"
          />
          <div className="mt-10 rounded-2xl bg-paper p-6 shadow-sm ring-1 ring-ink/5 md:p-8">
            <InquiryForm defaultSubject="Taxi booking" />
          </div>
        </div>
      </section>
    </>
  );
}

import { Hotel as HotelIcon } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import HotelCard from "@/components/HotelCard";
import InquiryForm from "@/components/InquiryForm";
import { hotels } from "@/lib/data/hotels";

export const metadata = {
  title: "Hotel Booking in Goa — Budget to Premium Stays",
};

export default function HotelsPage() {
  return (
    <>
      <section className="bg-ink py-16 text-paper md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-paper/10 px-3.5 py-1.5 text-xs font-medium text-gold">
              <HotelIcon size={14} /> Hotel Booking
            </span>
            <h1 className="mt-5 max-w-2xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
              A place to land, handpicked.
            </h1>
            <p className="mt-4 max-w-lg text-paper/70">
              From beachfront resorts to heritage guesthouses in old Panjim — stays we've vetted
              ourselves, not just listed.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {hotels.map((hotel, i) => (
            <HotelCard key={hotel.slug} hotel={hotel} index={i} />
          ))}
        </div>
      </section>

      <section className="bg-sand-dim/60 py-16">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Check availability"
            title="Tell us your dates and budget"
            description="We'll match you to the right stay and confirm availability directly with the property."
            align="center"
          />
          <div className="mt-10 rounded-2xl bg-paper p-6 shadow-sm ring-1 ring-ink/5 md:p-8">
            <InquiryForm defaultSubject="Hotel booking" />
          </div>
        </div>
      </section>
    </>
  );
}

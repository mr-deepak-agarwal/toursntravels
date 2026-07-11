import type { Metadata } from "next";
import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";
import { siteConfig } from "@/lib/data";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Goa Best Deals Tours & Travels for bookings, quotes, custom itineraries or general questions. Call, WhatsApp or visit us in Candolim, North Goa.",
  alternates: { canonical: "/contact" },
};

const details = [
  { icon: FiMapPin, label: siteConfig.address },
  { icon: FiPhone, label: siteConfig.phone },
  { icon: FiMail, label: siteConfig.email },
  { icon: FiClock, label: "9:00 AM – 9:00 PM, all days" },
];

export default function ContactPage() {
  return (
    <div className="pt-28">
      <section className="container-lux pb-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-turquoise-600">Contact</p>
        <h1 className="heading-hero mx-auto mt-3 max-w-2xl text-4xl text-navy-900 md:text-5xl">
          Let&apos;s plan the trip
        </h1>
      </section>

      <section className="container-lux grid grid-cols-1 gap-10 pb-24 lg:grid-cols-2">
        <div>
          <div className="h-72 w-full overflow-hidden rounded-4xl bg-sand-200/70" aria-label="Map of our office in Candolim, North Goa" />
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {details.map((d) => (
              <div key={d.label} className="flex items-start gap-3 rounded-3xl bg-sand-200/60 p-5">
                <d.icon className="mt-0.5 shrink-0 text-emerald-600" size={20} />
                <p className="text-sm text-navy-900/80">{d.label}</p>
              </div>
            ))}
          </div>
        </div>
        <ContactForm />
      </section>
    </div>
  );
}

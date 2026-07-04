import { Mail, MapPin, Phone } from "lucide-react";
import Reveal from "@/components/Reveal";
import InquiryForm from "@/components/InquiryForm";
import { brand, whatsappLink } from "@/lib/config";

export const metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <div className="grid gap-12 md:grid-cols-[1fr_1.3fr]">
        <div>
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-laterite">
              Get in touch
            </span>
            <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Let's plan your Goa trip
            </h1>
            <p className="mt-3 text-ink-soft/80">
              Fill the form, call us, or message on WhatsApp — whichever is easiest for you.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-8 space-y-4">
            <a href={`tel:${brand.phoneRaw}`} className="flex items-center gap-3 text-ink-soft hover:text-azulejo">
              <Phone size={18} /> {brand.phone}
            </a>
            <a href={`mailto:${brand.email}`} className="flex items-center gap-3 text-ink-soft hover:text-azulejo">
              <Mail size={18} /> {brand.email}
            </a>
            <p className="flex items-center gap-3 text-ink-soft">
              <MapPin size={18} /> {brand.address}
            </p>
            <a
              href={whatsappLink("Hi! I'd like to enquire about a Goa trip.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white"
            >
              Chat on WhatsApp
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.05}>
          <div className="rounded-2xl bg-paper p-6 shadow-sm ring-1 ring-ink/5 md:p-8">
            <InquiryForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

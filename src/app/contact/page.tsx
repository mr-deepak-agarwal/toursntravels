import type { Metadata } from "next";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import Reveal from "@/components/Reveal";
import Eyebrow from "@/components/Eyebrow";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch to plan your Goa taxi, tour package, or hotel stay.",
};

export default function ContactPage() {
  return (
    <section className="relative bg-indigo-deep min-h-screen pt-36 pb-24 grain overflow-hidden">
      <div className="absolute inset-0 tile-texture-light opacity-[0.08]" aria-hidden />
      <div className="container-page relative z-10 grid lg:grid-cols-2 gap-14 items-start">
        <Reveal>
          <div>
            <Eyebrow tone="gold">Get in Touch</Eyebrow>
            <h1 className="font-display text-4xl md:text-5xl text-ivory leading-tight mb-6">
              Tell us what you&apos;re planning.
            </h1>
            <p className="text-ivory/70 leading-relaxed mb-10 max-w-md">
              Whether it&apos;s a taxi for tomorrow morning or a ten-day trip across
              three states, drop us a line and we&apos;ll reply on WhatsApp or phone,
              usually within a few hours.
            </p>
            <div className="space-y-5">
              <a href="tel:+919921880362" className="flex items-center gap-3 text-ivory hover:text-gold transition-colors">
                <Phone size={18} /> +91 99218 80362
              </a>
              <a href="https://wa.me/919921880362" className="flex items-center gap-3 text-ivory hover:text-gold transition-colors">
                <MessageCircle size={18} /> WhatsApp us directly
              </a>
              <a href="mailto:hello@placeholder.travel" className="flex items-center gap-3 text-ivory hover:text-gold transition-colors">
                <Mail size={18} /> hello@placeholder.travel
              </a>
              <p className="flex items-center gap-3 text-ivory/70">
                <MapPin size={18} /> Panjim, Goa, India
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="bg-white border border-line rounded-3xl p-8 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.4)]">
            <EnquiryForm variant="contact" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

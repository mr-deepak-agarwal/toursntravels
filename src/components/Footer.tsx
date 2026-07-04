import Link from "next/link";
import { MessageCircle, MapPin, Phone, Mail } from "lucide-react";

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M15 3h-2a5 5 0 0 0-5 5v2H6v4h2v7h4v-7h3l1-4h-4V8a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-indigo-deep text-ivory">
      <div className="container-page py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2">
          <p className="font-display italic text-2xl mb-3">Placeholder Goa Travels</p>
          <p className="text-ivory/60 text-sm max-w-sm leading-relaxed">
            Taxis, self-drive rentals, curated tours across India, and handpicked
            Goa stays — one local team, no middlemen.
          </p>
          <div className="flex items-center gap-4 mt-6">
            <a href="#" aria-label="Instagram" className="text-ivory/70 hover:text-ivory transition-colors">
              <InstagramIcon />
            </a>
            <a href="#" aria-label="Facebook" className="text-ivory/70 hover:text-ivory transition-colors">
              <FacebookIcon />
            </a>
            <a href="https://wa.me/919921880362" aria-label="WhatsApp" className="text-ivory/70 hover:text-ivory transition-colors">
              <MessageCircle size={18} />
            </a>
          </div>
        </div>

        <div>
          <p className="font-stamp text-xs uppercase text-gold mb-4">Explore</p>
          <ul className="space-y-2.5 text-sm text-ivory/70">
            <li><Link href="/taxi" className="hover:text-ivory transition-colors">Taxi & Self-Drive</Link></li>
            <li><Link href="/tours" className="hover:text-ivory transition-colors">Tour Packages</Link></li>
            <li><Link href="/hotels" className="hover:text-ivory transition-colors">Stays in Goa</Link></li>
            <li><Link href="/about" className="hover:text-ivory transition-colors">About Us</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-stamp text-xs uppercase text-gold mb-4">Reach Us</p>
          <ul className="space-y-2.5 text-sm text-ivory/70">
            <li className="flex items-start gap-2"><MapPin size={15} className="mt-0.5 shrink-0" /> Panjim, Goa, India</li>
            <li className="flex items-center gap-2"><Phone size={15} className="shrink-0" /> +91 99218 80362</li>
            <li className="flex items-center gap-2"><Mail size={15} className="shrink-0" /> hello@placeholder.travel</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="container-page py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-ivory/50">
          <p>© {new Date().getFullYear()} Placeholder Goa Travels. All rights reserved.</p>
          <p>Site by codeq.tech</p>
        </div>
      </div>
    </footer>
  );
}

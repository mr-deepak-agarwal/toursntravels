import Link from "next/link";
import { Camera, Mail, MapPin, Phone } from "lucide-react";
import { brand, nav } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="bg-ink text-sand">
      <div className="tile-divider" style={{ opacity: 0.5 }} />
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <div className="font-display text-2xl font-semibold text-paper">{brand.shortName}</div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-sand/70">
              {brand.tagline}. Locally driven, honestly priced, since {brand.founded}.
            </p>
            <a
              href={brand.instagram}
              className="mt-4 inline-flex items-center gap-2 text-sm text-sand/70 hover:text-gold"
            >
              <Camera size={16} /> Follow along
            </a>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-gold">Explore</div>
            <ul className="mt-4 space-y-2.5">
              {nav.slice(1).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-sand/80 hover:text-paper">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-gold">Reach us</div>
            <ul className="mt-4 space-y-3 text-sm text-sand/80">
              <li className="flex items-start gap-2.5">
                <Phone size={15} className="mt-0.5 shrink-0" /> {brand.phone}
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={15} className="mt-0.5 shrink-0" /> {brand.email}
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="mt-0.5 shrink-0" /> {brand.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-sand/10 pt-6 text-xs text-sand/50 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
          <p>Built by codeq.tech</p>
        </div>
      </div>
    </footer>
  );
}

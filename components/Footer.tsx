import Image from "next/image";
import Link from "next/link";
import { nav, siteConfig } from "@/lib/data";
import { socialLinks } from "@/lib/social";
import { telHref } from "@/lib/seo";
import { WhatsAppCta } from "@/components/ContactLinks";
import { taxiRoutes, routeTitle } from "@/lib/taxi-routes";
import { tours } from "@/lib/tours";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-sand-100">
      <div className="container-lux grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <Image src="/logo.svg" alt="Goa Best Deals Tours & Travels" width={140} height={154} className="h-20 w-auto" />
          <p className="mt-4 max-w-xs text-sm text-sand-100/60">{siteConfig.description}</p>
          <div className="mt-6 flex gap-3">
            {socialLinks.map(({ key, href, label, Icon }) => (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noopener noreferrer me"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-sand-100/15 transition hover:border-turquoise-400 hover:text-turquoise-400"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-wider text-sand-100/50">Explore</h4>
          <ul className="mt-4 space-y-3 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sand-100/75 hover:text-turquoise-400">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-wider text-sand-100/50">Reach us</h4>
          <ul className="mt-4 space-y-3 text-sm text-sand-100/75">
            <li>{siteConfig.address}</li>
            <li><a href={telHref} className="hover:text-turquoise-400">{siteConfig.phone}</a></li>
            <li><a href={`mailto:${siteConfig.email}`} className="hover:text-turquoise-400">{siteConfig.email}</a></li>
            <li>9:00 AM – 9:00 PM, all days</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-wider text-sand-100/50">Plan your trip</h4>
          <p className="mt-4 text-sm text-sand-100/75">
            Tell us your dates and group size and we&apos;ll send a clear quote.
          </p>
          <div className="mt-4">
            <WhatsAppCta message="Hi! I'd like a quote for a trip in Goa." placement="footer" label="Get a quote on WhatsApp" />
          </div>
        </div>
      </div>

      <div className="container-lux grid gap-10 border-t border-sand-100/10 py-10 md:grid-cols-2">
        <div>
          <h4 className="font-display text-sm uppercase tracking-wider text-sand-100/50">Popular Goa taxi routes</h4>
          <ul className="mt-4 grid grid-cols-1 gap-x-6 gap-y-2 text-sm sm:grid-cols-2">
            {taxiRoutes.slice(0, 10).map((r) => (
              <li key={r.slug}>
                <Link href={`/taxi/${r.slug}`} className="text-sand-100/70 hover:text-turquoise-400">{routeTitle(r)}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm uppercase tracking-wider text-sand-100/50">Goa tours &amp; trips</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {tours.map((t) => (
              <li key={t.slug}>
                <Link href={`/sightseeing/${t.slug}`} className="text-sand-100/70 hover:text-turquoise-400">{t.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-lux flex flex-col items-center justify-between gap-3 border-t border-sand-100/10 py-6 text-xs text-sand-100/50 md:flex-row">
        <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-turquoise-400">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-turquoise-400">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}

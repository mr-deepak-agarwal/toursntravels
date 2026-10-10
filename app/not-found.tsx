import type { Metadata } from "next";
import Link from "next/link";
import { CallCta, WhatsAppCta } from "@/components/ContactLinks";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

const links = [
  { href: "/taxi", label: "Taxi & airport transfers" },
  { href: "/self-drive", label: "Self drive cars" },
  { href: "/sightseeing", label: "Sightseeing tours" },
  { href: "/holiday-packages", label: "Holiday packages" },
  { href: "/blog", label: "Goa travel guides" },
  { href: "/contact", label: "Contact us" },
];

export default function NotFound() {
  return (
    <div className="container-lux flex min-h-[70vh] flex-col items-center justify-center pt-28 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-turquoise-600">404</p>
      <h1 className="heading-hero mt-3 text-4xl text-navy-900 md:text-5xl">This shore is uncharted</h1>
      <p className="mt-4 max-w-md text-navy-900/60">
        The page you&apos;re looking for has drifted off. Try one of these, or message us and we&apos;ll point you the right way.
      </p>
      <Link href="/" className="mt-8 rounded-full bg-sunset-500 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-sunset-600">
        Back to home
      </Link>
      <ul className="mt-8 flex max-w-xl flex-wrap justify-center gap-2">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="rounded-full bg-sand-200/70 px-4 py-2 text-sm text-navy-900/75 transition hover:text-turquoise-600">{l.label}</Link>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <WhatsAppCta message="Hi! I couldn't find a page on your website." placement="not_found" />
        <CallCta placement="not_found" />
      </div>
    </div>
  );
}

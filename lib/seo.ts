import { siteConfig } from "@/lib/data";

/** Digits only, in international format (e.g. 918408021863) — what wa.me requires. */
export const whatsappDigits = siteConfig.whatsapp.replace(/\D/g, "");

/** Build a working click-to-chat URL with a properly encoded prefilled message. */
export function whatsappUrl(message = "Hi! I'd like to plan a trip to Goa.") {
  return `https://wa.me/${whatsappDigits}?text=${encodeURIComponent(message).replace(/'/g, "%27")}`;
}

/** tel: links must not contain spaces or dashes. */
export const telHref = `tel:+${whatsappDigits}`;

export function absoluteUrl(path = "") {
  const base = siteConfig.url.replace(/\/$/, "");
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export type Crumb = { name: string; href: string };

export function breadcrumbJsonLd(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.href),
    })),
  };
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** Reference to the business entity declared once in the root layout. */
export const businessRef = { "@id": absoluteUrl("/#business") };

export function localBusinessJsonLd() {
  const sameAs = Object.values(siteConfig.social).filter(Boolean);
  return {
    "@context": "https://schema.org",
    "@type": ["TravelAgency", "LocalBusiness"],
    "@id": absoluteUrl("/#business"),
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: absoluteUrl("/opengraph-image"),
    logo: absoluteUrl("/logo.svg"),
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.addressLine || undefined,
      addressLocality: siteConfig.locality,
      addressRegion: "Goa",
      postalCode: siteConfig.postalCode || undefined,
      addressCountry: "IN",
    },
    ...(siteConfig.geo
      ? { geo: { "@type": "GeoCoordinates", latitude: siteConfig.geo.lat, longitude: siteConfig.geo.lng } }
      : {}),
    ...(siteConfig.mapsUrl ? { hasMap: siteConfig.mapsUrl } : {}),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "09:00",
        closes: "21:00",
      },
    ],
    areaServed: [
      { "@type": "State", name: "Goa" },
      { "@type": "Country", name: "India" },
    ],
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    url: siteConfig.url,
    name: siteConfig.name,
    publisher: businessRef,
    inLanguage: "en-IN",
  };
}

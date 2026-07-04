# AzureGoa — Premium Goa Travel Website

A production-ready Next.js 15 (App Router) + TypeScript + Tailwind CSS starter for a
luxury Goa taxi, self-drive, hotels and holiday-packages brand.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000. The first build needs internet access to fetch the
Fraunces and Inter fonts from Google Fonts via `next/font/google`.

Production build:

```bash
npm run build
npm start
```

This was verified to build cleanly (27 static/SSG pages) in this environment.

## What's included

- **Home page** — cinematic parallax hero with floating glass booking widget,
  animated service cards, featured-destinations grid, a drag-scroll "Goa
  Experiences" filmstrip, animated trust counters, vehicle fleet, testimonials
  and an FAQ accordion.
- **Taxi** (`/taxi`) — route pricing + dedicated booking form (airport / one-way / round trip).
- **Self Drive** (`/self-drive`) — filterable fleet grid.
- **Sightseeing** (`/sightseeing`) — tour cards with pricing/duration + map placeholder.
- **Hotels** (`/hotels`) — hotel cards with amenities and ratings.
- **Holiday Packages** (`/holiday-packages` + `/holiday-packages/[slug]`) — listing
  and a full detail page with highlights, day-wise itinerary, inclusions/exclusions,
  pricing and an enquiry CTA.
- **Blog** (`/blog` + `/blog/[slug]`) — SEO-ready travel guides with real body copy.
- **About**, **Contact**, **Privacy**, **Terms**.
- **Global**: sticky glass navbar with mobile menu, floating WhatsApp button, a
  site-wide floating enquiry-form modal (accessible from any "Book"/"Enquire" button),
  luxury footer with newsletter capture.
- **SEO**: Metadata API on every route, canonical URLs, Open Graph + Twitter cards,
  `robots.ts`, `sitemap.ts` (including all dynamic package/blog routes), JSON-LD for
  `TravelAgency` (site-wide), `FAQPage` (home page) and `TouristTrip` (package detail
  pages).
- **Motion**: Framer Motion throughout (reveals, hover states, counters, modal
  transitions); `prefers-reduced-motion` is respected globally in `globals.css`.
- Lenis is wired up for smooth scroll (`components/SmoothScroll.tsx`).

## Design system

Tokens live in `tailwind.config.ts` and `lib/data.ts`:

- **Color** — deep navy (`#0B1F3A`), ocean blue, turquoise, warm sand, golden
  sunset, emerald — tuned as a tropical-luxury palette rather than a generic
  travel-agency blue.
- **Type** — Fraunces (display, incl. italic) paired with Inter (body/UI).
- **Signature element** — the horizontal drag-scroll "Goa Experiences" filmstrip
  and the glassmorphic floating booking widget anchored to the hero.

All content in `lib/data.ts` is real, written copy — no lorem ipsum. Images are
sourced from Unsplash via `next/image` remote patterns already configured in
`next.config.js`.

## Extending this further

This delivers a complete, working information architecture and a fully realised
home page + taxi/self-drive/hotels/sightseeing/packages/blog/about/contact pages.
Given the size of the original brief, a few things are intentionally left as clear
extension points rather than fully built out, so you can wire them to your real
backend/CMS instead of shipping throwaway code against fake data:

- **GSAP ScrollTrigger** — the animation system currently runs entirely on Framer
  Motion's `whileInView`/`useScroll`, which covers every effect in the brief
  (reveals, parallax, counters, horizontal drag). Add GSAP on top for anything
  more elaborate (pinned sections, SVG morphing).
- **Real map embeds** — sightseeing, contact and package pages have placeholder
  map containers ready for a Google Maps / Mapbox embed once you have an API key.
- **Enquiry form + newsletter submission** — forms currently show a success state
  optimistically; wire the `onSubmit` handlers to your CRM/email provider.
- **CMS-backed content** — `lib/data.ts` centralizes every piece of copy so it's a
  single place to swap in a real CMS (Sanity/Contentful) later without touching
  component code.
- **OG image** — `/og-image.jpg` is referenced in metadata but not generated; add
  a real 1200×630 image at `public/og-image.jpg`.

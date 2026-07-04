# Goa Travel — Taxi, Tours & Hotels Website

A Next.js 16 (App Router, TypeScript, Tailwind v4) starter for a multi-service
Goa tours & travel business: taxi/self-drive, tour packages, and hotel booking.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000. The first `npm run build` needs internet access to
fetch Fraunces, Inter and Space Mono from Google Fonts (blocked in the sandbox
this was built in, but fine on your machine / Vercel).

## What's built

- `/` — Home: hero, three-engine cards (taxi/tours/hotels), trust stamps,
  featured tours, featured hotels, testimonials, contact CTA
- `/taxi` — fleet, services, quote form
- `/tours`, `/tours/[slug]` — package listing + detail with itinerary,
  inclusions/exclusions, enquiry form
- `/hotels`, `/hotels/[slug]` — listing + detail with amenities, booking form
- `/about`, `/contact`

## Design system — "Azulejo & Laterite"

Grounded in Goa's own visual vocabulary rather than a generic travel palette:
- **Indigo** `#16324f` — Portuguese azulejo tile blue (primary)
- **Laterite** `#b8452e` — the red laterite stone Goan churches are built from (accent/CTA)
- **Gold** `#d3a34c` — feni & spice gold (highlights)
- **Ivory** `#f6f1e6` — limewashed facade white (base)
- Type: **Fraunces** (display, editorial personality) + **Inter** (body) + **Space Mono** (the "stamp" accent font)
- Signature element: the passport-stamp badge (`Stamp.tsx`) used for trust
  markers — ties back to the idea of travel documents/journeys

## Content still needed from the client

1. **Brand name** — currently "Placeholder Goa Travels" everywhere (search
   for "Placeholder" to find every spot)
2. **Real photography** — every image is a styled gradient placeholder
   (`PhotoPlaceholder.tsx`) labeled with what should go there. Swap with
   `next/image` once you have real photos.
3. **Real fleet, tour, and hotel data** — sample content lives in
   `src/lib/data.ts`
4. **Phone/WhatsApp number, email, address** — currently using the number
   from your outreach materials; confirm before launch
5. **Logo** — currently a text wordmark in Fraunces italic

## Wiring the forms

`EnquiryForm.tsx` posts to `/api/enquiry` (`src/app/api/enquiry/route.ts`),
which currently just logs to console. Before launch, wire it to one of:
- Resend/SMTP email
- WhatsApp Business API / Twilio
- Google Sheets as a lightweight CRM
- Formspree (same pattern as codeq.tech)

## SEO groundwork already in place

- Per-page `metadata` (title/description) on every route
- Semantic heading structure (single H1 per page)
- `generateStaticParams` on tour/hotel detail pages for static generation
- Clean, crawlable URLs (`/tours/[slug]`, `/hotels/[slug]`)

Still to do when you're ready: JSON-LD schema (LocalBusiness + Product/Offer
for packages), sitemap.xml, robots.txt, GA4, and real alt text once photos
are in.

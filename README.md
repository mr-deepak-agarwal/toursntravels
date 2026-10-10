# Goa Best Deals Tours & Travels — website

Next.js 15 (App Router) + TypeScript + Tailwind CSS site for a Goa taxi, self-drive, sightseeing,
hotel-booking, holiday-package and pilgrimage-tour business. Enquiries are saved to Supabase and
emailed through Resend.

## Getting started

```bash
npm install
cp .env.local.example .env.local   # then fill in the values
npm run dev
```

Open http://localhost:3000. The build needs internet access to fetch the Fraunces and Inter fonts
from Google Fonts via `next/font/google`.

```bash
npm run build
npm start
```

## Where things live

| What | Where |
| --- | --- |
| Business details (name, phone, address, hours, social links, maps) | `siteConfig` in `lib/data.ts` |
| Taxi route landing pages (`/taxi/<slug>`) | `lib/taxi-routes.ts` |
| Sightseeing tour pages (`/sightseeing/<slug>`) | `lib/tours.ts` |
| Holiday packages, pilgrimage tours, fleet, FAQs, blog list | `lib/data.ts` |
| Blog post bodies | `lib/blog-content.ts` |
| Enquiry API (saves to Supabase, emails via Resend) | `app/api/enquiry/route.ts`, schema in `supabase/schema.sql` |
| SEO helpers (JSON-LD, WhatsApp / tel links) | `lib/seo.ts`, `components/seo/` |
| GA4 events | `lib/analytics.ts` |

Adding a taxi route or a tour is one new entry in the matching file: the page, sitemap entry,
schema, breadcrumbs and footer link are generated automatically.

## Content that is intentionally empty until it is real

These lists ship empty so that nothing invented is shown to visitors. Fill them with real data and
the matching sections appear automatically.

- `hotels` — real partner properties (own photos; set `rating` only from a genuine source)
- `testimonials` — real guest reviews, with permission
- `stats` — figures the client can back up (trips, years in business, fleet size)
- `siteConfig.social` — real profile URLs; empty ones are hidden

## SEO and lead tracking

- Per-page metadata and canonicals, `sitemap.xml`, `robots.txt`, generated Open Graph image.
- JSON-LD: `TravelAgency`/`LocalBusiness` and `WebSite` (site-wide), `TaxiService`, `TouristTrip`,
  `BlogPosting`, `BreadcrumbList`, `FAQPage`.
- GA4 events: `generate_lead`, `whatsapp_click`, `call_click`, `open_enquiry_form`. Mark
  `generate_lead` as a Key Event in GA4.
- Each enquiry records the page, landing page, referrer and UTM tags in its message.
- Forms have a honeypot, rate limiting and server-side validation; emails are HTML-escaped.
- `/admin` is `noindex` and disallowed in `robots.txt`.

See `SEO-CHECKLIST.md` for what must be filled in or set up outside the code before launch.

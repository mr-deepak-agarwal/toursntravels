# Konkan Trails — Taxi, Tours & Hotels Website (Next.js)

Placeholder brand name used throughout — see "Rebranding" below to swap in the real name/logo in minutes.

## What's inside

- **Next.js (App Router) + TypeScript + Tailwind v4**
- **Framer Motion** for scroll reveals, hero animation, hover/tap micro-interactions
- Three core sections: **Taxi** (`/taxi`), **Tour Packages** (`/tours`, `/tours/[slug]`), **Hotels** (`/hotels`)
- Shared **inquiry form** (`components/InquiryForm.tsx`) used on the home, taxi, hotels, tour-detail and contact pages, posting to `/api/contact`
- **WhatsApp floating button** + WhatsApp links throughout (`lib/config.ts` → `whatsappLink()`)
- Self-hosted fonts via `@fontsource` (Fraunces for headings, Inter for body) — no runtime call to Google Fonts, so it won't break behind restrictive networks/firewalls
- Placeholder photography (`components/PlaceholderPhoto.tsx`) — styled gradient blocks that are easy to swap for real photos, so nothing looks "broken" before real images arrive

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Rebranding (once you have the real name/logo)

Everything brand-related lives in **one file**: `lib/config.ts`

```ts
export const brand = {
  name: "Konkan Trails",       // ← replace
  tagline: "...",
  phone: "+91 98765 43210",    // ← replace
  whatsappRaw: "919876543210", // ← replace (country code + number, no +/spaces)
  email: "hello@...",          // ← replace
  address: "...",
};
```

**Colors** live in `app/globals.css` under `:root` (near the top) — each has a comment explaining its role (`--azulejo` = primary accent, `--laterite` = CTA/accent, etc.). Change the hex values there and the whole site updates.

**Logo**: drop the file into `/public` and swap the text logo in `components/Navbar.tsx` (`{brand.shortName}`) for an `<Image>` tag.

## Adding real content

- **Tour packages**: `lib/data/tours.ts` — add/edit objects in the array. Each gets its own detail page automatically at `/tours/[slug]`.
- **Taxi services**: `lib/data/taxi.ts`
- **Hotels**: `lib/data/hotels.ts`
- **Photos**: once you have real images, put them in `/public/images/...` and replace `<PlaceholderPhoto gradient="..." />` with Next's `<Image src="..." fill alt="..." />` in the relevant component/page.

## Contact form → email setup

The form currently logs submissions to the server console (so nothing is lost) until you add SMTP credentials.

1. Copy `.env.example` to `.env.local`
2. Fill in SMTP credentials (Gmail App Password, or a transactional provider like Resend/Brevo/SendGrid SMTP)
3. Restart the dev server

The route is `app/api/contact/route.ts` if you want to change the email format or add a database save instead.

## Deploying

Any Next.js host works (Vercel is the simplest — connect the repo, it just works). Make sure to set the same environment variables from `.env.example` in your host's dashboard.

## SEO (for later)

The structure is already SEO-friendly: semantic headings, per-page `metadata` exports (see any `page.tsx`), fast static generation for tour package pages. When you're ready:
- Fill in real `metadata` (title/description) per page
- Add `sitemap.ts` and `robots.ts` in `app/`
- Add JSON-LD structured data (LocalBusiness / TouristTrip schema) once real content is in
- Replace placeholder photos with optimized, real images with descriptive `alt` text

## Notes on this build

- Fonts are self-hosted (`@fontsource/fraunces`, `@fontsource/inter`) rather than fetched from Google Fonts at build time — more reliable, one less external dependency.
- All copy, prices, and package details are placeholders reflecting realistic Goa taxi/tour/hotel offerings — replace with the client's actual services and pricing before launch.

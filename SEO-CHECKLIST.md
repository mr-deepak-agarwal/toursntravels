# SEO launch checklist (Goa Best Deals Tours & Travels)

Code-side SEO is done. These items need the client or a human decision.

## 1. Before deploying: replace placeholders (`lib/data.ts` -> `siteConfig`)
- [ ] `addressLine`, `postalCode`, `geo` (lat/lng), `mapsUrl`, `mapsEmbedUrl` — must match the Google Business Profile exactly
- [ ] `email` — use an address on the client's own domain
- [ ] `social.*` — real Instagram / Facebook / YouTube URLs (empty ones are hidden automatically)
- [ ] Confirm `phone` / `whatsapp` are the real business numbers

## 2. Verify the generated content
- [ ] `lib/taxi-routes.ts`: spot-check each `distanceKm` / `duration` in Google Maps
- [ ] `lib/tours.ts`, `lib/blog-content.ts`, itineraries in `lib/data.ts`: client reads once, corrects facts and adds first-hand details
- [ ] Optional: set `fromPrice` on the top routes/tours to show "From ₹X" (and Offer schema); leave empty to stay quote-only

## 3. Placeholders already removed (add real data when you have it)
- Fake hotels/ratings, testimonials, "10,000+ travellers / 500+ hotels / 100+ vehicles" stats, the invented 2014 founding story and the team members have been removed. `hotels`, `testimonials` and `stats` in `lib/data.ts` are empty; sections reappear when you fill them
- [ ] Add real Google reviews as `testimonials` once you have them (with permission)
- [ ] Add real partner hotels to `hotels` if you want property cards on `/hotels`
- [ ] Add real `stats` (only numbers the client can prove)
- [ ] Unsplash stock photos are still used for tours, packages and fleet. Replace with the client's own photos and write specific alt text
- [ ] Confirm the business claims still on the site: hours 9am to 9pm (contact page, schema), doorstep delivery in North Goa, unlimited km on select cars, self-drive deposit and document rules, package inclusions
- [ ] Terms and Privacy pages are now real, general-purpose drafts. Have a lawyer review them and add the actual cancellation/refund terms

## 4. Accounts to set up (outside the code)
- [ ] Google Search Console: verify (set `NEXT_PUBLIC_GSC_VERIFICATION`), submit `/sitemap.xml`
- [ ] Bing Webmaster Tools: import from Search Console
- [ ] GA4: mark `generate_lead`, `whatsapp_click`, `call_click` as Key Events
- [ ] Google Business Profile: claim/verify, correct categories, 20+ real photos, weekly posts, review link
- [ ] Citations: JustDial, Sulekha, IndiaMART, TripAdvisor, Facebook, Instagram with identical name/address/phone
- [ ] www / non-www: pick one and 301-redirect the other at the host (Vercel domain settings)

## 5. After deploy
- [ ] Run PageSpeed Insights (mobile) on `/`, `/taxi/mopa-airport-to-calangute-baga-taxi`, `/blog/best-beaches-in-goa`
- [ ] Rich Results Test on one taxi route, one tour, one blog post
- [ ] Send a test enquiry from each form: check Supabase row, email, GA4 DebugView `generate_lead`
- [ ] Bump `CONTENT_UPDATED` in `app/sitemap.ts` whenever content changes meaningfully

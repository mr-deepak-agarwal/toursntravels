/**
 * Programmatic landing pages for taxi searches ("Mopa airport to Calangute taxi" etc.).
 * Each entry becomes /taxi/<slug> with its own title, copy, FAQs, schema and booking form.
 *
 * IMPORTANT: distances and travel times are approximate road estimates written without live map data.
 * Before launch, spot-check each against Google Maps and adjust `distanceKm` / `duration`.
 * To show a price on a page, set `fromPrice` (INR). Leave it undefined to keep the "Get a quote" model.
 */

export type RouteCategory = "airport" | "railway" | "inter-region" | "outstation";

export type TaxiRoute = {
  slug: string;
  from: string;
  to: string;
  category: RouteCategory;
  /** Approximate one-way road distance in km — verify before launch. */
  distanceKm: string;
  /** Approximate drive time, traffic dependent — verify before launch. */
  duration: string;
  /** Optional "from ₹X" display price. Leave undefined to keep quote-only. */
  fromPrice?: number;
  intro: string;
  tips: string[];
  faqs: { q: string; a: string }[];
  related: string[];
};

export const categoryLabels: Record<RouteCategory, string> = {
  airport: "Airport transfers",
  railway: "Railway station transfers",
  "inter-region": "North ⇄ South Goa",
  outstation: "Outstation trips",
};

export const taxiRoutes: TaxiRoute[] = [
  // ---------------------------------------------------------------- Mopa airport
  {
    slug: "mopa-airport-to-calangute-baga-taxi",
    from: "Mopa Airport (Manohar International)",
    to: "Calangute & Baga",
    category: "airport",
    distanceKm: "about 35–40 km",
    duration: "about 1 hr to 1 hr 15 min",
    intro:
      "Mopa airport sits in Pernem, at the northern end of Goa, so the drive to Calangute and Baga is a straight run south through the North Goa belt. This is the transfer most first-time visitors book because Calangute–Baga is where the beach shacks, markets and nightlife are concentrated. A pre-booked cab means your driver is waiting at arrivals with your name, rather than you queuing for a ride after a long flight.",
    tips: [
      "Evening and weekend traffic on the Calangute–Baga stretch is heavy in peak season, so allow extra time if you have a tight check-in or dinner booking.",
      "Share your flight number when you book; if the flight is delayed, the pick-up time is adjusted without any action from you.",
      "Mopa is far from South Goa. If your hotel is south of Panjim, ask for the Mopa to South Goa fare instead.",
    ],
    faqs: [
      { q: "Which airport should I pick for Calangute and Baga?", a: "Mopa is the closer airport for Calangute and Baga from the north, but the airport you fly into depends on your airline and fare. Both airports are workable; the drive from Dabolim is a bit longer." },
      { q: "Can the driver wait if my flight is late?", a: "Yes. Send us your flight number and we track the arrival, so the driver reaches the terminal when you land, not when the flight was scheduled." },
    ],
    related: ["mopa-airport-to-candolim-taxi", "mopa-airport-to-anjuna-vagator-taxi", "dabolim-airport-to-calangute-baga-taxi"],
  },
  {
    slug: "mopa-airport-to-candolim-taxi",
    from: "Mopa Airport (Manohar International)",
    to: "Candolim & Sinquerim",
    category: "airport",
    distanceKm: "about 35–40 km",
    duration: "about 1 hr to 1 hr 15 min",
    intro:
      "Candolim and Sinquerim are quieter and more resort-oriented than Calangute, with Fort Aguada at the end of the stretch. From Mopa the drive heads south through North Goa and reaches Candolim a little after Calangute, so the travel time is close to the Calangute transfer. Many families and couples staying in beachside resorts choose a cab over a bus or shared ride because of luggage and late arrivals.",
    tips: [
      "Give your hotel's exact name (not just 'Candolim'). The area is long and resorts are spread across several lanes.",
      "If you land late at night, confirm with your hotel that reception is staffed for a late check-in before you travel.",
      "For a return airport drop, book it with the same enquiry so both legs are confirmed together.",
    ],
    faqs: [
      { q: "Is a cab better than a taxi counter at Mopa?", a: "A pre-booked cab gives you a confirmed vehicle and a known fare range before you fly. At peak times, counters can have queues, and vehicle size is not guaranteed." },
      { q: "Can you drop me at Fort Aguada or Sinquerim?", a: "Yes. Sinquerim and Fort Aguada are right next to Candolim. Mention the exact hotel or landmark when you enquire." },
    ],
    related: ["mopa-airport-to-calangute-baga-taxi", "mopa-airport-to-panjim-taxi", "dabolim-airport-to-calangute-baga-taxi"],
  },
  {
    slug: "mopa-airport-to-anjuna-vagator-taxi",
    from: "Mopa Airport (Manohar International)",
    to: "Anjuna, Vagator & Chapora",
    category: "airport",
    distanceKm: "about 30–35 km",
    duration: "about 50 min to 1 hr 10 min",
    intro:
      "Anjuna, Vagator and Chapora are among the nearest popular beach areas to Mopa, so this is one of the shorter airport transfers in Goa. These areas are known for cliffside cafés, flea markets and a younger, more relaxed crowd, and the lanes around them are narrow. Your driver knows the local approach roads and can drop you as close to your stay as vehicles are allowed.",
    tips: [
      "Some villas and homestays are down narrow lanes. Share a Google Maps pin so the driver can get as close as possible.",
      "Anjuna's Wednesday flea market and weekend party nights cause heavy local traffic, so allow extra time then.",
      "Vagator and Chapora hotels may be a short walk from where the road ends. Ask your host if luggage help is available.",
    ],
    faqs: [
      { q: "Is Mopa closer than Dabolim for Anjuna and Vagator?", a: "Yes. Mopa is generally the shorter drive for the Anjuna–Vagator area, while Dabolim is closer to Panjim and South Goa." },
      { q: "Can you also drop me at Arambol or Morjim?", a: "Yes. Mopa is also the closest airport for Morjim, Ashwem, Mandrem and Arambol. Send us the stay name for a quote." },
    ],
    related: ["mopa-airport-to-calangute-baga-taxi", "mopa-airport-to-candolim-taxi", "mopa-airport-to-panjim-taxi"],
  },
  {
    slug: "mopa-airport-to-panjim-taxi",
    from: "Mopa Airport (Manohar International)",
    to: "Panjim (Panaji)",
    category: "airport",
    distanceKm: "about 35 km",
    duration: "about 45 min to 1 hr",
    intro:
      "Panjim is Goa's capital and the base for the Latin Quarter of Fontainhas, riverside casinos, the Mandovi cruises and the road links to Old Goa and the south. Travellers going to Panjim hotels, or changing onward to a South Goa stay, often use this transfer. The route runs through North Goa and over the Mandovi, and it is usually quicker outside the morning and evening commute.",
    tips: [
      "Morning and evening commute hours on the Mandovi bridge approaches can add time. Mention your check-in or meeting time when you enquire.",
      "Heading on to South Goa? Ask us for a Mopa to Madgaon, Colva or Palolem fare instead of stopping in Panjim.",
      "Hotels in Fontainhas and Panjim's old streets can have restricted vehicle access. Confirm the drop-off point with the hotel.",
    ],
    faqs: [
      { q: "Is there a shared option from Mopa to Panjim?", a: "We focus on private cabs, which keeps timing flexible and luggage secure. Tell us your group size and we will suggest the right vehicle." },
      { q: "Can I book Mopa to Panjim and then a sightseeing day?", a: "Yes. We can combine an airport pick-up with a Goa sightseeing tour on one booking." },
    ],
    related: ["mopa-airport-to-candolim-taxi", "dabolim-airport-to-panjim-taxi", "mopa-airport-to-palolem-taxi"],
  },
  {
    slug: "mopa-airport-to-palolem-taxi",
    from: "Mopa Airport (Manohar International)",
    to: "Palolem & South Goa",
    category: "airport",
    distanceKm: "about 100–110 km",
    duration: "about 2 hr 30 min to 3 hr",
    intro:
      "Mopa is in the far north and Palolem is almost at the southern tip of Goa, so this is one of the longest in-state transfers. If your flight lands at Mopa and your stay is in Palolem, Agonda or Patnem, a private cab is far more practical than changing between buses. The drive crosses the Zuari bridge and takes the main coastal highway south, with the last stretch running into Canacona.",
    tips: [
      "Because it is a long drive, a comfortable vehicle matters. Sedans suit couples, and SUVs or MUVs suit families with luggage.",
      "Plan a food or rest stop for children and elders. Your driver can suggest one on the way.",
      "If you land late at night, check that your guesthouse accepts very late arrivals.",
    ],
    faqs: [
      { q: "Is it better to fly into Dabolim for Palolem?", a: "Dabolim is much closer to Palolem, so if flight options are similar, Dabolim saves roughly an hour. If your flight is at Mopa, this transfer takes care of the difference." },
      { q: "Can you drop me at Agonda or Patnem instead?", a: "Yes. Palolem, Patnem, Agonda and Galgibaga are all in the same direction. Share your exact stay." },
    ],
    related: ["dabolim-airport-to-palolem-taxi", "north-goa-to-south-goa-taxi", "madgaon-railway-station-to-palolem-taxi"],
  },

  // ---------------------------------------------------------------- Dabolim airport
  {
    slug: "dabolim-airport-to-calangute-baga-taxi",
    from: "Dabolim Airport (Goa International)",
    to: "Calangute & Baga",
    category: "airport",
    distanceKm: "about 40–45 km",
    duration: "about 1 hr to 1 hr 30 min",
    intro:
      "Dabolim airport is at Vasco da Gama in the middle of Goa's coast, so the drive to Calangute and Baga crosses the Zuari bridge and goes through Panjim before turning towards the beaches. It is a common transfer for domestic and charter travellers. A pre-booked cab saves you the arrivals queue and gives you a vehicle sized for your group and luggage.",
    tips: [
      "Leave extra time in peak season, since the Panjim to Calangute stretch can be congested in the evening.",
      "If you are visiting Goa with a large group, ask for an SUV, MUV or tempo traveller rather than two small cars.",
      "Mention your hotel's exact name or Google Maps pin when you enquire.",
    ],
    faqs: [
      { q: "How long does it take from Dabolim to Calangute?", a: "Usually one to one and a half hours depending on traffic and time of day. Late-night arrivals are generally quicker." },
      { q: "Is Mopa or Dabolim better for Calangute?", a: "Both work. Mopa is closer, but your flight decides the airport. We run transfers from both." },
    ],
    related: ["mopa-airport-to-calangute-baga-taxi", "dabolim-airport-to-panjim-taxi", "dabolim-airport-to-palolem-taxi"],
  },
  {
    slug: "dabolim-airport-to-panjim-taxi",
    from: "Dabolim Airport (Goa International)",
    to: "Panjim (Panaji)",
    category: "airport",
    distanceKm: "about 30 km",
    duration: "about 45 min to 1 hr",
    intro:
      "Panjim is the closest major town to Dabolim, reached by crossing the Zuari bridge and following the highway towards the capital. Hotels in Panjim, Fontainhas and Miramar are a straightforward drive from the airport. It is also a convenient first stop if you plan to explore Old Goa before heading to a beach stay.",
    tips: [
      "Bridge approaches get busy at peak commute times. Mention your timeline if you have a connecting plan.",
      "Fontainhas and the old quarter have narrow roads, so ask the hotel where the car can stop.",
      "Planning Old Goa on the same day? Ask us about combining the transfer with a heritage tour.",
    ],
    faqs: [
      { q: "Do you cover Miramar and Dona Paula?", a: "Yes. Miramar, Dona Paula and the Panjim city area are all covered. Share your hotel name for the exact fare." },
      { q: "Can you pick me up from Panjim and drop me back at Dabolim?", a: "Yes. We do both directions, and a return booking can be arranged in the same enquiry." },
    ],
    related: ["dabolim-airport-to-calangute-baga-taxi", "mopa-airport-to-panjim-taxi", "dabolim-airport-to-colva-benaulim-taxi"],
  },
  {
    slug: "dabolim-airport-to-palolem-taxi",
    from: "Dabolim Airport (Goa International)",
    to: "Palolem, Patnem & Agonda",
    category: "airport",
    distanceKm: "about 55–65 km",
    duration: "about 1 hr 30 min to 1 hr 50 min",
    intro:
      "Palolem, Patnem and Agonda are the quiet, long-beach stretch of South Goa and are best reached from Dabolim. The drive runs south through Madgaon and the Canacona belt, with a mix of highway and village road at the end. Because options for public transport are limited after dark, most visitors arriving by evening flights prefer a booked cab.",
    tips: [
      "Palolem has multiple pickup points. Confirm the exact hut cluster or guesthouse name so the driver can reach it.",
      "If you arrive late, check that your stay accepts night check-in, since some small properties close early.",
      "Agonda and Patnem roads are narrow, so a hatchback or sedan is often easier than a large coach.",
    ],
    faqs: [
      { q: "How far is Palolem from Dabolim airport?", a: "About 60 km, usually a bit under two hours by road depending on traffic and the exact stay." },
      { q: "Can I stop at Madgaon for supplies?", a: "Yes. A short stop at Madgaon is easy to arrange. Tell us when you book." },
    ],
    related: ["madgaon-railway-station-to-palolem-taxi", "mopa-airport-to-palolem-taxi", "dabolim-airport-to-colva-benaulim-taxi"],
  },
  {
    slug: "dabolim-airport-to-colva-benaulim-taxi",
    from: "Dabolim Airport (Goa International)",
    to: "Colva, Benaulim & Varca",
    category: "airport",
    distanceKm: "about 25–30 km",
    duration: "about 40 min to 1 hr",
    intro:
      "Colva, Benaulim and Varca are the closest beach areas to Dabolim and a popular choice for families and longer resort stays. The transfer is short and avoids the busiest North Goa roads, so it is one of the easier airport runs. These beaches are quieter than Calangute, with a more local feel and good resorts along the coast.",
    tips: [
      "Check-in times at resorts vary. If you land in the morning, ask the hotel about early check-in or luggage storage.",
      "Cavelossim, Mobor and Betalbatim are in the same direction. Share your stay's exact name.",
      "Heading to North Goa the next day? Ask us about a North Goa transfer or a local day cab.",
    ],
    faqs: [
      { q: "Is the drive to Colva or Benaulim short?", a: "Yes. It is usually 40 minutes to an hour, which makes it one of the shorter airport transfers." },
      { q: "Do you also cover Cavelossim, Mobor and Varca?", a: "Yes. All of the Salcete coast resorts are covered." },
    ],
    related: ["dabolim-airport-to-palolem-taxi", "dabolim-airport-to-panjim-taxi", "madgaon-railway-station-to-palolem-taxi"],
  },

  // ---------------------------------------------------------------- Railway
  {
    slug: "madgaon-railway-station-to-calangute-taxi",
    from: "Madgaon (Margao) Railway Station",
    to: "Calangute & Baga",
    category: "railway",
    distanceKm: "about 38–42 km",
    duration: "about 1 hr to 1 hr 20 min",
    intro:
      "Madgaon (Margao) is Goa's main railway station and the point where most long-distance and Konkan Railway visitors arrive. If your stay is in Calangute or Baga, this means a drive across Goa from the south to the north. A booked cab removes the guesswork of finding transport at the station, especially if you arrive early in the morning or late at night.",
    tips: [
      "Trains can run late. Share your train number and PNR so the pick-up time can be adjusted.",
      "Thivim station is much closer to North Goa. If your booking allows, check whether it is a better arrival point for you.",
      "Large groups and heavy luggage fit better in an SUV, MUV or tempo traveller.",
    ],
    faqs: [
      { q: "Is Madgaon the best station for Calangute?", a: "Madgaon is the main station, but Thivim is closer to North Goa. If train timings are similar, Thivim can save travel time." },
      { q: "What if my train is delayed by hours?", a: "Share your train number. We follow the running status and adjust pick-up, so you are not charged for waiting that comes from a delayed train." },
    ],
    related: ["thivim-railway-station-to-calangute-taxi", "madgaon-railway-station-to-palolem-taxi", "dabolim-airport-to-calangute-baga-taxi"],
  },
  {
    slug: "madgaon-railway-station-to-palolem-taxi",
    from: "Madgaon (Margao) Railway Station",
    to: "Palolem & Patnem",
    category: "railway",
    distanceKm: "about 35 km",
    duration: "about 1 hr",
    intro:
      "From Madgaon, Palolem and Patnem are an easy drive south along the coast. Canacona station is actually the closest station to Palolem, but many long-distance trains stop at Madgaon, and a cab is often the simplest way to reach the beach from there. The drive passes through the quieter southern talukas, so it is more relaxed than the northern routes.",
    tips: [
      "Check whether your train also stops at Canacona. It is only a few km from Palolem and can shorten the last leg.",
      "Auto-rickshaws and buses thin out after dark in South Goa, which is where a booked cab helps most.",
      "Ask your guesthouse whether they can store luggage if you arrive before check-in time.",
    ],
    faqs: [
      { q: "How long is Madgaon to Palolem?", a: "About an hour, depending on traffic and exactly where in Palolem or Patnem you are staying." },
      { q: "Can you pick me up from Canacona station instead?", a: "Yes. Canacona pick-ups are possible. Mention it in your enquiry." },
    ],
    related: ["dabolim-airport-to-palolem-taxi", "madgaon-railway-station-to-calangute-taxi", "north-goa-to-south-goa-taxi"],
  },
  {
    slug: "thivim-railway-station-to-calangute-taxi",
    from: "Thivim Railway Station",
    to: "Calangute & Baga",
    category: "railway",
    distanceKm: "about 20–25 km",
    duration: "about 45 min to 1 hr",
    intro:
      "Thivim is the Konkan Railway station for North Goa, so it is the natural arrival point if you are staying in Calangute, Baga, Candolim or Anjuna. The station is in Bardez, a little way from the coast, and has limited transport options at night. A pre-booked cab from Thivim gets you straight to your hotel without negotiating at the station exit.",
    tips: [
      "Thivim is a small station, so share your coach and train details to make it easy for the driver to find you.",
      "Calangute, Baga and Candolim are all in the same direction. Confirm your hotel name for the exact drop.",
      "If you are arriving at night, make sure your hotel is expecting you.",
    ],
    faqs: [
      { q: "Why choose Thivim over Madgaon?", a: "Thivim is closer to North Goa, which usually means a shorter and cheaper last leg. Check which of the two stations your train stops at." },
      { q: "Do you also go to Anjuna and Vagator from Thivim?", a: "Yes. Anjuna, Vagator, Arambol and Morjim are all covered from Thivim." },
    ],
    related: ["madgaon-railway-station-to-calangute-taxi", "mopa-airport-to-anjuna-vagator-taxi", "mopa-airport-to-calangute-baga-taxi"],
  },

  // ---------------------------------------------------------------- Inter-region + outstation
  {
    slug: "north-goa-to-south-goa-taxi",
    from: "North Goa (Calangute, Baga, Candolim, Anjuna)",
    to: "South Goa (Colva, Palolem, Agonda)",
    category: "inter-region",
    distanceKm: "about 60–80 km",
    duration: "about 1 hr 30 min to 2 hr 15 min",
    intro:
      "Many travellers split a trip between North Goa and South Goa, and the move between them is long enough to need a proper plan. A private cab lets you leave when you want, stop for a meal or a beach on the way, and carry full luggage without relying on buses. We handle one-way transfers and round trips between any two stays.",
    tips: [
      "Plan the shift for late morning if you can. It avoids rush-hour traffic around Panjim and the Zuari bridge.",
      "Combine the transfer with a sightseeing stop at Old Goa or a lunch in Panjim if you want to make the drive part of the day.",
      "For a day trip from one half of Goa to the other, ask for a full-day cab instead of a transfer.",
    ],
    faqs: [
      { q: "How long does it take to go from North to South Goa?", a: "Roughly two hours depending on where you start and end and the time of day. We will give you a more precise estimate once we have the exact stays." },
      { q: "Can I stop on the way?", a: "Yes. Short stops are easy to include. Longer stops can be billed as waiting time, which we confirm in the quote." },
    ],
    related: ["mopa-airport-to-palolem-taxi", "madgaon-railway-station-to-palolem-taxi", "dabolim-airport-to-palolem-taxi"],
  },
  {
    slug: "goa-to-gokarna-taxi",
    from: "Goa",
    to: "Gokarna (Karnataka)",
    category: "outstation",
    distanceKm: "about 140–160 km from central Goa; about 80–90 km from Palolem",
    duration: "about 3 hr to 4 hr 30 min",
    intro:
      "Gokarna is the temple town and beach destination just across the Karnataka border, a favourite add-on for travellers finishing a Goa trip. The road follows the coast through the Canacona and Karwar belt and crosses the border, so it works well as a one-way drop or a round trip. We can plan the drive from North or South Goa and adjust the timing around your stay.",
    tips: [
      "Carry government photo ID. Interstate travel can involve checks, and some hotels ask for it.",
      "Gokarna's beaches (Om, Kudle, Half Moon) need a short walk or boat from the road, so travel light.",
      "Check the day's weather in the monsoon months, when road and sea conditions change.",
    ],
    faqs: [
      { q: "Is the taxi fare to Gokarna one-way or return?", a: "We can do either. A one-way drop is fine; if you want the cab to wait or return the same day, we quote that separately." },
      { q: "Does the quote include interstate taxes and tolls?", a: "We list tolls and permits separately in the quote so there are no surprises. Confirm when you enquire." },
    ],
    related: ["goa-to-hampi-taxi", "mopa-airport-to-palolem-taxi", "north-goa-to-south-goa-taxi"],
  },
  {
    slug: "goa-to-hampi-taxi",
    from: "Goa",
    to: "Hampi (Karnataka)",
    category: "outstation",
    distanceKm: "about 330–370 km",
    duration: "about 7 to 8 hours",
    intro:
      "Hampi is a UNESCO World Heritage site of ruined temples and boulder landscapes in Karnataka, and a classic extension for Goa travellers. The drive inland is long and passes through the Western Ghats and plateau, so a comfortable vehicle and a driver who knows the route matter. We can arrange one-way drops, round trips, or multi-day plans with a stay in Hampi.",
    tips: [
      "Start early. The journey is around seven to eight hours, and Hampi's monuments are best seen in morning and late afternoon light.",
      "Carry water, sun protection and comfortable footwear. Hampi involves a lot of walking on rocky ground.",
      "Plan at least one night in Hampi or nearby Hospet if you want to see the main sites.",
    ],
    faqs: [
      { q: "Can I do Hampi as a day trip from Goa?", a: "It is possible but not recommended, because the drive alone is long. An overnight or two-night stay makes the trip far more enjoyable." },
      { q: "Do you provide a driver for multiple days?", a: "Yes. We can arrange a driver and vehicle for the whole trip, with the driver's stay and food included in the quote as per our terms." },
    ],
    related: ["goa-to-gokarna-taxi", "goa-to-pune-taxi", "goa-to-mumbai-taxi"],
  },
  {
    slug: "goa-to-pune-taxi",
    from: "Goa",
    to: "Pune (Maharashtra)",
    category: "outstation",
    distanceKm: "about 450–470 km",
    duration: "about 9 to 10 hours",
    intro:
      "Goa to Pune is one of the busiest outstation corridors in the region, via Kolhapur and Satara on the highway. Many people choose a private cab for the comfort of a long drive, the flexibility to leave when they want, and the ability to carry family or luggage. We can arrange one-way drops, round trips and drop-and-return plans.",
    tips: [
      "Start early or travel overnight if you prefer lighter traffic. Ask us which works better for your group.",
      "The ghat sections slow down in heavy rain, so allow extra time during the monsoon.",
      "Plan a rest and meal stop; your driver can suggest options along the highway.",
    ],
    faqs: [
      { q: "How long does the drive from Goa to Pune take?", a: "Typically nine to ten hours depending on traffic, weather and stops." },
      { q: "Can I book a return trip with the same cab?", a: "Yes. We can quote a round trip, or a one-way drop where the cab returns empty." },
    ],
    related: ["goa-to-mumbai-taxi", "goa-to-hampi-taxi", "goa-to-gokarna-taxi"],
  },
  {
    slug: "goa-to-mumbai-taxi",
    from: "Goa",
    to: "Mumbai (Maharashtra)",
    category: "outstation",
    distanceKm: "about 590–620 km",
    duration: "about 11 to 13 hours",
    intro:
      "Driving from Goa to Mumbai is a long coastal run along the Konkan highway, and a private cab is a practical choice for families and groups who want to leave on their own schedule. We plan the trip with realistic driving hours, rest stops and an experienced driver, and we can arrange one-way, round-trip or multi-day plans.",
    tips: [
      "Because of the distance, many travellers leave in the early morning or evening and share the driving time with a rest stop.",
      "Road conditions on parts of the Konkan highway change with the season. Allow extra time in the monsoon.",
      "Ask for a larger vehicle if you have more than three adults or a lot of luggage.",
    ],
    faqs: [
      { q: "Is the Goa to Mumbai cab fare per km or fixed?", a: "We quote a fixed price after you share dates, pick-up and drop points, and vehicle type. Tolls and permits are listed separately." },
      { q: "Can the driver stop for meals?", a: "Yes. Regular rest and meal stops are normal on a trip this long." },
    ],
    related: ["goa-to-pune-taxi", "goa-to-gokarna-taxi", "goa-to-hampi-taxi"],
  },
];

export function getRoute(slug: string) {
  return taxiRoutes.find((r) => r.slug === slug);
}

export function routeTitle(r: TaxiRoute) {
  return `${r.from.replace(/ \(.*\)$/, "")} to ${r.to} Taxi`;
}

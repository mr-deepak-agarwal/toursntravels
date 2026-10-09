/**
 * Sightseeing tour landing pages (/sightseeing/<slug>). Durations match the tour cards that were
 * already on the site. Stops and tips are general local knowledge — have the client confirm the
 * exact stops, timings, inclusions and any entry fees before launch. Set `fromPrice` to show a price.
 */
export type Tour = {
  slug: string;
  name: string;
  duration: string;
  card: string;
  image: string;
  h1: string;
  metaDescription: string;
  intro: string;
  stops: { name: string; detail: string }[];
  tips: string[];
  faqs: { q: string; a: string }[];
  fromPrice?: number;
};

export const tours: Tour[] = [
  {
    slug: "north-goa-sightseeing-tour",
    name: "North Goa Sightseeing",
    duration: "Full day, 8 hrs",
    card: "Fort Aguada, Calangute, Baga, Anjuna flea market and Vagator's cliffside views.",
    image: "https://images.unsplash.com/photo-1596395463075-9cfa2ffdaf25?q=80&w=1400&auto=format&fit=crop",
    h1: "North Goa Sightseeing Tour by Private Car",
    metaDescription: "Full-day North Goa sightseeing in a private AC car: Fort Aguada, Calangute, Baga, Anjuna and Vagator. Flexible stops, local driver. Get a quote.",
    intro:
      "North Goa is the part of the coast most people picture first: long lively beaches, a Portuguese-era fort, cliffside cafés and the markets. This full-day tour strings the best of it together in one comfortable loop, in a private car, so you can linger where you like and skip what you don't.",
    stops: [
      { name: "Fort Aguada and Sinquerim", detail: "A 17th-century Portuguese fort above the sea, with its lighthouse and wide views over the Arabian Sea." },
      { name: "Candolim and Calangute", detail: "Two of Goa's best-known beaches. Time for a walk, a swim or a coffee at a beach shack." },
      { name: "Baga", detail: "The busiest stretch, known for water sports, shacks and the evening scene." },
      { name: "Anjuna", detail: "Cliffside beach and, on market days, the flea market (check the day and season before you go)." },
      { name: "Vagator and Chapora Fort", detail: "Red-cliff beaches and the hilltop fort with long coastal views, best near sunset." },
    ],
    tips: [
      "Start by 9 am to beat the heat and crowds. Sunset at Vagator is a good finale.",
      "Wear comfortable footwear. Forts involve uphill walking on uneven stone.",
      "Anjuna's flea market runs on specific days and mainly in season. Tell us if it is a must-see so we plan the day around it.",
    ],
    faqs: [
      { q: "How long is the North Goa tour?", a: "About eight hours, with flexible stops. We can shorten it or add stops on request." },
      { q: "Is a guide included?", a: "Your driver knows the route and the main sights. If you want a dedicated guide, mention it in your enquiry." },
      { q: "Can we customise the stops?", a: "Yes. Tell us what you want to see and skip, and we will build the day around it." },
    ],
  },
  {
    slug: "south-goa-sightseeing-tour",
    name: "South Goa Sightseeing",
    duration: "Full day, 8 hrs",
    card: "Colva, Benaulim, Palolem beach and the quieter Cavelossim coastline.",
    image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=1400&auto=format&fit=crop",
    h1: "South Goa Sightseeing Tour by Private Car",
    metaDescription: "Full-day South Goa sightseeing: Colva, Benaulim, Cavelossim and Palolem in a private AC car. Quiet beaches, flexible stops. Enquire for a quote.",
    intro:
      "South Goa is slower and quieter than the north, with long clean beaches, palm-lined roads and small villages. This full-day tour covers the main beaches along the Salcete and Canacona coast at an unhurried pace, which makes it a good choice for families, couples and anyone who wants a break from the crowds.",
    stops: [
      { name: "Colva", detail: "A long, local-feeling beach with food stalls and a lively weekend crowd." },
      { name: "Benaulim", detail: "A quieter stretch of sand with a village atmosphere and easy swimming days." },
      { name: "Cavelossim and Mobor", detail: "Wide, calm coastline known for resort stays and sunset walks." },
      { name: "Palolem", detail: "A crescent-shaped beach with calm water and cafés. Often the highlight of the tour." },
      { name: "Optional: Cabo de Rama Fort", detail: "A clifftop fort near Canacona with sea views. Can be added if time allows." },
    ],
    tips: [
      "Carry a hat and sunscreen. South Goa beaches have less shade than you might expect.",
      "It is a long drive end to end. Start early and plan lunch in Palolem or Benaulim.",
      "If you stay in North Goa, tell us when you book so we can plan the pick-up time properly.",
    ],
    faqs: [
      { q: "Can I do the South Goa tour from a North Goa hotel?", a: "Yes. It adds driving time, so we usually suggest a full day and an early start." },
      { q: "Do you include lunch?", a: "Meals are normally paid directly by you at places of your choice. We can suggest good, simple options on the way." },
    ],
  },
  {
    slug: "old-goa-heritage-tour",
    name: "Old Goa Heritage Tour",
    duration: "Half day, 4 hrs",
    card: "Basilica of Bom Jesus, Se Cathedral and the Portuguese-era lanes of Fontainhas.",
    image: "https://images.unsplash.com/photo-1590373572466-1f2e02b8bb99?q=80&w=1400&auto=format&fit=crop",
    h1: "Old Goa Heritage Tour: Churches & Fontainhas",
    metaDescription: "Half-day Old Goa heritage tour by private car: Basilica of Bom Jesus, Se Cathedral and Fontainhas in Panjim. Easy, comfortable and flexible. Enquire now.",
    intro:
      "Old Goa was the capital of Portuguese India, and its churches and convents are now a UNESCO World Heritage site. This half-day tour visits the main churches and then moves on to Panjim's Fontainhas quarter, with its coloured Portuguese-style houses. It is a calm, culture-focused counterpoint to the beach days.",
    stops: [
      { name: "Basilica of Bom Jesus", detail: "One of the best-known churches in Goa, which holds the relics of St Francis Xavier." },
      { name: "Se Cathedral", detail: "A large cathedral next door, notable for its size and the Golden Bell." },
      { name: "Other Old Goa churches", detail: "Nearby convents and churches, depending on your interests and time." },
      { name: "Fontainhas, Panjim", detail: "The Latin Quarter with narrow lanes, painted houses and small cafés." },
    ],
    tips: [
      "Dress modestly (shoulders and knees covered) when visiting churches.",
      "Go in the morning for softer light and fewer visitors. Churches can close at midday or have service times.",
      "Pair it with a Mandovi river cruise in the evening for a full day in and around Panjim.",
    ],
    faqs: [
      { q: "How long should I allow for Old Goa?", a: "About four hours covers the main churches and Fontainhas at an easy pace." },
      { q: "Are there entry fees for the churches?", a: "Most of the main churches are free to enter, but some museums and sites charge a small fee. We tell you in advance." },
    ],
  },
  {
    slug: "mandovi-boat-cruise-goa",
    name: "Mandovi Boat Cruise & Dinner Cruise",
    duration: "Evening, 2-3 hrs",
    card: "A relaxed Mandovi river cruise with live music, with a dinner cruise option.",
    image: "https://images.unsplash.com/photo-1706010382755-6ce076a4e978?q=80&w=1400&auto=format&fit=crop",
    h1: "Mandovi River Boat Cruise & Dinner Cruise in Goa",
    metaDescription: "Book a Mandovi river boat cruise or dinner cruise in Goa: sunset views, live music and optional dinner, with cab pick-up and drop. Enquire for a quote.",
    intro:
      "A Mandovi river cruise from Panjim is an easy, relaxed way to spend an evening, with the lights of the capital and the riverside on both sides. Cruises usually combine live music or a cultural performance with the sunset, and a dinner option is available for a longer evening. We can arrange the tickets together with a cab to and from your hotel.",
    stops: [
      { name: "Panjim jetty boarding", detail: "Cruises board at the Panjim riverfront. We recommend reaching 30 minutes before departure." },
      { name: "Sunset on the Mandovi", detail: "A river stretch with views of Panjim and the riverside forts and churches." },
      { name: "Live music and performance", detail: "Cruises typically include on-board music or a cultural show." },
      { name: "Optional dinner cruise", detail: "A longer evening with a meal on board. Menu and timing vary by operator." },
    ],
    tips: [
      "Book ahead in peak season and on weekends, since evening cruises fill up.",
      "Carry a light jacket. It can be breezy on the upper deck after sunset.",
      "Ask us to combine the cruise with an Old Goa heritage tour for a full day in and around Panjim.",
    ],
    faqs: [
      { q: "Is the cruise suitable for children and seniors?", a: "Yes. Boats are generally family friendly. Tell us if anyone needs help boarding and we will plan accordingly." },
      { q: "Is dinner included?", a: "Only on the dinner cruise option. Tell us which you prefer when you enquire." },
    ],
  },
  {
    slug: "dudhsagar-waterfall-trip",
    name: "Dudhsagar Waterfall Trip",
    duration: "Full day, 8-9 hrs",
    card: "A jeep trek to Goa's tallest waterfall through Bhagwan Mahaveer Wildlife Sanctuary, with a stop for a swim at the base.",
    image: "https://images.unsplash.com/photo-1613844838171-e649c7ed3e0d?q=80&w=1400&auto=format&fit=crop",
    h1: "Dudhsagar Waterfall Trip from Goa (Jeep Safari)",
    metaDescription: "Dudhsagar Waterfall trip from Goa with cab pick-up and jeep safari through Bhagwan Mahaveer Wildlife Sanctuary. Full-day adventure. Enquire for a quote.",
    intro:
      "Dudhsagar is among India's tallest waterfalls and one of the most popular adventure days out of Goa. The falls sit on the Goa–Karnataka border, inside the Bhagwan Mahaveer Wildlife Sanctuary, and the last stretch is a jeep ride through forest and shallow stream crossings. We handle the cab to the jeep point and coordinate the rest so the day runs smoothly.",
    stops: [
      { name: "Pick-up from your hotel", detail: "An early start is best, since jeep queues grow through the morning." },
      { name: "Jeep base (Kulem / Collem area)", detail: "Jeep tickets, permits and the safari are arranged here. Jeeps are shared or private, depending on the option." },
      { name: "Forest jeep ride", detail: "A bumpy ride through the sanctuary with stream crossings." },
      { name: "Dudhsagar Falls", detail: "Time at the base of the falls. Swimming depends on current water levels and rules." },
      { name: "Return to your hotel", detail: "Back by evening, usually with a lunch stop on the way." },
    ],
    tips: [
      "Access to the falls is restricted or closed in parts of the monsoon, for safety. Always check current status before travelling.",
      "Wear shoes with a grip and clothes you don't mind getting wet. Carry a towel and a small waterproof bag.",
      "Rules and fees at the sanctuary can change. We confirm the latest details when you book.",
    ],
    faqs: [
      { q: "When is the best time to visit Dudhsagar?", a: "The falls are at their fullest after the monsoon, but access is often restricted during heavy rain. October to February is a popular window. Check current conditions before you go." },
      { q: "Are the jeep fares and entry tickets included?", a: "They are usually paid separately at the base. We tell you exactly what is included and what is not when we quote." },
      { q: "Is it suitable for kids and older people?", a: "The jeep ride is bumpy, so it may not suit people with back problems or very young children. Tell us who is travelling and we will advise." },
    ],
  },
];

export function getTour(slug: string) {
  return tours.find((t) => t.slug === slug);
}

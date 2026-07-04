export type TourPackage = {
  slug: string;
  title: string;
  region: "Goa" | "Pan-India";
  location: string;
  duration: string;
  priceFrom: number;
  summary: string;
  highlights: string[];
  image: string; // placeholder gradient key
};

export const tourPackages: TourPackage[] = [
  {
    slug: "north-goa-explorer",
    title: "North Goa Explorer",
    region: "Goa",
    location: "Calangute · Anjuna · Fort Aguada",
    duration: "1 Day",
    priceFrom: 2000,
    summary:
      "A full day looping the liveliest beaches and heritage forts of North Goa, timed for golden-hour photos at Fort Aguada.",
    highlights: ["Calangute & Baga beaches", "Fort Aguada lighthouse", "Anjuna flea market", "Chapora Fort viewpoint"],
    image: "from-azulejo to-ink-soft",
  },
  {
    slug: "south-goa-heritage",
    title: "South Goa Heritage Trail",
    region: "Goa",
    location: "Old Goa · Colva · Margao",
    duration: "1 Day",
    priceFrom: 2500,
    summary:
      "Quieter beaches, UNESCO churches, and spice-scented backroads — the Goa most visitors miss.",
    highlights: ["Basilica of Bom Jesus", "Se Cathedral", "Colva & Palolem beaches", "Spice plantation stop"],
    image: "from-laterite to-ink-soft",
  },
  {
    slug: "dudhsagar-falls",
    title: "Dudhsagar Falls & Spice Farm",
    region: "Goa",
    location: "Mollem National Park",
    duration: "1 Day",
    priceFrom: 3200,
    summary:
      "Jeep safari into the jungle to India's tallest waterfall, with a spice-plantation lunch on the way back.",
    highlights: ["4x4 jungle safari", "Dudhsagar Falls swim stop", "Spice plantation thali lunch", "Wildlife sanctuary drive"],
    image: "from-palm to-ink-soft",
  },
  {
    slug: "goa-getaway-3n4d",
    title: "Goa Complete Getaway",
    region: "Goa",
    location: "North + South Goa",
    duration: "3N / 4D",
    priceFrom: 12999,
    summary:
      "Our signature package — airport pickup, curated stay, both North and South circuits, and a sunset cruise, all in one price.",
    highlights: ["Airport pickup & drop", "3-night stay included", "North + South sightseeing", "Mandovi sunset cruise"],
    image: "from-gold to-laterite",
  },
  {
    slug: "rajasthan-royals",
    title: "Rajasthan Royals Circuit",
    region: "Pan-India",
    location: "Jaipur · Udaipur · Jodhpur",
    duration: "6N / 7D",
    priceFrom: 24999,
    summary: "Forts, lakes, and palace hotels across Rajasthan's golden triangle of royal cities.",
    highlights: ["Amber Fort, Jaipur", "Lake Pichola, Udaipur", "Mehrangarh Fort, Jodhpur", "Private car + driver throughout"],
    image: "from-laterite to-gold",
  },
  {
    slug: "kerala-backwaters",
    title: "Kerala Backwaters Escape",
    region: "Pan-India",
    location: "Alleppey · Munnar · Kochi",
    duration: "5N / 6D",
    priceFrom: 21999,
    summary: "Houseboat nights on the backwaters and misty tea-hill mornings in Munnar.",
    highlights: ["Overnight houseboat stay", "Munnar tea gardens", "Fort Kochi heritage walk", "Ayurvedic spa session"],
    image: "from-palm to-azulejo",
  },
  {
    slug: "himachal-hills",
    title: "Himachal Hill Trail",
    region: "Pan-India",
    location: "Manali · Shimla",
    duration: "5N / 6D",
    priceFrom: 19999,
    summary: "Snow-line drives, pine-covered valleys, and colonial hill-station charm.",
    highlights: ["Solang Valley", "Rohtang Pass (seasonal)", "Shimla Mall Road", "Mountain-view stays"],
    image: "from-azulejo to-palm",
  },
];

export const goaPackages = tourPackages.filter((p) => p.region === "Goa");
export const panIndiaPackages = tourPackages.filter((p) => p.region === "Pan-India");

export type TourPackage = {
  slug: string;
  title: string;
  region: "Goa" | "Rajasthan" | "Kerala" | "Himachal" | "Karnataka";
  days: number;
  nights: number;
  price: number;
  gradient: string;
  tag: string;
  summary: string;
  highlights: string[];
  itinerary: { day: number; title: string; detail: string }[];
  inclusions: string[];
  exclusions: string[];
};

export const tourPackages: TourPackage[] = [
  {
    slug: "goa-heritage-coastline",
    title: "Goa Heritage & Coastline",
    region: "Goa",
    days: 4,
    nights: 3,
    price: 10500,
    gradient: "from-[#16324f] to-[#3d6b93]",
    tag: "Sightseeing",
    summary:
      "Old Goa's churches, Fontainhas' Latin Quarter, spice plantations and the North Goa coast in one unhurried loop.",
    highlights: [
      "Basilica of Bom Jesus & Se Cathedral",
      "Fontainhas Latin Quarter walk",
      "Spice plantation lunch",
      "Sunset at Chapora Fort",
    ],
    itinerary: [
      { day: 1, title: "Old Goa & Panjim", detail: "Arrival, Basilica of Bom Jesus, Se Cathedral, evening at Fontainhas." },
      { day: 2, title: "Spice Country", detail: "Spice plantation tour and traditional Goan thali lunch, Mayem Lake." },
      { day: 3, title: "North Goa Forts", detail: "Fort Aguada, Chapora Fort, Vagator viewpoint at sunset." },
      { day: 4, title: "Departure", detail: "Leisure morning, transfer to airport/railway station." },
    ],
    inclusions: ["AC vehicle throughout", "3-star accommodation", "Daily breakfast", "Driver allowance & tolls"],
    exclusions: ["Airfare/train fare", "Lunch & dinner (except Day 2)", "Monument entry tickets"],
  },
  {
    slug: "hampi-heritage-escape",
    title: "Hampi Heritage Escape",
    region: "Karnataka",
    days: 3,
    nights: 2,
    price: 8200,
    gradient: "from-[#8f3220] to-[#d3a34c]",
    tag: "Tour Package",
    summary:
      "Boulder-strewn ruins of the Vijayanagara empire, sunrise at Matanga Hill, coracle ride on the Tungabhadra.",
    highlights: ["Virupaksha Temple", "Vittala Temple's stone chariot", "Matanga Hill sunrise", "Coracle ride"],
    itinerary: [
      { day: 1, title: "Arrival & Sacred Centre", detail: "Virupaksha Temple, Hampi Bazaar, evening at the riverside." },
      { day: 2, title: "Royal Centre", detail: "Vittala Temple, Elephant Stables, Lotus Mahal, coracle ride." },
      { day: 3, title: "Sunrise & Departure", detail: "Matanga Hill sunrise trek, breakfast, transfer out." },
    ],
    inclusions: ["AC vehicle from Goa", "2-night stay", "Daily breakfast", "Local guide for Day 2"],
    exclusions: ["Lunch & dinner", "Monument entry fees", "Personal expenses"],
  },
  {
    slug: "kerala-backwaters",
    title: "Kerala Backwaters & Hills",
    region: "Kerala",
    days: 6,
    nights: 5,
    price: 21800,
    gradient: "from-[#16324f] to-[#8f3220]",
    tag: "Tour Package",
    summary: "Munnar's tea hills, a night on a Alleppey houseboat, and Fort Kochi's colonial streets.",
    highlights: ["Munnar tea gardens", "Overnight houseboat, Alleppey", "Fort Kochi walking tour", "Spice market visit"],
    itinerary: [
      { day: 1, title: "Kochi Arrival", detail: "Fort Kochi, Chinese fishing nets, spice market." },
      { day: 2, title: "To Munnar", detail: "Scenic drive through Western Ghats, tea garden visit." },
      { day: 3, title: "Munnar", detail: "Eravikulam National Park, tea museum, viewpoints." },
      { day: 4, title: "To Alleppey", detail: "Drive to Alleppey, board houseboat by noon." },
      { day: 5, title: "Backwaters", detail: "Cruise through the backwaters, disembark, transfer to Kochi." },
      { day: 6, title: "Departure", detail: "Leisure morning, transfer to airport." },
    ],
    inclusions: ["AC vehicle throughout", "5-night stay incl. 1 houseboat night", "Breakfast & dinner", "Houseboat all meals"],
    exclusions: ["Airfare", "Lunch (except houseboat)", "Entry fees & activities"],
  },
  {
    slug: "rajasthan-royal-trail",
    title: "Rajasthan Royal Trail",
    region: "Rajasthan",
    days: 7,
    nights: 6,
    price: 28500,
    gradient: "from-[#b8452e] to-[#d3a34c]",
    tag: "Tour Package",
    summary: "Jaipur's palaces, Jodhpur's blue city, and Udaipur's lakes — Rajasthan's classic royal circuit.",
    highlights: ["Amber Fort, Jaipur", "Mehrangarh Fort, Jodhpur", "Lake Pichola, Udaipur", "City Palace complex"],
    itinerary: [
      { day: 1, title: "Jaipur Arrival", detail: "City Palace, Jantar Mantar, Hawa Mahal photo stop." },
      { day: 2, title: "Amber Fort", detail: "Amber Fort, Jal Mahal, local bazaars." },
      { day: 3, title: "To Jodhpur", detail: "Drive to Jodhpur via scenic route." },
      { day: 4, title: "Jodhpur", detail: "Mehrangarh Fort, Jaswant Thada, Blue City walk." },
      { day: 5, title: "To Udaipur", detail: "Drive to Udaipur, evening at Lake Pichola." },
      { day: 6, title: "Udaipur", detail: "City Palace, boat ride, Saheliyon Ki Bari." },
      { day: 7, title: "Departure", detail: "Leisure morning, transfer to airport." },
    ],
    inclusions: ["AC vehicle throughout", "6-night stay", "Daily breakfast", "Driver allowance & tolls"],
    exclusions: ["Airfare", "Lunch & dinner", "Monument entry fees"],
  },
];

export type Hotel = {
  slug: string;
  name: string;
  area: string;
  gradient: string;
  pricePerNight: number;
  rating: number;
  tag: string;
  summary: string;
  amenities: string[];
};

export const hotels: Hotel[] = [
  {
    slug: "casa-vagator-boutique",
    name: "Casa Vagator Boutique Stay",
    area: "Vagator, North Goa",
    gradient: "from-[#16324f] to-[#3d6b93]",
    pricePerNight: 4200,
    rating: 4.7,
    tag: "Boutique",
    summary: "Portuguese-tiled courtyard rooms, five minutes' walk from Vagator's cliffside viewpoints.",
    amenities: ["Pool", "Free breakfast", "AC rooms", "Airport pickup"],
  },
  {
    slug: "palm-grove-candolim",
    name: "Palm Grove Candolim",
    area: "Candolim, North Goa",
    gradient: "from-[#8f3220] to-[#d3a34c]",
    pricePerNight: 3400,
    rating: 4.5,
    tag: "Beachside",
    summary: "Garden-facing rooms 400m from Candolim beach, with an on-site Goan-Portuguese kitchen.",
    amenities: ["Pool", "Restaurant", "Free WiFi", "Bike rental"],
  },
  {
    slug: "riverside-panjim-suites",
    name: "Riverside Panjim Suites",
    area: "Panjim (Panaji)",
    gradient: "from-[#16324f] to-[#8f3220]",
    pricePerNight: 3900,
    rating: 4.6,
    tag: "City Stay",
    summary: "Mandovi river views, walking distance to Fontainhas' Latin Quarter and Panjim's café strip.",
    amenities: ["River view", "Free breakfast", "AC rooms", "Workspace"],
  },
  {
    slug: "colva-sands-resort",
    name: "Colva Sands Resort",
    area: "Colva, South Goa",
    gradient: "from-[#b8452e] to-[#d3a34c]",
    pricePerNight: 5200,
    rating: 4.4,
    tag: "Resort",
    summary: "Quiet South Goa resort two minutes from Colva beach, built around a central courtyard pool.",
    amenities: ["Pool", "Spa", "Free breakfast", "Family rooms"],
  },
];

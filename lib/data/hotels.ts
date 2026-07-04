export type Hotel = {
  slug: string;
  name: string;
  area: string;
  category: "Budget" | "Mid-range" | "Premium";
  priceFrom: number;
  amenities: string[];
  image: string;
};

export const hotels: Hotel[] = [
  {
    slug: "candolim-cove-resort",
    name: "Candolim Cove Resort",
    area: "Candolim, North Goa",
    category: "Premium",
    priceFrom: 6500,
    amenities: ["Pool", "Beach access", "Breakfast included", "Free parking"],
    image: "from-azulejo to-ink-soft",
  },
  {
    slug: "colva-breeze-villa",
    name: "Colva Breeze Villa",
    area: "Colva, South Goa",
    category: "Mid-range",
    priceFrom: 3800,
    amenities: ["Garden view", "AC rooms", "Free WiFi", "Airport pickup on request"],
    image: "from-palm to-ink-soft",
  },
  {
    slug: "panjim-heritage-stay",
    name: "Panjim Heritage Stay",
    area: "Fontainhas, Panjim",
    category: "Mid-range",
    priceFrom: 4200,
    amenities: ["Portuguese-era building", "Rooftop cafe", "Walkable old town", "Free WiFi"],
    image: "from-laterite to-ink-soft",
  },
  {
    slug: "baga-budget-inn",
    name: "Baga Budget Inn",
    area: "Baga, North Goa",
    category: "Budget",
    priceFrom: 1500,
    amenities: ["5-min beach walk", "AC rooms", "24hr front desk"],
    image: "from-gold to-ink-soft",
  },
];

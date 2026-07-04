export type TaxiService = {
  slug: string;
  title: string;
  description: string;
  priceNote: string;
  points: string[];
};

export const taxiServices: TaxiService[] = [
  {
    slug: "airport-transfer",
    title: "Airport Transfer",
    description: "Pickup and drop at Dabolim (GOI) or Manohar International (GOX), tracked to your flight time.",
    priceNote: "From ₹800 one-way",
    points: ["Free 45-min wait on arrival", "Flight tracking, no extra charge for delays", "Name-board greeting"],
  },
  {
    slug: "local-sightseeing",
    title: "Local Sightseeing",
    description: "Full-day or half-day cabs with driver for North or South Goa circuits.",
    priceNote: "From ₹2,000 / 8hrs–80km",
    points: ["Sedan, SUV & tempo traveller options", "Flexible stop-and-go itinerary", "AC, clean, GPS-tracked vehicles"],
  },
  {
    slug: "outstation",
    title: "Outstation Trips",
    description: "One-way or round trips beyond Goa — Gokarna, Hampi, Mumbai and more.",
    priceNote: "Per-km, transparent billing",
    points: ["No hidden toll/permit surprises", "Overnight driver halts available", "Round-trip discounts"],
  },
  {
    slug: "self-drive",
    title: "Self Drive Rentals",
    description: "Hatchbacks, sedans and SUVs, well-maintained, by the hour or by the day.",
    priceNote: "From ₹1,200 / day",
    points: ["Valid license + ID required", "Refundable security deposit", "Doorstep delivery in Goa"],
  },
];

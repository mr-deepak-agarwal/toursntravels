export const nav = [
  { label: "Taxi", href: "/taxi" },
  { label: "Self Drive", href: "/self-drive" },
  { label: "Sightseeing", href: "/sightseeing" },
  { label: "Hotels", href: "/hotels" },
  { label: "Holiday Packages", href: "/holiday-packages" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const services = [
  {
    id: "taxi",
    title: "Goa Taxi Services",
    tag: "Point to point",
    desc: "Airport transfers, railway pickups, and hotel-to-hotel rides across North and South Goa with fixed, transparent fares.",
    points: ["Airport & Railway Transfer", "North & South Goa", "Intercity & Outstation"],
    href: "/taxi",
    image: "https://images.unsplash.com/photo-1580654712603-eb43273aff33?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "self-drive",
    title: "Self Drive Cars",
    tag: "Your journey, your pace",
    desc: "Hand-picked hatchbacks, SUVs and convertibles for hourly, daily or weekly hire, with unlimited kilometres on select plans.",
    points: ["Hourly / Daily / Weekly", "Unlimited KMs available", "Doorstep delivery"],
    href: "/self-drive",
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "sightseeing",
    title: "Goa Sightseeing",
    tag: "Curated days out",
    desc: "Guided tours through forts, churches, spice farms and sunset points, paced for explorers rather than checklists.",
    points: ["North & South Goa Tour", "Old Goa Heritage Tour", "Custom Private Tours"],
    href: "/sightseeing",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "hotels",
    title: "Hotel Bookings",
    tag: "Stay curated",
    desc: "From boutique beach villas to five-star resorts, every stay is vetted for location, comfort and honest reviews.",
    points: ["Beach Resorts & Villas", "Honeymoon Retreats", "Family-friendly Stays"],
    href: "/hotels",
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "packages",
    title: "Holiday Packages",
    tag: "Beyond Goa",
    desc: "Multi-day escapes to the Himalayas, Kerala's backwaters and the Andaman islands, planned end to end.",
    points: ["Manali · Kashmir · Ladakh", "Kerala & Rajasthan", "Andaman Islands"],
    href: "/holiday-packages",
    image: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?q=80&w=1600&auto=format&fit=crop",
  },
];

export const destinations = [
  {
    name: "Baga & Calangute",
    region: "North Goa",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1400&auto=format&fit=crop",
  },
  {
    name: "Palolem Beach",
    region: "South Goa",
    image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=1400&auto=format&fit=crop",
  },
  {
    name: "Old Goa Churches",
    region: "Heritage",
    image: "https://images.unsplash.com/photo-1590373572466-1f2e02b8bb99?q=80&w=1400&auto=format&fit=crop",
  },
  {
    name: "Chapora Fort",
    region: "North Goa",
    image: "https://images.unsplash.com/photo-1596395463075-9cfa2ffdaf25?q=80&w=1400&auto=format&fit=crop",
  },
  {
    name: "Divar Island",
    region: "River Goa",
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=1400&auto=format&fit=crop",
  },
  {
    name: "Anjuna Flea Market",
    region: "North Goa",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1400&auto=format&fit=crop",
  },
];

export const experiences = [
  { title: "Beaches", image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=1200&auto=format&fit=crop" },
  { title: "Nightlife", image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=1200&auto=format&fit=crop" },
  { title: "Water Sports", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200&auto=format&fit=crop" },
  { title: "River Cruise", image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=1200&auto=format&fit=crop" },
  { title: "Casinos", image: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?q=80&w=1200&auto=format&fit=crop" },
  { title: "Dolphin Trips", image: "https://images.unsplash.com/photo-1607153333879-c174d265f1d2?q=80&w=1200&auto=format&fit=crop" },
  { title: "Scuba Diving", image: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?q=80&w=1200&auto=format&fit=crop" },
  { title: "Island Trips", image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1200&auto=format&fit=crop" },
];

export const stats = [
  { value: 10000, suffix: "+", label: "Happy Travellers" },
  { value: 500, suffix: "+", label: "Partner Hotels" },
  { value: 100, suffix: "+", label: "Vehicles in Fleet" },
  { value: 24, suffix: "x7", label: "Support On Call" },
];

export const fleet = [
  {
    name: "Sedan",
    example: "Honda Amaze / Dzire",
    passengers: 4,
    luggage: 2,
    ac: true,
    price: "₹9/km",
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "SUV",
    example: "Ertiga / Marazzo",
    passengers: 6,
    luggage: 4,
    ac: true,
    price: "₹13/km",
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Innova Crysta",
    example: "Toyota Innova Crysta",
    passengers: 7,
    luggage: 4,
    ac: true,
    price: "₹16/km",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Tempo Traveller",
    example: "12 / 17 seater",
    passengers: 17,
    luggage: 10,
    ac: true,
    price: "₹22/km",
    image: "https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Luxury",
    example: "Mercedes / Fortuner",
    passengers: 5,
    luggage: 3,
    ac: true,
    price: "On request",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Self Drive Hatchback",
    example: "Baleno / i20",
    passengers: 4,
    luggage: 2,
    ac: true,
    price: "₹1,499/day",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1200&auto=format&fit=crop",
  },
];

export const packages = [
  {
    slug: "manali-himalayan-escape",
    name: "Manali Himalayan Escape",
    region: "Himachal Pradesh",
    nights: 5,
    price: "₹18,999",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1400&auto=format&fit=crop",
    highlights: ["Solang Valley", "Old Manali Cafés", "Rohtang Pass (seasonal)"],
  },
  {
    slug: "kashmir-paradise",
    name: "Kashmir Paradise Tour",
    region: "Jammu & Kashmir",
    nights: 6,
    price: "₹24,499",
    image: "https://images.unsplash.com/photo-1566837497312-7be4ebb33a12?q=80&w=1400&auto=format&fit=crop",
    highlights: ["Dal Lake Houseboat", "Gulmarg Gondola", "Mughal Gardens"],
  },
  {
    slug: "kerala-backwaters",
    name: "Kerala Backwaters",
    region: "Kerala",
    nights: 5,
    price: "₹21,999",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1400&auto=format&fit=crop",
    highlights: ["Alleppey Houseboat", "Munnar Tea Gardens", "Fort Kochi"],
  },
  {
    slug: "rajasthan-royale",
    name: "Rajasthan Royale",
    region: "Rajasthan",
    nights: 7,
    price: "₹28,999",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1400&auto=format&fit=crop",
    highlights: ["Amber Fort, Jaipur", "Udaipur Lake Palace", "Jaisalmer Desert Camp"],
  },
  {
    slug: "leh-ladakh-adventure",
    name: "Leh-Ladakh Adventure",
    region: "Ladakh",
    nights: 6,
    price: "₹32,999",
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=1400&auto=format&fit=crop",
    highlights: ["Pangong Lake", "Khardung La Pass", "Nubra Valley"],
  },
  {
    slug: "andaman-island-getaway",
    name: "Andaman Island Getaway",
    region: "Andaman & Nicobar",
    nights: 5,
    price: "₹27,499",
    image: "https://images.unsplash.com/photo-1589979481223-deb893043163?q=80&w=1400&auto=format&fit=crop",
    highlights: ["Radhanagar Beach", "Cellular Jail", "Scuba at Havelock"],
  },
  {
    slug: "goa-signature",
    name: "Goa Signature Holiday",
    region: "Goa",
    nights: 4,
    price: "₹14,999",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1400&auto=format&fit=crop",
    highlights: ["North & South Goa", "Sunset Cruise", "Beach Resort Stay"],
  },
];

export const hotels = [
  {
    slug: "azure-cove-resort",
    name: "Azure Cove Beach Resort",
    location: "Candolim, North Goa",
    price: "₹6,500/night",
    rating: 4.8,
    amenities: ["Pool", "Beach Access", "Breakfast", "WiFi"],
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1400&auto=format&fit=crop",
  },
  {
    slug: "palm-grove-villas",
    name: "Palm Grove Private Villas",
    location: "Assagao, North Goa",
    price: "₹9,200/night",
    rating: 4.9,
    amenities: ["Private Pool", "Garden", "Breakfast", "WiFi"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400&auto=format&fit=crop",
  },
  {
    slug: "palolem-sands",
    name: "Palolem Sands Homestay",
    location: "Palolem, South Goa",
    price: "₹3,200/night",
    rating: 4.6,
    amenities: ["Beach Access", "WiFi", "Breakfast"],
    image: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?q=80&w=1400&auto=format&fit=crop",
  },
  {
    slug: "the-lagoon-luxe",
    name: "The Lagoon Luxe",
    location: "Sinquerim, North Goa",
    price: "₹12,800/night",
    rating: 4.9,
    amenities: ["Infinity Pool", "Spa", "Beach Access", "WiFi"],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1400&auto=format&fit=crop",
  },
];

export const testimonials = [
  {
    name: "Ananya R.",
    origin: "Mumbai",
    quote: "The airport pickup was waiting before we even cleared baggage. Every ride afterward was just as smooth.",
    rating: 5,
  },
  {
    name: "Daniel K.",
    origin: "London",
    quote: "Booked a self-drive Baleno for a week and explored North Goa at our own pace, no hidden charges at all.",
    rating: 5,
  },
  {
    name: "Priya & Karan",
    origin: "Delhi",
    quote: "Our honeymoon villa in Assagao had the sunset view straight out of the photos. Planning was effortless.",
    rating: 5,
  },
  {
    name: "Fatima S.",
    origin: "Dubai",
    quote: "The North Goa heritage tour guide knew stories you can't find online. Best half-day we spent in Goa.",
    rating: 5,
  },
];

export const faqs = [
  {
    q: "How far in advance should I book a taxi in Goa?",
    a: "For airport and railway transfers we recommend booking at least 24 hours ahead, especially during peak season (November to February). Same-day bookings are usually possible but subject to availability.",
  },
  {
    q: "Do self-drive cars require a security deposit?",
    a: "Yes, a refundable security deposit is collected at pickup and returned in full after the vehicle is inspected, provided there is no damage or unpaid toll/fine.",
  },
  {
    q: "Can holiday packages be customised?",
    a: "Every package on this site is a starting template. Tell us your dates, budget and interests and our travel designers will tailor the itinerary, hotels and pace to match.",
  },
  {
    q: "What documents do I need for self-drive hire?",
    a: "A valid driving licence (held for at least one year), a government photo ID, and a local contact number. International visitors can drive with a valid international driving permit.",
  },
  {
    q: "Are your hotel rates inclusive of taxes?",
    a: "All listed rates are the base nightly price; applicable GST and any resort fees are shown clearly at checkout before you confirm your booking.",
  },
];

export const blogPosts = [
  {
    slug: "best-beaches-in-goa",
    title: "12 Best Beaches in Goa, From Buzzing to Basically Empty",
    excerpt: "A honest, non-generic tour of Goa's coastline, organised by the kind of day you're actually looking for.",
    image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=1400&auto=format&fit=crop",
    date: "2026-05-12",
    readTime: "8 min read",
  },
  {
    slug: "goa-taxi-guide",
    title: "The Real Goa Taxi Guide: Fares, Zones & What Locals Actually Pay",
    excerpt: "Airport counters, prepaid stands, app-based cabs — here's how the pricing actually works in 2026.",
    image: "https://images.unsplash.com/photo-1580654712603-eb43273aff33?q=80&w=1400&auto=format&fit=crop",
    date: "2026-04-28",
    readTime: "6 min read",
  },
  {
    slug: "north-vs-south-goa",
    title: "North Goa vs South Goa: Which Half Actually Fits Your Trip",
    excerpt: "Nightlife versus silence, backpackers versus villas — a clear-eyed breakdown before you book.",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1400&auto=format&fit=crop",
    date: "2026-03-15",
    readTime: "7 min read",
  },
  {
    slug: "best-hotels-goa-2026",
    title: "Where to Stay in Goa in 2026: Our Vetted Hotel Shortlist",
    excerpt: "From boutique villas to full-service resorts, the properties that consistently earn repeat bookings.",
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1400&auto=format&fit=crop",
    date: "2026-02-20",
    readTime: "9 min read",
  },
];

export const siteConfig = {
  name: "Azure Goa",
  tagline: "Goa, Unhurried.",
  description:
    "Premium taxi services, self-drive cars, curated hotels and handcrafted holiday packages across Goa and beyond.",
  url: "https://www.azuregoa.com",
  phone: "+91 98765 43210",
  whatsapp: "919876543210",
  email: "hello@azuregoa.com",
  address: "Shop 4, Beach Road, Candolim, North Goa 403515, India",
};

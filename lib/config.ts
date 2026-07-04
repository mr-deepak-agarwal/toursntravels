// ─────────────────────────────────────────────────────────────────
// BRAND CONFIG — placeholder values. Update this file once you have
// the real business name, logo, phone, and WhatsApp number. Every
// page pulls from here, so this is the only file that needs editing.
// ─────────────────────────────────────────────────────────────────

export const brand = {
  name: "Konkan Trails",
  tagline: "Goa, your way — taxis, tours & stays",
  shortName: "Konkan Trails",
  phone: "+91 98765 43210",
  phoneRaw: "919876543210",
  whatsappRaw: "919876543210",
  email: "hello@konkantrails.example",
  address: "Panjim, Goa, India",
  instagram: "https://instagram.com",
  founded: "2015",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Taxi", href: "/taxi" },
  { label: "Tour Packages", href: "/tours" },
  { label: "Hotels", href: "/hotels" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function whatsappLink(message: string) {
  return `https://wa.me/${brand.whatsappRaw}?text=${encodeURIComponent(message)}`;
}

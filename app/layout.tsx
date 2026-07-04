import type { Metadata } from "next";
// Self-hosted via @fontsource (no runtime dependency on Google's font CDN —
// faster, more reliable, and avoids a network call some hosts/firewalls block).
import "@fontsource/fraunces/400.css";
import "@fontsource/fraunces/500.css";
import "@fontsource/fraunces/600.css";
import "@fontsource/fraunces/700.css";
import "@fontsource/fraunces/400-italic.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { brand } from "@/lib/config";

export const metadata: Metadata = {
  title: `${brand.name} — Taxis, Tours & Stays in Goa`,
  description:
    "Airport transfers, self-drive rentals, curated Goa & pan-India tour packages, and handpicked stays — all in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}

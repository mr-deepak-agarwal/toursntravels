import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StickyContactBar from "@/components/StickyContactBar";
import AttributionCapture from "@/components/AttributionCapture";
import JsonLd from "@/components/seo/JsonLd";
import { localBusinessJsonLd, websiteJsonLd } from "@/lib/seo";
import SmoothScroll from "@/components/SmoothScroll";
import EnquiryFormProvider from "@/components/EnquiryFormContext";
import { siteConfig } from "@/lib/data";
import { GoogleAnalytics } from "@next/third-parties/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Goa Taxi, Self Drive Cars & Holiday Packages | Goa Best Deals",
    template: "%s | Goa Best Deals",
  },
  description: siteConfig.description,
  keywords: [
    "Goa taxi service",
    "Goa self drive cars",
    "Goa holiday packages",
    "Goa hotel booking",
    "Goa sightseeing tour",
    "North Goa South Goa taxi",
  ],
  openGraph: {
    title: `${siteConfig.name} — Goa, Unhurried`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Goa, Unhurried`,
    description: siteConfig.description,
  },
  // NOTE: no site-wide canonical here. Each page sets its own, otherwise pages without one would
  // all declare the homepage as canonical. Social share images come from app/opengraph-image.tsx.
  verification: process.env.NEXT_PUBLIC_GSC_VERIFICATION ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION } : undefined,
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <body className={`${fraunces.variable} ${inter.variable} pb-[68px] font-body antialiased md:pb-0`}>
        <JsonLd data={[localBusinessJsonLd(), websiteJsonLd()]} />
        <AttributionCapture />
        <SmoothScroll>
          <EnquiryFormProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <WhatsAppButton />
            <StickyContactBar />
          </EnquiryFormProvider>
        </SmoothScroll>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || "G-NRK3KFLL36"} />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FeaturedDestinations from "@/components/FeaturedDestinations";
import Experiences from "@/components/Experiences";
import WhyChooseUs from "@/components/WhyChooseUs";
import Fleet from "@/components/Fleet";
import Testimonials from "@/components/Testimonials";
import FAQAccordion from "@/components/FAQAccordion";
import FAQSchema from "@/components/FAQSchema";

export const metadata: Metadata = {
  title: "Premium Goa Taxi, Self Drive, Hotels & Holiday Packages",
  description:
    "Book premium taxi transfers, self drive cars, curated hotels, sightseeing tours and holiday packages across Goa. Transparent pricing, verified drivers, 24x7 support.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <FeaturedDestinations />
      <Experiences />
      <WhyChooseUs />
      <Fleet />
      <Testimonials />
      <FAQAccordion />
      <FAQSchema />
    </>
  );
}

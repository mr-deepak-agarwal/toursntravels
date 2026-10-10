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
  title: "Goa Taxi, Self Drive Cars & Holiday Packages",
  description:
    "Book taxi transfers, self drive cars, hotel stays, sightseeing tours, holiday packages and pilgrimage tours across Goa and beyond. Clear quotes on request, by phone, WhatsApp or the enquiry form.",
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

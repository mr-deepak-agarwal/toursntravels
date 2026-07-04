import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="container-lux max-w-2xl pt-32 pb-24">
      <h1 className="heading-hero text-4xl text-navy-900">Privacy Policy</h1>
      <p className="mt-6 text-navy-900/70">
        This is a placeholder privacy policy page. Replace this section with your actual data
        collection, cookie usage, and third-party processor disclosures before launch.
      </p>
    </div>
  );
}

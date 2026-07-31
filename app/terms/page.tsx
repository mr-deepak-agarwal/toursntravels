import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="container-lux max-w-2xl pt-32 pb-24">
      <h1 className="heading-hero text-4xl text-navy-900">Terms of Service</h1>
      <p className="mt-6 text-navy-900/70">
        This is a placeholder terms page. Replace this section with your actual booking, cancellation
        and liability terms before launch.
      </p>
    </div>
  );
}

import type { Metadata } from "next";
import SelfDriveSeoContent from "@/components/SelfDriveSeoContent";

export const metadata: Metadata = {
  title: "Self Drive Cars in Goa — Hourly, Daily & Weekly Rentals",
  description:
    "Rent self drive cars in Goa with doorstep delivery. Hatchbacks, SUVs and luxury vehicles available hourly, daily or weekly with unlimited km options.",
  alternates: { canonical: "/self-drive" },
};

// The page itself is an interactive client component, so the crawlable explainer text, FAQ and
// schema live here in the (server) layout and render below it.
export default function SelfDriveLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <SelfDriveSeoContent />
    </>
  );
}

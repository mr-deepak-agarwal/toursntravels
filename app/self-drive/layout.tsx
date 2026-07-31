import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Self Drive Cars in Goa — Hourly, Daily & Weekly Rentals",
  description:
    "Rent self drive cars in Goa with doorstep delivery. Hatchbacks, SUVs and luxury vehicles available hourly, daily or weekly with unlimited km options.",
  alternates: { canonical: "/self-drive" },
};

export default function SelfDriveLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

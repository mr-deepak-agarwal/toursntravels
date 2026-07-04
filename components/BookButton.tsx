"use client";

import { useEnquiry } from "./EnquiryFormContext";

export default function BookButton({ label = "Book Now" }: { label?: string }) {
  const { open } = useEnquiry();
  return (
    <button
      onClick={open}
      className="rounded-full bg-navy-900 px-5 py-2.5 text-sm font-semibold text-sand-100 transition hover:bg-navy-800"
    >
      {label}
    </button>
  );
}

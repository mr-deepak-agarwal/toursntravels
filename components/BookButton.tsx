"use client";

import { useEnquiry } from "./EnquiryFormContext";

export default function BookButton({
  label = "Book Now",
  service,
  destination,
  message,
  placement,
}: {
  label?: string;
  /** Prefills the "Service required" dropdown (must match an option in EnquiryFormContext). */
  service?: "Taxi Booking" | "Self Drive Car" | "Sightseeing Tour" | "Hotel Booking" | "Holiday Package";
  destination?: string;
  message?: string;
  placement?: string;
}) {
  const { open } = useEnquiry();
  return (
    <button
      onClick={() => open({ service, destination, message, placement: placement ?? label })}
      className="rounded-full bg-navy-900 px-5 py-2.5 text-sm font-semibold text-sand-100 transition hover:bg-navy-800"
    >
      {label}
    </button>
  );
}

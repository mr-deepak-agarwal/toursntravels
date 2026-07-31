"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

export type Enquiry = {
  id: string;
  created_at: string;
  source: "contact" | "taxi_booking" | "enquiry";
  full_name: string | null;
  phone: string;
  email: string | null;
  message: string | null;
  destination: string | null;
  travel_date: string | null;
  service: string | null;
  passengers: number | null;
  trip_type: string | null;
  pickup_location: string | null;
  drop_location: string | null;
  pickup_date: string | null;
  pickup_time: string | null;
  vehicle_type: string | null;
  status: "new" | "contacted" | "closed";
};

const sourceLabels: Record<Enquiry["source"], string> = {
  contact: "Contact form",
  taxi_booking: "Taxi booking",
  enquiry: "Plan your Goa story",
};

const statusStyles: Record<Enquiry["status"], string> = {
  new: "bg-sunset-500/10 text-sunset-600",
  contacted: "bg-turquoise-500/10 text-turquoise-600",
  closed: "bg-navy-900/10 text-navy-900/60",
};

function summarize(row: Enquiry): string {
  if (row.source === "taxi_booking") {
    return [row.pickup_location, "→", row.drop_location].filter(Boolean).join(" ");
  }
  if (row.source === "enquiry") {
    return [row.service, row.destination].filter(Boolean).join(" · ");
  }
  return row.message ?? "";
}

export default function EnquiriesTable({ initialRows }: { initialRows: Enquiry[] }) {
  const [rows, setRows] = useState(initialRows);
  const [filter, setFilter] = useState<"all" | Enquiry["source"]>("all");

  async function updateStatus(id: string, status: Enquiry["status"]) {
    setRows((prev) => prev.map((r) => (r.id === id ? { ...r, status } : r)));
    const supabase = createClient();
    await supabase.from("enquiries").update({ status }).eq("id", id);
  }

  const visible = filter === "all" ? rows : rows.filter((r) => r.source === filter);

  return (
    <div>
      <div className="mb-5 flex flex-wrap gap-2">
        {(["all", "contact", "taxi_booking", "enquiry"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
              filter === f ? "bg-navy-900 text-sand-100" : "bg-navy-900/5 text-navy-900/60"
            }`}
          >
            {f === "all" ? "All" : sourceLabels[f]}
          </button>
        ))}
      </div>

      <div className="overflow-x-auto rounded-3xl border border-navy-900/10 bg-white">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead>
            <tr className="border-b border-navy-900/10 text-xs uppercase tracking-wide text-navy-900/50">
              <th className="px-4 py-3">Received</th>
              <th className="px-4 py-3">Source</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Phone</th>
              <th className="px-4 py-3">Details</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {visible.map((row) => (
              <tr key={row.id} className="border-b border-navy-900/5 align-top">
                <td className="whitespace-nowrap px-4 py-3 text-navy-900/70">
                  {new Date(row.created_at).toLocaleString("en-IN", {
                    day: "2-digit",
                    month: "short",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </td>
                <td className="whitespace-nowrap px-4 py-3 text-navy-900/70">{sourceLabels[row.source]}</td>
                <td className="px-4 py-3 font-medium text-navy-900">{row.full_name || "—"}</td>
                <td className="whitespace-nowrap px-4 py-3">
                  <a href={`tel:${row.phone}`} className="text-turquoise-600">{row.phone}</a>
                </td>
                <td className="max-w-xs px-4 py-3 text-navy-900/70">{summarize(row)}</td>
                <td className="px-4 py-3">
                  <select
                    value={row.status}
                    onChange={(e) => updateStatus(row.id, e.target.value as Enquiry["status"])}
                    className={`rounded-full border-0 px-3 py-1 text-xs font-semibold ${statusStyles[row.status]}`}
                  >
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="closed">Closed</option>
                  </select>
                </td>
              </tr>
            ))}
            {visible.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-10 text-center text-navy-900/50">
                  No enquiries yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

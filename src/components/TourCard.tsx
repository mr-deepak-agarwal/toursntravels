import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import PhotoPlaceholder from "./PhotoPlaceholder";
import { TourPackage } from "@/lib/data";

export default function TourCard({ tour }: { tour: TourPackage }) {
  return (
    <Link
      href={`/tours/${tour.slug}`}
      className="group block rounded-2xl overflow-hidden bg-white border border-line hover:border-laterite/40 hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_16px_40px_-12px_rgba(32,28,23,0.18)]"
    >
      <div className="relative h-52">
        <PhotoPlaceholder gradient={tour.gradient} label={tour.title} className="w-full h-full" />
        <span className="absolute top-4 left-4 bg-ivory/95 text-ink text-xs font-stamp uppercase px-3 py-1.5 rounded-full">
          {tour.tag}
        </span>
      </div>
      <div className="p-6">
        <p className="text-xs font-stamp uppercase text-laterite mb-2">{tour.region}</p>
        <h3 className="font-display text-xl text-ink mb-2 group-hover:text-laterite transition-colors">
          {tour.title}
        </h3>
        <p className="text-sm text-ink-soft leading-relaxed mb-4 line-clamp-2">
          {tour.summary}
        </p>
        <div className="flex items-center justify-between pt-4 border-t border-line">
          <span className="flex items-center gap-1.5 text-xs text-ink-soft">
            <Clock size={14} /> {tour.days}D / {tour.nights}N
          </span>
          <span className="flex items-center gap-1 text-sm font-semibold text-ink">
            ₹{tour.price.toLocaleString("en-IN")}
            <ArrowUpRight size={15} className="text-laterite group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </span>
        </div>
      </div>
    </Link>
  );
}

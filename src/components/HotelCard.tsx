import Link from "next/link";
import { Star, MapPin, ArrowUpRight } from "lucide-react";
import PhotoPlaceholder from "./PhotoPlaceholder";
import { Hotel } from "@/lib/data";

export default function HotelCard({ hotel }: { hotel: Hotel }) {
  return (
    <Link
      href={`/hotels/${hotel.slug}`}
      className="group block rounded-2xl overflow-hidden bg-white border border-line hover:border-indigo/40 hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_16px_40px_-12px_rgba(32,28,23,0.18)]"
    >
      <div className="relative h-52">
        <PhotoPlaceholder gradient={hotel.gradient} label={hotel.name} className="w-full h-full" />
        <span className="absolute top-4 left-4 bg-ivory/95 text-ink text-xs font-stamp uppercase px-3 py-1.5 rounded-full">
          {hotel.tag}
        </span>
        <span className="absolute top-4 right-4 bg-indigo-deep/90 text-ivory text-xs font-semibold px-2.5 py-1.5 rounded-full flex items-center gap-1">
          <Star size={12} className="fill-gold text-gold" /> {hotel.rating}
        </span>
      </div>
      <div className="p-6">
        <p className="flex items-center gap-1.5 text-xs font-stamp uppercase text-indigo mb-2">
          <MapPin size={12} /> {hotel.area}
        </p>
        <h3 className="font-display text-xl text-ink mb-2 group-hover:text-indigo transition-colors">
          {hotel.name}
        </h3>
        <p className="text-sm text-ink-soft leading-relaxed mb-4 line-clamp-2">
          {hotel.summary}
        </p>
        <div className="flex items-center justify-between pt-4 border-t border-line">
          <span className="text-xs text-ink-soft">per night</span>
          <span className="flex items-center gap-1 text-sm font-semibold text-ink">
            ₹{hotel.pricePerNight.toLocaleString("en-IN")}
            <ArrowUpRight size={15} className="text-indigo group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </span>
        </div>
      </div>
    </Link>
  );
}

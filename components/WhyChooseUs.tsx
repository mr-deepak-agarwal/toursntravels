import { stats } from "@/lib/data";
import AnimatedCounter from "./AnimatedCounter";
import { FiDollarSign, FiClock, FiMapPin, FiMessageCircle } from "react-icons/fi";

const badges = [
  { icon: FiDollarSign, label: "Honest quotes, no hidden costs" },
  { icon: FiClock, label: "Pre-booked airport and railway pick-ups" },
  { icon: FiMapPin, label: "Taxi, stay and tours from one Goa-based team" },
  { icon: FiMessageCircle, label: "Reach us on WhatsApp or phone" },
];

export default function WhyChooseUs() {
  return (
    <section className="container-lux py-24">
      <div className="mb-14 max-w-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-turquoise-600">Why book with us</p>
        <h2 className="heading-hero mt-3 text-4xl text-navy-900 md:text-5xl">Built on the boring stuff done well</h2>
      </div>

      {stats.length > 0 && (
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <AnimatedCounter value={s.value} suffix={s.suffix} />
              <p className="mt-2 text-sm text-navy-900/60">{s.label}</p>
            </div>
          ))}
        </div>
      )}

      <div className={`${stats.length > 0 ? "mt-16 " : ""}grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4`}>
        {badges.map((b) => (
          <div key={b.label} className="flex items-start gap-3 rounded-3xl bg-sand-200/60 p-5">
            <b.icon className="mt-0.5 shrink-0 text-emerald-600" size={20} />
            <p className="text-sm text-navy-900/80">{b.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

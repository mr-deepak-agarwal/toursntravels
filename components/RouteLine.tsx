"use client";

import { motion } from "framer-motion";

type Props = {
  className?: string;
  variant?: "hero" | "divider";
};

/**
 * Signature visual motif: a hand-drawn dashed route connecting pins —
 * doubles as "taxi route" and "tour itinerary", the two halves of the brief.
 */
export default function RouteLine({ className = "", variant = "divider" }: Props) {
  if (variant === "hero") {
    return (
      <svg
        viewBox="0 0 600 200"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <motion.path
          d="M20 160 C 120 40, 220 180, 320 90 S 520 20, 580 70"
          stroke="var(--gold)"
          strokeWidth="2.5"
          className="route-dash"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.2, ease: "easeInOut", delay: 0.3 }}
        />
        {[
          [20, 160],
          [320, 90],
          [580, 70],
        ].map(([cx, cy], i) => (
          <motion.circle
            key={i}
            cx={cx}
            cy={cy}
            r={6}
            fill="var(--laterite)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6 + i * 0.6, type: "spring", stiffness: 300, damping: 12 }}
          />
        ))}
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 400 24" className={className} fill="none" aria-hidden="true">
      <motion.line
        x1="0"
        y1="12"
        x2="400"
        y2="12"
        stroke="var(--azulejo)"
        strokeWidth="2"
        className="route-dash"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />
    </svg>
  );
}

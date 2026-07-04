import { ImageIcon } from "lucide-react";

export default function PlaceholderPhoto({
  gradient = "from-azulejo to-ink-soft",
  label,
  className = "",
}: {
  gradient?: string;
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br ${gradient} ${className}`}
    >
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.4) 10px, rgba(255,255,255,0.4) 11px)",
        }}
      />
      <div className="relative flex flex-col items-center gap-2 px-4 text-center text-paper/80">
        <ImageIcon size={22} strokeWidth={1.5} />
        {label && <span className="text-xs font-medium">{label}</span>}
      </div>
    </div>
  );
}

import { Camera } from "lucide-react";

type PhotoPlaceholderProps = {
  gradient?: string;
  label: string;
  className?: string;
  pattern?: boolean;
};

export default function PhotoPlaceholder({
  gradient = "from-[#16324f] to-[#3d6b93]",
  label,
  className = "",
  pattern = true,
}: PhotoPlaceholderProps) {
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br ${gradient} ${className}`}
    >
      {pattern && (
        <div
          className="absolute inset-0 opacity-[0.15] tile-texture-light"
          aria-hidden
        />
      )}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-ivory/80">
        <Camera size={22} strokeWidth={1.5} />
        <span className="font-stamp text-[10px] uppercase tracking-wider text-center px-4">
          {label}
        </span>
      </div>
    </div>
  );
}

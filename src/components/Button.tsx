import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";

type CommonProps = {
  variant?: Variant;
  size?: "md" | "lg";
  showArrow?: boolean;
  className?: string;
  children: React.ReactNode;
};

const base =
  "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 rounded-full whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-laterite text-ivory hover:bg-laterite-deep active:scale-[0.98] shadow-[0_4px_14px_rgba(184,69,46,0.35)]",
  secondary:
    "bg-indigo text-ivory hover:bg-indigo-deep active:scale-[0.98]",
  ghost:
    "bg-transparent border border-ink/20 text-ink hover:border-ink hover:bg-ink/5 active:scale-[0.98]",
};

const sizes = {
  md: "text-sm px-5 py-2.5",
  lg: "text-base px-7 py-3.5",
};

export function Button({
  variant = "primary",
  size = "md",
  showArrow = false,
  className = "",
  children,
  ...rest
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...rest}
    >
      {children}
      {showArrow && <ArrowUpRight size={16} />}
    </button>
  );
}

export function LinkButton({
  href,
  variant = "primary",
  size = "md",
  showArrow = false,
  className = "",
  children,
}: CommonProps & { href: string }) {
  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
      {showArrow && <ArrowUpRight size={16} />}
    </Link>
  );
}

import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={align === "center" ? "text-center" : ""}>
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-laterite">
        {eyebrow}
      </span>
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className={`mt-3 max-w-xl text-ink-soft/80 ${align === "center" ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </Reveal>
  );
}

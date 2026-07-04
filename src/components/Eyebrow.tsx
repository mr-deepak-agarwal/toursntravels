export default function Eyebrow({
  children,
  tone = "laterite",
}: {
  children: React.ReactNode;
  tone?: "laterite" | "gold" | "indigo" | "ivory";
}) {
  const colors = {
    laterite: "text-laterite",
    gold: "text-gold",
    indigo: "text-indigo",
    ivory: "text-ivory/80",
  };
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className={`h-px w-8 ${colors[tone].replace("text-", "bg-")}`} />
      <span className={`font-stamp text-xs uppercase ${colors[tone]}`}>{children}</span>
    </div>
  );
}

type StampProps = {
  line1: string;
  line2: string;
  rotate?: number;
  tone?: "indigo" | "laterite" | "ivory";
  className?: string;
};

const toneMap = {
  indigo: "border-indigo text-indigo",
  laterite: "border-laterite text-laterite",
  ivory: "border-ivory text-ivory",
};

export default function Stamp({
  line1,
  line2,
  rotate = -8,
  tone = "indigo",
  className = "",
}: StampProps) {
  return (
    <div
      className={`inline-flex flex-col items-center justify-center w-24 h-24 md:w-28 md:h-28 rounded-full border-2 border-dashed shrink-0 ${toneMap[tone]} ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <span className="font-stamp text-[9px] md:text-[10px] uppercase text-center leading-tight px-2">
        {line1}
      </span>
      <span className="font-stamp text-[13px] md:text-sm font-bold uppercase text-center leading-tight px-2 mt-0.5">
        {line2}
      </span>
    </div>
  );
}

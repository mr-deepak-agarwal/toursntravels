export default function WaveDivider({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 80"
      className={className}
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        d="M0,32 C240,80 480,0 720,24 C960,48 1200,72 1440,24 L1440,80 L0,80 Z"
        fill="currentColor"
      />
    </svg>
  );
}

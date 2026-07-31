import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-lux flex min-h-[70vh] flex-col items-center justify-center pt-28 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-turquoise-600">404</p>
      <h1 className="heading-hero mt-3 text-4xl text-navy-900 md:text-5xl">This shore is uncharted</h1>
      <p className="mt-4 max-w-md text-navy-900/60">
        The page you&apos;re looking for has drifted off. Let&apos;s get you back to solid ground.
      </p>
      <Link href="/" className="mt-8 rounded-full bg-sunset-500 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-sunset-600">
        Back to home
      </Link>
    </div>
  );
}

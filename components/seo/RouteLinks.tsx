import Link from "next/link";

export default function RouteLinks({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  if (!links.length) return null;
  return (
    <section className="mt-12">
      <h2 className="font-display text-2xl text-navy-900">{title}</h2>
      <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="block rounded-2xl bg-white px-4 py-3 text-sm text-navy-900/80 shadow-sm transition hover:text-turquoise-600">
              {l.label} →
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

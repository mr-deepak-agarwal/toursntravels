import Link from "next/link";
import JsonLd from "./JsonLd";
import { breadcrumbJsonLd, type Crumb } from "@/lib/seo";

export default function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  const all: Crumb[] = [{ name: "Home", href: "/" }, ...crumbs];
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(all)} />
      <nav aria-label="Breadcrumb" className="container-lux pb-4 text-xs text-navy-900/55">
        <ol className="flex flex-wrap items-center gap-1.5">
          {all.map((c, i) => (
            <li key={c.href} className="flex items-center gap-1.5">
              {i < all.length - 1 ? (
                <Link href={c.href} className="hover:text-turquoise-600">{c.name}</Link>
              ) : (
                <span aria-current="page" className="text-navy-900/80">{c.name}</span>
              )}
              {i < all.length - 1 && <span aria-hidden>/</span>}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

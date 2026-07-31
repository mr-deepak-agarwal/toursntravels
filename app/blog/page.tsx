import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Goa Travel Guides & Tips",
  description: "Practical Goa travel guides covering beaches, taxi fares, hotels and North vs South Goa comparisons.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <div className="pt-28">
      <section className="container-lux pb-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-turquoise-600">Journal</p>
        <h1 className="heading-hero mx-auto mt-3 max-w-2xl text-4xl text-navy-900 md:text-5xl">
          Travel guides worth reading
        </h1>
      </section>

      <section className="container-lux grid grid-cols-1 gap-6 pb-24 md:grid-cols-2">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group overflow-hidden rounded-4xl bg-white shadow-premium">
            <div className="relative h-56 w-full overflow-hidden">
              <Image src={post.image} alt={post.title} fill className="object-cover transition duration-700 group-hover:scale-110" />
            </div>
            <div className="p-6">
              <p className="text-xs text-navy-900/50">{new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })} · {post.readTime}</p>
              <h2 className="mt-2 font-display text-xl text-navy-900">{post.title}</h2>
              <p className="mt-2 text-sm text-navy-900/60">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, siteConfig } from "@/lib/data";
import { blogContent } from "@/lib/blog-content";
import { absoluteUrl, businessRef } from "@/lib/seo";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import BookButton from "@/components/BookButton";
import { CallCta, WhatsAppCta } from "@/components/ContactLinks";

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: absoluteUrl(`/blog/${post.slug}`),
      images: [post.image],
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return notFound();
  const content = blogContent[post.slug];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    publisher: businessRef,
  };

  const more = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <article className="pt-28">
      <JsonLd data={jsonLd} />
      <Breadcrumbs crumbs={[{ name: "Blog", href: "/blog" }, { name: post.title, href: `/blog/${post.slug}` }]} />

      <section className="relative h-[45vh] min-h-[320px] w-full">
        <Image src={post.image} alt={post.title} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-navy-950/10" />
        <div className="container-lux absolute bottom-8 left-0 right-0 text-sand-100">
          <p className="text-xs uppercase tracking-wider text-turquoise-300">
            {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })} · {post.readTime}
          </p>
          <h1 className="heading-hero mt-2 max-w-2xl text-3xl md:text-4xl">{post.title}</h1>
        </div>
      </section>

      <section className="container-lux max-w-2xl py-16">
        {content && (
          <>
            <p className="mb-8 text-lg leading-relaxed text-navy-900/80">{content.intro}</p>
            {content.sections.map((s) => (
              <div key={s.heading} className="mb-8">
                <h2 className="font-display text-2xl text-navy-900">{s.heading}</h2>
                {s.paragraphs.map((p, i) => (
                  <p key={i} className="mt-3 leading-relaxed text-navy-900/75">{p}</p>
                ))}
                {s.bullets && (
                  <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-navy-900/75">
                    {s.bullets.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                )}
              </div>
            ))}

            <div className="mt-12 rounded-4xl bg-navy-900 p-6 text-sand-100">
              <p className="font-display text-xl">Planning this trip?</p>
              <p className="mt-1 text-sm text-sand-100/70">Tell us your dates and group size and we will send a clear quote.</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <BookButton label="Get a quote" placement={`blog_${post.slug}`} />
                <WhatsAppCta message={`Hi! I read "${post.title}" and would like a quote.`} placement={`blog_${post.slug}`} />
                <CallCta placement={`blog_${post.slug}`} className="inline-flex items-center justify-center gap-2 rounded-full border border-sand-100/25 px-5 py-2.5 text-sm font-semibold text-sand-100" />
              </div>
            </div>

            <h2 className="mt-12 font-display text-xl text-navy-900">Related</h2>
            <ul className="mt-3 space-y-2">
              {content.related.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-turquoise-700 underline underline-offset-2 hover:text-turquoise-600">{l.label}</Link>
                </li>
              ))}
            </ul>
          </>
        )}

        <h2 className="mt-12 font-display text-xl text-navy-900">More from the blog</h2>
        <ul className="mt-3 space-y-2">
          {more.map((p) => (
            <li key={p.slug}>
              <Link href={`/blog/${p.slug}`} className="text-sm text-navy-900/75 underline underline-offset-2 hover:text-turquoise-600">{p.title}</Link>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}

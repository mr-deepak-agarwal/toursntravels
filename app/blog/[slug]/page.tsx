import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/data";

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
    openGraph: { title: post.title, description: post.excerpt, images: [post.image] },
  };
}

const bodies: Record<string, string[]> = {
  "best-beaches-in-goa": [
    "Goa's coastline covers over a hundred kilometres, and no two beaches feel the same. Baga and Calangute get the shacks, the music and the crowds, best treated as an evening plan rather than a full day out.",
    "For a quieter shoreline, Ashwem and Mandrem in the far north trade nightlife for hammocks and long walks at low tide. South Goa's Palolem curves into a natural cove that stays calm even in peak season, while Agonda a little further down has largely resisted the resort boom altogether.",
    "If you're chasing genuinely empty sand, Galgibaga and Talpona near the Karnataka border are worth the extra hour of driving. Bring your own shade; there isn't much else out there.",
  ],
  "goa-taxi-guide": [
    "Prepaid taxi counters at Dabolim and Mopa airports post fixed rates by zone, so the fare you're quoted at the counter is the fare you pay, no negotiation needed. Outside the airport, most local trips are still priced by distance rather than a meter.",
    "Ride-hailing apps operate in Goa but coverage thins out past North Goa's main belt, so pre-booking is the more reliable option for South Goa or late-night pickups.",
    "As a rough benchmark, a sedan from the airport to Calangute runs close to what a similar Innova would cost for the same route in Mumbai, factoring in Goa's toll-free roads and shorter average trip length.",
  ],
  "north-vs-south-goa": [
    "North Goa, from Candolim up to Arambol, is where the beach shacks, flea markets and nightlife concentrate. It suits travellers who want options within a short drive and don't mind some noise after sunset.",
    "South Goa, from Bogmalo down to Agonda and beyond, trades density for space. Resorts sit further apart, beaches are longer and quieter, and the pace slows down considerably by 10pm.",
    "Neither half is objectively better; a first trip built around nightlife and markets fits North Goa, while a slower, resort-based holiday tends to fit South Goa more comfortably.",
  ],
  "best-hotels-goa-2026": [
    "The properties that keep earning repeat bookings share a few traits: honest photos, staff who answer WhatsApp promptly, and locations that don't require a taxi for every meal.",
    "In North Goa, Candolim and Sinquerim offer the best balance of beach access and restaurant density. Assagao's villa scene has grown quickly and now rivals it for design-led stays.",
    "In South Goa, Palolem's homestays remain the most consistent budget option, while a handful of new boutique resorts near Cavelossim are worth watching for 2026.",
  ],
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return notFound();
  const paragraphs = bodies[post.slug] ?? [];

  return (
    <article className="pt-28">
      <section className="relative h-[45vh] min-h-[320px] w-full">
        <Image src={post.image} alt={post.title} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-navy-950/10" />
        <div className="container-lux absolute bottom-8 left-0 right-0 text-sand-100">
          <p className="text-xs uppercase tracking-wider text-turquoise-300">
            {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })} · {post.readTime}
          </p>
          <h1 className="heading-hero mt-2 max-w-2xl text-3xl md:text-4xl">{post.title}</h1>
        </div>
      </section>

      <section className="container-lux max-w-2xl py-16">
        {paragraphs.map((p, i) => (
          <p key={i} className="mb-5 leading-relaxed text-navy-900/75">{p}</p>
        ))}
      </section>
    </article>
  );
}

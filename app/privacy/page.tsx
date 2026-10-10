import type { Metadata } from "next";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.name} collects, uses and protects the information you share through our website, forms, phone and WhatsApp.`,
  alternates: { canonical: "/privacy" },
};

const sections = [
  {
    h: "Who we are",
    p: [`${siteConfig.name} ("we", "us") is a travel company based in ${siteConfig.locality}, Goa, India. This policy explains what information we collect through this website and how we use it. You can reach us at ${siteConfig.email} or ${siteConfig.phone}.`],
  },
  {
    h: "Information we collect",
    ul: [
      "Details you give us in our forms: name, phone number, email address (optional), pick-up and drop locations, destination, travel dates, number of passengers, vehicle or service preference and any message you write.",
      "Details you share by phone or WhatsApp when you contact us or reply to a quote.",
      "Basic information about how you reached and used the site, such as the page you submitted a form from, the page you first landed on, the website that referred you and campaign (UTM) tags in the link.",
      "Usage and device data collected by Google Analytics, such as pages viewed, approximate location, browser and device type, using cookies or similar identifiers.",
    ],
  },
  {
    h: "How we use it",
    ul: [
      "To reply to your enquiry, prepare a quote and arrange the taxi, stay, tour or package you ask for.",
      "To confirm bookings and keep in touch about your trip, such as pick-up times and changes.",
      "To understand which pages and campaigns bring enquiries, so we can improve the website and our services.",
      "To prevent spam and misuse of our forms, and to meet legal or accounting requirements.",
    ],
  },
  {
    h: "Who we share it with",
    p: [
      "We do not sell your personal information. We share it only as needed to run the service:",
    ],
    ul: [
      "Service providers that process data for us: our database provider (Supabase), our email notification provider (Resend), Google Analytics and our website hosting provider.",
      "The drivers, hotels, tour operators and other partners who deliver your booking, limited to the details they need (for example your name, phone number and pick-up details).",
      "Authorities or other parties when the law requires it.",
    ],
  },
  {
    h: "Cookies and analytics",
    p: [
      "We use Google Analytics to measure how the site is used. It sets cookies or similar identifiers in your browser. You can block or delete cookies in your browser settings, or use a browser extension that blocks analytics, and the site will still work.",
    ],
  },
  {
    h: "How long we keep it",
    p: [
      "We keep enquiry and booking details for as long as needed to respond to you, deliver your trip, handle any follow-up or dispute, and meet legal and accounting obligations. After that we delete or anonymise them.",
    ],
  },
  {
    h: "Your choices",
    p: [
      `You can ask us to show you the information we hold about you, correct it, or delete it, by emailing ${siteConfig.email}. We will respond as soon as reasonably possible, subject to anything we are required by law to keep.`,
    ],
  },
  {
    h: "Security",
    p: [
      "We use reasonable technical and organisational measures to protect your information, including access-controlled storage. No method of transmission or storage is completely secure, so we cannot guarantee absolute security.",
    ],
  },
  {
    h: "Children",
    p: ["This website is meant for adults planning travel. We do not knowingly collect information from children."],
  },
  {
    h: "Changes to this policy",
    p: ["We may update this policy from time to time. The latest version is always on this page."],
  },
];

export default function PrivacyPage() {
  return (
    <div className="container-lux max-w-2xl pt-32 pb-24">
      <h1 className="heading-hero text-4xl text-navy-900">Privacy Policy</h1>
      <p className="mt-3 text-sm text-navy-900/50">Last updated: October 2026</p>
      {sections.map((s) => (
        <section key={s.h} className="mt-8">
          <h2 className="font-display text-xl text-navy-900">{s.h}</h2>
          {s.p?.map((t, i) => (
            <p key={i} className="mt-3 leading-relaxed text-navy-900/70">{t}</p>
          ))}
          {s.ul && (
            <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-navy-900/70">
              {s.ul.map((li) => <li key={li}>{li}</li>)}
            </ul>
          )}
        </section>
      ))}
    </div>
  );
}

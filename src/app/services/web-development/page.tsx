import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { CheckCircle2, ArrowRight, Globe, Gauge, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Web Development in Vancouver',
  description:
    'Vancouver web developer building React + Tailwind marketing sites and landing pages. Fast, accessible, and SEO-tuned for Canadian businesses and global clients.',
  keywords: [
    'Vancouver web developer',
    'Vancouver landing page developer',
    'react developer Canada',
    'tailwind developer Vancouver',
    'marketing site developer BC',
    'freelance web developer Vancouver',
    'conversion optimization Canada',
  ],
  alternates: { canonical: '/services/web-development' },
  openGraph: {
    title: 'Web Development in Vancouver | Cenk Karakuz',
    description:
      'React + Tailwind marketing sites and landing pages, conversion-tuned and SEO-ready.',
    url: 'https://vcenkkarakuz.com/services/web-development',
    type: 'website',
  },
};

const deliverables = [
  'Custom design or polish on an existing direction',
  'React + Tailwind, fully responsive',
  'SEO, sitemap, and structured data',
  'Lighthouse-tuned performance',
  'CMS or markdown-driven content if needed',
  'Vercel / Netlify deploy with analytics',
];

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Web Development',
    serviceType: 'Marketing site and landing page development',
    url: 'https://vcenkkarakuz.com/services/web-development',
    provider: {
      '@type': 'Person',
      name: 'Cenk Karakuz',
      url: 'https://vcenkkarakuz.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Vancouver',
        addressRegion: 'BC',
        addressCountry: 'CA',
      },
    },
    areaServed: [
      { '@type': 'City', name: 'Vancouver' },
      { '@type': 'AdministrativeArea', name: 'British Columbia' },
      { '@type': 'Country', name: 'Canada' },
      { '@type': 'Place', name: 'Worldwide (remote)' },
    ],
    offers: { '@type': 'Offer', priceCurrency: 'CAD', availability: 'https://schema.org/InStock' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vcenkkarakuz.com/' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://vcenkkarakuz.com/#services' },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Web Development',
        item: 'https://vcenkkarakuz.com/services/web-development',
      },
    ],
  },
];

export default function WebDevelopmentServicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Navigation />

      <main className="pt-28 pb-20">
        <section className="section-container">
          <div className="max-w-3xl">
            <span className="section-label">Service · Vancouver, BC</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight mt-4 mb-6">
              Marketing sites
              <br />
              that pull their weight.
            </h1>
            <p className="text-lg text-muted-foreground mb-10">
              Vancouver-based developer building landing pages and marketing sites with React and Tailwind —
              fast, accessible, and tuned for conversion. Designed to feel premium without the agency timeline. Serving clients across Canada and worldwide.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/#contact" className="btn-primary">
                Start a project
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/#work" className="btn-secondary">
                See recent work
              </Link>
            </div>
          </div>
        </section>

        <section className="section-container mt-16 grid md:grid-cols-3 gap-6">
          <div className="glass-card p-6">
            <Globe className="w-6 h-6 text-accent mb-4" />
            <h2 className="font-semibold mb-2">Conversion-focused</h2>
            <p className="text-sm text-muted-foreground">Every section earns its place. No filler, no generic stock-photo copy.</p>
          </div>
          <div className="glass-card p-6">
            <Gauge className="w-6 h-6 text-accent mb-4" />
            <h2 className="font-semibold mb-2">Fast by default</h2>
            <p className="text-sm text-muted-foreground">Lighthouse-tuned performance, optimized assets, real-world load speed.</p>
          </div>
          <div className="glass-card p-6">
            <Sparkles className="w-6 h-6 text-accent mb-4" />
            <h2 className="font-semibold mb-2">Designed to feel good</h2>
            <p className="text-sm text-muted-foreground">Considered typography, motion, and details — not a template skin.</p>
          </div>
        </section>

        <section className="section-container mt-16">
          <div className="glass-card p-8 md:p-10">
            <h2 className="text-2xl font-display font-bold mb-6">What you get</h2>
            <ul className="grid md:grid-cols-2 gap-4">
              {deliverables.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section-container mt-16 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Need a site that actually converts?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Send the brief — I&apos;ll come back with a scoped quote and timeline within 24 hours.
          </p>
          <Link href="/#contact" className="btn-primary inline-flex">
            Start a project <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}

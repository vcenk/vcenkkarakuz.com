import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FAQ, { buildFAQSchema, type FAQItem } from '@/components/FAQ';
import { CheckCircle2, ArrowRight, Globe, Gauge, Sparkles } from 'lucide-react';
import { buildGraph, buildOrganization, buildWebSite, buildWebPage, buildBreadcrumb, SITE } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Web Development Vancouver | React Marketing Sites',
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
    title: 'Web Development Vancouver | React Marketing Sites',
    description:
      'React + Tailwind marketing sites and landing pages, conversion-tuned and SEO-ready.',
    url: `${SITE.url}/services/web-development`,
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

const faqs: FAQItem[] = [
  {
    question: 'How long does a marketing site take to build?',
    answer:
      'A typical landing page or marketing site ships in one to three weeks. The variable is content — if copy and images are ready, build is faster. If we need to write copy together, expect the longer end.',
  },
  {
    question: 'Will my site rank in Google?',
    answer:
      'Every site I build is server-rendered with proper meta tags, structured data, sitemaps, and clean URLs out of the box. That gives Google everything it needs to index and understand your pages. Ranking on top of that depends on your topic, competition, and ongoing content — none of which a developer alone controls.',
  },
  {
    question: 'Can you migrate my existing site from WordPress, Webflow, or Framer?',
    answer:
      'Yes. I rebuild the site in a modern stack (React + Tailwind), preserve URLs so SEO is not lost, and set up redirects for anything that does change. Migrations usually run faster than building from scratch since the content already exists.',
  },
  {
    question: 'Do you handle design, or do I need to bring a designer?',
    answer:
      'Both options work. I can take a Figma file you already have and build it pixel-accurate, or design directly in code based on a reference style and your brand. My design taste leans toward clean, content-first layouts — not heavy illustration or motion.',
  },
  {
    question: 'How is pricing structured?',
    answer:
      'Fixed price per project. A focused landing page typically lands in the $1.5K–$4K CAD range. A full multi-page marketing site with custom design is $4K–$10K. You get an exact quote after a 20-minute call.',
  },
  {
    question: 'Will the site be fast on mobile?',
    answer:
      'Yes. Every site I build targets a Lighthouse mobile performance score of 90+, with optimized images, code splitting, lazy loading, and minimal third-party JavaScript. Speed is treated as a feature, not an afterthought.',
  },
];

const BREADCRUMB_ID = `${SITE.url}/services/web-development#breadcrumb`;
const PAGE_ID = `${SITE.url}/services/web-development#webpage`;
const PAGE_URL = `${SITE.url}/services/web-development`;

const schema = buildGraph(
  buildOrganization(),
  buildWebSite(),
  buildWebPage({
    id: PAGE_ID,
    url: PAGE_URL,
    name: 'Web Development Vancouver | React Marketing Sites',
    description:
      'Vancouver web developer building React + Tailwind marketing sites and landing pages. Fast, accessible, and SEO-tuned for Canadian businesses and global clients.',
    breadcrumbId: BREADCRUMB_ID,
  }),
  buildBreadcrumb(BREADCRUMB_ID, [
    { name: 'Home', item: `${SITE.url}/` },
    { name: 'Services', item: `${SITE.url}/#services` },
    { name: 'Web Development', item: PAGE_URL },
  ]),
  {
    '@type': 'Service',
    name: 'Web Development',
    serviceType: 'Marketing site and landing page development',
    url: PAGE_URL,
    provider: { '@id': `${SITE.url}/#organization` },
    areaServed: [
      { '@type': 'City', name: 'Vancouver' },
      { '@type': 'AdministrativeArea', name: 'British Columbia' },
      { '@type': 'Country', name: 'Canada' },
      { '@type': 'Place', name: 'Worldwide (remote)' },
    ],
    offers: { '@type': 'Offer', priceCurrency: 'CAD', availability: 'https://schema.org/InStock' },
  },
  {
    '@type': 'HowTo',
    name: 'How web development works with Cenk Karakuz',
    description: 'From brief to live site — three focused stages.',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Discover',
        text: 'A 20-minute call to understand your goals, audience, and existing assets — then a fixed-price quote.',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Build',
        text: 'Design and build in React + Tailwind, with a preview link for feedback at each stage.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Ship',
        text: 'Deploy to Vercel or your host with analytics, redirects, and SEO fully configured.',
      },
    ],
  },
  buildFAQSchema(faqs),
);

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
              Web development
              <br />
              that pulls its weight.
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

        <FAQ items={faqs} title="Web development FAQ" />

        <section className="section-container mt-20 text-center">
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

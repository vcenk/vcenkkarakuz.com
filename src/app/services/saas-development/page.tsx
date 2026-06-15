import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FAQ, { buildFAQSchema, type FAQItem } from '@/components/FAQ';
import { CheckCircle2, ArrowRight, Box, Clock3, ShieldCheck } from 'lucide-react';
import { buildGraph, buildOrganization, buildWebSite, buildWebPage, buildBreadcrumb, SITE } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'SaaS Development Vancouver | Full-Stack MVP Builder',
  description:
    'Vancouver SaaS developer building full-stack products end to end. React, TypeScript, Supabase, payments, AI integration for founders in Canada and worldwide.',
  keywords: [
    'Vancouver SaaS developer',
    'SaaS development Canada',
    'MVP development Vancouver',
    'react SaaS developer',
    'full stack developer BC',
    'indie SaaS developer Canada',
    'supabase developer Vancouver',
    'AI SaaS builder',
  ],
  alternates: { canonical: '/services/saas-development' },
  openGraph: {
    title: 'SaaS Development Vancouver | Full-Stack MVP Builder',
    description:
      'Vancouver SaaS developer building full-stack products end to end. React, TypeScript, Supabase, payments, AI integration.',
    url: `${SITE.url}/services/saas-development`,
    type: 'website',
  },
};

const deliverables = [
  'Product architecture and tech stack decisions',
  'Auth, billing, and subscription logic',
  'React + TypeScript frontend, fully typed',
  'Postgres / Supabase backend with RLS',
  'AI integration (OpenAI, embeddings, RAG)',
  'CI/CD, monitoring, and production deploy',
];

const faqs: FAQItem[] = [
  {
    question: 'How long does it take to ship a SaaS MVP?',
    answer:
      'Most MVPs ship in four to eight weeks. The exact range depends on how complex the data model is, how many integrations are involved, and how much AI work is in scope. You get a fixed timeline before any code is written.',
  },
  {
    question: 'What is your default tech stack?',
    answer:
      'Next.js 15 and React with TypeScript on the frontend, Supabase or Postgres on the backend, Stripe for billing, and OpenAI for AI features. Hosted on Vercel by default. The stack is chosen so you can hire any modern developer to extend it later.',
  },
  {
    question: 'Do I own the code and data?',
    answer:
      'Yes — completely. You get the GitHub repo, the cloud accounts under your name, and full handoff documentation. There are no licensing fees, no platform lock-in, and no situation where you would need to keep paying me to keep the product running.',
  },
  {
    question: 'Can you build AI features into my product?',
    answer:
      'Yes. I regularly build chat UIs, RAG pipelines with embeddings, structured-output prompting, and agent workflows. Job Foxy and photovid.studio (in my work section) are both production AI products I built end to end.',
  },
  {
    question: 'How is pricing structured?',
    answer:
      'Fixed price per project, paid in milestones tied to deliverables. No hourly billing and no monthly retainer required. Most SaaS MVPs land in the $8K–$25K CAD range depending on scope. You get an exact quote after a discovery call.',
  },
  {
    question: 'Can you take over a project that another developer started?',
    answer:
      'Yes, if the codebase is in a stack I work with. I do a paid code audit first to understand what is there, then propose either a continuation plan or a clean rewrite — whichever gives you better value for the next milestone.',
  },
];

const PAGE_URL = `${SITE.url}/services/saas-development`;
const BREADCRUMB_ID = `${PAGE_URL}#breadcrumb`;
const PAGE_ID = `${PAGE_URL}#webpage`;

const schema = buildGraph(
  buildOrganization(),
  buildWebSite(),
  buildWebPage({
    id: PAGE_ID,
    url: PAGE_URL,
    name: 'SaaS Development Vancouver | Full-Stack MVP Builder',
    description:
      'Vancouver SaaS developer building full-stack products end to end. React, TypeScript, Supabase, payments, AI integration for founders in Canada and worldwide.',
    breadcrumbId: BREADCRUMB_ID,
    datePublished: '2025-01-01',
    dateModified: '2026-06-15',
  }),
  buildBreadcrumb(BREADCRUMB_ID, [
    { name: 'Home', item: `${SITE.url}/` },
    { name: 'Services', item: `${SITE.url}/#services` },
    { name: 'SaaS Development', item: PAGE_URL },
  ]),
  {
    '@type': 'Service',
    '@id': `${PAGE_URL}#service`,
    name: 'SaaS Development',
    serviceType: 'Full-stack SaaS product development',
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
    '@id': `${PAGE_URL}#howto`,
    name: 'How SaaS development works with Cenk Karakuz',
    description: 'From first call to a live product with paying users — three focused stages.',
    totalTime: 'P8W',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'CAD', value: '8000' },
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Discover',
        text: 'A 20-minute call to scope the idea, agree on the MVP feature set, and produce a fixed-price quote.',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Build',
        text: 'Weekly milestones with live demos — auth, data model, AI features, billing — shipped incrementally.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Ship',
        text: 'Production deploy to Vercel, repo handoff, documentation, and 30 days of post-launch support.',
      },
    ],
  },
  buildFAQSchema(faqs, `${PAGE_URL}#faq`),
);

export default function SaasDevelopmentServicePage() {
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
              SaaS development,
              <br />
              built end to end.
            </h1>
            <p className="text-lg text-muted-foreground mb-10">
              Vancouver-based independent developer helping founders take a SaaS idea from a doc to a live product with paying users.
              Frontend, backend, infra, and the AI bits in between — by one person, in tight increments. Available across Canada and remote worldwide.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/#contact" className="btn-primary">
                Start a project
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/case-studies/jobfoxy" className="btn-secondary">
                See a case study
              </Link>
            </div>
          </div>
        </section>

        <section className="section-container mt-16 grid md:grid-cols-3 gap-6">
          <div className="glass-card p-6">
            <Box className="w-6 h-6 text-accent mb-4" />
            <h2 className="font-semibold mb-2">Full-stack ownership</h2>
            <p className="text-sm text-muted-foreground">From schema design to deployment — one developer, one mental model.</p>
          </div>
          <div className="glass-card p-6">
            <Clock3 className="w-6 h-6 text-accent mb-4" />
            <h2 className="font-semibold mb-2">MVP in weeks</h2>
            <p className="text-sm text-muted-foreground">Most MVPs ship in 4–8 weeks with a clear scope and weekly demos.</p>
          </div>
          <div className="glass-card p-6">
            <ShieldCheck className="w-6 h-6 text-accent mb-4" />
            <h2 className="font-semibold mb-2">You own the code</h2>
            <p className="text-sm text-muted-foreground">No black boxes. Clean repo, docs, and handoff so your team can take it from here.</p>
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

        <FAQ items={faqs} title="SaaS development FAQ" />

        <section className="section-container mt-16">
          <h2 className="font-display text-2xl font-bold mb-6">Other services</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/services/web-development" className="glass-card p-6 group block">
              <h3 className="font-semibold mb-2 group-hover:text-accent transition-colors">Web Development</h3>
              <p className="text-sm text-muted-foreground">React + Tailwind marketing sites and landing pages — fast, accessible, conversion-tuned.</p>
            </Link>
            <Link href="/services/n8n-automation" className="glass-card p-6 group block">
              <h3 className="font-semibold mb-2 group-hover:text-accent transition-colors">n8n Automation</h3>
              <p className="text-sm text-muted-foreground">Workflow systems for lead handling, AI pipelines, and CRM operations — built and monitored.</p>
            </Link>
          </div>
        </section>

        <section className="section-container mt-20 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Ready to build your SaaS?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Tell me about your idea — I&apos;ll respond within 24 hours with a scoped quote and timeline.
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

import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FAQ, { buildFAQSchema, type FAQItem } from '@/components/FAQ';
import { CheckCircle2, ArrowRight, Box, Clock3, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'SaaS Development in Vancouver',
  description:
    'Vancouver-based SaaS developer building full-stack products end to end. React, TypeScript, Supabase, payments, and AI integration for founders in Canada and worldwide.',
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
    title: 'SaaS Development in Vancouver | Cenk Karakuz',
    description:
      'Full-stack SaaS development for founders. React, TypeScript, Supabase, payments, AI integration.',
    url: 'https://vcenkkarakuz.com/services/saas-development',
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

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'SaaS Development',
    serviceType: 'Full-stack SaaS product development',
    url: 'https://vcenkkarakuz.com/services/saas-development',
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
        name: 'SaaS Development',
        item: 'https://vcenkkarakuz.com/services/saas-development',
      },
    ],
  },
  buildFAQSchema(faqs),
];

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
              SaaS products,
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

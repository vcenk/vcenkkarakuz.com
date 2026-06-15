import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { buildGraph, buildOrganization, buildWebSite, buildWebPage, buildBreadcrumb, SITE } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Smart Calculator Pro Case Study | Calculator Tools Platform',
  description:
    'How Smart Calculator Pro was built as a free calculator hub spanning finance, health, math, construction, and everyday life — designed for fast, trustworthy calculations.',
  keywords: [
    'Smart Calculator Pro case study',
    'calculator platform',
    'tools site SEO',
    'utility website case study',
    'free calculator tools',
  ],
  alternates: { canonical: '/case-studies/smart-calculator-pro' },
  openGraph: {
    title: 'Smart Calculator Pro Case Study | Calculator Tools Platform',
    description:
      'A free calculator platform with organized tools across finance, health, math, construction, and everyday life.',
    url: 'https://vcenkkarakuz.com/case-studies/smart-calculator-pro',
    type: 'article',
  },
};

const features = [
  'Tool-per-page architecture for clean SEO targeting',
  'Instant client-side calculations, no signup required',
  'Categorized navigation across five core areas',
  'Mobile-first inputs and result display',
  'Schema markup so calculators surface in rich results',
  'Fast first paint on any device',
];

const schema = buildGraph(
  buildOrganization(),
  buildWebSite(),
  buildWebPage({
    id: `${SITE.url}/case-studies/smart-calculator-pro#webpage`,
    url: `${SITE.url}/case-studies/smart-calculator-pro`,
    name: 'Smart Calculator Pro Case Study | Calculator Tools Platform',
    description: 'How Smart Calculator Pro was built as a free calculator hub spanning finance, health, math, construction, and everyday life — designed for fast, trustworthy calculations.',
    breadcrumbId: `${SITE.url}/case-studies/smart-calculator-pro#breadcrumb`,
    datePublished: '2025-01-01',
    dateModified: '2026-06-15',
  }),
  buildBreadcrumb(`${SITE.url}/case-studies/smart-calculator-pro#breadcrumb`, [
    { name: 'Home', item: `${SITE.url}/` },
    { name: 'Work', item: `${SITE.url}/#work` },
    { name: 'Smart Calculator Pro', item: `${SITE.url}/case-studies/smart-calculator-pro` },
  ]),
  {
    '@type': 'WebSite',
    name: 'Smart Calculator Pro',
    url: 'https://smartcalculatorpro.com',
    inLanguage: 'en',
    author: { '@id': `${SITE.url}/#person` },
    about: 'Free online calculators across finance, health, math, construction, and everyday life',
  },
  {
    '@type': 'Article',
    headline: 'Smart Calculator Pro — Calculator Tools Platform Case Study',
    description: 'Case study of Smart Calculator Pro, a free calculator hub built by Cenk Karakuz.',
    author: { '@id': `${SITE.url}/#person` },
    publisher: { '@id': `${SITE.url}/#organization` },
    mainEntityOfPage: `${SITE.url}/case-studies/smart-calculator-pro`,
    datePublished: '2025-01-01',
    dateModified: '2026-06-15',
    image: `${SITE.url}/ck-og.svg`,
  },
);

export default function SmartCalculatorProCaseStudyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Navigation />

      <main className="pt-28 pb-20 section-container">
        <span className="section-label">Case Study</span>
        <h1 className="font-display text-4xl md:text-6xl font-bold mt-4 mb-6">Smart Calculator Pro</h1>

        <p className="text-lg text-muted-foreground max-w-3xl mb-8">
          A free calculator platform that brings together everyday tools across finance, health, math, construction, and life decisions — built for people who need a quick, trustworthy answer without ads, signups, or paywalls.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <a href="https://smartcalculatorpro.com/" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Visit Live Site (smartcalculatorpro.com)
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a href="/services/web-development" className="btn-secondary">
            Build Similar Site
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="glass-card p-6">
            <div className="text-3xl font-display font-bold text-accent">5 categories</div>
            <div className="text-sm text-muted-foreground mt-2">Finance · Health · Math · Build · Life</div>
          </div>
          <div className="glass-card p-6">
            <div className="text-3xl font-display font-bold text-accent">Free</div>
            <div className="text-sm text-muted-foreground mt-2">No signup, no ads in the way</div>
          </div>
          <div className="glass-card p-6">
            <div className="text-3xl font-display font-bold text-accent">Live</div>
            <div className="text-sm text-muted-foreground mt-2">Production and indexed</div>
          </div>
        </div>

        <div className="glass-card p-8 space-y-8 mb-10">
          <section>
            <h2 className="text-2xl font-display font-bold mb-3">Problem</h2>
            <p className="text-muted-foreground">
              Most online calculators sit on cluttered, ad-heavy pages or get gated behind signups for &quot;premium&quot; versions. People who just need to figure out a mortgage payment or convert a unit shouldn&apos;t have to navigate a dark pattern to do it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-3">Approach</h2>
            <p className="text-muted-foreground mb-4">
              Smart Calculator Pro is a tool-per-page hub where every calculator gets its own focused URL, clean inputs, and instant client-side results. Categorization is shallow on purpose — find the tool, get the answer, leave.
            </p>
            <ul className="grid md:grid-cols-2 gap-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5" />
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-3">Build</h2>
            <p className="text-muted-foreground">
              Each calculator is a small typed module so adding a new one means writing a function, defining inputs, and deploying — no CMS or template juggling. The site is statically rendered and tuned for Lighthouse performance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-3">Strategy</h2>
            <p className="text-muted-foreground">
              SEO is built around &quot;X calculator&quot; queries at scale. Each tool has its own metadata, schema, and a short explainer — enough to rank for the long tail without bloat. The pattern is intentionally repeatable so the catalog can keep growing.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}

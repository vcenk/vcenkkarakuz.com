import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { buildGraph, buildOrganization, buildWebSite, buildWebPage, buildBreadcrumb, SITE } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Job Foxy Case Study | SaaS Built by Vancouver Developer',
  description:
    'How I designed and shipped Job Foxy, an AI-powered job application assistant with cover letter generation and application tracking. A Vancouver-built SaaS case study.',
  keywords: [
    'Job Foxy case study',
    'AI cover letter app',
    'job application tracker',
    'Vancouver SaaS case study',
    'indie SaaS Canada',
    'react SaaS project',
  ],
  alternates: { canonical: '/case-studies/jobfoxy' },
  openGraph: {
    title: 'Job Foxy Case Study | SaaS Built by Vancouver Developer',
    description:
      'AI-powered job application assistant with cover letter generation and application tracking.',
    url: 'https://vcenkkarakuz.com/case-studies/jobfoxy',
    type: 'article',
  },
};

const featureList = [
  'AI-assisted cover letter generation tailored to target roles',
  'Job application tracking with structured pipeline states',
  'Editable drafts so users keep full control before sending',
  'Reusable profile context to speed up repeat applications',
  'Simple UX designed for daily usage, not one-time novelty',
  'Analytics hooks for activation and retention measurement',
];

const schema = buildGraph(
  buildOrganization(),
  buildWebSite(),
  buildWebPage({
    id: `${SITE.url}/case-studies/jobfoxy#webpage`,
    url: `${SITE.url}/case-studies/jobfoxy`,
    name: 'Job Foxy Case Study | SaaS Built by Vancouver Developer',
    description: 'How I designed and shipped Job Foxy, an AI-powered job application assistant with cover letter generation and application tracking. A Vancouver-built SaaS case study.',
    breadcrumbId: `${SITE.url}/case-studies/jobfoxy#breadcrumb`,
    datePublished: '2025-01-01',
    dateModified: '2026-06-15',
  }),
  buildBreadcrumb(`${SITE.url}/case-studies/jobfoxy#breadcrumb`, [
    { name: 'Home', item: `${SITE.url}/` },
    { name: 'Work', item: `${SITE.url}/#work` },
    { name: 'Job Foxy', item: `${SITE.url}/case-studies/jobfoxy` },
  ]),
  {
    '@type': 'SoftwareApplication',
    name: 'Job Foxy',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url: 'https://jobfoxy.com/',
    author: { '@id': `${SITE.url}/#person` },
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
  {
    '@type': 'Article',
    headline: 'Job Foxy — AI Job Application Assistant Case Study',
    description: 'Case study of Job Foxy, an AI-powered job application assistant built by Vancouver developer Cenk Karakuz.',
    author: { '@id': `${SITE.url}/#person` },
    publisher: { '@id': `${SITE.url}/#organization` },
    mainEntityOfPage: `${SITE.url}/case-studies/jobfoxy`,
    datePublished: '2025-01-01',
    dateModified: '2026-06-15',
    image: `${SITE.url}/ck-og.svg`,
  },
);

export default function JobFoxyCaseStudyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Navigation />

      <main className="pt-28 pb-20 section-container">
        <span className="section-label">Case Study</span>
        <h1 className="font-display text-4xl md:text-6xl font-bold mt-4 mb-6">Job Foxy</h1>

        <p className="text-lg text-muted-foreground max-w-3xl mb-8">
          Job Foxy is a web app that helps candidates generate stronger application material faster and keep every opportunity organized in one workflow.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <a href="https://jobfoxy.com/" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Visit Live App (jobfoxy.com)
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a href="/services/n8n-automation" className="btn-secondary">
            Hire Me for Similar Build
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="glass-card p-6">
            <div className="text-3xl font-display font-bold text-accent">10k+</div>
            <div className="text-sm text-muted-foreground mt-2">Users reached</div>
          </div>
          <div className="glass-card p-6">
            <div className="text-3xl font-display font-bold text-accent">AI + UX</div>
            <div className="text-sm text-muted-foreground mt-2">Core product edge</div>
          </div>
          <div className="glass-card p-6">
            <div className="text-3xl font-display font-bold text-accent">Live</div>
            <div className="text-sm text-muted-foreground mt-2">Production web app</div>
          </div>
        </div>

        <div className="glass-card p-8 space-y-8 mb-10">
          <section>
            <h2 className="text-2xl font-display font-bold mb-3">Problem</h2>
            <p className="text-muted-foreground">
              Job seekers spend large amounts of time rewriting similar cover letters and manually tracking dozens of applications.
              The process is repetitive, slow, and hard to maintain consistently.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-3">Solution</h2>
            <p className="text-muted-foreground mb-4">
              Job Foxy combines AI-assisted writing with a practical tracking workflow, so users can move from role discovery to submission-ready applications with less friction.
            </p>
            <ul className="grid md:grid-cols-2 gap-3">
              {featureList.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5" />
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-3">Product Strategy</h2>
            <p className="text-muted-foreground">
              The app is built around repeat usage loops: create an application, refine generated content, track status changes, then reuse profile context for the next application. This drives stronger retention than single-output tools.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-3">Monetization Direction</h2>
            <p className="text-muted-foreground">
              Monetization is aligned to candidate outcomes: free entry for onboarding, then premium features for advanced templates, higher AI usage limits, and workflow enhancements for power users.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-3">Next Roadmap</h2>
            <p className="text-muted-foreground">
              Planned improvements include deeper personalization, stronger interview follow-up automation, and smarter suggestion ranking based on user outcomes.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}

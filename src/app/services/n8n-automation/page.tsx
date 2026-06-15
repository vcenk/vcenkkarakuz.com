import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FAQ, { buildFAQSchema, type FAQItem } from '@/components/FAQ';
import { CheckCircle2, ArrowRight, Workflow, Clock3, TrendingUp } from 'lucide-react';
import { buildGraph, buildOrganization, buildWebSite, buildWebPage, buildBreadcrumb, SITE } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'n8n Automation Services Vancouver | Workflow Developer',
  description:
    'Vancouver n8n automation developer building workflow systems for lead handling, AI content pipelines, reporting, and CRM automations. Serving Canada and worldwide.',
  keywords: [
    'n8n developer Vancouver',
    'n8n consultant Canada',
    'workflow automation Vancouver',
    'n8n freelancer Canada',
    'AI automation engineer BC',
    'business process automation Vancouver',
    'no-code automation expert',
  ],
  alternates: { canonical: '/services/n8n-automation' },
  openGraph: {
    title: 'n8n Automation Services Vancouver | Workflow Developer',
    description:
      'Vancouver n8n automation developer building workflow systems for lead handling, AI content pipelines, and CRM operations.',
    url: `${SITE.url}/services/n8n-automation`,
    type: 'website',
  },
};

const deliverables = [
  'Workflow architecture and mapping',
  'n8n implementation with error handling',
  'API integrations (CRM, email, Slack, DB)',
  'Prompt design and AI node optimization',
  'Monitoring, alerts, and retry policies',
  'Documentation and handoff video',
];

const faqs: FAQItem[] = [
  {
    question: 'What kinds of workflows can n8n actually handle?',
    answer:
      'Anything that involves moving data between systems, transforming it, or triggering actions on a schedule or event. Common ones I build: lead routing from forms to CRM, AI content pipelines, scheduled reports to Slack, invoice processing, customer onboarding sequences, and data sync between SaaS tools.',
  },
  {
    question: 'Do you self-host n8n or use n8n Cloud?',
    answer:
      'Either, depending on your needs. n8n Cloud is faster to set up and well-suited for most teams. Self-hosting on a $10-a-month VPS makes sense when you need unlimited executions, custom nodes, or strict data residency. I help you pick the right path during the discovery call.',
  },
  {
    question: 'How long does a typical automation take to build?',
    answer:
      'Most workflows ship in three to ten business days. A simple two-system integration is usually a few days. A multi-step AI pipeline with error handling, retries, and monitoring is closer to two weeks. You get a fixed quote and timeline before any work starts.',
  },
  {
    question: 'Can you integrate with my existing tools?',
    answer:
      'n8n has 400+ native integrations including Slack, Notion, HubSpot, Salesforce, Airtable, Google Workspace, Stripe, Shopify, Postgres, and most popular SaaS. For anything not natively supported, I build custom HTTP requests or write a custom node.',
  },
  {
    question: 'How is pricing structured?',
    answer:
      'Fixed price per workflow. A focused single automation typically lands in the $500–$2K CAD range. A multi-workflow system with monitoring and documentation is $2K–$8K. You get an exact quote after a 20-minute discovery call.',
  },
  {
    question: 'What happens if a workflow breaks?',
    answer:
      'Every workflow ships with error handling, retry logic, and Slack or email alerts when something fails. You get 30 days of post-launch support included for fixing any issues. After that, ongoing maintenance is available as a small monthly retainer or pay-as-needed.',
  },
];

const PAGE_URL = `${SITE.url}/services/n8n-automation`;
const BREADCRUMB_ID = `${PAGE_URL}#breadcrumb`;
const PAGE_ID = `${PAGE_URL}#webpage`;

const schema = buildGraph(
  buildOrganization(),
  buildWebSite(),
  buildWebPage({
    id: PAGE_ID,
    url: PAGE_URL,
    name: 'n8n Automation Services Vancouver | Workflow Developer',
    description:
      'Vancouver n8n automation developer building workflow systems for lead handling, AI content pipelines, reporting, and CRM automations. Serving Canada and worldwide.',
    breadcrumbId: BREADCRUMB_ID,
    datePublished: '2025-01-01',
    dateModified: '2026-06-15',
  }),
  buildBreadcrumb(BREADCRUMB_ID, [
    { name: 'Home', item: `${SITE.url}/` },
    { name: 'Services', item: `${SITE.url}/#services` },
    { name: 'n8n Automation', item: PAGE_URL },
  ]),
  {
    '@type': 'Service',
    '@id': `${PAGE_URL}#service`,
    name: 'n8n Automation Services',
    serviceType: 'Business automation and AI workflow services',
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
    name: 'How n8n automation works with Cenk Karakuz',
    description: 'From identifying the manual work to a live, monitored automation — three stages.',
    totalTime: 'P2W',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'CAD', value: '500' },
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Discover',
        text: 'A 20-minute call to map the workflow, agree on integrations, and produce a fixed-price quote.',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Build',
        text: 'Implement in n8n with error handling, retries, and a staging test run before production.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Ship',
        text: 'Go live with monitoring, Slack alerts, and a handoff video so your team can manage it day-to-day.',
      },
    ],
  },
  buildFAQSchema(faqs, `${PAGE_URL}#faq`),
);

export default function N8nAutomationServicePage() {
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
              n8n automation systems
              <br />
              built for real operations
            </h1>
            <p className="text-lg text-muted-foreground mb-10">
              Vancouver-based automation developer designing and deploying n8n workflows that remove manual work from
              lead handling, content production, reporting, and customer operations. Available for clients across Canada and worldwide.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/#contact" className="btn-primary">
                Book a Discovery Call
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/case-studies/jobfoxy" className="btn-secondary">
                See a Case Study
              </Link>
            </div>
          </div>
        </section>

        <section className="section-container mt-16 grid md:grid-cols-3 gap-6">
          <div className="glass-card p-6">
            <Workflow className="w-6 h-6 text-accent mb-4" />
            <h2 className="font-semibold mb-2">End-to-end Workflows</h2>
            <p className="text-sm text-muted-foreground">From trigger to delivery, including retries, fallback logic, and notifications.</p>
          </div>
          <div className="glass-card p-6">
            <Clock3 className="w-6 h-6 text-accent mb-4" />
            <h2 className="font-semibold mb-2">Fast Delivery</h2>
            <p className="text-sm text-muted-foreground">Most automations are scoped and shipped in 3 to 10 business days.</p>
          </div>
          <div className="glass-card p-6">
            <TrendingUp className="w-6 h-6 text-accent mb-4" />
            <h2 className="font-semibold mb-2">ROI Focused</h2>
            <p className="text-sm text-muted-foreground">Every workflow is tied to time saved, conversion lift, or reduced response latency.</p>
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

        <FAQ items={faqs} title="n8n automation FAQ" />

        <section className="section-container mt-16">
          <h2 className="font-display text-2xl font-bold mb-6">Other services</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/services/saas-development" className="glass-card p-6 group block">
              <h3 className="font-semibold mb-2 group-hover:text-accent transition-colors">SaaS Development</h3>
              <p className="text-sm text-muted-foreground">Full-stack SaaS products from idea to launch — auth, billing, AI, and production deploy.</p>
            </Link>
            <Link href="/services/web-development" className="glass-card p-6 group block">
              <h3 className="font-semibold mb-2 group-hover:text-accent transition-colors">Web Development</h3>
              <p className="text-sm text-muted-foreground">React + Tailwind marketing sites and landing pages — fast, accessible, conversion-tuned.</p>
            </Link>
          </div>
        </section>

        <section className="section-container mt-20 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Got a workflow eating your week?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Tell me what&apos;s manual today — I&apos;ll come back with what can be automated and what it costs.
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

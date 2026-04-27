import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { CheckCircle2, ArrowRight, Workflow, Clock3, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'n8n Automation Services in Vancouver',
  description:
    'Vancouver n8n automation developer building workflow systems for lead handling, AI content pipelines, reporting, and CRM automations. Serving Canada and global clients.',
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
    title: 'n8n Automation Services in Vancouver | Cenk Karakuz',
    description:
      'Workflow automation systems for lead handling, AI content pipelines, and CRM operations.',
    url: 'https://vcenkkarakuz.com/services/n8n-automation',
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

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'n8n Automation Services',
    serviceType: 'Business automation and AI workflow services',
    url: 'https://vcenkkarakuz.com/services/n8n-automation',
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
        name: 'n8n Automation',
        item: 'https://vcenkkarakuz.com/services/n8n-automation',
      },
    ],
  },
];

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

        <section className="section-container mt-16 text-center">
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

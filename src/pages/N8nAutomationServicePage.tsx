import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { CheckCircle2, ArrowRight, Workflow, Clock3, TrendingUp } from 'lucide-react';

const deliverables = [
  'Workflow architecture and mapping',
  'n8n implementation with error handling',
  'API integrations (CRM, email, Slack, DB)',
  'Prompt design and AI node optimization',
  'Monitoring, alerts, and retry policies',
  'Documentation and handoff video'
];

const N8nAutomationServicePage = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'n8n Automation Services',
    serviceType: 'Business automation and AI workflow services',
    provider: {
      '@type': 'Person',
      name: 'Cenk Karakuz',
      url: 'https://cenk.dev'
    },
    areaServed: 'Worldwide',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock'
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="n8n Automation Services | Cenk Karakuz"
        description="Custom n8n automation services for founders and teams. Build lead pipelines, AI content workflows, reporting, and CRM automations with production-ready reliability."
        path="/services/n8n-automation"
        keywords="n8n automation service, n8n consultant, workflow automation, AI automation engineer"
        schema={schema}
      />

      <Navigation />

      <main className="pt-28 pb-20">
        <section className="section-container">
          <div className="max-w-3xl">
            <span className="section-label">Service</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight mt-4 mb-6">
              n8n automation systems
              <br />
              built for real operations
            </h1>
            <p className="text-lg text-muted-foreground mb-10">
              I design and deploy n8n workflows that remove manual work from lead handling,
              content production, reporting, and customer operations.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/#contact" className="btn-primary">
                Book a Discovery Call
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/case-studies/jobfoxy" className="btn-secondary">
                See a Case Study
              </a>
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
      </main>

      <Footer />
    </div>
  );
};

export default N8nAutomationServicePage;
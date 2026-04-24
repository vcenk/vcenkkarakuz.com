import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { CheckCircle2, ArrowRight, Box, Clock3, ShieldCheck } from 'lucide-react';

const deliverables = [
  'Product architecture and tech stack decisions',
  'Auth, billing, and subscription logic',
  'React + TypeScript frontend, fully typed',
  'Postgres / Supabase backend with RLS',
  'AI integration (OpenAI, embeddings, RAG)',
  'CI/CD, monitoring, and production deploy'
];

const SaasDevelopmentServicePage = () => {
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'SaaS Development',
      serviceType: 'Full-stack SaaS product development',
      url: 'https://cenk.dev/services/saas-development',
      provider: {
        '@type': 'Person',
        name: 'Cenk Karakuz',
        url: 'https://cenk.dev',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Vancouver',
          addressRegion: 'BC',
          addressCountry: 'CA'
        }
      },
      areaServed: [
        { '@type': 'City', name: 'Vancouver' },
        { '@type': 'AdministrativeArea', name: 'British Columbia' },
        { '@type': 'Country', name: 'Canada' },
        { '@type': 'Place', name: 'Worldwide (remote)' }
      ],
      offers: {
        '@type': 'Offer',
        priceCurrency: 'CAD',
        availability: 'https://schema.org/InStock'
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cenk.dev/' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://cenk.dev/#services' },
        { '@type': 'ListItem', position: 3, name: 'SaaS Development', item: 'https://cenk.dev/services/saas-development' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="SaaS Development in Vancouver | Cenk Karakuz"
        description="Vancouver-based SaaS developer building full-stack products end to end. React, TypeScript, Supabase, payments, and AI integration for founders in Canada and worldwide."
        path="/services/saas-development"
        keywords="Vancouver SaaS developer, SaaS development Canada, MVP development Vancouver, react SaaS developer, full stack developer BC, indie SaaS developer Canada, supabase developer Vancouver, AI SaaS builder"
        schema={schema}
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
              <a href="/#contact" className="btn-primary">
                Start a project
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/case-studies/jobfoxy" className="btn-secondary">
                See a case study
              </a>
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

        <section className="section-container mt-16 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Ready to build your SaaS?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Tell me about your idea — I'll respond within 24 hours with a scoped quote and timeline.
          </p>
          <a href="/#contact" className="btn-primary inline-flex">
            Start a project <ArrowRight className="w-4 h-4" />
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SaasDevelopmentServicePage;

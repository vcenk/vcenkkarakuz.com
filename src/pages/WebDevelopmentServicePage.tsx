import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { CheckCircle2, ArrowRight, Globe, Gauge, Sparkles } from 'lucide-react';

const deliverables = [
  'Custom design or polish on an existing direction',
  'React + Tailwind, fully responsive',
  'SEO, sitemap, and structured data',
  'Lighthouse-tuned performance',
  'CMS or markdown-driven content if needed',
  'Vercel / Netlify deploy with analytics'
];

const WebDevelopmentServicePage = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Web Development',
    serviceType: 'Marketing site and landing page development',
    provider: {
      '@type': 'Person',
      name: 'Cenk Karakuz',
      url: 'https://cenk.dev'
    },
    areaServed: 'Worldwide'
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Web Development | Cenk Karakuz"
        description="Marketing sites and landing pages built with React, Tailwind, and modern tooling — fast, accessible, and conversion-focused."
        path="/services/web-development"
        keywords="web developer, landing page developer, react developer, marketing site, tailwind"
        schema={schema}
      />

      <Navigation />

      <main className="pt-28 pb-20">
        <section className="section-container">
          <div className="max-w-3xl">
            <span className="section-label">Service</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight mt-4 mb-6">
              Marketing sites
              <br />
              that pull their weight.
            </h1>
            <p className="text-lg text-muted-foreground mb-10">
              Landing pages and marketing sites built with React and Tailwind — fast, accessible,
              and tuned for conversion. Designed to feel premium without the agency timeline.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/#contact" className="btn-primary">
                Start a project
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/#work" className="btn-secondary">
                See recent work
              </a>
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
      </main>

      <Footer />
    </div>
  );
};

export default WebDevelopmentServicePage;

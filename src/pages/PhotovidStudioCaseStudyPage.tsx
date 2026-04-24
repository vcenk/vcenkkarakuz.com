import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { ArrowUpRight } from 'lucide-react';

const PhotovidStudioCaseStudyPage = () => {
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'photovid.studio',
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Web',
      url: 'https://photovid.studio/',
      author: {
        '@type': 'Person',
        name: 'Cenk Karakuz',
        url: 'https://vcenkkarakuz.com'
      },
      about: ['photovid.studio', 'AI media generation', 'product strategy']
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'photovid.studio — AI Media Generation SaaS Case Study',
      description: 'Case study of photovid.studio, an AI image and video generation product built by Vancouver developer Cenk Karakuz.',
      author: { '@type': 'Person', name: 'Cenk Karakuz', url: 'https://vcenkkarakuz.com' },
      publisher: { '@type': 'Person', name: 'Cenk Karakuz' },
      mainEntityOfPage: 'https://vcenkkarakuz.com/case-studies/photovid-studio',
      image: 'https://vcenkkarakuz.com/ck-og.svg'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vcenkkarakuz.com/' },
        { '@type': 'ListItem', position: 2, name: 'Work', item: 'https://vcenkkarakuz.com/#work' },
        { '@type': 'ListItem', position: 3, name: 'photovid.studio', item: 'https://vcenkkarakuz.com/case-studies/photovid-studio' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="photovid.studio Case Study | AI Media SaaS by Vancouver Developer"
        description="How photovid.studio is being built as an AI image and video generation app with workflow automation, productized UX, and credit-based monetization."
        path="/case-studies/photovid-studio"
        keywords="photovid studio case study, AI media app, AI video generation SaaS, AI image generation, Vancouver SaaS case study, indie SaaS Canada"
        type="article"
        schema={schema}
      />

      <Navigation />

      <main className="pt-28 pb-20 section-container">
        <span className="section-label">Case Study</span>
        <h1 className="font-display text-4xl md:text-6xl font-bold mt-4 mb-6">photovid.studio</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mb-8">
          photovid.studio is an AI media product direction centered on image and video generation with a simple user journey and usage-based monetization.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <a href="https://photovid.studio/" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Visit Live App (photovid.studio)
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a href="/services/n8n-automation" className="btn-secondary">
            Build Similar Product
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="glass-card p-6">
            <div className="text-3xl font-display font-bold text-accent">Credits</div>
            <div className="text-sm text-muted-foreground mt-2">Primary billing model</div>
          </div>
          <div className="glass-card p-6">
            <div className="text-3xl font-display font-bold text-accent">AI + Workflow</div>
            <div className="text-sm text-muted-foreground mt-2">Execution model</div>
          </div>
          <div className="glass-card p-6">
            <div className="text-3xl font-display font-bold text-accent">B2C + B2B</div>
            <div className="text-sm text-muted-foreground mt-2">Growth direction</div>
          </div>
        </div>

        <div className="glass-card p-8 space-y-6">
          <div>
            <h2 className="text-2xl font-display font-bold mb-3">Product Goal</h2>
            <p className="text-muted-foreground">Provide fast, accessible media generation without the complexity of advanced tooling.</p>
          </div>
          <div>
            <h2 className="text-2xl font-display font-bold mb-3">System Design</h2>
            <p className="text-muted-foreground">Use modular workflow orchestration for generation jobs, queueing, status handling, and delivery reliability.</p>
          </div>
          <div>
            <h2 className="text-2xl font-display font-bold mb-3">Monetization Direction</h2>
            <p className="text-muted-foreground">Freemium onboarding, paid credits, team plans, and optional API access for creators and agencies.</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PhotovidStudioCaseStudyPage;

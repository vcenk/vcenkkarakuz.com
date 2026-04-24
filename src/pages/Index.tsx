import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import SelectedWork from '@/components/SelectedWork';
import HowItWorksSection from '@/components/HowItWorksSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { ScrollReveal } from '@/components/ScrollReveal';
import SEO from '@/components/SEO';

const homeSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Cenk Karakuz',
    url: 'https://cenk.dev',
    sameAs: [
      'https://www.linkedin.com/in/cenkkarakuz/',
      'https://twitter.com/vcenkkarakuz',
      'https://github.com/vcenk'
    ],
    jobTitle: 'Independent Software Developer',
    knowsAbout: ['SaaS development', 'Web development', 'n8n automation', 'React', 'TypeScript', 'AI workflows']
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Cenk Karakuz — SaaS, Web & Automation',
    provider: {
      '@type': 'Person',
      name: 'Cenk Karakuz'
    },
    areaServed: 'Worldwide',
    serviceType: ['SaaS development', 'Web development', 'n8n automation']
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background selection:bg-accent/20 overflow-x-hidden">
      <SEO
        title="Cenk Karakuz | SaaS, Web & Automation Developer"
        description="Independent developer building SaaS products, marketing sites, and n8n automation systems for founders and teams."
        path="/"
        keywords="saas developer, web developer, n8n automation, react developer, independent developer"
        schema={homeSchema}
      />

      <Navigation />

      <main>
        <HeroSection />

        <ScrollReveal width="100%">
          <ServicesSection />
        </ScrollReveal>

        <ScrollReveal width="100%">
          <SelectedWork />
        </ScrollReveal>

        <HowItWorksSection />

        <ScrollReveal width="100%">
          <ContactSection />
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  );
};

export default Index;

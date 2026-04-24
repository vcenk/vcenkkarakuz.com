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
    '@id': 'https://vcenkkarakuz.com/#person',
    name: 'Cenk Karakuz',
    url: 'https://vcenkkarakuz.com',
    image: 'https://vcenkkarakuz.com/ck-og.svg',
    email: 'mailto:cenkkarakuz@gmail.com',
    jobTitle: 'Independent Software Developer',
    description: 'Vancouver-based independent developer building SaaS products, marketing sites, and n8n automation systems.',
    sameAs: [
      'https://www.linkedin.com/in/cenkkarakuz/',
      'https://twitter.com/vcenkkarakuz',
      'https://github.com/vcenk'
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Vancouver',
      addressRegion: 'BC',
      addressCountry: 'CA'
    },
    knowsAbout: [
      'SaaS development',
      'Web development',
      'n8n automation',
      'React',
      'TypeScript',
      'AI workflows',
      'Supabase',
      'Tailwind CSS'
    ]
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://vcenkkarakuz.com/#business',
    name: 'Cenk Karakuz — SaaS, Web & Automation',
    url: 'https://vcenkkarakuz.com',
    image: 'https://vcenkkarakuz.com/ck-og.svg',
    priceRange: '$$',
    telephone: '',
    email: 'cenkkarakuz@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Vancouver',
      addressRegion: 'BC',
      addressCountry: 'CA'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 49.2827,
      longitude: -123.1207
    },
    areaServed: [
      { '@type': 'City', name: 'Vancouver' },
      { '@type': 'AdministrativeArea', name: 'British Columbia' },
      { '@type': 'Country', name: 'Canada' },
      { '@type': 'Place', name: 'Worldwide (remote)' }
    ],
    provider: {
      '@id': 'https://vcenkkarakuz.com/#person'
    },
    serviceType: ['SaaS development', 'Web development', 'n8n automation'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Development Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'SaaS Development', url: 'https://vcenkkarakuz.com/services/saas-development' }
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Web Development', url: 'https://vcenkkarakuz.com/services/web-development' }
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'n8n Automation', url: 'https://vcenkkarakuz.com/services/n8n-automation' }
        }
      ]
    }
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: 'https://vcenkkarakuz.com',
    name: 'Cenk Karakuz',
    publisher: { '@id': 'https://vcenkkarakuz.com/#person' },
    inLanguage: 'en-CA'
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background selection:bg-accent/20 overflow-x-hidden">
      <SEO
        title="Cenk Karakuz | Vancouver SaaS, Web & n8n Automation Developer"
        description="Independent Vancouver-based developer building SaaS products, marketing sites, and n8n automation systems for founders and teams across Canada and worldwide."
        path="/"
        keywords="Vancouver developer, Vancouver SaaS developer, Vancouver web developer, Canada freelance developer, n8n automation Vancouver, react developer Vancouver, AI workflow developer, full stack developer Canada, BC software developer"
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

import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import SelectedWork from '@/components/SelectedWork';
import HowItWorksSection from '@/components/HowItWorksSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { ScrollReveal } from '@/components/ScrollReveal';
import {
  buildGraph,
  buildOrganization,
  buildPerson,
  buildWebSite,
  buildWebPage,
  buildBreadcrumb,
  SITE,
} from '@/lib/seo';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
    languages: { 'en-CA': '/', 'x-default': '/' },
  },
  openGraph: {
    title: 'Vancouver SaaS, Web & n8n Developer | Cenk Karakuz',
    description:
      'Vancouver developer building SaaS products, marketing sites, and n8n automation for founders and teams across Canada and worldwide.',
    url: SITE.url,
    type: 'website',
  },
};

const BREADCRUMB_ID = `${SITE.url}/#breadcrumb`;
const PAGE_ID = `${SITE.url}/#webpage`;

const homeSchema = buildGraph(
  buildOrganization(),
  buildPerson(),
  buildWebSite(),
  buildWebPage({
    id: PAGE_ID,
    url: SITE.url,
    name: 'Vancouver SaaS, Web & n8n Developer | Cenk Karakuz',
    description:
      'Vancouver developer building SaaS products, marketing sites, and n8n automation for founders and teams across Canada and worldwide.',
    breadcrumbId: BREADCRUMB_ID,
  }),
  buildBreadcrumb(BREADCRUMB_ID, [
    { name: 'Home', item: `${SITE.url}/` },
  ]),
  {
    '@type': 'ProfessionalService',
    '@id': `${SITE.url}/#business`,
    name: 'Cenk Karakuz — SaaS, Web & Automation',
    url: SITE.url,
    image: `${SITE.url}/ck-og.svg`,
    priceRange: '$$',
    email: SITE.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Vancouver',
      addressRegion: 'BC',
      addressCountry: 'CA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 49.2827,
      longitude: -123.1207,
    },
    areaServed: [
      { '@type': 'City', name: 'Vancouver' },
      { '@type': 'AdministrativeArea', name: 'British Columbia' },
      { '@type': 'Country', name: 'Canada' },
      { '@type': 'Place', name: 'Worldwide (remote)' },
    ],
    provider: { '@id': `${SITE.url}/#person` },
    serviceType: ['SaaS development', 'Web development', 'n8n automation'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Development Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'SaaS Development',
            url: `${SITE.url}/services/saas-development`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Web Development',
            url: `${SITE.url}/services/web-development`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'n8n Automation',
            url: `${SITE.url}/services/n8n-automation`,
          },
        },
      ],
    },
  },
  {
    '@type': 'ItemList',
    name: 'Selected Work',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Job Foxy', url: `${SITE.url}/case-studies/jobfoxy` },
      { '@type': 'ListItem', position: 2, name: 'photovid.studio', url: `${SITE.url}/case-studies/photovid-studio` },
      { '@type': 'ListItem', position: 3, name: 'VanCityGuide', url: `${SITE.url}/case-studies/vancityguide` },
      { '@type': 'ListItem', position: 4, name: 'Smart Calculator Pro', url: `${SITE.url}/case-studies/smart-calculator-pro` },
      { '@type': 'ListItem', position: 5, name: 'ExamCanada', url: `${SITE.url}/case-studies/examcanada` },
      { '@type': 'ListItem', position: 6, name: 'LLC State Guide', url: `${SITE.url}/case-studies/llc-state-guide` },
      { '@type': 'ListItem', position: 7, name: 'Meet and Eat', url: `${SITE.url}/case-studies/meet-and-eat` },
    ],
  },
);

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
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
    </>
  );
}

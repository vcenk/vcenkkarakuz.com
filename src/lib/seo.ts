const SITE_URL = 'https://vcenkkarakuz.com';

export const SITE = {
  url: SITE_URL,
  name: 'Cenk Karakuz',
  email: 'cenkkarakuz@gmail.com',
  linkedin: 'https://www.linkedin.com/in/cenkkarakuz/',
  twitter: 'https://twitter.com/vcenkkarakuz',
  github: 'https://github.com/vcenk',
};

const OG_IMAGE = {
  '@type': 'ImageObject',
  url: `${SITE_URL}/ck-og.svg`,
  width: 1200,
  height: 630,
};

export function buildOrganization() {
  return {
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE.name,
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/favicon.svg`,
      width: 32,
      height: 32,
    },
    image: OG_IMAGE,
    email: SITE.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Vancouver',
      addressRegion: 'BC',
      addressCountry: 'CA',
    },
    sameAs: [SITE.linkedin, SITE.twitter, SITE.github],
  };
}

export function buildPerson() {
  return {
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: SITE.name,
    url: SITE_URL,
    email: SITE.email,
    jobTitle: 'Independent Software Developer',
    image: OG_IMAGE,
    sameAs: [SITE.linkedin, SITE.twitter, SITE.github],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Vancouver',
      addressRegion: 'BC',
      addressCountry: 'CA',
    },
    knowsAbout: [
      'SaaS development',
      'Web development',
      'n8n automation',
      'React',
      'TypeScript',
      'AI workflows',
      'Supabase',
      'Tailwind CSS',
    ],
  };
}

export function buildWebSite() {
  return {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE.name,
    inLanguage: 'en-CA',
    publisher: { '@id': `${SITE_URL}/#organization` },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/blog?s={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export interface WebPageOpts {
  id: string;
  url: string;
  name: string;
  description: string;
  breadcrumbId?: string;
}

export function buildWebPage(opts: WebPageOpts) {
  return {
    '@type': 'WebPage',
    '@id': opts.id,
    url: opts.url,
    name: opts.name,
    description: opts.description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    publisher: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'en-CA',
    primaryImageOfPage: OG_IMAGE,
    ...(opts.breadcrumbId ? { breadcrumb: { '@id': opts.breadcrumbId } } : {}),
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.section-label', 'p:first-of-type'],
    },
  };
}

export interface BreadcrumbItem {
  name: string;
  item: string;
}

export function buildBreadcrumb(id: string, items: BreadcrumbItem[]) {
  return {
    '@type': 'BreadcrumbList',
    '@id': id,
    itemListElement: items.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.item,
    })),
  };
}

export function buildGraph(...schemas: object[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': schemas,
  };
}

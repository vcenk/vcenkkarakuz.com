export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO 8601
  readTime: string;
  tags: string[];
  /** Optional related service URL for inline CTAs and crosslinking */
  relatedService?: { name: string; href: string };
};

/**
 * Manifest of all blog posts. Each entry must correspond to a folder
 * at src/app/blog/<slug>/page.tsx. Sorted newest-first when rendered.
 */
export const posts: PostMeta[] = [
  {
    slug: 'saas-mvp-cost-canada-2026',
    title: 'How much does a SaaS MVP cost in Canada in 2026?',
    description:
      'A breakdown of what it actually costs to build a SaaS MVP in Canada in 2026 — agency vs freelancer vs in-house, with realistic CAD ranges by scope.',
    date: '2026-05-08',
    readTime: '7 min read',
    tags: ['SaaS', 'Pricing', 'Canada'],
    relatedService: { name: 'SaaS Development', href: '/services/saas-development' },
  },
  {
    slug: 'n8n-vs-zapier-vs-make',
    title: 'n8n vs Zapier vs Make: which automation tool should you actually use?',
    description:
      'A practical comparison of n8n, Zapier, and Make for teams choosing an automation platform in 2026 — pricing, flexibility, hosting, and the cases where each one wins.',
    date: '2026-05-05',
    readTime: '9 min read',
    tags: ['n8n', 'Automation', 'Tools'],
    relatedService: { name: 'n8n Automation', href: '/services/n8n-automation' },
  },
  {
    slug: 'n8n-workflow-ideas',
    title: '10 n8n workflow ideas that pay for themselves in a week',
    description:
      'Practical, high-ROI n8n automations you can build in a few hours — lead routing, AI content pipelines, reporting, and CRM sync — with the actual node setup for each.',
    date: '2026-05-01',
    readTime: '11 min read',
    tags: ['n8n', 'Automation', 'Workflows'],
    relatedService: { name: 'n8n Automation', href: '/services/n8n-automation' },
  },
];

export const getPost = (slug: string): PostMeta | undefined =>
  posts.find((p) => p.slug === slug);

export const getSortedPosts = (): PostMeta[] =>
  [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));

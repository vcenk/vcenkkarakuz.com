// src/data/products.ts

export type ProductType = 'all' | 'prompts' | 'documents' | 'ui-components' | 'landing-pages' | 'animations' | 'workflows' | 'courses';

export interface Product {
  id: number;
  slug: string; // Added for routing
  title: string;
  description: string;
  longDescription?: string; // Added for detail page
  features?: string[]; // Added for detail page
  category: ProductType;
  image: string;
  isPremium: boolean;
  price?: number;
  link?: string;
  demoUrl?: string;
  isLibrary?: boolean;
  techStack?: string[];
}

export const products: Product[] = [
  {
    id: 1,
    slug: 'ai-prompt-library',
    title: 'AI Prompt Library',
    description: 'A curated collection of high-converting prompts for specialized tasks.',
    longDescription: 'Unlock the full potential of LLMs with this comprehensive library of tested prompts. Categories include copywriting, coding assistance, data analysis, and creative writing. Updated weekly with new techniques.',
    features: ['500+ Tested Prompts', 'Categorized by Use Case', 'Copy-Paste Ready', 'Lifetime Updates'],
    category: 'prompts',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    isPremium: false,
    link: '#',
  },
  {
    id: 2,
    slug: 'chatgpt-system-prompts',
    title: 'ChatGPT System Prompts',
    description: 'Advanced system prompts to program behavior into AI agents.',
    longDescription: 'Define specific personas and behavioral constraints for your AI agents. These system prompts are designed to keep the AI on track, reduce hallucinations, and enforce specific output formats.',
    features: ['JSON Output Enforcers', 'Role-Playing Personas', 'Safety Guardrails', 'API Integration Templates'],
    category: 'prompts',
    image: 'https://images.unsplash.com/photo-1676299081847-824916de030a?w=600&h=400&fit=crop',
    isPremium: true,
    price: 19,
    link: '#',
  },
  {
    id: 3,
    slug: 'startup-pitch-deck',
    title: 'Startup Pitch Deck',
    description: 'Winning slide templates for seed and Series A fundraising.',
    category: 'documents',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop',
    isPremium: false,
    link: '#',
  },
  {
    id: 4,
    slug: 'saas-business-plan',
    title: 'SaaS Business Plan',
    description: 'Comprehensive financial models and strategy docs for SaaS.',
    category: 'documents',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop',
    isPremium: true,
    price: 29,
    link: '#',
  },
  {
    id: 5,
    slug: 'dashboard-component-kit',
    title: 'Dashboard Component Kit',
    description: 'React/Tailwind components for building data-heavy dashboards.',
    longDescription: 'A professional UI kit built specifically for data-intensive applications. Includes data grids, chart wrappers, metric cards, and filter panels. Built with Shadcn UI and Recharts compatibility.',
    features: ['Dark Mode Ready', 'TypeScript Support', 'Responsive Layouts', '20+ Custom Components'],
    category: 'ui-components',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    isPremium: true,
    price: 49,
    link: '#',
  },
  {
    id: 6,
    slug: 'form-input-components',
    title: 'Form & Input Components',
    description: 'Accessible, validated form elements with smooth interactions.',
    category: 'ui-components',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop',
    isPremium: false,
    link: '#',
  },
  {
    id: 7,
    slug: 'saas-landing-template',
    title: 'SaaS Landing Template',
    description: 'High-conversion landing page optimized for SaaS products.',
    category: 'landing-pages',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
    isPremium: true,
    price: 59,
    link: '#',
  },
  {
    id: 8,
    slug: 'portfolio-landing-page',
    title: 'Portfolio Landing Page',
    description: 'Minimalist personal branding template for developers.',
    category: 'landing-pages',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
    isPremium: false,
    link: '#',
  },
  {
    id: 9,
    slug: 'framer-motion-presets',
    title: 'Framer Motion Presets',
    description: 'Copy-paste animation library for React applications.',
    category: 'animations',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=400&fit=crop',
    isPremium: false,
    isLibrary: true,
  },
  {
    id: 10,
    slug: 'scroll-animations-kit',
    title: 'Scroll Animations Kit',
    description: 'Advanced scroll-triggered effects and parallax components.',
    category: 'animations',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=400&fit=crop',
    isPremium: false,
    isLibrary: true,
  },
  {
    id: 11,
    slug: 'n8n-lead-gen-workflow',
    title: 'n8n Lead Gen Workflow',
    description: 'Automated scraping and enrichment workflow for sales teams.',
    longDescription: 'Stop manual prospecting. This n8n workflow automates the process of finding leads from Google Maps/LinkedIn, enriching them with email data, and adding them to your CRM (HubSpot/Airtable).',
    features: ['Google Maps Scraper', 'Email Enrichment', 'CRM Sync', 'Slack Notifications'],
    category: 'workflows',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
    isPremium: true,
    price: 29,
    link: '#',
  },
  {
    id: 12,
    slug: 'social-media-automations',
    title: 'Social Media Automations',
    description: 'Auto-post and engagement scripts for Twitter/LinkedIn.',
    category: 'workflows',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop',
    isPremium: false,
    link: '#',
  },
];
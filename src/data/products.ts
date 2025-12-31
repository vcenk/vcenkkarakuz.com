// src/data/products.ts

export type ProductType = 'all' | 'prompts' | 'documents' | 'ui-components' | 'landing-pages' | 'animations' | 'workflows' | 'courses';

export interface Product {
  id: number;
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  features?: string[];
  category: ProductType;
  image: string;
  isPremium: boolean;
  price?: number;
  link?: string;
  demoUrl?: string;
  isLibrary?: boolean; // This flag triggers the special navigation
  techStack?: string[];
}

export const products: Product[] = [
  // AI-FOCUSED LANDING PAGES
  {
    id: 1,
    slug: 'ai-saas-landing-kit',
    title: 'AI SaaS Landing Page Kit',
    description: 'High-converting landing page template built for AI products with pricing tables, feature comparisons, and waitlist integration.',
    longDescription: 'A complete landing page solution designed specifically for AI SaaS products. Built with React, TypeScript, Tailwind CSS, and Framer Motion. Includes hero section with AI gradient effects, feature showcase, pricing tables, testimonial slider, FAQ accordion, and email capture. Fully responsive with dark mode and 95+ Lighthouse score.',
    features: [
      'AI-themed hero with animated gradients',
      'Pricing tables with feature comparison matrix',
      'Email waitlist integration ready',
      'Animated testimonial slider',
      'SEO-optimized FAQ accordion',
      'Mobile responsive & dark mode',
      'Copy-paste ready React components',
      '95+ Lighthouse performance score'
    ],
    category: 'landing-pages',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    isPremium: true,
    price: 149,
    demoUrl: '#',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Radix UI'],
  },
  {
    id: 2,
    slug: 'ai-chatbot-landing',
    title: 'AI Chatbot Landing Page',
    description: 'Conversion-optimized landing page for AI chatbot and assistant products.',
    longDescription: 'Perfect for AI chatbot startups, virtual assistant platforms, and conversational AI products. Features interactive demo section, use case showcase, and enterprise-ready design.',
    features: [
      'Interactive chatbot demo section',
      'Use case showcase with animations',
      'Enterprise & startup pricing tiers',
      'Integration logos carousel',
      'Video testimonials section',
      'Free trial CTA optimization'
    ],
    category: 'landing-pages',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop',
    isPremium: true,
    price: 129,
    demoUrl: '#',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    id: 3,
    slug: 'ai-tool-directory-template',
    title: 'AI Tools Directory Template',
    description: 'Complete directory site for listing and monetizing AI tools and products.',
    longDescription: 'Launch your own ProductHunt-style AI tools directory. Includes filtering, search, user submissions, and affiliate link support.',
    features: [
      'Advanced filtering by category, pricing, use case',
      'Search with instant results',
      'User submission forms',
      'Affiliate link tracking',
      'Admin dashboard for moderation',
      'SEO-optimized product pages'
    ],
    category: 'landing-pages',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    isPremium: true,
    price: 199,
    demoUrl: '#',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase'],
  },

  // UI COMPONENT KITS
  {
    id: 4,
    slug: 'gpt-chat-ui-components',
    title: 'GPT Chat UI Component Library',
    description: 'Production-ready ChatGPT-style interface with streaming responses, markdown rendering, and syntax highlighting.',
    longDescription: 'Everything you need to build a ChatGPT-like interface. Includes message streaming, code syntax highlighting, copy-to-clipboard, message history, and mobile optimization.',
    features: [
      'Streaming text responses with typewriter effect',
      'Markdown rendering with code syntax highlighting',
      'Message history with localStorage persistence',
      'Copy-to-clipboard for code blocks',
      'Mobile-optimized responsive design',
      'Dark/light mode support',
      'Customizable themes',
      'TypeScript types included'
    ],
    category: 'ui-components',
    image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=600&h=400&fit=crop',
    isPremium: true,
    price: 99,
    demoUrl: '#',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Prism.js'],
  },
  {
    id: 5,
    slug: 'ai-dashboard-components',
    title: 'AI Analytics Dashboard Kit',
    description: 'Beautiful dashboard components for AI apps: usage charts, token tracking, cost analytics, and model performance metrics.',
    longDescription: 'Pre-built dashboard components specifically designed for AI SaaS products. Track API usage, visualize costs, monitor model performance, and display user analytics.',
    features: [
      'Token usage tracking charts',
      'Cost analytics with trend visualization',
      'Model performance metrics',
      'API usage graphs (Recharts)',
      'Real-time data updates',
      'Export to CSV/PDF',
      'Responsive grid layouts',
      'Dark mode optimized'
    ],
    category: 'ui-components',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    isPremium: true,
    price: 129,
    demoUrl: '#',
    techStack: ['React', 'TypeScript', 'Recharts', 'Tailwind CSS'],
  },
  {
    id: 6,
    slug: 'ai-form-components',
    title: 'AI-Enhanced Form Components',
    description: 'Intelligent form components with auto-complete, validation, and AI-powered suggestions.',
    longDescription: 'Form components enhanced with AI capabilities. Includes smart autocomplete, real-time validation, AI-powered field suggestions, and accessibility features.',
    features: [
      'AI-powered autocomplete suggestions',
      'Real-time validation with helpful errors',
      'Smart field predictions',
      'Accessibility (WCAG 2.1 AA)',
      'Multi-step form wizard',
      'File upload with preview',
      'React Hook Form integration',
      'Zod schema validation'
    ],
    category: 'ui-components',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop',
    isPremium: true,
    price: 79,
    demoUrl: '#',
    techStack: ['React', 'React Hook Form', 'Zod', 'Tailwind CSS'],
  },

  // AUTOMATION WORKFLOWS
  {
    id: 7,
    slug: 'ai-content-generator-workflow',
    title: 'AI Blog Post Generator (n8n)',
    description: 'Automated content workflow: Topic research → GPT-4 writing → SEO optimization → Auto-publish to WordPress.',
    longDescription: 'End-to-end content creation automation using n8n and GPT-4. Researches trending topics, generates SEO-optimized articles, creates images, and publishes directly to your WordPress site.',
    features: [
      'Google Trends integration for topic research',
      'GPT-4 Turbo for high-quality content generation',
      'Automatic image generation with DALL-E 3',
      'SEO meta tags and keyword optimization',
      'Direct WordPress publishing via REST API',
      'Slack/Email notifications on publish',
      'Content calendar scheduling',
      'Duplicate content detection'
    ],
    category: 'workflows',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    isPremium: true,
    price: 149,
    link: '#',
    techStack: ['n8n', 'OpenAI API', 'WordPress', 'Google Trends API'],
  },
  {
    id: 8,
    slug: 'ai-lead-enrichment-workflow',
    title: 'AI Lead Enrichment & Outreach',
    description: 'Scrape leads, enrich with AI, personalize outreach emails, and track responses automatically.',
    longDescription: 'Complete lead generation and outreach automation. Scrapes LinkedIn/Apollo, enriches contact data with AI, generates personalized emails using GPT-4, and tracks engagement.',
    features: [
      'LinkedIn/Apollo lead scraping',
      'AI-powered data enrichment',
      'Personalized email generation with GPT-4',
      'Multi-channel outreach (Email + LinkedIn)',
      'Response tracking and follow-ups',
      'CRM integration (HubSpot/Pipedrive)',
      'A/B testing for email templates',
      'ROI analytics dashboard'
    ],
    category: 'workflows',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
    isPremium: true,
    price: 199,
    link: '#',
    techStack: ['n8n', 'OpenAI API', 'Apollo API', 'HubSpot API'],
  },
  {
    id: 9,
    slug: 'ai-social-media-manager',
    title: 'AI Social Media Content Manager',
    description: 'Auto-generate, schedule, and post content to Twitter, LinkedIn, and Instagram with AI.',
    longDescription: 'Complete social media automation powered by AI. Generates on-brand content, creates images, schedules posts, and tracks engagement across platforms.',
    features: [
      'AI content generation for Twitter/LinkedIn/Instagram',
      'Auto-generate images with DALL-E',
      'Smart scheduling based on engagement data',
      'Multi-platform posting (Twitter/LinkedIn/Instagram)',
      'Hashtag research and optimization',
      'Engagement tracking and analytics',
      'Content calendar with approval workflow',
      'Brand voice customization'
    ],
    category: 'workflows',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop',
    isPremium: true,
    price: 179,
    link: '#',
    techStack: ['n8n', 'OpenAI API', 'Twitter API', 'LinkedIn API'],
  },

  // AI PROMPTS & RESOURCES
  {
    id: 10,
    slug: 'ai-prompt-library-pro',
    title: 'AI Prompt Library Pro',
    description: 'Premium collection of 500+ battle-tested prompts for developers, marketers, and content creators.',
    longDescription: 'Comprehensive library of AI prompts organized by use case. Includes coding assistants, content generation, marketing copy, data analysis, and business strategy prompts.',
    features: [
      '500+ curated and tested prompts',
      'Organized by category and use case',
      'Copy-paste ready templates',
      'Variables for easy customization',
      'Notion database included',
      'Monthly updates with new prompts',
      'Private community access',
      'Video tutorials for advanced usage'
    ],
    category: 'prompts',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    isPremium: true,
    price: 49,
    link: '#',
  },
  {
    id: 11,
    slug: 'chatgpt-system-prompts',
    title: 'ChatGPT System Prompts Pack',
    description: 'Advanced system prompts to program specific behaviors into AI agents and chatbots.',
    longDescription: 'Professional system prompts for building AI agents with specific personalities, expertise, and guardrails. Perfect for customer support bots, sales assistants, and internal tools.',
    features: [
      '50+ system prompt templates',
      'Customer support agent prompts',
      'Sales assistant personalities',
      'Technical documentation writer',
      'Code review assistant',
      'Content moderation prompts',
      'Multi-language support templates',
      'Token optimization tips'
    ],
    category: 'prompts',
    image: 'https://images.unsplash.com/photo-1676299081847-824916de030a?w=600&h=400&fit=crop',
    isPremium: true,
    price: 39,
    link: '#',
  },

  // ANIMATIONS
  {
    id: 12,
    slug: 'animation-library',
    title: 'Animation Library',
    description: 'A complete collection of copy-paste Framer Motion animations for your projects.',
    category: 'animations',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=400&fit=crop',
    isPremium: false,
    isLibrary: true,
  },
  {
    id: 13,
    slug: 'scroll-animations-kit',
    title: 'Scroll Animations Kit',
    description: 'Advanced scroll-triggered effects and parallax components.',
    category: 'animations',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=400&fit=crop',
    isPremium: false,
    isLibrary: true,
  },
];
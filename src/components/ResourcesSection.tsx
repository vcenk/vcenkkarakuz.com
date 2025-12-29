import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, ShoppingCart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

type Category = 'all' | 'prompts' | 'documents' | 'ui-components' | 'landing-pages' | 'animations' | 'workflows';

interface Resource {
  id: number;
  title: string;
  category: Category;
  image: string;
  isPremium: boolean;
  price?: number;
  link?: string;
  isLibrary?: boolean;
}

const resources: Resource[] = [
  {
    id: 1,
    title: 'AI Prompt Library',
    category: 'prompts',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop',
    isPremium: false,
    link: '#',
  },
  {
    id: 2,
    title: 'ChatGPT System Prompts',
    category: 'prompts',
    image: 'https://images.unsplash.com/photo-1676299081847-824916de030a?w=400&h=300&fit=crop',
    isPremium: true,
    price: 19,
    link: '#',
  },
  {
    id: 3,
    title: 'Startup Pitch Deck',
    category: 'documents',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=300&fit=crop',
    isPremium: false,
    link: '#',
  },
  {
    id: 4,
    title: 'SaaS Business Plan',
    category: 'documents',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop',
    isPremium: true,
    price: 29,
    link: '#',
  },
  {
    id: 5,
    title: 'Dashboard Component Kit',
    category: 'ui-components',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
    isPremium: true,
    price: 49,
    link: '#',
  },
  {
    id: 6,
    title: 'Form & Input Components',
    category: 'ui-components',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop',
    isPremium: false,
    link: '#',
  },
  {
    id: 7,
    title: 'SaaS Landing Template',
    category: 'landing-pages',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
    isPremium: true,
    price: 59,
    link: '#',
  },
  {
    id: 8,
    title: 'Portfolio Landing Page',
    category: 'landing-pages',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
    isPremium: false,
    link: '#',
  },
  {
    id: 9,
    title: 'Framer Motion Presets',
    category: 'animations',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop',
    isPremium: false,
    isLibrary: true,
  },
  {
    id: 10,
    title: 'Scroll Animations Kit',
    category: 'animations',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=300&fit=crop',
    isPremium: false,
    isLibrary: true,
  },
  {
    id: 11,
    title: 'n8n Lead Gen Workflow',
    category: 'workflows',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
    isPremium: true,
    price: 29,
    link: '#',
  },
  {
    id: 12,
    title: 'Social Media Automations',
    category: 'workflows',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop',
    isPremium: false,
    link: '#',
  },
];

const categories: { id: Category; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'prompts', label: 'Prompts' },
  { id: 'documents', label: 'Documents' },
  { id: 'ui-components', label: 'UI Components' },
  { id: 'landing-pages', label: 'Landing Pages' },
  { id: 'animations', label: 'Animation Systems' },
  { id: 'workflows', label: 'Automation Workflows' },
];

const categoryLabels: Record<Category, string> = {
  'all': 'All',
  'prompts': 'Prompts',
  'documents': 'Documents',
  'ui-components': 'UI Components',
  'landing-pages': 'Landing Pages',
  'animations': 'Animation Systems',
  'workflows': 'Automation Workflows',
};

const ResourcesSection = () => {
  const [activeFilter, setActiveFilter] = useState<Category>('all');

  const filteredResources = resources.filter(
    (resource) => activeFilter === 'all' || resource.category === activeFilter
  );

  return (
    <section id="resources" className="py-24 md:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="section-label">Resources</span>
          <h2 className="section-heading mb-4">
            Tools to accelerate
            <br />
            your workflow.
          </h2>
          <p className="section-subheading mx-auto">
            Free and premium resources—templates, prompts, and automations ready to use.
          </p>
        </motion.div>

        {/* Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`filter-pill ${
                activeFilter === category.id
                  ? 'filter-pill-active'
                  : 'filter-pill-inactive'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Resource Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <AnimatePresence mode="popLayout">
            {filteredResources.map((resource) => (
              <motion.article
                key={resource.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="glass-card-hover overflow-hidden flex flex-col group"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  
                  {/* Category Label */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 text-[10px] uppercase tracking-wider font-medium rounded-full bg-background/80 backdrop-blur-sm text-muted-foreground border border-border/50">
                      {categoryLabels[resource.category]}
                    </span>
                  </div>

                  {/* Price Badge */}
                  <div className="absolute top-3 right-3">
                    {resource.isPremium ? (
                      <span className="badge-premium">${resource.price}</span>
                    ) : (
                      <span className="badge-free">Free</span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-base font-display font-semibold mb-4 group-hover:text-accent transition-colors">
                    {resource.title}
                  </h3>

                  <div className="mt-auto">
                    {resource.isLibrary ? (
                      <Link to="/animations" className="btn-secondary w-full text-sm py-2.5 inline-flex items-center justify-center gap-2">
                        <ArrowRight className="w-4 h-4" />
                        View Library
                      </Link>
                    ) : resource.isPremium ? (
                      <button className="btn-accent w-full text-sm py-2.5">
                        <ShoppingCart className="w-4 h-4" />
                        Buy Now
                      </button>
                    ) : (
                      <button className="btn-secondary w-full text-sm py-2.5">
                        <Download className="w-4 h-4" />
                        Download
                      </button>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;

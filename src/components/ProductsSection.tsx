// src/components/ProductsSection.tsx
import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers } from 'lucide-react';

const ventures = [
  {
    title: 'Job Foxy',
    description: 'AI-powered cover letter generator and job application tracker. Helped 10k+ candidates land interviews.',
    tags: ['Next.js', 'OpenAI', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80',
    link: '#',
    stats: '10k+ Users'
  },
  {
    title: 'Content Scribe',
    description: 'Automated SEO blog post generator for agencies. Connects directly to WordPress and Webflow.',
    tags: ['React', 'n8n', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
    link: '#',
    stats: '$2k MRR'
  }
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-24 md:py-32 bg-secondary/10">
      <div className="section-container">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="section-label"
          >
            Portfolio
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="section-heading mt-2"
          >
            Signature Ventures
          </motion.h2>
        </div>

        <div className="space-y-20">
          {ventures.map((venture, index) => (
            <motion.div
              key={venture.title}
              initial={{ opacity: 0, y: 50, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ margin: "-100px" }}
              className="group relative grid md:grid-cols-2 gap-8 items-center bg-background rounded-[2rem] p-6 md:p-8 border border-border/50 shadow-sm hover:shadow-2xl hover:border-accent/30 transition-all duration-500"
            >
              <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-2xl bg-secondary">
                <div className="absolute inset-0 bg-accent/10 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <img
                  src={venture.image}
                  alt={venture.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="md:px-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-accent/10 text-accent">
                    <Layers className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-semibold tracking-wide text-foreground/80 bg-secondary px-3 py-1 rounded-full">
                    {venture.stats}
                  </span>
                </div>

                <h3 className="text-3xl font-display font-bold mb-4">{venture.title}</h3>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  {venture.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {venture.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium border border-border rounded-full text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a href={venture.link} className="btn-primary">
                    Visit Site <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                  <button className="p-3 rounded-full border border-border hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground">
                    <Github className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
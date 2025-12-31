import { motion } from 'framer-motion';
import { Bot, Workflow, Layout, Rocket, Code2, Database } from 'lucide-react';

const services = [
  {
    icon: Layout,
    title: 'Launch-Ready Landing Pages',
    description: 'Get high-converting pages that look like you spent $10K on an agency. Delivered in 48hrs with React + Tailwind + Framer Motion.',
    pricing: 'from $497',
    deliveryTime: '2 days',
  },
  {
    icon: Workflow,
    title: 'AI Automation That Pays For Itself',
    description: 'Custom GPT-4 workflows that handle lead gen, content creation, and customer support. Save 20+ hours per week.',
    pricing: 'from $997',
    deliveryTime: '1 week',
  },
  {
    icon: Rocket,
    title: 'MVP to Market in 4 Weeks',
    description: 'Launch your AI SaaS before your competitors. Full-stack dev with React, Supabase, OpenAI integration—ready for paying customers.',
    pricing: 'from $8,500',
    deliveryTime: '4 weeks',
  },
  {
    icon: Bot,
    title: 'AI Integration & Enhancement',
    description: 'Add ChatGPT-like features to your existing product. RAG pipelines, embeddings, and intelligent data processing that actually works.',
    pricing: 'from $2,500',
    deliveryTime: '2 weeks',
  },
  {
    icon: Code2,
    title: 'Custom React Development',
    description: 'Complex UI challenges, performance optimization, and component architecture. Get code that scales and maintainers will thank you for.',
    pricing: 'from $1,500',
    deliveryTime: '1-2 weeks',
  },
  {
    icon: Database,
    title: 'Backend & API Development',
    description: 'Production-ready APIs with Supabase/Postgres that handle real traffic. Authentication, payments, webhooks—all the boring stuff done right.',
    pricing: 'from $3,000',
    deliveryTime: '2-3 weeks',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration to tie it to the Hero */}
      <div className="absolute top-0 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <span className="section-label">Our Capabilities</span>
            <h2 className="section-heading">
              Full-cycle engineering
              <br />
              for ambitious brands.
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-sm md:text-right"
          >
            We don't just write code; we build assets that generate revenue and save time.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              // CHANGED: Using glass-card-hover for consistency and better depth
              className="glass-card-hover group p-8 relative overflow-hidden"
            >
              {/* Hover Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="w-12 h-12 rounded-xl bg-secondary/50 border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-6 h-6 text-foreground group-hover:text-accent transition-colors" />
              </div>
              
              <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-accent transition-colors">
                {service.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed text-sm mb-6">
                {service.description}
              </p>

              {/* Pricing & Delivery */}
              <div className="flex items-center justify-between pt-4 border-t border-border/50">
                <div>
                  <div className="text-sm font-semibold text-accent">{service.pricing}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">Starting price</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold">{service.deliveryTime}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">Typical delivery</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Ready to start your project?
          </p>
          <a href="#contact" className="btn-primary inline-flex">
            Get a Custom Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
import { motion } from 'framer-motion';
import { Bot, Workflow, Layout, Rocket, Code2, Database } from 'lucide-react';

const services = [
  {
    icon: Layout,
    title: 'UI & Design Systems',
    description: 'Beautiful, accessible component libraries and landing pages built with React, Tailwind, and Framer Motion.',
  },
  {
    icon: Workflow,
    title: 'Automation & Operations',
    description: 'Custom n8n workflows and AI agents that automate your repetitive tasks and lead generation.',
  },
  {
    icon: Rocket,
    title: 'MVP Development',
    description: 'From idea to revenue-ready SaaS in weeks, not months. Full-stack development with scalability in mind.',
  },
  {
    icon: Bot,
    title: 'AI Integration',
    description: 'Enhance your existing products with LLMs, RAG pipelines, and intelligent data processing.',
  },
  {
    icon: Code2,
    title: 'Custom Engineering',
    description: 'Complex frontend challenges, performance optimization, and technical architecture consulting.',
  },
  {
    icon: Database,
    title: 'Backend Systems',
    description: 'Robust APIs, database design (Supabase/Postgres), and serverless infrastructure.',
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
              
              <p className="text-muted-foreground leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
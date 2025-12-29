import { motion } from 'framer-motion';
import { Bot, Workflow, Palette, Rocket } from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: 'AI-Powered Products',
    description: 'Full-stack applications with intelligent features—chatbots, content generation, data analysis, and more.',
  },
  {
    icon: Workflow,
    title: 'Automation Systems',
    description: 'End-to-end workflow automation using n8n, Zapier, and custom scripts. Save hours, scale infinitely.',
  },
  {
    icon: Palette,
    title: 'Creative Tools',
    description: 'Design and content tools that enhance creativity—from AI art generators to prompt libraries.',
  },
  {
    icon: Rocket,
    title: 'SaaS & MVPs',
    description: 'Rapid prototyping and production-ready SaaS products. Built to monetize from day one.',
  },
];

const WhatIBuildSection = () => {
  return (
    <section id="what-i-build" className="py-24 md:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-label">What I Build</span>
          <h2 className="section-heading">
            Products that solve problems
            <br />
            and generate revenue.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card-hover p-8"
            >
              <div className="feature-icon mb-6">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIBuildSection;

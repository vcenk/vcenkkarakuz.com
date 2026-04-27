'use client';

import { motion } from 'framer-motion';
import { Box, Globe, Workflow, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Box,
    title: 'SaaS Development',
    description: 'Full-stack product builds from idea to paying customers. React, TypeScript, Supabase, payments, AI — the whole stack, owned by you.',
    href: '/services/saas-development',
    featured: true,
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Marketing sites and landing pages that load fast, convert, and look like you spent a lot more than you did.',
    href: '/services/web-development',
  },
  {
    icon: Workflow,
    title: 'n8n Automation',
    description: 'Workflow automations that remove manual work — lead routing, AI content pipelines, reporting, CRM sync.',
    href: '/services/n8n-automation',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <span className="section-label">Services</span>
            <h2 className="section-heading">
              Three things,
              <br />
              done properly.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-sm md:text-right"
          >
            Focused on a small set of services so each one is delivered well — not a long menu of generic offerings.
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
              className={`glass-card-hover group p-8 relative overflow-hidden flex flex-col ${
                service.featured ? 'lg:row-span-1 border-accent/30' : ''
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="w-12 h-12 rounded-xl bg-secondary/50 border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-6 h-6 text-foreground group-hover:text-accent transition-colors" />
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-accent transition-colors">
                {service.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed text-sm mb-8 flex-1">
                {service.description}
              </p>

              <Link
                href={service.href}
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent group-hover:gap-3 transition-all w-fit"
              >
                Learn more
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Not sure which fits? Let's talk it through.
          </p>
          <a href="#contact" className="btn-primary inline-flex">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

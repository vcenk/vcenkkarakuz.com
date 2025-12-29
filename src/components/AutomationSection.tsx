import { motion } from 'framer-motion';
import { Workflow, Bot, Link2, Eye, MessageSquare } from 'lucide-react';

const automations = [
  {
    icon: Workflow,
    title: 'n8n Workflow Bundles',
    description: 'Pre-built automation workflows for lead gen, content distribution, and data sync.',
    cta: 'View Bundles',
    ctaType: 'view' as const,
  },
  {
    icon: Bot,
    title: 'AI Agent Pipelines',
    description: 'Intelligent agents that handle research, outreach, and customer support autonomously.',
    cta: 'Request Access',
    ctaType: 'request' as const,
  },
  {
    icon: Link2,
    title: 'Integration Frameworks',
    description: 'Connect your stack—CRMs, databases, APIs—with modular integration templates.',
    cta: 'View Frameworks',
    ctaType: 'view' as const,
  },
];

const AutomationSection = () => {
  return (
    <section id="automation" className="py-24 md:py-32 bg-secondary/30">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-label">Automation & Systems</span>
            <h2 className="section-heading mb-6">
              Build once,
              <br />
              run forever.
            </h2>
            <p className="section-subheading mb-8">
              I design automation systems that replace manual work with intelligent workflows. Whether it's lead generation, data pipelines, or content distribution—automate it all.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">
                Discuss a Project
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {automations.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 flex items-start gap-4"
              >
                <item.icon className="w-8 h-8 text-accent flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="font-display font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                  <button className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
                    item.ctaType === 'view' 
                      ? 'text-accent hover:text-accent/80' 
                      : 'text-primary hover:text-primary/80'
                  }`}>
                    {item.ctaType === 'request' ? <MessageSquare className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    {item.cta}
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AutomationSection;

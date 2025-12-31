import { motion } from 'framer-motion';
import { Search, MessageSquare, Rocket, CheckCircle, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Browse & Choose',
    description: 'Explore our templates and components. Found what you need? Great! Need something custom? Even better.',
    action: 'Browse Shop',
    actionLink: '/shop',
    color: 'blue',
  },
  {
    icon: MessageSquare,
    number: '02',
    title: 'Purchase or Chat',
    description: "Buy a template instantly, or let's talk about your custom project. Quick discovery call to understand your needs.",
    action: 'Contact Me',
    actionLink: '#contact',
    color: 'purple',
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Get & Build',
    description: 'Download your files instantly, or I start building your custom solution. Regular updates, clear communication.',
    action: 'See Pricing',
    actionLink: '#pricing',
    color: 'green',
  },
  {
    icon: CheckCircle,
    number: '04',
    title: 'Ship & Succeed',
    description: 'Launch your product faster. Get 30 days of support. Own the code forever. No subscriptions, no surprises.',
    action: 'View FAQ',
    actionLink: '#faq',
    color: 'accent',
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-label mx-auto">
              <Rocket className="w-4 h-4" />
              How It Works
            </span>
            <h2 className="section-heading mt-4 mb-6">
              From idea to launch
              <br />
              <span className="gradient-text">in 4 simple steps</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Whether you're buying a template or hiring for custom work, the process is simple and transparent.
            </p>
          </motion.div>
        </div>

        {/* Steps Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting Lines (hidden on mobile) */}
            <div className="hidden lg:block absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative"
                >
                  {/* Card */}
                  <div className="glass-card p-8 h-full flex flex-col relative overflow-hidden group hover:border-accent/30 transition-all">
                    {/* Number Background */}
                    <div className="absolute top-4 right-4 text-8xl font-display font-bold text-foreground/5 select-none">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className={`relative z-10 w-14 h-14 rounded-xl bg-${step.color === 'accent' ? 'accent' : step.color === 'blue' ? 'blue-500' : step.color === 'purple' ? 'purple-500' : 'green-500'}/10 border border-${step.color === 'accent' ? 'accent' : step.color === 'blue' ? 'blue-500' : step.color === 'purple' ? 'purple-500' : 'green-500'}/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-7 h-7 text-${step.color === 'accent' ? 'accent' : step.color === 'blue' ? 'blue-500' : step.color === 'purple' ? 'purple-500' : 'green-500'}`} />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 flex-1 flex flex-col">
                      <div className="text-xs font-bold text-muted-foreground tracking-wider mb-2">
                        STEP {step.number}
                      </div>
                      <h3 className="text-xl font-display font-bold mb-3 group-hover:text-accent transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                        {step.description}
                      </p>

                      {/* Action Link */}
                      <a
                        href={step.actionLink}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all"
                      >
                        {step.action}
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  </div>

                  {/* Arrow Between Steps (hidden on last step and mobile) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-16 -right-4 z-20">
                      <div className="w-8 h-8 rounded-full bg-background border-2 border-border flex items-center justify-center">
                        <ArrowRight className="w-4 h-4 text-accent" />
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20 pt-16 border-t border-border/50"
        >
          <h3 className="text-2xl font-display font-bold mb-4">Ready to get started?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of developers and founders who've shipped faster with our templates and custom solutions.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/shop" className="btn-primary">
              Browse Templates
            </a>
            <a href="#contact" className="btn-secondary">
              Discuss Custom Project
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

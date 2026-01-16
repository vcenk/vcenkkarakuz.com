import { motion } from 'framer-motion';
import { Check, ArrowRight, Zap, Sparkles, Crown } from 'lucide-react';

const pricingTiers = [
  {
    name: 'Digital Products',
    icon: Sparkles,
    price: 39,
    priceLabel: 'from $39',
    description: 'Ready-to-use templates and components',
    features: [
      'Landing page templates',
      'UI component libraries',
      'Animation kits',
      'AI prompt libraries',
      'Lifetime updates',
      'Documentation included',
    ],
    cta: 'Browse Shop',
    ctaLink: '/shop',
    popular: false,
    color: 'accent',
  },
  {
    name: 'Custom Build',
    icon: Zap,
    price: 1497,
    priceLabel: '$1,497',
    description: 'Custom landing page or app built for you',
    features: [
      'Custom React/TypeScript app',
      'Tailwind CSS + Framer Motion',
      'Responsive & mobile-optimized',
      'SEO optimization',
      '2-week delivery',
      '2 rounds of revisions',
      'Source code included',
      '30 days of support',
    ],
    cta: 'Get Started',
    ctaLink: '#contact',
    popular: true,
    color: 'primary',
  },
  {
    name: 'Retainer',
    icon: Crown,
    price: 5000,
    priceLabel: 'from $5K/mo',
    description: 'Ongoing development and support',
    features: [
      'Dedicated development time',
      'Priority support (24h response)',
      'Multiple projects per month',
      'AI automation workflows',
      'Full-stack development',
      'Code reviews & consulting',
      'Monthly strategy calls',
      'Flexible scope',
    ],
    cta: 'Book a Call',
    ctaLink: '#contact', // TODO: Replace with actual Calendly link
    popular: false,
    color: 'green',
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-label mx-auto">Pricing</span>
            <h2 className="section-heading mt-4 mb-6">
              Choose the perfect plan
              <br />
              <span className="gradient-text">for your project</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              From ready-made products to fully custom solutions. No hidden fees, no surprises.
            </p>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingTiers.map((tier, index) => {
            const Icon = tier.icon;

            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative glass-card p-8 flex flex-col ${
                  tier.popular ? 'border-2 border-accent shadow-lg shadow-accent/10' : ''
                }`}
              >
                {/* Popular Badge */}
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-background text-xs font-bold rounded-full">
                    MOST POPULAR
                  </div>
                )}

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-${tier.color}/10 border border-${tier.color}/20 flex items-center justify-center mb-6`}>
                  <Icon className={`w-6 h-6 text-${tier.color === 'accent' ? 'accent' : tier.color === 'green' ? 'green-500' : 'primary'}`} />
                </div>

                {/* Tier Name */}
                <h3 className="text-2xl font-display font-bold mb-2">{tier.name}</h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-6">{tier.description}</p>

                {/* Price */}
                <div className="mb-8">
                  <div className="text-4xl font-display font-bold">
                    {tier.priceLabel}
                  </div>
                  {tier.name !== 'Digital Products' && (
                    <p className="text-sm text-muted-foreground mt-1">
                      {tier.name === 'Retainer' ? 'per month' : 'one-time'}
                    </p>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8 flex-grow">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href={tier.ctaLink}
                  className={`${
                    tier.popular
                      ? 'btn-primary w-full justify-center'
                      : 'btn-secondary w-full justify-center'
                  }`}
                  target={tier.ctaLink.startsWith('http') ? '_blank' : undefined}
                  rel={tier.ctaLink.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {tier.cta}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-16 border-t border-border/50"
        >
          <p className="text-muted-foreground mb-4">
            Not sure which option is right for you?
          </p>
          <a href="#contact" className="btn-secondary inline-flex">
            Let's Talk
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;

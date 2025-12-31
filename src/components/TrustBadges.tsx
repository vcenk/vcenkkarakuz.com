import { motion } from 'framer-motion';
import { Shield, Zap, Users, Award } from 'lucide-react';

const badges = [
  {
    icon: Users,
    label: '500+ Customers',
    description: 'Trusted by developers worldwide',
  },
  {
    icon: Shield,
    label: '14-Day Guarantee',
    description: 'Money-back if not satisfied',
  },
  {
    icon: Zap,
    label: 'Instant Access',
    description: 'Download immediately after purchase',
  },
  {
    icon: Award,
    label: 'Lifetime Updates',
    description: 'All future improvements included',
  },
];

const TrustBadges = () => {
  return (
    <section className="py-16 border-y border-border/50 bg-secondary/10">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {badges.map((badge, index) => {
            const Icon = badge.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <div className="font-semibold text-sm mb-1">{badge.label}</div>
                <div className="text-xs text-muted-foreground">{badge.description}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;

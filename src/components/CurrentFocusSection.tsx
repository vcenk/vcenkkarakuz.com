import { motion } from 'framer-motion';
import { Film, Briefcase, Palette, Users } from 'lucide-react';

const buildingItems = [
  {
    icon: Film,
    title: 'AI Media Generation Platform',
    description: 'A unified tool for generating images, videos, and music using state-of-the-art AI models.',
  },
  {
    icon: Briefcase,
    title: 'Extensions to Job Foxy',
    description: 'New features for smarter job matching, resume optimization, and interview prep.',
  },
  {
    icon: Palette,
    title: 'UI + Animation Libraries',
    description: 'Reusable component libraries with beautiful animations for faster development.',
  },
  {
    icon: Users,
    title: 'Community Launch',
    description: 'Building a space for creators and builders to share workflows, prompts, and resources.',
  },
];

const CurrentFocusSection = () => {
  return (
    <section id="focus" className="py-24 md:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-label">Currently Building</span>
          <h2 className="section-heading">
            What I'm working on
            <br />
            right now.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {buildingItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-6 rounded-2xl border border-border hover:border-accent/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <item.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-lg font-display font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentFocusSection;

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const CommunitySection = () => {
  return (
    <section id="community" className="py-20 md:py-28">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent/20 via-accent/10 to-transparent border border-accent/20 p-10 md:p-16 text-center"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--accent)/0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--primary)/0.1),transparent_50%)]" />
          
          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
              className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6"
            >
              <Sparkles className="w-7 h-7 text-accent" />
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Join the Community
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
              Get access to exclusive workflows, prompt drops, and early products.
            </p>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-accent-foreground font-semibold text-lg hover:bg-accent/90 transition-colors"
            >
              Join Waitlist
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitySection;

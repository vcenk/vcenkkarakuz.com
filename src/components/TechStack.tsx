import { motion } from 'framer-motion';

const technologies = [
  "Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", 
  "Supabase", "OpenAI", "Stripe", "n8n", "Node.js", "PostgreSQL", "Vite"
];

const TechStack = () => {
  return (
    <section className="py-10 border-y border-white/5 bg-black/20 backdrop-blur-sm overflow-hidden relative z-20">
      <div className="section-container">
        <p className="text-center text-xs font-medium text-muted-foreground/60 mb-8 uppercase tracking-[0.2em]">
          Powering next-gen applications with
        </p>
        
        <div className="relative flex overflow-hidden mask-gradient-x">
          {/* Gradient Masks for edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

          {/* Marquee Track */}
          <motion.div 
            className="flex gap-12 md:gap-20 items-center whitespace-nowrap"
            animate={{ x: [0, -1000] }}
            transition={{ 
              repeat: Infinity, 
              ease: "linear", 
              duration: 50 // Adjust speed (higher = slower)
            }}
          >
            {/* Repeat list 3 times to create seamless loop */}
            {[...technologies, ...technologies, ...technologies].map((tech, index) => (
              <span 
                key={index} 
                className="text-xl md:text-2xl font-display font-bold text-muted-foreground/40 hover:text-foreground transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
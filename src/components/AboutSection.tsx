import { motion } from 'framer-motion';

const skills = [
  'React', 'TypeScript', 'Python', 'Node.js',
  'n8n', 'OpenAI', 'Supabase', 'Tailwind CSS',
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-secondary/30">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-label">About</span>
            <h2 className="section-heading mb-6">
              Builder, problem solver,
              <br />
              automation enthusiast.
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm Cenk—a full-stack developer focused on building AI-powered products and automation systems that solve real problems and generate real revenue.
              </p>
              <p>
                My approach is simple: ship fast, iterate often, and always build with scalability in mind. Every product I create is designed to be monetization-ready from day one.
              </p>
              <p>
                When I'm not coding, I'm exploring new AI models, optimizing workflows, or sharing what I learn through resources and tools.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="glass-card p-8">
              <h3 className="font-display font-semibold text-lg mb-6">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="divider my-8" />

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-display font-bold text-accent">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-accent">100%</div>
                  <div className="text-sm text-muted-foreground">Remote</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

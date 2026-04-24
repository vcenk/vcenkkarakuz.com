import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const work = [
  {
    title: 'Job Foxy',
    tagline: 'AI job application assistant',
    description: 'A web app that helps candidates generate stronger application material faster and keep every opportunity organized in one workflow.',
    tags: ['SaaS', 'AI', 'React'],
    href: '/case-studies/jobfoxy',
    liveUrl: 'https://jobfoxy.com',
  },
  {
    title: 'photovid.studio',
    tagline: 'AI media generation product',
    description: 'AI-powered image and video generation with a simple user journey and usage-based monetization.',
    tags: ['SaaS', 'AI', 'Media'],
    href: '/case-studies/photovid-studio',
    liveUrl: 'https://photovid.studio',
  },
];

const SelectedWork = () => {
  return (
    <section id="work" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <span className="section-label">Selected Work</span>
            <h2 className="section-heading mt-2">
              Recent things
              <br />
              I've shipped.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-sm md:text-right"
          >
            A few projects I've built end-to-end. Each one is live and in use.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {work.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col bg-white/5 dark:bg-black/20 backdrop-blur-xl border border-white/10 dark:border-white/5 rounded-3xl overflow-hidden shadow-2xl hover:shadow-accent/10 hover:border-accent/30 transition-all duration-500"
            >
              <Link to={project.href} className="relative aspect-[16/10] overflow-hidden block bg-gradient-to-br from-accent/10 via-secondary/30 to-primary/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-5xl md:text-6xl font-bold text-foreground/10 group-hover:text-foreground/20 transition-colors duration-500">
                    {project.title}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-muted-foreground bg-secondary/40 rounded-full border border-border/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link to={project.href}>
                  <h3 className="font-display text-2xl font-bold mb-2 leading-tight group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                </Link>

                <p className="text-sm text-accent mb-3">{project.tagline}</p>

                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex items-center gap-4 mt-auto">
                  <Link
                    to={project.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent transition-colors"
                  >
                    Read case study
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Visit live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;

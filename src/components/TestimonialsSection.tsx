import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Founder @ AI Startup',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    content:
      'Saved us 3 weeks of development time. The AI landing page template was exactly what we needed to launch our beta. Clean code, great documentation.',
    rating: 5,
    project: 'AI SaaS Landing Page Kit',
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Head of Engineering @ TechCo',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    content:
      'The GPT chat interface components are production-ready. Integrated in 30 minutes, saved hundreds of hours building from scratch. Worth every penny.',
    rating: 5,
    project: 'GPT Chat UI Components',
  },
  {
    name: 'Emily Watson',
    role: 'Product Manager @ StartupX',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    content:
      'Built our entire MVP landing page in 2 days using the templates. Customers love the smooth animations. Highly recommend for fast-moving teams.',
    rating: 5,
    project: 'Custom Landing Page',
  },
  {
    name: 'David Kim',
    role: 'Solo Founder',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    content:
      "The n8n automation workflows paid for themselves in the first week. I'm now handling 10x more leads with zero manual work. Game changer.",
    rating: 5,
    project: 'AI Lead Enrichment Workflow',
  },
  {
    name: 'Lisa Park',
    role: 'Design Lead @ Agency',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop',
    content:
      'Finally, templates that don\'t look like templates. The design quality is agency-level. Our clients keep asking "who designed this?"',
    rating: 5,
    project: 'UI Component Library',
  },
  {
    name: 'Alex Turner',
    role: 'CTO @ Scale Corp',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    content:
      'Hired for a custom React dashboard. Delivered ahead of schedule, below budget, and exceeded expectations. Will definitely work together again.',
    rating: 5,
    project: 'Custom Dashboard Build',
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32 relative overflow-hidden bg-secondary/20">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-label mx-auto">
              <Star className="w-4 h-4 text-yellow-500" />
              Testimonials
            </span>
            <h2 className="section-heading mt-4 mb-6">
              Trusted by builders
              <br />
              <span className="gradient-text">shipping great products</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Real feedback from founders, engineers, and designers who've used our products.
            </p>
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-16 h-16 text-accent" />
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              {/* Content */}
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed relative z-10">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-border"
                />
                <div>
                  <div className="font-semibold text-sm">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>

              {/* Project Tag */}
              <div className="mt-4">
                <span className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                  {testimonial.project}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-20 border-t border-border/50 max-w-4xl mx-auto"
        >
          {[
            { value: '500+', label: 'Happy Customers' },
            { value: '4.9/5', label: 'Average Rating' },
            { value: '13+', label: 'Ready Products' },
            { value: '100%', label: 'Satisfaction Rate' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-display font-bold text-accent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

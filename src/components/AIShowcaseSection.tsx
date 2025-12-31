import { motion } from 'framer-motion';
import { Code2, Sparkles, Zap, MessageSquare } from 'lucide-react';
import { useState } from 'react';

const showcaseItems = [
  {
    id: 'chat-interface',
    icon: MessageSquare,
    title: 'AI Chat Interface',
    description: 'ChatGPT-style UI with streaming responses',
    color: 'accent',
    demo: {
      type: 'chat',
      messages: [
        { role: 'user', content: 'How do I integrate OpenAI into my React app?' },
        {
          role: 'assistant',
          content: "Here's a quick example:\n\n```javascript\nimport OpenAI from 'openai';\n\nconst openai = new OpenAI({\n  apiKey: process.env.OPENAI_API_KEY\n});\n\nconst completion = await openai.chat.completions.create({\n  model: 'gpt-4',\n  messages: [{ role: 'user', content: 'Hello!' }]\n});\n```\n\nThis component includes:\n• Streaming responses\n• Syntax highlighting\n• Copy-to-clipboard\n• Mobile responsive",
        },
      ],
    },
  },
  {
    id: 'animated-gradient',
    icon: Sparkles,
    title: 'AI-Themed Gradients',
    description: 'Dynamic backgrounds for AI products',
    color: 'primary',
    demo: {
      type: 'gradient',
    },
  },
  {
    id: 'pricing-table',
    icon: Zap,
    title: 'Smart Pricing Tables',
    description: 'Feature comparison with hover effects',
    color: 'green',
    demo: {
      type: 'pricing',
      tiers: [
        { name: 'Starter', price: '$29', features: ['GPT-3.5', '1K req/mo', 'Email support'] },
        { name: 'Pro', price: '$99', features: ['GPT-4', '10K req/mo', 'Priority support'] },
      ],
    },
  },
];

const AIShowcaseSection = () => {
  const [activeDemo, setActiveDemo] = useState(showcaseItems[0].id);

  const activeItem = showcaseItems.find((item) => item.id === activeDemo);

  return (
    <section id="showcase" className="py-24 md:py-32 relative overflow-hidden bg-secondary/20">
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
              <Code2 className="w-4 h-4" />
              Live Demos
            </span>
            <h2 className="section-heading mt-4 mb-6">
              See what you'll get
              <br />
              <span className="gradient-text">in action</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Interactive examples of components and features you can use in your AI products.
            </p>
          </motion.div>
        </div>

        {/* Demo Tabs + Preview */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: Demo Selector */}
          <div className="space-y-3">
            {showcaseItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeDemo === item.id;

              return (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setActiveDemo(item.id)}
                  className={`w-full text-left p-6 rounded-xl transition-all ${
                    isActive
                      ? 'glass-card border-2 border-accent/50 shadow-lg shadow-accent/10'
                      : 'bg-secondary/30 hover:bg-secondary/50'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        isActive ? 'bg-accent/20' : 'bg-secondary/50'
                      }`}
                    >
                      <Icon className={`w-5 h-5 ${isActive ? 'text-accent' : 'text-foreground'}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-semibold mb-1 ${isActive ? 'text-accent' : ''}`}>
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Right: Demo Preview */}
          <motion.div
            key={activeDemo}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-2 glass-card p-8 min-h-[500px] relative overflow-hidden"
          >
            {/* Demo Content */}
            {activeItem?.demo.type === 'chat' && (
              <div className="space-y-4">
                {activeItem.demo.messages?.map((message, idx) => (
                  <div
                    key={idx}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-4 rounded-2xl ${
                        message.role === 'user'
                          ? 'bg-accent text-background'
                          : 'bg-secondary/50 text-foreground'
                      }`}
                    >
                      <div className="text-xs font-semibold mb-2 opacity-70">
                        {message.role === 'user' ? 'You' : 'AI Assistant'}
                      </div>
                      <div className="text-sm whitespace-pre-wrap font-mono leading-relaxed">
                        {message.content}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeItem?.demo.type === 'gradient' && (
              <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                  }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent/30 via-primary/20 to-purple-500/20 blur-3xl"
                />
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    rotate: [0, -90, 0],
                  }}
                  transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                  className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-blue-500/20 via-accent/20 to-pink-500/20 blur-3xl"
                />
                <div className="relative z-10 flex items-center justify-center h-full">
                  <div className="text-center">
                    <h3 className="text-3xl font-display font-bold mb-4">
                      Beautiful AI Gradients
                    </h3>
                    <p className="text-muted-foreground">
                      Perfect for hero sections and backgrounds
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeItem?.demo.type === 'pricing' && (
              <div className="grid md:grid-cols-2 gap-6">
                {activeItem.demo.tiers?.map((tier, idx) => (
                  <motion.div
                    key={tier.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-secondary/30 p-6 rounded-xl border border-border/50 hover:border-accent/50 hover:bg-secondary/50 transition-all group"
                  >
                    <h4 className="text-xl font-display font-bold mb-2">{tier.name}</h4>
                    <div className="text-3xl font-bold text-accent mb-6">
                      {tier.price}
                      <span className="text-sm text-muted-foreground">/month</span>
                    </div>
                    <ul className="space-y-3">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm">
                          <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                            <span className="text-accent text-xs">✓</span>
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className="mt-6 w-full btn-secondary group-hover:btn-primary transition-all">
                      Get Started
                    </button>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Code Badge */}
            <div className="absolute bottom-4 right-4">
              <div className="px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full border border-border text-xs text-muted-foreground">
                React + TypeScript + Tailwind
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">Like what you see?</p>
          <a href="/shop" className="btn-primary inline-flex">
            Browse All Components
          </a>
        </div>
      </div>
    </section>
  );
};

export default AIShowcaseSection;

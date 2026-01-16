import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Filter, Sparkles, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimationCard from '@/components/ui/AnimationCard';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

// --- NEW PREVIEWS ---
const SlideInRightPreview = () => (
  <motion.div
    animate={{ x: [50, 0, 50] }}
    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
    className="w-16 h-16 rounded-lg bg-gradient-to-l from-primary to-accent shadow-lg"
  />
);

const WigglePreview = () => (
  <motion.div
    animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
    className="w-16 h-16 rounded-xl bg-yellow-400/80 shadow-lg border-2 border-yellow-500/50"
  />
);

const BlurInPreview = () => (
  <motion.div
    animate={{ opacity: [0, 1, 0], filter: ["blur(10px)", "blur(0px)", "blur(10px)"] }}
    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    className="w-20 h-20 rounded-full bg-indigo-500 shadow-lg"
  />
);

const HeartbeatPreview = () => (
  <motion.div
    animate={{ scale: [1, 1.2, 1, 1.2, 1] }}
    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", times: [0, 0.1, 0.2, 0.3, 1] }}
    className="w-16 h-16 rounded-2xl bg-rose-500 shadow-lg rotate-45"
  />
);

// --- EXISTING PREVIEWS ---
const FadeInPreview = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse', repeatDelay: 1 }}
    className="w-24 h-24 rounded-xl bg-gradient-to-br from-accent to-accent/50 shadow-lg"
  />
);

const ScalePreview = () => (
  <motion.div
    animate={{ scale: [1, 1.2, 1] }}
    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
    className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary/50 shadow-lg"
  />
);

const RotatePreview = () => (
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
    className="w-20 h-20 rounded-lg bg-gradient-to-br from-secondary to-secondary/50 shadow-lg border-2 border-foreground/10"
  />
);

const StaggerPreview = () => (
  <div className="flex gap-2">
    {[0, 1, 2, 3].map((i) => (
      <motion.div
        key={i}
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.1, ease: 'easeInOut' }}
        className="w-4 h-4 rounded-full bg-accent"
      />
    ))}
  </div>
);

const SlidePreview = () => (
  <motion.div
    animate={{ x: [-40, 40, -40] }}
    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
    className="w-16 h-16 rounded-lg bg-gradient-to-r from-accent via-primary to-accent shadow-lg"
  />
);

const PulsePreview = () => (
  <motion.div
    animate={{
      boxShadow: [
        '0 0 0 0 rgba(var(--accent-rgb), 0.4)',
        '0 0 0 20px rgba(var(--accent-rgb), 0)',
      ],
    }}
    transition={{ duration: 1.5, repeat: Infinity }}
    className="w-20 h-20 rounded-full bg-accent flex items-center justify-center"
  >
    <div className="w-12 h-12 rounded-full bg-background" />
  </motion.div>
);

const BouncePreview = () => (
  <motion.div
    animate={{ y: [0, -30, 0] }}
    transition={{ duration: 0.8, repeat: Infinity, ease: 'easeOut' }}
    className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent shadow-lg"
  />
);

const ShakePreview = () => (
  <motion.div
    animate={{ x: [0, -5, 5, -5, 5, 0] }}
    transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
    className="w-20 h-20 rounded-lg bg-gradient-to-br from-destructive/80 to-destructive/40 shadow-lg"
  />
);

const FlipPreview = () => (
  <motion.div
    animate={{ rotateY: [0, 180, 360] }}
    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
    className="w-20 h-20 rounded-lg bg-gradient-to-br from-secondary to-primary shadow-lg"
    style={{ transformStyle: 'preserve-3d' }}
  />
);

const MorphPreview = () => (
  <motion.div
    animate={{ borderRadius: ['20%', '50%', '20%'], rotate: [0, 90, 0] }}
    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
    className="w-20 h-20 bg-gradient-to-br from-accent to-primary shadow-lg"
  />
);

// --- DATA & CONFIG ---
type AnimationType = 'free' | 'premium';

const animationExamples = [
  {
    type: 'free' as AnimationType,
    title: 'Fade In Up',
    description: 'Smooth fade with upward motion',
    preview: <FadeInPreview />,
    code: `import { motion } from 'framer-motion';

const FadeInUp = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    {children}
  </motion.div>
);`,
  },
  {
    type: 'free' as AnimationType,
    title: 'Slide In Right',
    description: 'Enters from the right side',
    preview: <SlideInRightPreview />,
    code: `import { motion } from 'framer-motion';

const SlideInRight = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);`,
  },
  {
    type: 'free' as AnimationType,
    title: 'Blur In',
    description: 'Unblurs while fading in',
    preview: <BlurInPreview />,
    code: `import { motion } from 'framer-motion';

const BlurIn = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, filter: "blur(10px)" }}
    animate={{ opacity: 1, filter: "blur(0px)" }}
    transition={{ duration: 0.8 }}
  >
    {children}
  </motion.div>
);`,
  },
  {
    type: 'free' as AnimationType,
    title: 'Scale Pulse',
    description: 'Breathing scale animation',
    preview: <ScalePreview />,
    code: `import { motion } from 'framer-motion';

const ScalePulse = ({ children }) => (
  <motion.div
    animate={{ scale: [1, 1.2, 1] }}
    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
  >
    {children}
  </motion.div>
);`,
  },
  {
    type: 'free' as AnimationType,
    title: 'Wiggle',
    description: 'Playful attention grabber',
    preview: <WigglePreview />,
    code: `import { motion } from 'framer-motion';

const Wiggle = ({ children }) => (
  <motion.div
    whileHover={{ rotate: [0, -10, 10, -10, 10, 0] }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);`,
  },
  {
    type: 'free' as AnimationType,
    title: 'Heartbeat',
    description: 'Quick double pulse',
    preview: <HeartbeatPreview />,
    code: `import { motion } from 'framer-motion';

const Heartbeat = ({ children }) => (
  <motion.div
    animate={{ scale: [1, 1.2, 1, 1.2, 1] }}
    transition={{ 
      duration: 1.5, 
      repeat: Infinity, 
      times: [0, 0.1, 0.2, 0.3, 1] 
    }}
  >
    {children}
  </motion.div>
);`,
  },
  {
    type: 'free' as AnimationType,
    title: 'Infinite Rotate',
    description: 'Continuous rotation animation',
    preview: <RotatePreview />,
    code: `import { motion } from 'framer-motion';

const InfiniteRotate = ({ children }) => (
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
  >
    {children}
  </motion.div>
);`,
  },
  {
    type: 'free' as AnimationType,
    title: 'Stagger Dots',
    description: 'Loading indicator with stagger',
    preview: <StaggerPreview />,
    code: `import { motion } from 'framer-motion';

const StaggerDots = () => (
  <div className="flex gap-2">
    {[0, 1, 2, 3].map((i) => (
      <motion.div
        key={i}
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.1, ease: 'easeInOut' }}
        className="w-4 h-4 rounded-full bg-accent"
      />
    ))}
  </div>
);`,
  },
  {
    type: 'free' as AnimationType,
    title: 'Slide Loop',
    description: 'Horizontal sliding motion',
    preview: <SlidePreview />,
    code: `import { motion } from 'framer-motion';

const SlideLoop = ({ children }) => (
  <motion.div
    animate={{ x: [-40, 40, -40] }}
    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
  >
    {children}
  </motion.div>
);`,
  },
  {
    type: 'free' as AnimationType,
    title: 'Ripple Effect',
    description: 'Expanding ring pulse',
    preview: <PulsePreview />,
    code: `import { motion } from 'framer-motion';

const RippleEffect = () => (
  <motion.div
    animate={{
      boxShadow: [
        '0 0 0 0 rgba(var(--accent-rgb), 0.4)',
        '0 0 0 20px rgba(var(--accent-rgb), 0)',
      ],
    }}
    transition={{ duration: 1.5, repeat: Infinity }}
    className="w-20 h-20 rounded-full bg-accent"
  />
);`,
  },
  {
    type: 'free' as AnimationType,
    title: 'Bounce',
    description: 'Elastic bounce effect',
    preview: <BouncePreview />,
    code: `import { motion } from 'framer-motion';

const Bounce = ({ children }) => (
  <motion.div
    animate={{ y: [0, -30, 0] }}
    transition={{ duration: 0.8, repeat: Infinity, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
);`,
  },
  {
    type: 'free' as AnimationType,
    title: 'Shake',
    description: 'Attention-grabbing shake',
    preview: <ShakePreview />,
    code: `import { motion } from 'framer-motion';

const Shake = ({ children }) => (
  <motion.div
    animate={{ x: [0, -5, 5, -5, 5, 0] }}
    transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
  >
    {children}
  </motion.div>
);`,
  },
  {
    type: 'free' as AnimationType,
    title: '3D Flip',
    description: 'Card flip animation',
    preview: <FlipPreview />,
    code: `import { motion } from 'framer-motion';

const Flip3D = ({ children }) => (
  <motion.div
    animate={{ rotateY: [0, 180, 360] }}
    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
    style={{ transformStyle: 'preserve-3d' }}
  >
    {children}
  </motion.div>
);`,
  },
  {
    type: 'free' as AnimationType,
    title: 'Morph Shape',
    description: 'Shape-shifting animation',
    preview: <MorphPreview />,
    code: `import { motion } from 'framer-motion';

const MorphShape = () => (
  <motion.div
    animate={{ borderRadius: ['20%', '50%', '20%'], rotate: [0, 90, 0] }}
    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
    className="w-20 h-20 bg-gradient-to-br from-accent to-primary"
  />
);`,
  },
];

const AnimationLibrary = () => {
  const [filter, setFilter] = useState<'all' | 'free' | 'premium'>('all');

  const filteredAnimations = animationExamples.filter(
    (item) => filter === 'all' || item.type === filter
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="section-container">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <span className="section-label">UI Components</span>
            <h1 className="section-heading mb-4">
              Animation Library
            </h1>
            <p className="section-subheading mx-auto mb-8">
              Production-ready animation components. 
              Copy-paste and ship.
            </p>

            {/* Filter Controls */}
            <div className="inline-flex items-center gap-1 p-1 rounded-full bg-secondary/50 border border-border">
              {[
                { id: 'all', label: 'All', icon: Filter },
                { id: 'free', label: 'Free', icon: Zap },
                { id: 'premium', label: 'Premium', icon: Sparkles },
              ].map((f) => (
                <button
                  key={f.id}
                  onClick={() => setFilter(f.id as typeof filter)}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                    filter === f.id
                      ? 'text-background'
                      : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                  }`}
                >
                  {filter === f.id && (
                    <motion.div
                      layoutId="activeFilter"
                      className="absolute inset-0 bg-foreground rounded-full shadow-lg"
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <f.icon className="w-3.5 h-3.5" />
                    {f.label}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredAnimations.map((example, index) => (
                <motion.div
                  key={example.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <AnimationCard
                    title={example.title}
                    description={example.description}
                    preview={example.preview}
                    code={example.code}
                    installation={example.installation}
                    aiPrompt={example.aiPrompt}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          {filteredAnimations.length === 0 && (
            <div className="py-20 text-center text-muted-foreground">
              No animations found for this category.
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AnimationLibrary;
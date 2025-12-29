import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimationCard from '@/components/ui/AnimationCard';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

// Sample animation previews
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
        transition={{
          duration: 0.6,
          repeat: Infinity,
          delay: i * 0.1,
          ease: 'easeInOut',
        }}
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
    animate={{ 
      borderRadius: ['20%', '50%', '20%'],
      rotate: [0, 90, 0]
    }}
    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
    className="w-20 h-20 bg-gradient-to-br from-accent to-primary shadow-lg"
  />
);

// Animation data with code samples
const animationExamples = [
  {
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
    title: 'Scale Pulse',
    description: 'Breathing scale animation',
    preview: <ScalePreview />,
    code: `import { motion } from 'framer-motion';

const ScalePulse = ({ children }) => (
  <motion.div
    animate={{ scale: [1, 1.2, 1] }}
    transition={{ 
      duration: 1.5, 
      repeat: Infinity, 
      ease: 'easeInOut' 
    }}
  >
    {children}
  </motion.div>
);`,
  },
  {
    title: 'Infinite Rotate',
    description: 'Continuous rotation animation',
    preview: <RotatePreview />,
    code: `import { motion } from 'framer-motion';

const InfiniteRotate = ({ children }) => (
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ 
      duration: 2, 
      repeat: Infinity, 
      ease: 'linear' 
    }}
  >
    {children}
  </motion.div>
);`,
  },
  {
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
        transition={{
          duration: 0.6,
          repeat: Infinity,
          delay: i * 0.1,
          ease: 'easeInOut',
        }}
        className="w-4 h-4 rounded-full bg-accent"
      />
    ))}
  </div>
);`,
  },
  {
    title: 'Slide Loop',
    description: 'Horizontal sliding motion',
    preview: <SlidePreview />,
    code: `import { motion } from 'framer-motion';

const SlideLoop = ({ children }) => (
  <motion.div
    animate={{ x: [-40, 40, -40] }}
    transition={{ 
      duration: 2, 
      repeat: Infinity, 
      ease: 'easeInOut' 
    }}
  >
    {children}
  </motion.div>
);`,
  },
  {
    title: 'Ripple Effect',
    description: 'Expanding ring pulse',
    preview: <PulsePreview />,
    code: `import { motion } from 'framer-motion';

const RippleEffect = () => (
  <motion.div
    animate={{
      boxShadow: [
        '0 0 0 0 rgba(99, 102, 241, 0.4)',
        '0 0 0 20px rgba(99, 102, 241, 0)',
      ],
    }}
    transition={{ duration: 1.5, repeat: Infinity }}
    className="w-20 h-20 rounded-full bg-accent"
  />
);`,
  },
  {
    title: 'Bounce',
    description: 'Elastic bounce effect',
    preview: <BouncePreview />,
    code: `import { motion } from 'framer-motion';

const Bounce = ({ children }) => (
  <motion.div
    animate={{ y: [0, -30, 0] }}
    transition={{ 
      duration: 0.8, 
      repeat: Infinity, 
      ease: 'easeOut' 
    }}
  >
    {children}
  </motion.div>
);`,
  },
  {
    title: 'Shake',
    description: 'Attention-grabbing shake',
    preview: <ShakePreview />,
    code: `import { motion } from 'framer-motion';

const Shake = ({ children }) => (
  <motion.div
    animate={{ x: [0, -5, 5, -5, 5, 0] }}
    transition={{ 
      duration: 0.5, 
      repeat: Infinity, 
      repeatDelay: 1 
    }}
  >
    {children}
  </motion.div>
);`,
  },
  {
    title: '3D Flip',
    description: 'Card flip animation',
    preview: <FlipPreview />,
    code: `import { motion } from 'framer-motion';

const Flip3D = ({ children }) => (
  <motion.div
    animate={{ rotateY: [0, 180, 360] }}
    transition={{ 
      duration: 2, 
      repeat: Infinity, 
      ease: 'easeInOut' 
    }}
    style={{ transformStyle: 'preserve-3d' }}
  >
    {children}
  </motion.div>
);`,
  },
  {
    title: 'Morph Shape',
    description: 'Shape-shifting animation',
    preview: <MorphPreview />,
    code: `import { motion } from 'framer-motion';

const MorphShape = () => (
  <motion.div
    animate={{ 
      borderRadius: ['20%', '50%', '20%'],
      rotate: [0, 90, 0]
    }}
    transition={{ 
      duration: 2, 
      repeat: Infinity, 
      ease: 'easeInOut' 
    }}
    className="w-20 h-20 bg-gradient-to-br from-accent to-primary"
  />
);`,
  },
];

const AnimationLibrary = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="section-container">
          {/* Back link */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="section-label">UI Components</span>
            <h1 className="section-heading mb-4">
              Animation Library
            </h1>
            <p className="section-subheading mx-auto">
              Production-ready animation components built with Framer Motion. 
              Preview, copy the code, and customize for your projects.
            </p>
          </motion.div>

          {/* Animation Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {animationExamples.map((example, index) => (
              <motion.div
                key={example.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <AnimationCard
                  title={example.title}
                  description={example.description}
                  preview={example.preview}
                  code={example.code}
                  playgroundUrl="https://codesandbox.io"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AnimationLibrary;

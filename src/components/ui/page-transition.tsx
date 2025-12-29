import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom"; 
// Note: For Next.js, you would use `usePathname` from 'next/navigation'

// 1. Variants Configuration
export const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98,
  },
  enter: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.61, 1, 0.88, 1], // Custom ease curve
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.98,
    transition: {
      duration: 0.3,
      ease: [0.61, 1, 0.88, 1],
    },
  },
};

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

// 2. Layout Wrapper Component
export function PageTransition({ children, className }: PageTransitionProps) {
  // For Next.js App Router, this key management is often handled automatically 
  // by template.tsx, but explicitly passing a key is safest for AnimatePresence.
  
  // In a real Next.js App Router setup:
  // Use `usePathname()` as the key.
  
  // In this Vite project (for demonstration):
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname} // Unique key triggers the animation
        initial="initial"
        animate="enter"
        exit="exit"
        variants={pageVariants}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

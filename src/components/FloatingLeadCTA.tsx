import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, X } from 'lucide-react';
import LeadMagnetModal from './LeadMagnetModal';

const FloatingLeadCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if user has already dismissed
    const dismissed = localStorage.getItem('leadMagnetDismissed');
    if (dismissed) {
      setIsDismissed(true);
      return;
    }

    // Show after scrolling 30% of the page
    const handleScroll = () => {
      const scrollPercentage =
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

      if (scrollPercentage > 30 && !isDismissed) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem('leadMagnetDismissed', 'true');
  };

  const handleOpen = () => {
    setIsModalOpen(true);
    setIsVisible(false);
  };

  if (isDismissed && !isModalOpen) return null;

  return (
    <>
      <AnimatePresence>
        {isVisible && !isModalOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: 'spring', duration: 0.6 }}
            className="fixed bottom-8 right-8 z-40 max-w-sm"
          >
            <div className="relative glass-card p-6 border-2 border-accent/20 shadow-lg shadow-accent/10">
              {/* Close Button */}
              <button
                onClick={handleDismiss}
                className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-background border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="Close"
              >
                <X className="w-3 h-3" />
              </button>

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                <Gift className="w-6 h-6 text-accent" />
              </div>

              {/* Content */}
              <h3 className="font-display text-lg font-bold mb-2">
                Free AI Prompts Pack
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Get 50 battle-tested prompts for ChatGPT, Claude & more. Zero spam guaranteed.
              </p>

              {/* CTA Button */}
              <button onClick={handleOpen} className="btn-primary w-full justify-center text-sm">
                Get Free Download
                <Gift className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <LeadMagnetModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default FloatingLeadCTA;

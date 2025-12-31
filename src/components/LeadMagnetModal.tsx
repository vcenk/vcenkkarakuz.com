import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Mail, Sparkles } from 'lucide-react';

interface LeadMagnetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LeadMagnetModal = ({ isOpen, onClose }: LeadMagnetModalProps) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call (replace with your email service)
    // Examples: ConvertKit, Mailchimp, EmailOctopus, etc.
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // TODO: Replace with actual email service integration
    console.log('Email submitted:', email);

    setIsLoading(false);
    setIsSubmitted(true);

    // Auto-close after success
    setTimeout(() => {
      onClose();
      setIsSubmitted(false);
      setEmail('');
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative glass-card p-8 md:p-12 max-w-lg w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-secondary/50 hover:bg-secondary flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Decorative Background Gradient */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-sm h-48 bg-accent/10 blur-[80px] rounded-full pointer-events-none" />

              {/* Content */}
              <div className="relative z-10">
                {!isSubmitted ? (
                  <>
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6 mx-auto">
                      <Sparkles className="w-8 h-8 text-accent" />
                    </div>

                    {/* Heading */}
                    <h2 className="text-3xl font-display font-bold text-center mb-4">
                      Get 50 AI Prompts
                      <br />
                      <span className="gradient-text">Absolutely Free</span>
                    </h2>

                    {/* Description */}
                    <p className="text-center text-muted-foreground mb-8">
                      Battle-tested prompts for developers, marketers, and content creators.
                      Perfect for ChatGPT, Claude, and other AI tools.
                    </p>

                    {/* What's Included */}
                    <div className="bg-secondary/30 rounded-xl p-6 mb-8">
                      <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
                        <Download className="w-4 h-4 text-accent" />
                        What you'll get:
                      </h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>50 curated AI prompts (Notion template)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>Weekly AI tips and product updates</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>Early access to new templates</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>Exclusive discounts on premium products</span>
                        </li>
                      </ul>
                    </div>

                    {/* Email Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                        <input
                          type="email"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="w-full pl-12 pr-4 py-3 bg-secondary/30 border border-border rounded-xl focus:outline-none focus:border-accent/50 transition-all"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isLoading}
                        className="btn-primary w-full justify-center"
                      >
                        {isLoading ? (
                          <>
                            <span className="animate-pulse">Sending...</span>
                          </>
                        ) : (
                          <>
                            Get Free Prompts
                            <Download className="w-4 h-4" />
                          </>
                        )}
                      </button>

                      <p className="text-xs text-center text-muted-foreground">
                        No spam. Unsubscribe anytime.
                      </p>
                    </form>
                  </>
                ) : (
                  // Success State
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-20 h-20 rounded-full bg-green-500/10 border-2 border-green-500 flex items-center justify-center mx-auto mb-6">
                      <svg
                        className="w-10 h-10 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>

                    <h3 className="text-2xl font-display font-bold mb-3">
                      Check Your Email!
                    </h3>
                    <p className="text-muted-foreground">
                      We've sent the AI Prompts to <strong>{email}</strong>
                      <br />
                      (Don't forget to check spam)
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default LeadMagnetModal;

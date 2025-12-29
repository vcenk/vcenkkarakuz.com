import { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Copy, Check } from 'lucide-react';
import { Highlight, themes } from 'prism-react-renderer';

interface AnimationCardProps {
  title: string;
  description?: string;
  code: string;
  language?: string;
  preview: ReactNode;
  playgroundUrl?: string;
}

const AnimationCard = ({
  title,
  description,
  code,
  language = 'tsx',
  preview,
  playgroundUrl = '#',
}: AnimationCardProps) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-lg shadow-black/5">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-muted/30">
        {/* Tabs */}
        <div className="flex items-center gap-1 p-1 rounded-lg bg-background/50 border border-border/50">
          <button
            onClick={() => setActiveTab('preview')}
            className={`relative px-4 py-1.5 text-sm font-medium rounded-md transition-all duration-200 ${
              activeTab === 'preview'
                ? 'text-foreground'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {activeTab === 'preview' && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-background rounded-md shadow-sm border border-border/50"
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            )}
            <span className="relative z-10">Preview</span>
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`relative px-4 py-1.5 text-sm font-medium rounded-md transition-all duration-200 ${
              activeTab === 'code'
                ? 'text-foreground'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {activeTab === 'code' && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-background rounded-md shadow-sm border border-border/50"
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            )}
            <span className="relative z-10">Code</span>
          </button>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {activeTab === 'code' && (
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground rounded-md hover:bg-background/50 transition-all duration-200"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-green-500" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  Copy
                </>
              )}
            </motion.button>
          )}
          <a
            href={playgroundUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground rounded-md hover:bg-background/50 transition-all duration-200 border border-border/50"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Open in Playground
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="relative min-h-[280px]">
        <AnimatePresence mode="wait">
          {activeTab === 'preview' ? (
            <motion.div
              key="preview"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="p-8 flex items-center justify-center min-h-[280px] bg-gradient-to-br from-background via-background to-muted/20"
            >
              <div className="flex flex-col items-center gap-4">
                {preview}
                {(title || description) && (
                  <div className="text-center mt-4">
                    {title && (
                      <h4 className="text-sm font-medium text-foreground">{title}</h4>
                    )}
                    {description && (
                      <p className="text-xs text-muted-foreground mt-1">{description}</p>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="code"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="p-4 min-h-[280px] bg-[#0d1117] overflow-auto"
            >
              <Highlight theme={themes.nightOwl} code={code.trim()} language={language}>
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                  <pre
                    className={`${className} text-sm leading-relaxed font-mono`}
                    style={{ ...style, background: 'transparent' }}
                  >
                    {tokens.map((line, i) => (
                      <div key={i} {...getLineProps({ line })} className="table-row">
                        <span className="table-cell pr-4 text-right text-muted-foreground/40 select-none text-xs">
                          {i + 1}
                        </span>
                        <span className="table-cell">
                          {line.map((token, key) => (
                            <span key={key} {...getTokenProps({ token })} />
                          ))}
                        </span>
                      </div>
                    ))}
                  </pre>
                )}
              </Highlight>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AnimationCard;

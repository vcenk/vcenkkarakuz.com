import { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Copy, Check, Terminal, Sparkles } from 'lucide-react';
import { Highlight, themes } from 'prism-react-renderer';

interface AnimationCardProps {
  title: string;
  description?: string;
  code: string;
  installation?: string; // New prop
  aiPrompt?: string;     // New prop
  language?: string;
  preview: ReactNode;
  playgroundUrl?: string;
}

const AnimationCard = ({
  title,
  description,
  code,
  installation,
  aiPrompt,
  language = 'tsx',
  preview,
  playgroundUrl = '#',
}: AnimationCardProps) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'code' | 'install' | 'prompt'>('preview');
  const [copied, setCopied] = useState(false);

  const handleCopy = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getCopyContent = () => {
    switch (activeTab) {
      case 'code': return code;
      case 'install': return installation || '';
      case 'prompt': return aiPrompt || '';
      default: return '';
    }
  };

  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-lg shadow-black/5">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between px-4 py-3 border-b border-border bg-muted/30 gap-4">
        {/* Tabs */}
        <div className="flex items-center gap-1 p-1 rounded-lg bg-background/50 border border-border/50 overflow-x-auto scrollbar-hide">
          {[
            { id: 'preview', label: 'Preview' },
            { id: 'code', label: 'Code' },
            ...(installation ? [{ id: 'install', label: 'Install' }] : []),
            ...(aiPrompt ? [{ id: 'prompt', label: 'AI Prompt', icon: Sparkles }] : []),
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`relative px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-200 whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === tab.id
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-background rounded-md shadow-sm border border-border/50"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                {tab.icon && <tab.icon className="w-3 h-3 text-accent" />}
                {tab.label}
              </span>
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {activeTab !== 'preview' && (
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={() => handleCopy(getCopyContent())}
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
        </div>
      </div>

      {/* Content */}
      <div className="relative min-h-[350px]">
        <AnimatePresence mode="wait">
          {activeTab === 'preview' ? (
            <motion.div
              key="preview"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="p-8 flex items-center justify-center min-h-[350px] bg-gradient-to-br from-background via-background to-muted/20 overflow-hidden"
            >
              <div className="flex flex-col items-center gap-6 w-full">
                {preview}
                {(title || description) && (
                  <div className="text-center">
                    {title && (
                      <h4 className="text-sm font-medium text-foreground">{title}</h4>
                    )}
                    {description && (
                      <p className="text-xs text-muted-foreground mt-1 max-w-xs mx-auto">{description}</p>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ) : activeTab === 'install' ? (
             <motion.div
              key="install"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="p-6 min-h-[350px] bg-[#0d1117] flex items-center justify-center"
            >
              <div className="w-full max-w-md">
                <div className="flex items-center gap-2 mb-4 text-muted-foreground text-sm">
                  <Terminal className="w-4 h-4" />
                  <span>Terminal</span>
                </div>
                <div className="bg-black/50 rounded-lg p-4 font-mono text-sm text-green-400 border border-white/10 relative group">
                   {installation}
                </div>
              </div>
            </motion.div>
          ) : activeTab === 'prompt' ? (
             <motion.div
              key="prompt"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="p-6 min-h-[350px] bg-secondary/10"
            >
              <div className="h-full flex flex-col">
                <div className="flex items-center gap-2 mb-4 text-accent text-sm font-medium">
                  <Sparkles className="w-4 h-4" />
                  <span>Prompt for AI (ChatGPT/Claude/v0)</span>
                </div>
                <div className="bg-background rounded-xl p-6 border border-border shadow-sm text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap font-mono">
                   {aiPrompt}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="code"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="p-4 min-h-[350px] bg-[#0d1117] overflow-auto max-h-[500px]"
            >
              <Highlight theme={themes.nightOwl} code={code.trim()} language={language}>
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                  <pre
                    className={`${className} text-sm leading-relaxed font-mono`}
                    style={{ ...style, background: 'transparent' }}
                  >
                    {tokens.map((line, i) => (
                      <div key={i} {...getLineProps({ line })} className="table-row">
                        <span className="table-cell pr-4 text-right text-muted-foreground/40 select-none text-xs w-8">
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
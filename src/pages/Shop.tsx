// src/pages/Shop.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingCart, Download, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { products, ProductType } from '@/data/products';

const categories: { id: ProductType; label: string }[] = [
  { id: 'all', label: 'All Assets' },
  { id: 'ui-components', label: 'UI Kits' },
  { id: 'landing-pages', label: 'Templates' },
  { id: 'workflows', label: 'n8n Workflows' },
  { id: 'prompts', label: 'AI Prompts' },
  { id: 'documents', label: 'Documents' },
];

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState<ProductType>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="section-container">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-4xl md:text-5xl font-bold mb-6"
            >
              Digital Assets for <span className="gradient-text">Builders</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground"
            >
              Production-ready UI kits, automation workflows, and templates to save you hundreds of hours.
            </motion.p>
          </div>

          {/* Controls */}
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12">
            <div className="relative w-full md:w-80 group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4 group-focus-within:text-accent transition-colors" />
              <input 
                type="text" 
                placeholder="Search assets..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-secondary/30 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
              />
            </div>
            
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-hide">
              {categories.map((cat) => (
                <button 
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                    activeCategory === cat.id 
                      ? 'bg-foreground text-background shadow-lg scale-105' 
                      : 'bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <motion.article
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card-hover group flex flex-col overflow-hidden h-full"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-secondary/50">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent opacity-80" />
                    
                    <div className="absolute top-3 right-3">
                      {product.isPremium ? (
                        <span className="badge-premium shadow-sm backdrop-blur-md">
                          ${product.price}
                        </span>
                      ) : (
                        <span className="badge-free shadow-sm backdrop-blur-md">
                          Free
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="p-5 flex flex-col flex-grow">
                    <div className="mb-4">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-[10px] uppercase tracking-wider font-semibold text-accent/80">
                           {categories.find(c => c.id === product.category)?.label}
                        </span>
                      </div>
                      <h3 className="text-lg font-display font-semibold group-hover:text-accent transition-colors leading-tight mb-2">
                        {product.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {product.description}
                      </p>
                    </div>

                    <div className="mt-auto pt-4 border-t border-border/50 flex gap-3">
                      {product.isLibrary ? (
                        <Link 
                          to="/animations" 
                          className="btn-secondary w-full justify-center text-sm py-2"
                        >
                          View Library
                        </Link>
                      ) : (
                        <>
                          <a 
                            href={product.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex-1 btn-primary justify-center text-sm py-2 ${!product.isPremium && 'bg-secondary text-foreground hover:bg-secondary/80'}`}
                          >
                            {product.isPremium ? (
                              <span className="flex items-center gap-2">
                                <ShoppingCart className="w-4 h-4" />
                                Buy Now
                              </span>
                            ) : (
                              <span className="flex items-center gap-2">
                                <Download className="w-4 h-4" />
                                Get Free
                              </span>
                            )}
                          </a>
                          {/* Corrected Link to Detail Page */}
                          <Link 
                            to={`/products/${product.slug}`}
                            className="p-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors" 
                            title="View Details"
                          >
                            <ArrowUpRight className="w-5 h-5" />
                          </Link>
                        </>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Shop;
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { products, ProductType } from '@/data/products';

const categories: { id: ProductType; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'ui-components', label: 'UI Kits' },
  { id: 'landing-pages', label: 'Templates' },
  { id: 'animations', label: 'Animations' },
  { id: 'workflows', label: 'Workflows' },
  { id: 'prompts', label: 'Prompts' },
];

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState<ProductType>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background flex flex-col selection:bg-accent/20">
      <Navigation />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="section-container">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
                Shop <span className="text-muted-foreground">/ Assets</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Premium resources to accelerate your development workflow.
                <br className="hidden md:block" />
                Stop rebuilding the wheel. Start shipping.
              </p>
            </div>

            {/* Search Bar */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <input 
                type="text" 
                placeholder="Search assets..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-secondary/30 border border-transparent focus:border-accent/50 rounded-xl focus:outline-none transition-all placeholder:text-muted-foreground/50"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button 
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat.id 
                    ? 'bg-foreground text-background' 
                    : 'bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Card Link: Navigates to Detail Page */}
                  <Link 
                    to={product.isLibrary ? '/animations' : `/products/${product.slug}`}
                    className="group block"
                  >
                    {/* Image Container */}
                    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-secondary/50 mb-5 border border-white/5">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                      
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      {/* Floating Badge (Category Only) */}
                      <div className="absolute top-4 left-4 z-20 flex gap-2">
                        <span className="px-3 py-1 text-xs font-semibold bg-background/90 backdrop-blur-md rounded-full border border-white/10 shadow-sm">
                          {categories.find(c => c.id === product.category)?.label}
                        </span>
                      </div>

                      {/* Hover Overlay Icon */}
                      <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white">
                          <ArrowUpRight className="w-5 h-5" />
                        </div>
                      </div>
                    </div>

                    {/* Content Info (Price Removed) */}
                    <div>
                      <h3 className="font-display text-lg font-bold group-hover:text-accent transition-colors leading-snug">
                        {product.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1 line-clamp-1">
                        {product.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-muted-foreground">No products found matching your search.</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Shop;
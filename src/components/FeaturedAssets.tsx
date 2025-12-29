// src/components/FeaturedAssets.tsx
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag, Star, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '@/data/products';

const FeaturedAssets = () => {
  // Show only first 4 top-tier products
  const featured = products.slice(0, 4);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 50 } 
    },
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-label">Digital Store</span>
            <h2 className="section-heading mt-2">
              Premium assets <br />
              <span className="text-muted-foreground">ready to deploy.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link to="/shop" className="group flex items-center gap-2 text-foreground font-medium hover:text-accent transition-colors">
              View All Products
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* Staggered Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {featured.map((product) => (
            <motion.div
              key={product.id}
              variants={item}
              whileHover={{ y: -10 }}
              className="group relative flex flex-col h-full bg-white/5 dark:bg-black/20 backdrop-blur-xl border border-white/10 dark:border-white/5 rounded-3xl overflow-hidden shadow-2xl hover:shadow-accent/10 transition-shadow duration-500"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
                />
                <div className="absolute top-3 right-3 z-20">
                  <span className="px-3 py-1 text-xs font-bold bg-background/80 backdrop-blur-md rounded-full border border-border/50 shadow-sm">
                    {product.isPremium ? `$${product.price}` : 'Free'}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-3">
                  <Star className="w-3 h-3 text-accent fill-accent" />
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {product.category}
                  </span>
                </div>
                
                <h3 className="font-display text-lg font-bold mb-2 leading-tight group-hover:text-accent transition-colors">
                  {product.title}
                </h3>
                
                <p className="text-sm text-muted-foreground line-clamp-2 mb-6 flex-grow">
                  {product.description}
                </p>

                <a 
                  href={product.link}
                  className="mt-auto w-full py-3 rounded-xl bg-secondary/50 hover:bg-foreground hover:text-background text-foreground text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg"
                >
                  {product.isPremium ? (
                    <>
                      <ShoppingBag className="w-4 h-4" /> Buy Now
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4" /> Download
                    </>
                  )}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedAssets;
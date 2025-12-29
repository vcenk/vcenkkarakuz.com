// src/pages/ProductDetail.tsx
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, CheckCircle2, ShoppingCart, Download, ShieldCheck } from 'lucide-react';
import { products } from '@/data/products'; // Fixed Import
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navigation />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-display font-bold mb-4">Product Not Found</h1>
            <Link to="/shop" className="text-accent hover:underline">
              ← Back to Shop
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-24">
        <div className="section-container">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Shop
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6 border border-border shadow-2xl">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
                {product.isPremium && (
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-accent/20 text-accent font-semibold shadow-lg">
                    ${product.price}
                  </div>
                )}
              </div>
            </motion.div>

            {/* Right: Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 text-xs font-medium uppercase tracking-wider rounded-full bg-secondary text-muted-foreground">
                  {product.category}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                {product.title}
              </h1>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {product.longDescription || product.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                {product.isLibrary ? (
                   <Link to="/animations" className="btn-secondary flex-1 justify-center">
                     View Library
                     <ArrowUpRight className="w-4 h-4 ml-2" />
                   </Link>
                ) : (
                  <>
                    <a
                      href={product.link || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex-1 justify-center shadow-lg shadow-accent/20"
                    >
                      {product.isPremium ? (
                        <>
                          <ShoppingCart className="w-4 h-4 ml-2" />
                          Purchase License
                        </>
                      ) : (
                        <>
                          <Download className="w-4 h-4 ml-2" />
                          Download Free
                        </>
                      )}
                    </a>
                    {product.demoUrl && (
                      <a 
                        href={product.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary flex-1 justify-center"
                      >
                        Live Demo
                        <ArrowUpRight className="w-4 h-4 ml-2" />
                      </a>
                    )}
                  </>
                )}
              </div>

              {/* Features List */}
              {product.features && (
                <div className="bg-secondary/20 rounded-2xl p-6 border border-border/50">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-accent" />
                    What's Included
                  </h3>
                  <ul className="space-y-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, ShoppingCart, Download, Layers } from 'lucide-react';
import { products } from '@/data/products';
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
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <Link to="/shop" className="text-accent hover:underline">Return to Shop</Link>
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
          {/* Breadcrumb */}
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Shop
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left: Visuals */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-border bg-secondary/20">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Tech Stack Pills */}
              {product.techStack && (
                <div className="flex flex-wrap gap-2">
                  {product.techStack.map(tech => (
                    <span key={tech} className="px-3 py-1.5 rounded-full bg-secondary text-xs font-medium text-muted-foreground border border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Right: Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                {product.title}
              </h1>
              
              <div className="flex items-center gap-4 mb-8">
                <span className="text-2xl font-semibold text-accent">
                  {product.isPremium ? `$${product.price}` : 'Free'}
                </span>
                <span className="h-1 w-1 rounded-full bg-muted-foreground" />
                <span className="text-sm text-muted-foreground uppercase tracking-wider">
                  {product.category}
                </span>
              </div>

              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                {product.longDescription || product.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col gap-4 mb-10">
                <a
                  href={product.link || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center h-14 text-base"
                >
                  {product.isPremium ? (
                    <>
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      Buy Now
                    </>
                  ) : (
                    <>
                      <Download className="w-5 h-5 mr-2" />
                      Download for Free
                    </>
                  )}
                </a>
                
                {product.demoUrl && (
                  <a 
                    href={product.demoUrl}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-secondary w-full justify-center h-12"
                  >
                    View Live Demo
                  </a>
                )}
              </div>

              {/* Features */}
              {product.features && (
                <div className="pt-8 border-t border-border/50">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-accent" />
                    Includes
                  </h3>
                  <ul className="grid grid-cols-1 gap-3">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent/80 shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
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
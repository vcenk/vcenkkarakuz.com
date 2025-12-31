import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, ShoppingCart, Download, Layers, Shield, Zap, Clock, Star } from 'lucide-react';
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
                    What's Included
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

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-border/50">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-2">
                    <Shield className="w-6 h-6 text-green-500" />
                  </div>
                  <div className="text-xs text-muted-foreground">Money-Back Guarantee</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-2">
                    <Zap className="w-6 h-6 text-blue-500" />
                  </div>
                  <div className="text-xs text-muted-foreground">Instant Access</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-2">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div className="text-xs text-muted-foreground">Lifetime Updates</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Full-Width Details Section */}
          <div className="mt-24 space-y-16">
            {/* Why Choose This */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-display font-bold mb-8 text-center">
                Why Choose {product.title}?
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="glass-card p-6">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <Star className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">Production-Ready Code</h3>
                  <p className="text-sm text-muted-foreground">
                    Built with TypeScript, tested, and optimized for performance. No spaghetti code—just clean, maintainable components.
                  </p>
                </div>
                <div className="glass-card p-6">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <Zap className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">Save 20+ Hours</h3>
                  <p className="text-sm text-muted-foreground">
                    Stop reinventing the wheel. Copy, paste, customize. Ship features in minutes, not days.
                  </p>
                </div>
                <div className="glass-card p-6">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <Shield className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">Fully Customizable</h3>
                  <p className="text-sm text-muted-foreground">
                    You own the code. No vendor lock-in. Modify, extend, or resell—it's yours forever.
                  </p>
                </div>
                <div className="glass-card p-6">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">Documentation Included</h3>
                  <p className="text-sm text-muted-foreground">
                    Clear setup instructions, code comments, and usage examples. Get started in under 5 minutes.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Product-Specific FAQ */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl font-display font-bold mb-8 text-center">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {[
                  {
                    q: 'What do I get after purchase?',
                    a: 'Instant access to the complete source code, documentation, and all future updates. No subscriptions—pay once, own forever.',
                  },
                  {
                    q: 'Can I use this in commercial projects?',
                    a: 'Absolutely! You can use it in unlimited personal and commercial projects. You can even resell projects built with it.',
                  },
                  {
                    q: 'What if I need help?',
                    a: 'Email support is included for 30 days. I typically respond within 24 hours with setup help or bug fixes.',
                  },
                  {
                    q: 'Do you offer refunds?',
                    a: "Yes! If you're not satisfied within 14 days, I'll refund you—no questions asked.",
                  },
                ].map((faq, idx) => (
                  <div key={idx} className="glass-card p-6">
                    <h3 className="font-semibold mb-2">{faq.q}</h3>
                    <p className="text-sm text-muted-foreground">{faq.a}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Related Products */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-display font-bold mb-8 text-center">
                You Might Also Like
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {products
                  .filter((p) => p.id !== product.id && p.category === product.category)
                  .slice(0, 3)
                  .map((relatedProduct) => (
                    <Link
                      key={relatedProduct.id}
                      to={`/products/${relatedProduct.slug}`}
                      className="glass-card-hover group overflow-hidden"
                    >
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={relatedProduct.image}
                          alt={relatedProduct.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="font-semibold mb-2 group-hover:text-accent transition-colors">
                          {relatedProduct.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          {relatedProduct.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-accent font-bold">
                            {relatedProduct.isPremium ? `$${relatedProduct.price}` : 'Free'}
                          </span>
                          <span className="text-sm text-muted-foreground">View Details →</span>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </motion.div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-12 text-center relative overflow-hidden"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-48 bg-accent/10 blur-[80px] rounded-full pointer-events-none" />
              <div className="relative z-10">
                <h2 className="text-3xl font-display font-bold mb-4">
                  Ready to get started?
                </h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Join hundreds of developers who've saved time and shipped faster with {product.title}.
                </p>
                <a
                  href={product.link || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex text-lg px-8 py-4"
                >
                  {product.isPremium ? (
                    <>
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      Buy Now - ${product.price}
                    </>
                  ) : (
                    <>
                      <Download className="w-5 h-5 mr-2" />
                      Download for Free
                    </>
                  )}
                </a>
                <p className="text-xs text-muted-foreground mt-4">
                  14-day money-back guarantee • Instant access • Lifetime updates
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
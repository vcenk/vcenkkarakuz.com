// src/pages/Index.tsx
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import FeaturedAssets from '@/components/FeaturedAssets';
import ProductsSection from '@/components/ProductsSection';
import AutomationSection from '@/components/AutomationSection';
import CurrentFocusSection from '@/components/CurrentFocusSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background selection:bg-accent/20 overflow-x-hidden">
      <Navigation />
      
      <main>
        <HeroSection />
        
        {/* ID: "services" inside ServicesSection */}
        <ServicesSection />
        
        {/* Shop Teaser */}
        <FeaturedAssets />
        
        {/* ID: "products" inside ProductsSection (Renamed visually to "Signature Ventures" or "Work") */}
        <ProductsSection />
        
        {/* ID: "automation" inside AutomationSection */}
        <AutomationSection />
        
        <CurrentFocusSection />
        
        {/* ID: "about" inside AboutSection */}
        <AboutSection />
        
        {/* ID: "contact" inside ContactSection */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
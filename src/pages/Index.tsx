// src/pages/Index.tsx
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection'; // Ensure this import exists
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
        {/* 1. Hero */}
        <HeroSection />
        
        {/* 2. Services (Linked to Navbar) */}
        <ServicesSection />
        
        {/* 3. Featured Assets (Shop) */}
        <FeaturedAssets />
        
        {/* 4. Portfolio (Linked to Navbar "Work") */}
        <ProductsSection />
        
        {/* 5. Automation */}
        <AutomationSection />
        
        <CurrentFocusSection />
        
        {/* 6. About */}
        <AboutSection />
        
        {/* 7. Contact */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
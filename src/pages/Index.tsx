// src/pages/Index.tsx
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import TechStack from '@/components/TechStack'; 
import ServicesSection from '@/components/ServicesSection';
import FeaturedAssets from '@/components/FeaturedAssets';
import ProductsSection from '@/components/ProductsSection';
import AutomationSection from '@/components/AutomationSection';
import CurrentFocusSection from '@/components/CurrentFocusSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { ScrollReveal } from '@/components/ScrollReveal'; // Import the new component

const Index = () => {
  return (
    <div className="min-h-screen bg-background selection:bg-accent/20 overflow-x-hidden">
      <Navigation />
      
      <main>
        <HeroSection />
        
        {/* We generally don't animate the marquee, it spins forever */}
        <TechStack />
        
        {/* Wrap sections you want to reveal on scroll */}
        <ScrollReveal width="100%">
          <ServicesSection />
        </ScrollReveal>
        
        <ScrollReveal width="100%">
          <FeaturedAssets />
        </ScrollReveal>
        
        <ScrollReveal width="100%">
          <ProductsSection />
        </ScrollReveal>
        
        <ScrollReveal width="100%">
          <AutomationSection />
        </ScrollReveal>
        
        <CurrentFocusSection />
        
        <ScrollReveal width="100%">
          <AboutSection />
        </ScrollReveal>
        
        <ScrollReveal width="100%">
          <ContactSection />
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
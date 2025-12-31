// src/pages/Index.tsx
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import TrustBadges from '@/components/TrustBadges';
import TechStack from '@/components/TechStack';
import ServicesSection from '@/components/ServicesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import FeaturedAssets from '@/components/FeaturedAssets';
import ProductsSection from '@/components/ProductsSection';
import AutomationSection from '@/components/AutomationSection';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import AIShowcaseSection from '@/components/AIShowcaseSection';
import CurrentFocusSection from '@/components/CurrentFocusSection';
import AboutSection from '@/components/AboutSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingLeadCTA from '@/components/FloatingLeadCTA';
import { ScrollReveal } from '@/components/ScrollReveal'; // Import the new component

const Index = () => {
  return (
    <div className="min-h-screen bg-background selection:bg-accent/20 overflow-x-hidden">
      <Navigation />
      
      <main>
        <HeroSection />

        <TrustBadges />

        {/* We generally don't animate the marquee, it spins forever */}
        <TechStack />
        
        {/* Wrap sections you want to reveal on scroll */}
        <ScrollReveal width="100%">
          <ServicesSection />
        </ScrollReveal>

        <HowItWorksSection />

        <ScrollReveal width="100%">
          <FeaturedAssets />
        </ScrollReveal>
        
        <ScrollReveal width="100%">
          <ProductsSection />
        </ScrollReveal>
        
        <ScrollReveal width="100%">
          <AutomationSection />
        </ScrollReveal>

        <ScrollReveal width="100%">
          <PricingSection />
        </ScrollReveal>

        <TestimonialsSection />

        <AIShowcaseSection />

        <CurrentFocusSection />

        <ScrollReveal width="100%">
          <AboutSection />
        </ScrollReveal>

        <ScrollReveal width="100%">
          <FAQSection />
        </ScrollReveal>

        <ScrollReveal width="100%">
          <ContactSection />
        </ScrollReveal>
      </main>

      <Footer />
      <FloatingLeadCTA />
    </div>
  );
};

export default Index;
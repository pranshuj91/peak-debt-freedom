import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import SupportSection from '@/components/SupportSection';
import AboutSection from '@/components/AboutSection';
import TrustSection from '@/components/TrustSection';
import IVASection from '@/components/IVASection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <SupportSection />
      <AboutSection />
      <TrustSection />
      <IVASection />
    </div>
  );
};

export default Index;

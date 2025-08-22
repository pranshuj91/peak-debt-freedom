import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import SupportSection from '@/components/SupportSection';
import TakeControlSection from '@/components/TakeControlSection';
import AboutSection from '@/components/AboutSection';
import TrustSection from '@/components/TrustSection';
import IVASection from '@/components/IVASection';
import FeaturesSection from '@/components/FeaturesSection';
import StatisticsSection from '@/components/StatisticsSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <SupportSection />
      <TakeControlSection />
      <AboutSection />
      <TrustSection />
      <IVASection />
      <FeaturesSection />
      <StatisticsSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;

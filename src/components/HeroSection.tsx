import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-background.jpg';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = scrolled * 0.5;
        parallaxRef.current.style.transform = `translateY(${parallaxSpeed}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Animate elements on load
    const elements = document.querySelectorAll('.animate-on-load');
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('animate-slide-up');
      }, index * 200);
    });
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden parallax"
      id="home"
    >
      {/* Parallax Background */}
      <div 
        ref={parallaxRef}
        className="absolute inset-0 parallax-layer parallax-back"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      
      {/* Subtle Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="animate-on-load text-primary-foreground mb-4 font-display text-center max-w-6xl text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            Welcome to the <span className="text-gold">Peak Insolvency</span>
          </h1>
          
          <div className="animate-on-load text-primary-foreground/90 mb-6 text-center">
            <div className="text-2xl md:text-3xl font-semibold tracking-wider">
              HONESTY - EMPATHY - UNDERSTANDING
            </div>
          </div>
          
          <div className="animate-on-load text-primary-foreground mb-4 text-xl md:text-2xl font-medium text-center">
            Here to support you at every step.
          </div>
          
          <p className="animate-on-load text-body text-primary-foreground/90 mb-8 max-w-3xl text-center">
            At The Insolvency Guidance Group, we believe it should be simple and affordable for you to become debt free. That's why we're here to support you at every step of your journey.
          </p>
          
          <div className="animate-on-load flex flex-col sm:flex-row gap-4 mb-8 justify-center">
            <Button variant="hero" size="xl" className="text-lg px-8 py-4">
              Get Your Free Debt Assessment
            </Button>
            <Button variant="outline-hero" size="xl" className="text-lg px-8 py-4">
              Calculate What You Could Save
            </Button>
          </div>
          
          <div className="animate-on-load flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-8 text-primary-foreground/80">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Free consultation</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">No upfront costs</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Real results</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
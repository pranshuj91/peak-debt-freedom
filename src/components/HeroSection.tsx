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
      
      {/* Floating Financial Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      {/* Debt-related Background Animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Dollar Signs */}
        <div className="absolute top-20 left-10 text-primary-foreground/5 text-6xl font-bold animate-float-slow">£</div>
        <div className="absolute top-40 right-20 text-primary-foreground/5 text-4xl font-bold animate-float-slower">$</div>
        <div className="absolute bottom-32 left-1/3 text-primary-foreground/5 text-5xl font-bold animate-float-slow" style={{ animationDelay: '3s' }}>€</div>
        
        {/* Abstract Financial Charts */}
        <div className="absolute top-1/3 left-0 w-32 h-32 opacity-5">
          <svg viewBox="0 0 100 100" className="w-full h-full animate-pulse">
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              points="0,80 20,60 40,70 60,40 80,50 100,20"
              className="text-gold"
            />
          </svg>
        </div>
        
        <div className="absolute bottom-1/4 right-0 w-40 h-40 opacity-5">
          <svg viewBox="0 0 100 100" className="w-full h-full animate-pulse" style={{ animationDelay: '2s' }}>
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              points="0,90 25,70 50,45 75,30 100,10"
              className="text-accent-light"
            />
          </svg>
        </div>
        
        {/* Floating Numbers */}
        <div className="absolute top-16 right-1/4 text-primary-foreground/3 text-2xl font-mono animate-float-slower">12,000</div>
        <div className="absolute bottom-20 left-1/4 text-primary-foreground/3 text-xl font-mono animate-float-slow" style={{ animationDelay: '4s' }}>£2.4M</div>
        <div className="absolute top-2/3 right-10 text-primary-foreground/3 text-lg font-mono animate-float-slower" style={{ animationDelay: '1s' }}>95%</div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="animate-on-load text-primary-foreground mb-6 font-display text-center max-w-6xl text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight whitespace-nowrap">
            Your debt doesn&apos;t define you.{' '}
            <span className="text-gold">Your next step does.</span>
          </h1>
          
          <p className="animate-on-load text-body text-primary-foreground/90 mb-8 max-w-3xl text-center">
            Break free from overwhelming debt with a plan that actually works. We've helped over{' '}
            <span className="text-gold font-semibold">12,000 people</span> write off unaffordable debt 
            and rebuild their financial future – without the stress, judgment, or impossible payments.
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
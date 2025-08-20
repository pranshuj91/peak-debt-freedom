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
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-left">
            <h1 className="animate-on-load text-hero text-primary-foreground mb-6 font-display">
              Your debt doesn't define you.{' '}
              <span className="text-gold">Your next step does.</span>
            </h1>
            
            <p className="animate-on-load text-body text-primary-foreground/90 mb-8 max-w-2xl">
              Break free from overwhelming debt with a plan that actually works. We've helped over{' '}
              <span className="text-gold font-semibold">12,000 people</span> write off unaffordable debt 
              and rebuild their financial future – without the stress, judgment, or impossible payments.
            </p>
            
            <div className="animate-on-load flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="hero" size="xl" className="text-lg px-8 py-4">
                Get Your Free Debt Assessment
              </Button>
              <Button variant="outline-hero" size="xl" className="text-lg px-8 py-4">
                Calculate What You Could Save
              </Button>
            </div>
            
            <div className="animate-on-load flex items-center space-x-6 text-primary-foreground/80">
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
          
          {/* Right Column - Stats/Visual Element */}
          <div className="animate-on-load">
            <div className="glass-card p-8 rounded-3xl">
              <div className="text-center mb-6">
                <h3 className="text-headline text-primary-foreground mb-2 font-display">Success Stories</h3>
                <p className="text-primary-foreground/80">Real results from real people</p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gold mb-2">12,000+</div>
                  <div className="text-sm text-primary-foreground/80">People Helped</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gold mb-2">£2.4M</div>
                  <div className="text-sm text-primary-foreground/80">Debt Written Off</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gold mb-2">95%</div>
                  <div className="text-sm text-primary-foreground/80">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gold mb-2">4.9★</div>
                  <div className="text-sm text-primary-foreground/80">Client Rating</div>
                </div>
              </div>
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
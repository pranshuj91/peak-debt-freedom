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
      className="relative min-h-screen flex items-center justify-center overflow-hidden parallax pt-20 pb-16 md:pt-24 md:pb-20"
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
      
      {/* Peak-themed Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      {/* Floating Triangle Elements - Repositioned to avoid text interference */}
      <div className="absolute top-16 left-8 opacity-5">
        <svg className="w-32 h-32 text-gold animate-float-slow" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 22h20L12 2z" opacity="0.3"/>
        </svg>
      </div>
      <div className="absolute bottom-1/3 right-1/5 opacity-5">
        <svg className="w-24 h-24 text-accent animate-float-slower" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 22h20L12 2z" opacity="0.4"/>
        </svg>
      </div>
      <div className="absolute bottom-16 left-12 opacity-3">
        <svg className="w-16 h-16 text-gold animate-float" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 22h20L12 2z" opacity="0.6"/>
        </svg>
      </div>
      
      {/* Peak Pattern Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 left-1/3 transform rotate-12">
          <svg className="w-8 h-8 text-gold animate-triangle-pulse" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 22h20L12 2z"/>
          </svg>
        </div>
        <div className="absolute bottom-20 right-1/3 transform -rotate-12">
          <svg className="w-6 h-6 text-accent animate-triangle-pulse" viewBox="0 0 24 24" fill="currentColor" style={{ animationDelay: '1s' }}>
            <path d="M12 2L2 22h20L12 2z"/>
          </svg>
        </div>
        <div className="absolute top-2/3 right-1/4 transform rotate-45">
          <svg className="w-4 h-4 text-gold animate-triangle-pulse" viewBox="0 0 24 24" fill="currentColor" style={{ animationDelay: '2s' }}>
            <path d="M12 2L2 22h20L12 2z"/>
          </svg>
        </div>
      </div>
      
      {/* Debt-related Background Animations - Reduced Opacity for Better Text Readability */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Currency Signs - More Subtle */}
        <div className="absolute top-20 left-10 text-primary-foreground/3 text-6xl font-bold animate-float-slow">£</div>
        <div className="absolute top-40 right-20 text-primary-foreground/3 text-4xl font-bold animate-float-slower">$</div>
        <div className="absolute bottom-32 left-1/3 text-primary-foreground/3 text-5xl font-bold animate-float-slow" style={{ animationDelay: '3s' }}>€</div>
        <div className="absolute top-1/2 left-20 text-primary-foreground/2 text-3xl font-bold animate-float-slower" style={{ animationDelay: '5s' }}>¥</div>
        
        {/* Credit Cards and Debt Icons - Reduced Opacity */}
        <div className="absolute top-32 right-32 text-primary-foreground/2 animate-float-slow" style={{ animationDelay: '1s' }}>
          <svg className="w-12 h-8" fill="currentColor" viewBox="0 0 24 24">
            <rect x="2" y="6" width="20" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="1"/>
            <path d="M2 10h20"/>
          </svg>
        </div>
        
        
        {/* Financial Document Icons - Reduced Opacity */}
        <div className="absolute top-2/3 left-8 text-primary-foreground/2 animate-float-slow" style={{ animationDelay: '6s' }}>
          <svg className="w-8 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
          </svg>
        </div>
        
        {/* Abstract Financial Charts - More Subtle */}
        <div className="absolute top-1/3 left-0 w-32 h-32 opacity-3">
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
        
        <div className="absolute bottom-1/4 right-0 w-40 h-40 opacity-3">
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
        
        <div className="absolute top-16 left-1/2 w-28 h-28 opacity-2">
          <svg viewBox="0 0 100 100" className="w-full h-full animate-pulse" style={{ animationDelay: '3s' }}>
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              points="10,60 30,40 50,65 70,35 90,55"
              className="text-gold"
            />
          </svg>
        </div>
        
        {/* Floating Numbers and Percentages - Much More Subtle */}
        <div className="absolute top-16 right-1/4 text-primary-foreground/2 text-2xl font-mono animate-float-slower">12,000</div>
        <div className="absolute bottom-20 left-1/4 text-primary-foreground/2 text-xl font-mono animate-float-slow" style={{ animationDelay: '4s' }}>£2.4M</div>
        <div className="absolute top-2/3 right-10 text-primary-foreground/2 text-lg font-mono animate-float-slower" style={{ animationDelay: '1s' }}>95%</div>
        <div className="absolute top-1/4 right-16 text-primary-foreground/2 text-sm font-mono animate-float-slow" style={{ animationDelay: '7s' }}>-68%</div>
        <div className="absolute bottom-1/3 left-12 text-primary-foreground/2 text-lg font-mono animate-float-slower" style={{ animationDelay: '2s' }}>£0</div>
        <div className="absolute top-1/2 right-1/4 text-primary-foreground/2 text-base font-mono animate-float-slow" style={{ animationDelay: '5s' }}>4.9★</div>
        
        {/* Floating Geometric Shapes - More Subtle */}
        <div className="absolute top-24 left-2/3 w-4 h-4 bg-gold/15 rounded-full animate-float-slow" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-28 right-20 w-6 h-6 bg-accent/15 rotate-45 animate-float-slower" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-8 w-3 h-8 bg-gold/10 animate-float-slow" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-12 left-2/3 w-8 h-3 bg-accent/10 animate-float-slower" style={{ animationDelay: '6s' }}></div>
        
        {/* Chain Breaking Elements - Subtle */}
        <div className="absolute top-40 left-1/2 text-primary-foreground/15 animate-float-slow" style={{ animationDelay: '8s' }}>
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>
          </svg>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="animate-on-load text-primary-foreground mb-4 text-center max-w-6xl text-hero">
            Welcome to the <br /><span className="text-gold break-word">Peak Insolvency</span>
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
            At Peak Insolvency, we believe it should be simple and affordable for you to deal with your finances. That's why we're here to support you at every step of your journey.</p>
          
          <div className="animate-on-load flex flex-col sm:flex-row gap-4 mb-8 justify-center">
            <Button variant="hero" size="xl" className="text-lg px-8 py-4">
              Get in contact today
            </Button>
            {/*<Button variant="outline-hero" size="xl" className="text-lg px-8 py-4">
              Calculate What You Could Save
            </Button>*/}
          </div>
          
          <div className="animate-on-load flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-8 text-primary-foreground/80">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Here to help</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Experienced Staff</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Get back on track</span>
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
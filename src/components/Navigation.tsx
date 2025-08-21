import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-semibold text-foreground">
            Peak Insolvency
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-muted-foreground hover:text-foreground">
              Home
            </a>
            <a href="#about" className="text-muted-foreground hover:text-foreground">
              About
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground">
              Contact
            </a>
            <Button className="ml-4">
              Free Consultation
            </Button>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
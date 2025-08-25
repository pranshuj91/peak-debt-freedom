import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-xl shadow-elegant border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo - Left Side */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                {/* Mountain Peak Icon */}
                <svg className="w-6 h-6 md:w-7 md:h-7 text-gold" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 22h20L12 2z"/>
                  <path d="M12 6L6 18h12L12 6z" fill="currentColor" opacity="0.8"/>
                  <path d="M12 10L10 18h4L12 10z" fill="currentColor" opacity="0.6"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-lg md:text-xl font-bold text-gold font-display">PEAK</span>
                <span className="text-xs md:text-sm font-medium text-primary">INSOLVENCY</span>
              </div>
            </div>

            {/* Navigation Links - Center */}
            <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
              <Link 
                to="/" 
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                Contact Us
              </Link>
            </div>

            {/* Call-to-Action Button - Right Side */}
            <div className="hidden md:block">
              <Button variant="premium" size="lg">
                Free Consultation
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={toggleMobileMenu}
                className="p-2 text-foreground hover:text-primary"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={closeMobileMenu}></div>
          <div className="fixed top-16 left-0 right-0 bg-background border-b border-border/50 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              <Link 
                to="/" 
                className="block text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="block text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                onClick={closeMobileMenu}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="block text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
              <Link 
                to="/privacy-policy" 
                className="block text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                onClick={closeMobileMenu}
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms-of-use" 
                className="block text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                onClick={closeMobileMenu}
              >
                Terms of Use
              </Link>
              <Link 
                to="/complaints-policy" 
                className="block text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                onClick={closeMobileMenu}
              >
                Complaints Policy
              </Link>
              <div className="pt-4">
                <Button variant="premium" size="lg" className="w-full" onClick={closeMobileMenu}>
                  Free Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
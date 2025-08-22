import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gold mb-4">The Insolvency Guidance Group</h3>
                <p className="text-primary-foreground/80 leading-relaxed mb-6">
                  We believe it should be simple and affordable for you to become debt free. 
                  That's why we're here to support you at every step of your journey with 
                  honest advice, genuine empathy, and complete understanding of your situation.
                </p>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center">
                    <svg className="w-3 h-3 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="text-primary-foreground/80">Call us for free advice</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center">
                    <svg className="w-3 h-3 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-primary-foreground/80">Available Monday to Friday, 9am - 6pm</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-gold mb-6">Our Services</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-primary-foreground/80 hover:text-gold transition-colors duration-300">Individual Voluntary Arrangements (IVA)</a></li>
                <li><a href="#" className="text-primary-foreground/80 hover:text-gold transition-colors duration-300">Debt Management Plans</a></li>
                <li><a href="#" className="text-primary-foreground/80 hover:text-gold transition-colors duration-300">Debt Consolidation</a></li>
                <li><a href="#" className="text-primary-foreground/80 hover:text-gold transition-colors duration-300">Free Debt Advice</a></li>
                <li><a href="#" className="text-primary-foreground/80 hover:text-gold transition-colors duration-300">Bankruptcy Guidance</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-semibold text-gold mb-6">Resources</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-primary-foreground/80 hover:text-gold transition-colors duration-300">Debt Calculator</a></li>
                <li><a href="#" className="text-primary-foreground/80 hover:text-gold transition-colors duration-300">Frequently Asked Questions</a></li>
                <li><a href="#" className="text-primary-foreground/80 hover:text-gold transition-colors duration-300">Debt Guides</a></li>
                <li><a href="#" className="text-primary-foreground/80 hover:text-gold transition-colors duration-300">Customer Reviews</a></li>
                <li><a href="#" className="text-primary-foreground/80 hover:text-gold transition-colors duration-300">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>

        <Separator className="bg-primary-foreground/20" />
        
        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-foreground/70 text-sm">
              © 2024 The Insolvency Guidance Group. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-primary-foreground/70 hover:text-gold text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-gold text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-gold text-sm transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
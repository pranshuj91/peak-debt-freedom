import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-primary overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5 pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 animate-fade-in">
            {/* Company Info */}
            <div className="group">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gold mb-4 animate-pulse-glow">
                  Peak Insolvency
                </h3>
                <p className="text-primary-foreground/90 leading-relaxed text-sm mb-6">
                  We believe it should be simple and affordable for you to become debt free. 
                  That's why we're here to support you at every step of your journey.
                </p>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 rounded-lg glass hover:bg-gold/5 transition-all duration-300 group/contact">
                  <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center group-hover/contact:bg-gold/30 transition-colors duration-300">
                    <svg className="w-3 h-3 text-gold group-hover/contact:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="text-primary-foreground/90 text-sm font-medium">Call for free advice</span>
                </div>
                
                <div className="flex items-center space-x-3 p-3 rounded-lg glass hover:bg-gold/5 transition-all duration-300 group/contact">
                  <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center group-hover/contact:bg-gold/30 transition-colors duration-300">
                    <svg className="w-3 h-3 text-gold group-hover/contact:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-primary-foreground/90 text-sm font-medium">Mon-Fri, 9am-6pm</span>
                </div>
              </div>
            </div>

            {/* Our Office */}
            <div className="group animate-slide-up">
              <h4 className="text-lg font-semibold text-gold mb-6 border-b border-gold/20 pb-2">Our Office</h4>
              <div className="glass-card p-4 rounded-lg shadow-elegant hover:shadow-premium transition-all duration-500">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center mt-1 group-hover:bg-gold/30 transition-colors duration-300">
                    <svg className="w-3 h-3 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="text-primary-foreground/90 leading-relaxed space-y-1 text-sm">
                    <div className="font-medium">Suite 138 Peel House</div>
                    <div>30 The Downs</div>
                    <div>Altrincham</div>
                    <div>Cheshire</div>
                    <div className="font-semibold text-gold">WA14 2PX</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="group animate-slide-up">
              <h4 className="text-xl font-semibold text-gold mb-8 border-b border-gold/20 pb-3">Our Services</h4>
              <ul className="space-y-4">
                <li className="transform transition-all duration-300 hover:translate-x-2">
                  <a href="#" className="text-primary-foreground/90 hover:text-gold transition-colors duration-300 flex items-center group/link">
                    <div className="w-2 h-2 bg-gold/40 rounded-full mr-3 group-hover/link:bg-gold group-hover/link:scale-125 transition-all duration-300"></div>
                    Individual Voluntary Arrangements (IVA)
                  </a>
                </li>
                <li className="transform transition-all duration-300 hover:translate-x-2">
                  <a href="#" className="text-primary-foreground/90 hover:text-gold transition-colors duration-300 flex items-center group/link">
                    <div className="w-2 h-2 bg-gold/40 rounded-full mr-3 group-hover/link:bg-gold group-hover/link:scale-125 transition-all duration-300"></div>
                    Debt Management Plans
                  </a>
                </li>
                <li className="transform transition-all duration-300 hover:translate-x-2">
                  <a href="#" className="text-primary-foreground/90 hover:text-gold transition-colors duration-300 flex items-center group/link">
                    <div className="w-2 h-2 bg-gold/40 rounded-full mr-3 group-hover/link:bg-gold group-hover/link:scale-125 transition-all duration-300"></div>
                    Debt Consolidation
                  </a>
                </li>
                <li className="transform transition-all duration-300 hover:translate-x-2">
                  <a href="#" className="text-primary-foreground/90 hover:text-gold transition-colors duration-300 flex items-center group/link">
                    <div className="w-2 h-2 bg-gold/40 rounded-full mr-3 group-hover/link:bg-gold group-hover/link:scale-125 transition-all duration-300"></div>
                    Free Debt Advice
                  </a>
                </li>
                <li className="transform transition-all duration-300 hover:translate-x-2">
                  <a href="#" className="text-primary-foreground/90 hover:text-gold transition-colors duration-300 flex items-center group/link">
                    <div className="w-2 h-2 bg-gold/40 rounded-full mr-3 group-hover/link:bg-gold group-hover/link:scale-125 transition-all duration-300"></div>
                    Bankruptcy Guidance
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div className="group animate-slide-up">
              <h4 className="text-xl font-semibold text-gold mb-8 border-b border-gold/20 pb-3">Resources</h4>
              <ul className="space-y-4">
                <li className="transform transition-all duration-300 hover:translate-x-2">
                  <a href="#" className="text-primary-foreground/90 hover:text-gold transition-colors duration-300 flex items-center group/link text-sm leading-relaxed">
                    <div className="w-2 h-2 bg-gold/40 rounded-full mr-3 group-hover/link:bg-gold group-hover/link:scale-125 transition-all duration-300 flex-shrink-0 mt-1"></div>
                    Creditors Guide to Fees (England & Wales)
                  </a>
                </li>
                <li className="transform transition-all duration-300 hover:translate-x-2">
                  <a href="#" className="text-primary-foreground/90 hover:text-gold transition-colors duration-300 flex items-center group/link text-sm leading-relaxed">
                    <div className="w-2 h-2 bg-gold/40 rounded-full mr-3 group-hover/link:bg-gold group-hover/link:scale-125 transition-all duration-300 flex-shrink-0 mt-1"></div>
                    Is a Voluntary Arrangement Right For Me?
                  </a>
                </li>
                <li className="transform transition-all duration-300 hover:translate-x-2">
                  <a href="#" className="text-primary-foreground/90 hover:text-gold transition-colors duration-300 flex items-center group/link text-sm leading-relaxed">
                    <div className="w-2 h-2 bg-gold/40 rounded-full mr-3 group-hover/link:bg-gold group-hover/link:scale-125 transition-all duration-300 flex-shrink-0 mt-1"></div>
                    IVA Protocol 2021
                  </a>
                </li>
                <li className="transform transition-all duration-300 hover:translate-x-2">
                  <a href="#" className="text-primary-foreground/90 hover:text-gold transition-colors duration-300 flex items-center group/link text-sm leading-relaxed">
                    <div className="w-2 h-2 bg-gold/40 rounded-full mr-3 group-hover/link:bg-gold group-hover/link:scale-125 transition-all duration-300 flex-shrink-0 mt-1"></div>
                    Guidance on Personal Debt Relief Options, Company Liquidations, Investigation & Enforcement
                  </a>
                </li>
                <li className="transform transition-all duration-300 hover:translate-x-2">
                  <a href="#" className="text-primary-foreground/90 hover:text-gold transition-colors duration-300 flex items-center group/link text-sm leading-relaxed">
                    <div className="w-2 h-2 bg-gold/40 rounded-full mr-3 group-hover/link:bg-gold group-hover/link:scale-125 transition-all duration-300 flex-shrink-0 mt-1"></div>
                    IVA Protocol Standard Terms 2021 Version
                  </a>
                </li>
                <li className="transform transition-all duration-300 hover:translate-x-2">
                  <a href="#" className="text-primary-foreground/90 hover:text-gold transition-colors duration-300 flex items-center group/link text-sm leading-relaxed">
                    <div className="w-2 h-2 bg-gold/40 rounded-full mr-3 group-hover/link:bg-gold group-hover/link:scale-125 transition-all duration-300 flex-shrink-0 mt-1"></div>
                    Creditors Guide to Individual Voluntary Arrangements (IVA)
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="relative">
          <Separator className="bg-gradient-to-r from-transparent via-primary-foreground/30 to-transparent h-px" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/20 to-transparent h-px blur-sm" />
        </div>
        
        {/* Bottom Footer */}
        <div className="py-10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 animate-fade-in">
            <div className="text-primary-foreground/80 text-base font-medium">
              © 2024 Peak Insolvency. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-8">
              <a href="#" className="text-primary-foreground/80 hover:text-gold text-sm font-medium transition-all duration-300 relative group">
                Privacy Policy
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></div>
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-gold text-sm font-medium transition-all duration-300 relative group">
                Terms of Service
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></div>
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-gold text-sm font-medium transition-all duration-300 relative group">
                Cookie Policy
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
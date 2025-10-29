import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-primary overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 animate-fade-in">
            {/* Company Info */}
            <div className="group">
              <div className="mb-8">
                <div className="flex items-center space-x-3 mb-6 group">
                  <div className="relative w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center overflow-hidden animate-peak-glow">
                    {/* Background triangle patterns */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-1 left-1 w-2 h-2 bg-gold transform rotate-45 animate-float"></div>
                      <div className="absolute bottom-1 right-1 w-1 h-1 bg-gold transform rotate-45 animate-float-slow"></div>
                      <div className="absolute top-2 right-2 w-1 h-1 bg-gold transform rotate-12 animate-float-slower"></div>
                    </div>
                    {/* Main Peak Icon */}
                    <svg
                      className="w-7 h-7 text-gold relative z-10 animate-triangle-pulse group-hover:scale-110 transition-transform duration-300"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2L2 22h20L12 2z" />
                      <path d="M12 6L6 18h12L12 6z" fill="currentColor" opacity="0.8" />
                      <path d="M12 10L10 18h4L12 10z" fill="currentColor" opacity="0.6" />
                    </svg>
                    {/* Subtle glow effect */}
                    <div className="absolute inset-0 bg-gold/5 rounded-lg animate-peak-breathe"></div>
                  </div>
                  <div className="flex flex-col group-hover:translate-x-1 transition-transform duration-300">
                    <span className="text-xl font-bold text-gold font-display tracking-wider">PEAK</span>
                    <span className="text-sm font-medium text-primary-foreground tracking-wide">INSOLVENCY</span>
                  </div>
                  {/* Triangle accent elements */}
                  <div className="flex flex-col space-y-1 opacity-20 ml-2">
                    <svg className="w-2 h-2 text-gold animate-float" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 22h20L12 2z" />
                    </svg>
                    <svg className="w-1 h-1 text-gold animate-float-slow" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 22h20L12 2z" />
                    </svg>
                  </div>
                </div>
                <p className="text-primary-foreground/90 leading-relaxed text-sm mb-6">
                  Peak Insolvency Limited are registered in England, registered company address: Unit 21 Chorley North
                  Industrial Park, Chorley, England, PR6 7BX Company registration number 11586328, Information
                  Commissioner’s Office registration number ZB618281 Peak Insolvency Limited is an Insolvency Practice.
                  Dylan Quail is licensed as an insolvency practitioner in the UK by the Insolvency Practitioners
                  Association. In the instance that you meet the criteria for an Insolvency Practitioner we will act in
                  reasonable contemplation of an appointment. In the instance that we are unable to offer a solution in
                  house we will refer you to one of our trusted third parties to facilitate this for you. Fees may be
                  charged in some solutions however these will be discussed in full with you. Should we refer you to a
                  third party we may receive a fee for this.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 rounded-lg glass hover:bg-gold/5 transition-all duration-300 group/contact">
                  <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center group-hover/contact:bg-gold/30 transition-colors duration-300">
                    <svg
                      className="w-3 h-3 text-gold group-hover/contact:scale-110 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <span className="text-primary-foreground/90 text-sm font-medium">Call for free advice</span>
                </div>

                <div className="flex items-center space-x-3 p-3 rounded-lg glass hover:bg-gold/5 transition-all duration-300 group/contact">
                  <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center group-hover/contact:bg-gold/30 transition-colors duration-300">
                    <svg
                      className="w-3 h-3 text-gold group-hover/contact:scale-110 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <span className="text-primary-foreground/90 text-sm font-medium">Mon-Fri, 9am-5pm</span>
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
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
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

            {/* Resources */}
            <div className="group animate-slide-up">
              <h4 className="text-xl font-semibold text-gold mb-8 border-b border-gold/20 pb-3">Resources</h4>
              <ul className="space-y-4">
                <li className="transform transition-all duration-300 hover:translate-x-2">
                  <a
                    href="https://irp.cdn-website.com/5564f8d3/files/uploaded/creditors-guide-to-fees.pdf"
                    target="_blank"
                    className="text-primary-foreground/90 hover:text-gold transition-colors duration-300 flex items-center group/link text-sm leading-relaxed"
                  >
                    <div className="w-2 h-2 bg-gold/40 rounded-full mr-3 group-hover/link:bg-gold group-hover/link:scale-125 transition-all duration-300 flex-shrink-0 mt-1"></div>
                    Creditors Guide to Fees (England & Wales)
                  </a>
                </li>
                <li className="transform transition-all duration-300 hover:translate-x-2">
                  <a
                    href="https://irp.cdn-website.com/5564f8d3/files/uploaded/Is%20a%20Voluntary%20Arrangement%20Right%20For%20Me.pdf"
                    target="_blank"
                    className="text-primary-foreground/90 hover:text-gold transition-colors duration-300 flex items-center group/link text-sm leading-relaxed"
                  >
                    <div className="w-2 h-2 bg-gold/40 rounded-full mr-3 group-hover/link:bg-gold group-hover/link:scale-125 transition-all duration-300 flex-shrink-0 mt-1"></div>
                    Is a Voluntary Arrangement Right For Me?
                  </a>
                </li>
                <li className="transform transition-all duration-300 hover:translate-x-2">
                  <a
                    href="https://www.gov.uk/government/publications/individual-voluntary-arrangement-iva-protocol/iva-protocol-2021#the-consumer-iva-protocol"
                    target="_blank"
                    className="text-primary-foreground/90 hover:text-gold transition-colors duration-300 flex items-center group/link text-sm leading-relaxed"
                  >
                    <div className="w-2 h-2 bg-gold/40 rounded-full mr-3 group-hover/link:bg-gold group-hover/link:scale-125 transition-all duration-300 flex-shrink-0 mt-1"></div>
                    IVA Protocol 2021
                  </a>
                </li>
                <li className="transform transition-all duration-300 hover:translate-x-2">
                  <a
                    href="https://www.gov.uk/guidance/guidance-on-personal-debt-relief-options-company-liquidation-investment-and-enforcement#debt-relief-options"
                    target="_blank"
                    className="text-primary-foreground/90 hover:text-gold transition-colors duration-300 flex items-center group/link text-sm leading-relaxed"
                  >
                    <div className="w-2 h-2 bg-gold/40 rounded-full mr-3 group-hover/link:bg-gold group-hover/link:scale-125 transition-all duration-300 flex-shrink-0 mt-1"></div>
                    Guidance on Personal Debt Relief Options, Company Liquidations, Investigation & Enforcement
                  </a>
                </li>
                <li className="transform transition-all duration-300 hover:translate-x-2">
                  <a
                    href="https://www.gov.uk/government/publications/individual-voluntary-arrangement-iva-protocol/iva-protocol-2021-annex-1-standard-terms-and-conditions"
                    target="_blank"
                    className="text-primary-foreground/90 hover:text-gold transition-colors duration-300 flex items-center group/link text-sm leading-relaxed"
                  >
                    <div className="w-2 h-2 bg-gold/40 rounded-full mr-3 group-hover/link:bg-gold group-hover/link:scale-125 transition-all duration-300 flex-shrink-0 mt-1"></div>
                    IVA Protocol Standard Terms 2021 Version
                  </a>
                </li>
                <li className="transform transition-all duration-300 hover:translate-x-2">
                  <a
                    href="https://irp.cdn-website.com/5564f8d3/files/uploaded/A_creditors_guide_to_Individual_Voluntary_Arrangement__IVA__FINAL.v1%20(1).pdf"
                    target="_blank"
                    className="text-primary-foreground/90 hover:text-gold transition-colors duration-300 flex items-center group/link text-sm leading-relaxed"
                  >
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
              © 2025 Peak Insolvency. All rights reserved.
            </div>

            <div className="flex items-center space-x-8">
              <Link
                to="/privacy-policy"
                className="text-primary-foreground/80 hover:text-gold text-sm font-medium transition-all duration-300 relative group"
              >
                Privacy Policy
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></div>
              </Link>
              <Link
                to="/terms-of-use"
                className="text-primary-foreground/80 hover:text-gold text-sm font-medium transition-all duration-300 relative group"
              >
                Terms of Use
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></div>
              </Link>
              <Link
                to="/complaints-policy"
                className="text-primary-foreground/80 hover:text-gold text-sm font-medium transition-all duration-300 relative group"
              >
                Complaints Policy
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

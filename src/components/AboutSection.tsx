const AboutSection = () => {
  return (
    <section className="py-24 bg-gradient-subtle relative overflow-hidden" id="about">
      {/* Subtle Peak-themed Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        {/* Floating Triangle Elements */}
        <div className="absolute top-1/4 left-1/6 opacity-10">
          <svg className="w-24 h-24 text-accent animate-triangle-pulse" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 22h20L12 2z" opacity="0.3"/>
          </svg>
        </div>
        <div className="absolute bottom-1/3 right-1/5 opacity-8">
          <svg className="w-16 h-16 text-gold animate-triangle-pulse" viewBox="0 0 24 24" fill="currentColor" style={{ animationDelay: '1s' }}>
            <path d="M12 2L2 22h20L12 2z" opacity="0.4"/>
          </svg>
        </div>
        
        {/* Financial Elements */}
        <div className="absolute top-16 right-1/4 text-foreground/5 text-4xl font-bold animate-float-slow">£</div>
        <div className="absolute bottom-20 left-1/3 text-foreground/5 text-3xl font-bold animate-float-slower" style={{ animationDelay: '2s' }}>%</div>
        
        {/* Subtle Geometric Shapes */}
        <div className="absolute top-1/3 right-12 w-8 h-8 bg-accent/8 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-1/4 left-16 w-6 h-6 bg-gold/8 rotate-45 animate-float-slower"></div>
        
        {/* Peak Pattern */}
        <div className="absolute top-20 left-1/4 transform rotate-12 opacity-5">
          <svg className="w-12 h-12 text-primary animate-triangle-pulse" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 22h20L12 2z"/>
          </svg>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-display text-primary mb-6 font-display text-[48px]">
            The debt advice that puts <span className="text-accent">you first</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            <div className="animate-on-load">
              <h3 className="text-headline text-primary mb-4 font-display">
                Most debt companies treat you like a number.<br />
                <span className="text-accent">We treat you like a person.</span>
              </h3>
            </div>
            
            <div className="animate-on-load space-y-6 text-body text-foreground/80">
              <p>
                When debt feels overwhelming, you need more than generic advice – you need someone who 
                <strong className="text-primary font-semibold"> listens, understands your unique situation, and fights in your corner</strong>. 
                That's exactly what we do.
              </p>
              
              <p>
                We're not here to judge your past financial decisions. We're here to help you build a 
                <strong className="text-accent font-semibold"> better financial future, one realistic step at a time</strong>.
              </p>
            </div>
            
            <div className="animate-on-load flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary-light transform hover:scale-[1.02] transition-all duration-300 shadow-elegant">
                Get in contact today
              </button>
              <button className="border-2 border-accent text-accent px-8 py-4 rounded-lg font-semibold hover:bg-accent hover:text-accent-foreground transform hover:scale-[1.02] transition-all duration-300">
                Learn Our Process
              </button>
            </div>
            
            <p className="text-xs text-foreground/70 max-w-md">
              May not be suitable in all circumstances. Fees apply. Your credit rating may be affected
            </p>
          </div>
          
          {/* Right Column - Values/Features */}
          <div className="animate-on-load">
            <div className="glass-card p-8 rounded-3xl">
              <h4 className="text-xl font-bold text-primary mb-8 font-display text-center">Why Choose Peak Insolvency?</h4>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-semibold text-primary mb-1">Personal Approach</h5>
                    <p className="text-foreground/70 text-sm">Every situation is unique. We listen to your story and create a tailored solution.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent-foreground" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-semibold text-primary mb-1">No Judgment Zone</h5>
                    <p className="text-foreground/70 text-sm">We understand financial struggles happen to good people. Zero judgment, maximum support.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-semibold text-primary mb-1">Proven Results</h5>
                    <p className="text-foreground/70 text-sm">12,000+ people helped with £2.4M in debt written off. Your success is our mission.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent-foreground" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-semibold text-primary mb-1">Transparent Process</h5>
                    <p className="text-foreground/70 text-sm">No hidden fees, no surprises. Clear communication every step of the way.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
const TrustSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-gold/5 rounded-full blur-3xl animate-float-slower"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-display text-primary mb-6 font-display">
            Why thousands trust us with their <span className="text-accent">financial future</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Trust Point 1 */}
          <div className="animate-on-load text-center group">
            <div className="mb-8 relative">
              <div className="w-20 h-20 bg-gradient-primary rounded-2xl mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-elegant">
                <svg className="w-10 h-10 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                </svg>
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gold rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-primary mb-4 font-display">
              Honest conversations, no sales pressure
            </h3>
            
            <p className="text-body text-foreground/80 leading-relaxed">
              We tell you the truth about your options – even if it means we don&apos;t make money. 
              Your debt advisor will never use confusing jargon or pressure you into a solution that doesn&apos;t fit.
            </p>
          </div>
          
          {/* Trust Point 2 */}
          <div className="animate-on-load text-center group" style={{ animationDelay: '0.2s' }}>
            <div className="mb-8 relative">
              <div className="w-20 h-20 bg-gradient-accent rounded-2xl mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-elegant">
                <svg className="w-10 h-10 text-accent-foreground" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gold rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-primary mb-4 font-display">
              We actually care about your story
            </h3>
            
            <p className="text-body text-foreground/80 leading-relaxed">
              Your financial stress is real, and so is our commitment to helping you through it. 
              Every conversation starts with understanding what you&apos;re going through, not what we want to sell you.
            </p>
          </div>
          
          {/* Trust Point 3 */}
          <div className="animate-on-load text-center group" style={{ animationDelay: '0.4s' }}>
            <div className="mb-8 relative">
              <div className="w-20 h-20 bg-gradient-primary rounded-2xl mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-elegant">
                <svg className="w-10 h-10 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                </svg>
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gold rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-primary mb-4 font-display">
              Solutions built around your life
            </h3>
            
            <p className="text-body text-foreground/80 leading-relaxed">
              Your circumstances are unique, so your debt solution should be too. 
              We take time to understand your income, expenses, and goals before recommending anything.
            </p>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="animate-on-load" style={{ animationDelay: '0.6s' }}>
            <p className="text-lg text-foreground/70 mb-6">
              Ready to experience the difference a personal approach makes?
            </p>
            <button className="bg-gradient-primary text-primary-foreground px-10 py-4 rounded-lg font-semibold hover:shadow-premium hover:scale-[1.02] transform transition-all duration-300 shadow-elegant">
              Get Your Free Assessment Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
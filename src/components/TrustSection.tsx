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
          <h2 className="text-display text-primary mb-6 font-display text-[48px]">
            Why thousands trust us with their <span className="text-accent">financial future</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Trust Point 1 - Honest Conversations */}
          <div className="animate-on-load text-center group">
            <div className="mb-8 relative">
              <div className="w-24 h-24 bg-gradient-primary rounded-3xl mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-premium relative overflow-hidden">
                {/* Custom Honest Conversation Icon */}
                <svg className="w-14 h-14 text-primary-foreground relative z-10" viewBox="0 0 100 100" fill="none">
                  {/* Speech bubble with heart inside */}
                  <path d="M20 25C20 18.3726 25.3726 13 32 13H68C74.6274 13 80 18.3726 80 25V55C80 61.6274 74.6274 67 68 67H45L32 80V67C25.3726 67 20 61.6274 20 55V25Z" 
                        fill="currentColor" opacity="0.9"/>
                  {/* Honest checkmark inside */}
                  <path d="M40 42L45 47L60 32" stroke="rgba(255,215,0,0.9)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  {/* Truth rays */}
                  <circle cx="50" cy="40" r="2" fill="rgba(255,215,0,0.8)"/>
                  <circle cx="45" cy="35" r="1.5" fill="rgba(255,215,0,0.6)"/>
                  <circle cx="55" cy="35" r="1.5" fill="rgba(255,215,0,0.6)"/>
                </svg>
                {/* Floating elements */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gold rounded-full animate-pulse"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-gold/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-primary mb-4 font-display">
              Honesty
            </h3>
            
            <p className="text-body text-foreground/80 leading-relaxed">
              Delivering honest and clear advice to educate you without any jargon. Your assigned debt advisor will always be completely honest with you.
            </p>
          </div>
          
          {/* Trust Point 2 - We Care */}
          <div className="animate-on-load text-center group" style={{ animationDelay: '0.2s' }}>
            <div className="mb-8 relative">
              <div className="w-24 h-24 bg-gradient-accent rounded-3xl mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-premium relative overflow-hidden">
                {/* Custom Care Icon */}
                <svg className="w-14 h-14 text-accent-foreground relative z-10" viewBox="0 0 100 100" fill="none">
                  {/* Embracing hands forming heart */}
                  <path d="M25 35C25 25 35 20 45 25C50 15 60 15 65 25C75 20 85 25 85 35C85 45 65 65 50 80C35 65 25 45 25 35Z" 
                        fill="currentColor" opacity="0.9"/>
                  {/* Inner caring glow */}
                  <circle cx="50" cy="42" r="12" fill="rgba(255,215,0,0.3)" className="animate-pulse"/>
                  {/* Story book pages */}
                  <path d="M42 38L46 42L42 46M58 38L54 42L58 46" stroke="rgba(255,215,0,0.8)" strokeWidth="2" strokeLinecap="round"/>
                  {/* Listening ear symbol */}
                  <ellipse cx="50" cy="48" rx="3" ry="5" fill="rgba(255,215,0,0.7)"/>
                </svg>
                {/* Caring particles */}
                <div className="absolute top-0 right-2 w-2 h-2 bg-gold rounded-full animate-float-slow"></div>
                <div className="absolute bottom-2 left-0 w-1.5 h-1.5 bg-gold/70 rounded-full animate-float-slower"></div>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-primary mb-4 font-display">
              Empathy
            </h3>
            
            <p className="text-body text-foreground/80 leading-relaxed">
              Sharing your situation and feelings can be difficult but we will show you respect and genuine empathy. We believe that a problem shared is a problem half solved.
            </p>
          </div>
          
          {/* Trust Point 3 - Custom Solutions */}
          <div className="animate-on-load text-center group" style={{ animationDelay: '0.4s' }}>
            <div className="mb-8 relative">
              <div className="w-24 h-24 bg-gradient-primary rounded-3xl mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-premium relative overflow-hidden">
                {/* Custom Solution Builder Icon */}
                <svg className="w-14 h-14 text-primary-foreground relative z-10" viewBox="0 0 100 100" fill="none">
                  {/* Puzzle pieces forming perfect fit */}
                  <path d="M20 30H35C35 25 40 20 45 25C50 20 55 25 55 30H70V45C75 45 80 50 75 55C80 60 75 65 70 65V80H55C55 85 50 90 45 85C40 90 35 85 35 80H20V30Z" 
                        fill="currentColor" opacity="0.9"/>
                  {/* Life elements inside */}
                  <circle cx="35" cy="45" r="3" fill="rgba(255,215,0,0.8)"/>
                  <circle cx="45" cy="55" r="3" fill="rgba(255,215,0,0.8)"/>
                  <circle cx="55" cy="45" r="3" fill="rgba(255,215,0,0.8)"/>
                  {/* Connection lines */}
                  <path d="M35 45L45 55M45 55L55 45M35 45L55 45" stroke="rgba(255,215,0,0.6)" strokeWidth="1.5"/>
                  {/* Perfect fit indicator */}
                  <circle cx="45" cy="50" r="1" fill="rgba(255,215,0,1)" className="animate-pulse"/>
                </svg>
                {/* Solution sparks */}
                <div className="absolute -top-1 left-2 w-1 h-1 bg-gold rounded-full animate-ping"></div>
                <div className="absolute top-2 -right-1 w-1 h-1 bg-gold rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-primary mb-4 font-display">
              Understanding
            </h3>
            
            <p className="text-body text-foreground/80 leading-relaxed">
              Unlike other companies, we focus on YOU, the customer. Every call will start with understanding your situation, concerns and preferences. Once we know that, we're half way there.
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
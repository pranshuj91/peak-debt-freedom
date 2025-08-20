const IVASection = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float-slower"></div>
        
        {/* Floating Debt Reduction Elements */}
        <div className="absolute top-20 right-1/4 text-primary-foreground/10 text-8xl font-bold animate-float-slow">80%</div>
        <div className="absolute bottom-20 left-1/4 text-primary-foreground/8 text-6xl font-bold animate-float-slower">£0</div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gold/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <span className="text-gold font-semibold">IVA Benefits</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6 font-display">
            Could an IVA cut your debt by up to{' '}
            <span className="text-gold animate-pulse-glow">80%?</span>
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            An Individual Voluntary Arrangement (IVA) might be the debt relief you&apos;ve been looking for. 
            But it&apos;s not right for everyone.
          </p>
        </div>
        
        {/* Main Content - Unique Split Design */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Benefits Side */}
          <div className="space-y-6">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary-foreground font-display">What an IVA could do for you:</h3>
            </div>
            
            <div className="space-y-4">
              {[
                { title: "Slash your total debt", desc: "Write off a significant portion of what you owe" },
                { title: "Stop interest and charges", desc: "Your debt stops growing from day one" },
                { title: "End creditor calls and letters", desc: "Legal protection from harassment" },
                { title: "Keep your home", desc: "Protect your property and important assets" },
                { title: "One affordable payment", desc: "Replace multiple debt payments with one manageable amount" },
                { title: "Clear end date", desc: "Know exactly when you'll be debt-free" }
              ].map((benefit, index) => (
                <div 
                  key={index}
                  className="group flex items-start space-x-4 p-4 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 animate-on-load"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-foreground mb-1">{benefit.title}</h4>
                    <p className="text-primary-foreground/70 text-sm">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Considerations Side */}
          <div className="space-y-6">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary-foreground font-display">Important considerations:</h3>
            </div>
            
            <div className="space-y-4">
              {[
                { title: "Budget restrictions", desc: "You'll live on a carefully managed budget" },
                { title: "Credit score impact", desc: "Your credit rating will be affected for 6 years" },
                { title: "Public record", desc: "IVAs are recorded on a searchable public database" },
                { title: "Payment commitment", desc: "Missing payments could lead to bankruptcy" },
                { title: "Not all debts included", desc: "Some types of debt can't be included" }
              ].map((consideration, index) => (
                <div 
                  key={index}
                  className="group flex items-start space-x-4 p-4 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 animate-on-load"
                  style={{ animationDelay: `${(index + 6) * 0.1}s` }}
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-foreground mb-1">{consideration.title}</h4>
                    <p className="text-primary-foreground/70 text-sm">{consideration.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Qualification Section */}
        <div className="glass-card p-8 rounded-3xl text-center mb-12">
          <h3 className="text-2xl font-bold text-primary mb-4 font-display">Find out if you qualify</h3>
          <p className="text-primary/80 mb-8">
            Minimum <span className="font-bold text-accent">£6,000 unsecured debt</span> to{' '}
            <span className="font-bold text-accent">2+ creditors</span> required
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gold text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gold-light hover:shadow-premium hover:scale-[1.02] transform transition-all duration-300 shadow-elegant">
              Check If You Qualify
            </button>
            <button className="border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary-foreground/10 hover:border-primary-foreground hover:shadow-elegant backdrop-blur-sm transform hover:scale-[1.02] transition-all duration-300">
              Speak to an Expert
            </button>
          </div>
        </div>
        
        {/* Visual Debt Reduction Indicator */}
        <div className="text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-red-500/20 to-green-500/20 rounded-2xl p-8 backdrop-blur-sm">
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-red-400 mb-2">100%</div>
                <div className="text-primary-foreground/60 text-sm">Your Current Debt</div>
                <div className="w-24 h-3 bg-red-500/50 rounded-full mt-2"></div>
              </div>
              
              <svg className="w-12 h-12 text-gold animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">20%</div>
                <div className="text-primary-foreground/60 text-sm">After IVA Relief</div>
                <div className="w-24 h-3 bg-green-500/50 rounded-full mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IVASection;
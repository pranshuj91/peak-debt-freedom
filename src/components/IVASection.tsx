const IVASection = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float-slower"></div>

        {/* Floating Debt Reduction Elements */}
        <div className="absolute top-20 right-1/4 text-primary-foreground/10 text-8xl font-bold animate-float-slow">
          80%
        </div>
        <div className="absolute bottom-20 left-1/4 text-primary-foreground/8 text-6xl font-bold animate-float-slower">
          £0
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gold/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <span className="text-gold font-semibold">IVA Benefits</span>
          </div>
          <h2 className="text-[48px] leading-tight font-bold text-primary-foreground mb-6 font-display text-white">
            Could an IVA cut your debt by up to <span className="text-gold animate-pulse-glow">80%?</span>
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            An Individual Voluntary Arrangement (IVA) might be the debt relief you&apos;ve been looking for. But
            it&apos;s not right for everyone.
          </p>
        </div>

        {/* Main Content - Unique Split Design */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Benefits Side */}
          <div className="space-y-6">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary-foreground font-display">What an IVA could do for you:</h3>
            </div>

            <div className="space-y-4">
              {[
                { title: "Write off a % of unaffordable debt", desc: "Reduce the total amount you need to pay back" },
                { title: "No upfront fees", desc: "Start your IVA without paying any initial costs" },
                {
                  title: "Offers creditor protection",
                  desc: "Legal protection from creditor harassment and legal action",
                },
                {
                  title: "Freezes interest and charges on your debts",
                  desc: "Stop additional costs being added to what you owe",
                },
                {
                  title: "Allows you to keep your home and other assets",
                  desc: "Protect your property while getting debt relief",
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="group flex items-start space-x-4 p-4 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 animate-on-load"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary-foreground font-display">Important considerations:</h3>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: "Places you under a strict budget",
                  desc: "You'll need to follow a carefully managed spending plan",
                },
                {
                  title: "Doesn't cover all debt types",
                  desc: "Some debts like mortgages and student loans are excluded",
                },
                {
                  title: "Will be recorded on a public register",
                  desc: "Your IVA details will be publicly accessible",
                },
                { title: "Will impact your credit rating", desc: "Your credit score will be affected for 6 years" },
                {
                  title: "Missed payments can cause your IVA to fail",
                  desc: "Failing to keep up with payments risks the agreement",
                },
                {
                  title: "If your IVA fails, you could be made bankrupt",
                  desc: "Unsuccessful IVAs may lead to bankruptcy proceedings",
                },
              ].map((consideration, index) => (
                <div
                  key={index}
                  className="group flex items-start space-x-4 p-4 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 animate-on-load"
                  style={{ animationDelay: `${(index + 6) * 0.1}s` }}
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
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

        {/* Enhanced Qualification Section */}
        <div className="relative">
          {/* Background Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-accent/5 rounded-3xl blur-xl"></div>

          <div className="glass-card p-12 rounded-3xl text-center mb-16 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl animate-pulse"></div>
            <div
              className="absolute bottom-0 right-0 w-24 h-24 bg-accent/10 rounded-full blur-2xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>

            <div className="relative z-10">
              <div className="inline-flex items-center bg-gold/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                <div className="w-2 h-2 bg-gold rounded-full mr-3 animate-pulse"></div>
                <span className="text-gold font-semibold text-sm">QUALIFICATION CHECK</span>
              </div>

              <h3 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 font-display">
                Find out if you qualify
              </h3>

              <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-6 mb-10 border border-primary-foreground/10">
                <p className="text-lg text-primary-foreground/90 mb-4">Minimum requirements:</p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-gold to-gold-light rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold text-lg">£</span>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gold">£6,000+</div>
                      <div className="text-sm text-primary-foreground/70">unsecured debt</div>
                    </div>
                  </div>

                  <div className="w-12 h-0.5 bg-gradient-to-r from-gold/30 to-accent/30 hidden sm:block"></div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-accent to-accent-light rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold text-lg">2+</span>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent">2+ creditors</div>
                      <div className="text-sm text-primary-foreground/70">required</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <button className="group relative bg-gradient-to-r from-gold to-gold-light text-primary px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-gold/25 transform hover:scale-[1.02] transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">Check If You Qualify</span>
                </button>

                <button className="group relative border-2 border-primary-foreground/30 text-primary-foreground px-10 py-5 rounded-2xl font-bold text-lg hover:bg-primary-foreground/10 hover:border-primary-foreground/60 backdrop-blur-sm transform hover:scale-[1.02] transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">Speak to an Expert</span>
                </button>
              </div>
            </div>
          </div>

          {/* Enhanced Visual Debt Transformation */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-green-500/10 rounded-3xl blur-2xl"></div>

            <div className="glass-card p-8 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-gold to-green-500"></div>

              <div className="text-center mb-8">
                <h4 className="text-2xl font-bold text-primary-foreground mb-2 font-display">Debt Transformation</h4>
                <p className="text-primary-foreground/70">See how an IVA could reduce your burden</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 items-center">
                {/* Current Debt */}
                <div className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-32 h-32 mx-auto bg-gradient-to-br from-red-500/20 to-red-600/30 rounded-full flex items-center justify-center backdrop-blur-sm border border-red-500/20 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-red-400 animate-pulse">100%</div>
                      </div>
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-2 bg-red-500/50 rounded-full"></div>
                  </div>
                  <div className="text-lg font-semibold text-primary-foreground">Your Current Debt</div>
                  <div className="text-sm text-primary-foreground/60">Full amount owed</div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="relative">
                    <svg
                      className="w-16 h-16 text-gold animate-pulse"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                    <div className="absolute inset-0 bg-gold/20 rounded-full blur-xl animate-pulse"></div>
                  </div>
                </div>

                {/* After IVA */}
                <div className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-32 h-32 mx-auto bg-gradient-to-br from-green-500/20 to-emerald-600/30 rounded-full flex items-center justify-center backdrop-blur-sm border border-green-500/20 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-green-400 animate-pulse">20%</div>
                      </div>
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-2 bg-green-500/50 rounded-full"></div>
                  </div>
                  <div className="text-lg font-semibold text-primary-foreground">After IVA Relief</div>
                  <div className="text-sm text-primary-foreground/60">Potentially 80% reduction</div>
                </div>
              </div>

              {/* Savings Highlight */}
              <div className="mt-10 text-center">
                <div className="inline-flex items-center bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-2xl px-8 py-4 border border-green-500/20">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-green-400 font-bold text-lg">Potential savings: Up to 80% of your debt</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IVASection;

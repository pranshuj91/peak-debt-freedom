import { ArrowRight, TrendingUp, Target, Shield, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TakeControlSection = () => {
  const controlSteps = [
    {
      icon: Calculator,
      title: "Assess Your Situation",
      description: "Get a complete picture of your finances with our free debt analysis",
      delay: "0ms"
    },
    {
      icon: Target,
      title: "Set Clear Goals",
      description: "Create realistic, achievable targets for your debt-free future",
      delay: "200ms"
    },
    {
      icon: TrendingUp,
      title: "Track Your Progress",
      description: "Monitor your journey with transparent reporting and regular updates",
      delay: "400ms"
    },
    {
      icon: Shield,
      title: "Protect Your Future",
      description: "Build financial resilience to prevent future debt problems",
      delay: "600ms"
    }
  ];

  const benefits = [
    { label: "Average Debt Reduction", value: "68%", icon: "📉" },
    { label: "Success Rate", value: "95%", icon: "🎯" },
    { label: "Time to Freedom", value: "12-24", suffix: "months", icon: "⏰" },
    { label: "People Helped", value: "12,000+", icon: "👥" }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-background via-secondary/10 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-accent/5 to-gold/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        
        {/* Floating Financial Icons */}
        <div className="absolute top-32 right-1/4 text-primary/10 animate-float-slow">
          <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>
        
        <div className="absolute bottom-32 left-1/4 text-accent/10 animate-float-slower" style={{ animationDelay: '2s' }}>
          <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-2xl mb-6 shadow-premium">
            <TrendingUp className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-display text-foreground mb-6 font-display">
            Take Control of Your <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Financial Future</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-gold mx-auto rounded-full mb-6"></div>
          
          <p className="text-body text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transform your relationship with money. Our proven 4-step process empowers you to break free from debt, 
            build confidence, and create lasting financial stability.
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.label}
              className="glass-card p-6 rounded-2xl text-center group hover:shadow-premium transition-all duration-500 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl mb-3">{benefit.icon}</div>
              <div className="text-3xl font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                {benefit.value}
                {benefit.suffix && <span className="text-lg text-muted-foreground ml-1">{benefit.suffix}</span>}
              </div>
              <p className="text-sm text-muted-foreground font-medium">{benefit.label}</p>
            </div>
          ))}
        </div>

        {/* Control Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {controlSteps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.title}
                className="group relative animate-fade-in"
                style={{ animationDelay: step.delay }}
              >
                {/* Connecting Line (hidden on last item) */}
                {index < controlSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-accent/30 transform translate-x-4 z-0" />
                )}
                
                <div className="glass-card p-8 rounded-2xl text-center hover:shadow-premium transition-all duration-500 group-hover:-translate-y-2 relative z-10">
                  <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Step Number */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    {index + 1}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="glass-card p-12 rounded-3xl text-center animate-fade-in" style={{ animationDelay: '800ms' }}>
          <div className="max-w-3xl mx-auto">
            <h3 className="text-headline text-foreground mb-6 font-display">
              Ready to Take the First Step?
            </h3>
            
            <p className="text-body text-muted-foreground mb-8 leading-relaxed">
              Join thousands who have already transformed their financial lives. Your journey to freedom starts with a simple conversation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="default" size="xl" className="group">
                Start Your Free Assessment
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              
              <Button variant="outline" size="xl" className="group">
                Download Free Guide
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-8 text-muted-foreground mt-8">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">No obligation</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">100% confidential</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Expert support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TakeControlSection;
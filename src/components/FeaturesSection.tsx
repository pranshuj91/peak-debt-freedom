import { Calendar, CreditCard, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FeaturesSection = () => {
  const features = [
    {
      icon: Calendar,
      title: "Set up a plan",
      description: "Set up a personalised payment plan, so that it works for you. It's up to you to decide how much, when & how you want to pay.",
      gradient: "from-accent to-accent-light",
      bgColor: "bg-accent/5",
      iconBg: "bg-accent",
      action: "Create Your Plan"
    },
    {
      icon: CreditCard,
      title: "Access your free credit score",
      description: "We partner with CheckMyFile, the credit reference agency, to give you access to your personal credit score through our app.",
      gradient: "from-gold to-gold-light",
      bgColor: "bg-gold/5",
      iconBg: "bg-gold",
      action: "Check Credit Score"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-subtle relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-gold/10 rounded-full blur-3xl animate-float-slower"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 md:mb-20 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-foreground mb-4 sm:mb-6">
            Take Control of Your Finances Today
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our comprehensive tools and services help you manage your debt effectively and rebuild your financial future.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 animate-scale-in bg-background border border-border/50 hover:border-primary/20"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Background Pattern */}
                <div className={`absolute top-0 right-0 w-32 h-32 ${feature.bgColor} rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative p-6 sm:p-8 md:p-10">
                  {/* Icon */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-primary-foreground" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-foreground mb-3 sm:mb-4 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 sm:mb-8 line-clamp-3">
                    {feature.description}
                  </p>
                  
                  {/* Button */}
                  <Button 
                    variant="default"
                    className="w-full sm:w-auto group/btn font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-lg"
                  >
                    {feature.action}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
                
                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Additional CTA Section */}
        <div className="text-center mt-12 sm:mt-16 md:mt-20 animate-fade-in">
          <div className="max-w-2xl mx-auto">
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 text-[48px]">
              Ready to take the first step towards financial freedom?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="premium"
                size="lg" 
                className="px-8 py-4 rounded-xl font-semibold"
              >
                Get Your Free Assessment
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-4 rounded-xl font-semibold"
              >
                Speak to an Expert
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
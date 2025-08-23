import { Calendar, CreditCard, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FeaturesSection = () => {
  const features = [
    {
      icon: Calendar,
      title: "Set up a plan",
      description: "Set up a personalised payment plan, so that it works for you. It's up to you to decide how much, when & how you want to pay.",
      gradient: "from-accent to-accent-light",
      action: "Create Your Plan"
    },
    {
      icon: CreditCard,
      title: "Access your free credit score",
      description: "We partner with CheckMyFile, the credit reference agency, to give you access to your personal credit score through our app.",
      gradient: "from-gold to-gold-light",
      action: "Check Credit Score"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-foreground mb-6">
            Take Control of Your Finances Today
          </h2>
          <p className="text-body text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive tools and services help you manage your debt effectively and rebuild your financial future.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-3xl shadow-elegant hover:shadow-premium transition-all duration-700 animate-slide-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Background Image Placeholder */}
                <div className={`h-80 bg-gradient-to-br ${feature.gradient} opacity-10 absolute inset-0`}></div>
                
                {/* Content Overlay */}
                <div className="relative h-80 p-10 flex flex-col justify-between bg-white/95 backdrop-blur-sm">
                  <div>
                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                      {feature.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed mb-8">
                      {feature.description}
                    </p>
                  </div>
                  
                  <Button 
                    className="w-fit group/btn bg-gradient-primary hover:shadow-lg transition-all duration-300"
                  >
                    {feature.action}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
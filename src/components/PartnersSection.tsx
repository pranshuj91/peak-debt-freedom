import { Shield, Star, Heart, FileCheck } from 'lucide-react';

const PartnersSection = () => {
  const partners = [
    {
      name: "MoneyHelper",
      icon: Shield,
      description: "Government-backed financial guidance"
    },
    {
      name: "Trustpilot",
      icon: Star,
      description: "Trusted customer reviews"
    },
    {
      name: "Mind",
      icon: Heart,
      description: "Mental health support partner"
    },
    {
      name: "CheckMyFile",
      icon: FileCheck,
      description: "Credit reference services"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-headline text-foreground mb-4">Our Partners</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-gold mx-auto rounded-full mb-6"></div>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            We work with trusted organizations to provide you with comprehensive support and reliable services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => {
            const IconComponent = partner.icon;
            return (
              <div
                key={partner.name}
                className="group glass-card p-8 rounded-2xl text-center hover:shadow-premium transition-all duration-500 animate-scale-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                  {partner.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {partner.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
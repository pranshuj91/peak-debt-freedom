import moneyhelperLogo from "@/assets/moneyhelper-logo.png";
import trustpilotLogo from "@/assets/trustpilot-logo.png";
import mindLogo from "@/assets/mind-logo.png";
import checkmyfileLogo from "@/assets/checkmyfile-logo.png";

const PartnersSection = () => {
  const partners = [
    {
      name: "MoneyHelper",
      logo: "/images/money-helper-scaled-1920w.webp",
    },
    {
      name: "Trustpilot",
      logo: "/images/trustpilot.png",
    },
    {
      name: "Mind",
      logo: "/images/mind.webp",
    },
    {
      name: "CheckMyFile",
      logo: "/images/checkmyfile.png",
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-background via-background/95 to-muted/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5"></div>
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-accent/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            Trusted by Industry Leaders
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-[48px] font-display text-dispaly">
            Our Trusted Partners
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            We collaborate with renowned organizations to deliver exceptional financial services and support
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100"></div>
                <div className="relative bg-white/90 backdrop-blur-sm border border-border/30 rounded-2xl p-6 md:p-8 h-24 md:h-28 flex items-center justify-center hover:border-primary/30 transition-all duration-500 group-hover:shadow-lg group-hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-h-12 md:max-h-14 max-w-full object-contain transition-all duration-300 transform group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import moneyHelperLogo from "@/assets/moneyhelper-logo.png";
import trustpilotLogo from "@/assets/trustpilot-logo.png";
import mindLogo from "@/assets/mind-logo.png";
import checkMyFileLogo from "@/assets/checkmyfile-logo.png";

const PartnersSection = () => {
  const partners = [
    {
      name: "MoneyHelper",
      logo: moneyHelperLogo,
      description: "Government-backed financial guidance"
    },
    {
      name: "Trustpilot",
      logo: trustpilotLogo,
      description: "Trusted customer reviews"
    },
    {
      name: "Mind",
      logo: mindLogo,
      description: "Mental health support partner"
    },
    {
      name: "CheckMyFile",
      logo: checkMyFileLogo,
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

        <div className="relative max-w-5xl mx-auto animate-fade-in">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {partners.map((partner, index) => (
                <CarouselItem key={partner.name} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="group glass-card p-8 rounded-2xl text-center hover:shadow-premium transition-all duration-500 animate-scale-in h-full">
                    <div className="w-32 h-20 bg-white/90 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-300 p-4">
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo`}
                        className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                      {partner.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {partner.description}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-white/10 border-white/20 hover:bg-white/20 text-white" />
            <CarouselNext className="hidden md:flex -right-12 bg-white/10 border-white/20 hover:bg-white/20 text-white" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
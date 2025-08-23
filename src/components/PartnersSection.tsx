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
    },
    {
      name: "Trustpilot",
      logo: trustpilotLogo,
    },
    {
      name: "Mind",
      logo: mindLogo,
    },
    {
      name: "CheckMyFile",
      logo: checkMyFileLogo,
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
            Our Trusted Partners
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            We collaborate with renowned organizations to deliver exceptional financial services and support
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "center",
              loop: true,
              skipSnaps: false,
              dragFree: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {partners.map((partner, index) => (
                <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/4">
                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100"></div>
                    <div className="relative bg-background/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 h-32 flex items-center justify-center hover:border-primary/30 transition-all duration-500 group-hover:shadow-lg group-hover:-translate-y-1">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <img
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        className="max-h-16 max-w-full object-contain opacity-60 group-hover:opacity-100 transition-all duration-300 filter grayscale group-hover:grayscale-0 transform group-hover:scale-105"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden lg:flex -left-12 h-12 w-12 bg-background/80 backdrop-blur-sm border-border/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-lg" />
            <CarouselNext className="hidden lg:flex -right-12 h-12 w-12 bg-background/80 backdrop-blur-sm border-border/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-lg" />
          </Carousel>
          
          {/* Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {partners.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-muted-foreground/30 transition-all duration-300"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
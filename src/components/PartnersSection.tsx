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
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Trusted Partners
          </h2>
          <p className="text-muted-foreground">
            Working with leading organizations to support your financial journey
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {partners.map((partner, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/4">
                  <div className="glass-card p-6 h-24 flex items-center justify-center hover:shadow-lg transition-all duration-300">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="max-h-12 max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
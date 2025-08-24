import { ExternalLink } from "lucide-react";
import { Button } from '@/components/ui/button';

const MoneyHelperSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-muted/30 to-muted/50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="bg-card/80 backdrop-blur-sm rounded-3xl shadow-elegant border border-border/50 p-8 md:p-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            Free Financial Guidance
          </div>
          
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground mb-6 leading-tight max-w-4xl">
            Get Expert Money Management Advice
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl">
            To find out more about managing your money and getting free advice, visit Money Helper, 
            an independent service set up to help people manage their money.
          </p>
          
          {/* Button and Badge Row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
            <Button 
              variant="default"
              size="lg" 
              className="bg-primary hover:bg-primary-glow text-primary-foreground px-6 py-3 text-lg font-semibold"
              asChild
            >
              <a 
                href="https://www.moneyhelper.org.uk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Visit MoneyHelper
                <ExternalLink className="w-5 h-5" />
              </a>
            </Button>
            
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="font-medium">Independent & Free Service</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoneyHelperSection;
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section 
      className="min-h-screen flex items-center justify-center bg-background"
      id="home"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-foreground mb-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Your debt doesn't define you.
          <br />
          Your <span className="text-primary">next step</span> does.
        </h1>
        
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto text-lg">
          Break free from overwhelming debt with a plan that actually works. We've helped over 12,000 people write off unaffordable debt and rebuild their financial future.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-base px-8 py-3">
            Get Your Free Assessment
          </Button>
          <Button variant="outline" size="lg" className="text-base px-8 py-3">
            Calculate Savings
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
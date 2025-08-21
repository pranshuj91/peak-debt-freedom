import { Button } from '@/components/ui/button';

const TrustSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why thousands trust us with their <span className="text-primary">financial future</span>
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full mx-auto flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Honest conversations, no sales pressure
            </h3>
            
            <p className="text-muted-foreground leading-relaxed">
              We tell you the truth about your options – even if it means we don't make money. 
              Your debt advisor will never use confusing jargon or pressure you into a solution that doesn't fit.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full mx-auto flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
              </svg>
            </div>
            
            <h3 className="text-xl font-semibold text-foreground mb-4">
              We actually care about your story
            </h3>
            
            <p className="text-muted-foreground leading-relaxed">
              Your financial stress is real, and so is our commitment to helping you through it. 
              Every conversation starts with understanding what you're going through, not what we want to sell you.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full mx-auto flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
              </svg>
            </div>
            
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Solutions built around your life
            </h3>
            
            <p className="text-muted-foreground leading-relaxed">
              Your circumstances are unique, so your debt solution should be too. 
              We take time to understand your income, expenses, and goals before recommending anything.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to experience the difference a personal approach makes?
          </p>
          <Button size="lg">Get Your Free Assessment Today</Button>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
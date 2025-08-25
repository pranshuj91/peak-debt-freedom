import { Users, TrendingDown, Heart } from 'lucide-react';
import { useCounter } from '@/hooks/use-counter';

const StatisticsSection = () => {
  const { count: millionCount, elementRef } = useCounter({
    end: 8.2,
    duration: 3000,
    decimals: 1,
    suffix: ' million'
  });
  return (
    <section className="py-24 bg-gradient-primary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/10 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-48 translate-y-48"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <Heart className="w-5 h-5 text-gold" />
              <span className="text-primary-foreground/90 font-medium">You're not alone</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold font-display text-primary-foreground mb-8 leading-tight text-[48px]">
              We understand your 
              <span className="text-gold animate-pulse-glow"> struggle</span>
            </h2>
            
            <p className="text-primary-foreground/90 text-lg leading-relaxed mb-12">
              On average, every month in 2023, we helped over 1,000 customers like you set up affordable payment plans. 
              Try our budget calculator to work out what you can afford to pay, or read what our customers have to say about us below.
            </p>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <div className="text-gold font-bold text-lg">1,000+</div>
                  <div className="text-primary-foreground/80 text-sm">Monthly customers helped</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                  <TrendingDown className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <div className="text-gold font-bold text-lg">2023</div>
                  <div className="text-primary-foreground/80 text-sm">Successful year</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Statistics */}
          <div className="animate-scale-in">
            <div className="glass-card p-12 rounded-3xl shadow-premium">
              <div className="text-center">
                <div className="mb-8">
                  <div 
                    ref={elementRef}
                    className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-accent to-gold bg-clip-text text-transparent mb-4 animate-pulse-glow"
                  >
                    {millionCount}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 leading-tight text-white/90">
                    people struggling with debt in the UK
                  </h3>
                </div>
                
                <div className="border-t border-gray-200 pt-8">
                  <div className="text-4xl text-gold animate-pulse-glow">£14,540</div>
                  <p className="text-muted-foreground text-lg text-white/90">
                    Each owing on average
                  </p>
                </div>
                
                <div className="mt-8 p-6 bg-gradient-subtle rounded-2xl">
                  <p className="text-muted-foreground text-sm italic">
                    "These statistics represent real people facing real challenges. 
                    We're here to help you become part of the success stories."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
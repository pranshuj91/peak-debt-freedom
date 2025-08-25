import { Users, TrendingDown, Heart } from 'lucide-react';
import { useState, useEffect } from 'react';

const CountingAnimation = ({ targetValue, duration = 2000 }: { targetValue: number, duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(targetValue * easeOut));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [targetValue, duration]);

  return count;
};

const StatisticsSection = () => {
  const millionCount = CountingAnimation({ targetValue: 8.2, duration: 2500 });

  return (
    <section className="py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-primary relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-transparent to-gold/20 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-3xl -translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/15 rounded-full blur-3xl translate-x-48 translate-y-48"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center space-x-3 bg-white/15 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/10">
              <Heart className="w-5 h-5 text-gold animate-pulse" />
              <span className="text-white font-medium">You're not alone</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-8 leading-tight">
              We understand your 
              <span className="text-gold animate-pulse-glow"> struggle</span>
            </h2>
            
            <p className="text-white/90 text-lg leading-relaxed mb-12 font-medium">
              On average, every month in 2023, we helped over 1,000 customers like you set up affordable payment plans. 
              Try our budget calculator to work out what you can afford to pay, or read what our customers have to say about us below.
            </p>
            
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-gold/25 rounded-full flex items-center justify-center border border-gold/30">
                  <Users className="w-7 h-7 text-gold" />
                </div>
                <div>
                  <div className="text-gold font-bold text-xl">1,000+</div>
                  <div className="text-white/80 text-sm font-medium">Monthly customers helped</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-gold/25 rounded-full flex items-center justify-center border border-gold/30">
                  <TrendingDown className="w-7 h-7 text-gold" />
                </div>
                <div>
                  <div className="text-gold font-bold text-xl">2023</div>
                  <div className="text-white/80 text-sm font-medium">Successful year</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Statistics */}
          <div className="animate-scale-in">
            <div className="bg-white/95 backdrop-blur-sm p-12 rounded-3xl shadow-2xl border border-white/20">
              <div className="text-center">
                <div className="mb-10">
                  <div className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-primary via-accent to-gold bg-clip-text text-transparent mb-6 leading-none">
                    {millionCount.toFixed(1)} million
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6 leading-tight">
                    people struggling with debt in the UK
                  </h3>
                </div>
                
                <div className="border-t border-slate-200 pt-8 mb-8">
                  <div className="text-5xl font-bold text-slate-800 mb-3">£14,540</div>
                  <p className="text-slate-600 text-lg font-medium">
                    Each owing on average
                  </p>
                </div>
                
                <div className="p-6 bg-gradient-to-r from-primary/5 to-gold/5 rounded-2xl border border-primary/10">
                  <p className="text-slate-700 text-sm italic font-medium leading-relaxed">
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
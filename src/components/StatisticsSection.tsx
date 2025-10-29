import { Heart, Calculator, Phone, CheckCircle } from "lucide-react";
import AffordabilityCalculator from "./AffordabilityCalculator";
import { Button } from "./ui/button";

const StatisticsSection = () => {
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

            <p className="text-primary-foreground/90 text-lg leading-relaxed mb-8">
              Try our budget calculator to work out what you can afford to pay, or read what our customers have to say
              about us below.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button
                variant="hero"
                size="lg"
                className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now: 0300 678 0015
              </Button>
              <AffordabilityCalculator />
            </div>

            <p className="text-xs sm:text-sm text-primary-foreground/70 max-w-lg">
              May not be suitable in all circumstances. Fees apply. Your credit rating may be affected
            </p>
          </div>

          {/* Right Side - Benefits */}
          <div className="animate-scale-in">
            <div className="glass-card p-8 sm:p-12 rounded-3xl shadow-premium">
              <h3 className="text-2xl sm:text-3xl font-bold text-white/90 mb-8 text-center">
                Take Control Today
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 bg-white/5 rounded-xl">
                  <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Free Consultation</h4>
                    <p className="text-white/70 text-sm">No obligation assessment of your situation</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white/5 rounded-xl">
                  <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Tailored Solutions</h4>
                    <p className="text-white/70 text-sm">Personalized plans that work for your situation</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white/5 rounded-xl">
                  <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Expert Support</h4>
                    <p className="text-white/70 text-sm">Experienced staff guiding you every step</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white/5 rounded-xl">
                  <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Clear Communication</h4>
                    <p className="text-white/70 text-sm">Transparent process with no hidden surprises</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-subtle rounded-2xl">
                <p className="text-white/80 text-sm italic text-center">
                  "We're here to help you become part of the success stories."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;

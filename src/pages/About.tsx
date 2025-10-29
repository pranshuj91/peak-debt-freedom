import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, Shield, Users, TrendingDown, CheckCircle } from "lucide-react";

const About = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Add slide-up animation to hero elements
    const animateHeroElements = () => {
      const elements = document.querySelectorAll(".hero-animate");
      elements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add("animate-slide-up");
        }, index * 200);
      });
    };

    // Small delay to ensure DOM is ready
    setTimeout(animateHeroElements, 100);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-12 md:pt-24 md:pb-16 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/10"></div>
        <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-accent/5 rounded-full blur-3xl -translate-x-32 -translate-y-32 md:-translate-x-48 md:-translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-gold/10 rounded-full blur-3xl translate-x-32 translate-y-32 md:translate-x-48 md:translate-y-48"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-6">
          <div className="hero-animate inline-flex items-center space-x-2 sm:space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-6 sm:mb-8 opacity-0 transform translate-y-8">
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-gold" />
            <span className="text-primary-foreground/90 font-medium text-sm sm:text-base">About Peak Insolvency</span>
          </div>

          <h1 className="hero-animate text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display text-primary-foreground mb-4 sm:mb-6 leading-tight px-2 opacity-0 transform translate-y-8">
            We're here to help put<span className="text-gold">you first</span>
          </h1>

          <p className="hero-animate text-lg sm:text-xl text-primary-foreground/90 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-4 opacity-0 transform translate-y-8">
            Most debt companies treat you like a number. We treat you like a person. When debt feels overwhelming, you
            need someone who listens, understands, and fights in your corner.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button
              variant="hero"
              size="lg"
              className="hero-animate w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 opacity-0 transform translate-y-8"
            >
              Start Your Journey
            </Button>
            <Button
              variant="outline-hero"
              size="lg"
              className="hero-animate w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 opacity-0 transform translate-y-8"
            >
              Free Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground mb-3 sm:mb-4 px-4">
              Why Choose <span className="text-accent">Peak Insolvency?</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
              We're not here to judge your past financial decisions. We're here to help you build a better financial
              future.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center p-4 sm:p-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">Personal Approach</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Every situation is unique. We listen to your story and create a tailored solution.
              </p>
            </div>

            <div className="text-center p-4 sm:p-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-accent-foreground" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">No Judgment Zone</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                We understand financial struggles happen to good people. Zero judgment, maximum support.
              </p>
            </div>

            <div className="text-center p-4 sm:p-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-accent-foreground" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">Transparent Process</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                No hidden fees, no surprises. Clear communication every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4 sm:mb-6 px-4">
              Our <span className="text-accent">Mission</span>
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6 sm:mb-8"></div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed mb-6 sm:mb-8 px-4">
              At Peak Insolvency, we believe it should be simple and affordable for you to get back on track. That's why
              we're here to support you at every step of your journey with our core values of
              <strong className="text-primary"> HONESTY - EMPATHY - UNDERSTANDING</strong>.
            </p>

            <div className="bg-background rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm border border-border/50 mx-4 sm:mx-0">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 mb-6">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">1,000+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Monthly customers helped</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">2023</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Successful year</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">£2.4M</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Debt written off</div>
                </div>
              </div>

              <blockquote className="text-sm sm:text-base lg:text-lg italic text-muted-foreground border-l-4 border-primary pl-4 sm:pl-6 text-left">
                "We understand that 8.2 million people are struggling with debt in the UK. Each person owing on average
                £14,540. These statistics represent real people facing real challenges. We're here to help you become
                part of the success stories."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground mb-3 sm:mb-4 px-4">
              What We <span className="text-accent">Offer</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground px-4">
              Free debt advice tailored to your circumstances
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-muted/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center mx-4 md:mx-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-3">
                Individual Voluntary Arrangements
              </h3>
              <p className="text-sm text-muted-foreground">
                We specialize in IVAs to help you manage your unsecured debt with affordable monthly payments.
              </p>
            </div>

            <div className="bg-muted/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center mx-4 md:mx-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-accent-foreground" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-3">Trust Deeds</h3>
              <p className="text-sm text-muted-foreground">
                For Scottish residents, we provide Trust Deed solutions to help manage your debt effectively.
              </p>
            </div>

            <div className="bg-muted/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center mx-4 md:mx-0 md:col-span-2 lg:col-span-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <TrendingDown className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-3">
                Debt Arrangement Scheme
              </h3>
              <p className="text-sm text-muted-foreground">
                DAS provides a way to pay back debts in a manageable way without the pressure from creditors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-primary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display text-primary-foreground mb-4 sm:mb-6 px-4">
            Ready to Take Control of <span className="text-gold"> Your Debt?</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-primary-foreground/90 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
            Don't let debt control your life. Take the first step towards financial freedom today.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8 px-4">
            <Button
              variant="hero"
              size="lg"
              className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
            >
              Get Your Free Assessment
            </Button>
            <Button
              variant="outline-hero"
              size="lg"
              className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
            >
              Call Us Today
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 lg:space-x-8 text-primary-foreground/80 px-4">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
              <span className="font-medium text-sm sm:text-base">Free consultation</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
              <span className="font-medium text-sm sm:text-base">No upfront costs</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
              <span className="font-medium text-sm sm:text-base">Real results</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

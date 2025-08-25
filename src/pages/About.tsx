import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Heart, Shield, Users, TrendingDown, CheckCircle } from 'lucide-react';

const About = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/10"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl translate-x-48 translate-y-48"></div>
        
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <Heart className="w-5 h-5 text-gold" />
            <span className="text-primary-foreground/90 font-medium">About Peak Insolvency</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold font-display text-primary-foreground mb-6 leading-tight">
            The debt advice that puts <span className="text-gold">you first</span>
          </h1>
          
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Most debt companies treat you like a number. We treat you like a person. 
            When debt feels overwhelming, you need someone who listens, understands, and fights in your corner.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              Start Your Journey
            </Button>
            <Button variant="outline-hero" size="xl">
              Free Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
              Why Choose Peak Insolvency?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're not here to judge your past financial decisions. We're here to help you build a better financial future.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Personal Approach</h3>
              <p className="text-muted-foreground">
                Every situation is unique. We listen to your story and create a tailored solution.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">No Judgment Zone</h3>
              <p className="text-muted-foreground">
                We understand financial struggles happen to good people. Zero judgment, maximum support.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingDown className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Proven Results</h3>
              <p className="text-muted-foreground">
                12,000+ people helped with £2.4M in debt written off. Your success is our mission.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Transparent Process</h3>
              <p className="text-muted-foreground">
                No hidden fees, no surprises. Clear communication every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-6">
              Our Mission
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-8"></div>
          </div>

          <div className="prose prose-lg max-w-none text-center">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              At Peak Insolvency, we believe it should be simple and affordable for you to become debt free. 
              That's why we're here to support you at every step of your journey with our core values of 
              <strong className="text-primary"> HONESTY - EMPATHY - UNDERSTANDING</strong>.
            </p>
            
            <div className="bg-background rounded-2xl p-8 shadow-sm border border-border/50">
              <div className="flex items-center justify-center space-x-8 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">1,000+</div>
                  <div className="text-sm text-muted-foreground">Monthly customers helped</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">2023</div>
                  <div className="text-sm text-muted-foreground">Successful year</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">£2.4M</div>
                  <div className="text-sm text-muted-foreground">Debt written off</div>
                </div>
              </div>
              
              <blockquote className="text-lg italic text-muted-foreground border-l-4 border-primary pl-6">
                "We understand that 8.2 million people are struggling with debt in the UK. 
                Each person owing on average £14,540. These statistics represent real people facing real challenges. 
                We're here to help you become part of the success stories."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-muted-foreground">
              Free debt advice tailored to your circumstances
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-muted/30 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Individual Voluntary Arrangements</h3>
              <p className="text-muted-foreground text-sm">
                We specialize in IVAs to help you manage your unsecured debt with affordable monthly payments.
              </p>
            </div>

            <div className="bg-muted/30 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Trust Deeds</h3>
              <p className="text-muted-foreground text-sm">
                For Scottish residents, we provide Trust Deed solutions to help manage your debt effectively.
              </p>
            </div>

            <div className="bg-muted/30 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingDown className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Debt Arrangement Scheme</h3>
              <p className="text-muted-foreground text-sm">
                DAS provides a way to pay back debts in a manageable way without the pressure from creditors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-primary-foreground mb-6">
            Ready to Take Control of Your Debt?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Don't let debt control your life. Take the first step towards financial freedom today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              Get Your Free Assessment
            </Button>
            <Button variant="outline-hero" size="xl">
              Call Us Today
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-8 text-primary-foreground/80 mt-8">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-accent" />
              <span className="font-medium">Free consultation</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-accent" />
              <span className="font-medium">No upfront costs</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-accent" />
              <span className="font-medium">Real results</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
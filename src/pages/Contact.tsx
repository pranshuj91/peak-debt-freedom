import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Clock, MessageCircle, Shield, Users, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    debtAmount: '',
    message: ''
  });

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 md:pt-24 md:pb-16 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/10"></div>
        <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-accent/5 rounded-full blur-3xl -translate-x-32 -translate-y-32 md:-translate-x-48 md:-translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-gold/10 rounded-full blur-3xl translate-x-32 translate-y-32 md:translate-x-48 md:translate-y-48"></div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-4">
          <div className="inline-flex items-center space-x-2 sm:space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-6 sm:mb-8">
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-gold" />
            <span className="text-primary-foreground/90 font-medium text-sm sm:text-base">Get In Touch</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display text-primary-foreground mb-4 sm:mb-6 leading-tight px-2">
            Ready to Take Control of Your <span className="text-gold">Financial Future?</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-primary-foreground/90 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-4">
            Our expert debt advisors are here to help. Get your free, confidential consultation today and discover how we can help you become debt-free.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button variant="hero" size="lg" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
              Call Now: 0800 123 4567
            </Button>
            <Button variant="outline-hero" size="lg" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
              Free Online Assessment
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground mb-3 sm:mb-4 px-4">
              Multiple Ways to Get Help
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
              Choose the method that works best for you. All consultations are completely free and confidential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center p-6 bg-background rounded-2xl shadow-sm border border-border/50 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">Call Us</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4">
                Speak directly with our debt advisors
              </p>
              <div className="font-semibold text-primary">0800 123 4567</div>
              <div className="text-sm text-muted-foreground">Freephone</div>
            </div>

            <div className="text-center p-6 bg-background rounded-2xl shadow-sm border border-border/50 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-accent-foreground" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">Email Us</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4">
                Get expert advice via email
              </p>
              <div className="font-semibold text-primary">advice@peakinsolvency.co.uk</div>
              <div className="text-sm text-muted-foreground">24/7 response</div>
            </div>

            <div className="text-center p-6 bg-background rounded-2xl shadow-sm border border-border/50 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">Opening Hours</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4">
                We're here when you need us
              </p>
              <div className="font-semibold text-primary">Mon-Fri: 8am-8pm</div>
              <div className="text-sm text-muted-foreground">Sat: 9am-5pm</div>
            </div>

            <div className="text-center p-6 bg-background rounded-2xl shadow-sm border border-border/50 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-accent-foreground" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">Our Office</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4">
                Visit us in person
              </p>
              <div className="font-semibold text-primary">Manchester</div>
              <div className="text-sm text-muted-foreground">By appointment</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-foreground mb-4 px-4">
              Get Your Free Debt Assessment
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground px-4">
              Fill out the form below and one of our expert advisors will contact you within 24 hours
            </p>
          </div>

          <div className="bg-muted/30 rounded-2xl p-6 sm:p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium text-foreground">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                    className="w-full"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-foreground">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    required
                    className="w-full"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium text-foreground">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    required
                    className="w-full"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="debtAmount" className="text-sm font-medium text-foreground">Total Debt Amount</Label>
                  <Input
                    id="debtAmount"
                    name="debtAmount"
                    value={formData.debtAmount}
                    onChange={handleInputChange}
                    placeholder="e.g., £25,000 (optional)"
                    className="w-full"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium text-foreground">Tell us about your situation</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Please provide any additional details about your debt situation that would help us assist you better..."
                  rows={4}
                  className="w-full"
                />
              </div>

              <div className="bg-background rounded-xl p-4 border border-border/50">
                <div className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Your information is completely secure.</strong> We use industry-standard encryption and never share your personal details with third parties without your consent.
                  </div>
                </div>
              </div>

              <Button 
                type="submit" 
                variant="premium" 
                size="lg" 
                className="w-full sm:w-auto px-8 py-4 text-lg font-semibold"
              >
                Get My Free Assessment
              </Button>

              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span>No obligation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span>Completely confidential</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span>Expert advice</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>


      {/* Final CTA */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-primary-foreground mb-4 sm:mb-6 px-4">
            Don't Let Debt Control Your Life
          </h2>
          <p className="text-base sm:text-lg text-primary-foreground/90 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
            Take the first step towards financial freedom today. Our expert advisors are here to help you find the best solution for your situation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button variant="hero" size="lg" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
              Call Now: 0800 123 4567
            </Button>
            <Button variant="outline-hero" size="lg" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
              Start Online Assessment
            </Button>
          </div>

          <p className="text-sm text-primary-foreground/80 mt-6 px-4">
            <strong>Remember:</strong> All consultations are completely free and confidential. No obligation, no judgment.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
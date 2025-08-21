import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section className="py-24 bg-muted/30" id="about">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            The debt advice that puts <span className="text-primary">you first</span>
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">
              Most debt companies treat you like a number.<br />
              <span className="text-primary">We treat you like a person.</span>
            </h3>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                When debt feels overwhelming, you need more than generic advice – you need someone who 
                <strong className="text-foreground"> listens, understands your unique situation, and fights in your corner</strong>. 
                That's exactly what we do.
              </p>
              
              <p>
                We're not here to judge your past financial decisions. We're here to help you build a 
                <strong className="text-primary"> better financial future, one realistic step at a time</strong>.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg">Start Your Journey</Button>
              <Button variant="outline" size="lg">Learn Our Process</Button>
            </div>
          </div>
          
          <div className="border border-border rounded-lg p-8">
            <h4 className="text-xl font-semibold text-foreground mb-8 text-center">Why Choose Peak Insolvency?</h4>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                </div>
                <div>
                  <h5 className="font-medium text-foreground mb-1">Personal Approach</h5>
                  <p className="text-muted-foreground text-sm">Every situation is unique. We listen to your story and create a tailored solution.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                </div>
                <div>
                  <h5 className="font-medium text-foreground mb-1">No Judgment Zone</h5>
                  <p className="text-muted-foreground text-sm">We understand financial struggles happen to good people. Zero judgment, maximum support.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                </div>
                <div>
                  <h5 className="font-medium text-foreground mb-1">Proven Results</h5>
                  <p className="text-muted-foreground text-sm">12,000+ people helped with £2.4M in debt written off. Your success is our mission.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                </div>
                <div>
                  <h5 className="font-medium text-foreground mb-1">Transparent Process</h5>
                  <p className="text-muted-foreground text-sm">No hidden fees, no surprises. Clear communication every step of the way.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowLeft, Mail, Phone, MapPin, ExternalLink, MessageSquare, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ComplaintsPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-glow to-primary-light py-12 sm:py-16 lg:py-20 px-4">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-4 leading-tight mt-20 text-display">
            Complaints Policy
          </h1>
          <p className="text-lg sm:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            We're committed to providing excellent service and resolving any issues quickly and fairly
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-6 sm:space-y-8">
        
        {/* Introduction */}
        <Card className="backdrop-blur-sm bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <MessageSquare className="w-6 h-6 text-primary" />
              Introduction
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Here at Peak Insolvency, it is important to us that our customers receive a high level of service. 
              However, we do understand that sometimes things can go wrong, we welcome your feedback and the opportunity to put 
              things right, so we aim to resolve any issues as soon as possible.
            </p>
            <p>
              If something has gone wrong, then please let us know and we can ensure we fully investigate the issue and do 
              everything we can to put things right for you. We will keep you up to date as matters progress and you can 
              contact us any time should you have any questions.
            </p>
          </CardContent>
        </Card>

        {/* Contact Methods */}
        <Card className="backdrop-blur-sm bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <Phone className="w-6 h-6 text-primary" />
              Contacting Us
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              Whichever way you choose to contact us, we will start our investigations right away. Our contact details are:
            </p>
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              <div className="flex items-start gap-4 p-4 sm:p-6 rounded-lg bg-muted/50">
                <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1 text-sm sm:text-base">By Email</h4>
                  <a 
                    href="mailto:info@theinsolvencyguidancegroup.co.uk" 
                    className="text-primary hover:text-primary-glow transition-colors text-sm sm:text-base break-all"
                  >
                    info@theinsolvencyguidancegroup.co.uk
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 sm:p-6 rounded-lg bg-muted/50">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1 text-sm sm:text-base">In Writing</h4>
                  <address className="text-muted-foreground not-italic text-xs sm:text-sm leading-relaxed">
                    The Complaints Officer<br />
                    Peak Insolvency<br />
                    Suite 138, Peel House<br />
                    30 The Downs<br />
                    Altrincham, Cheshire<br />
                    WA14 2PX
                  </address>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Complaint Handling */}
        <Card className="backdrop-blur-sm bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <Clock className="w-6 h-6 text-primary" />
              Complaint Handling
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center p-4 sm:p-6 rounded-lg bg-primary/5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary font-bold text-sm sm:text-base">3</span>
                </div>
                <h4 className="font-semibold mb-1 text-sm sm:text-base">Initial Response</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">Working days for resolution</p>
              </div>
              
              <div className="text-center p-4 sm:p-6 rounded-lg bg-primary/5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary font-bold text-sm sm:text-base">4</span>
                </div>
                <h4 className="font-semibold mb-1 text-sm sm:text-base">Update Timeline</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">Weeks for progress update</p>
              </div>
              
              <div className="text-center p-4 sm:p-6 rounded-lg bg-primary/5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary font-bold text-sm sm:text-base">8</span>
                </div>
                <h4 className="font-semibold mb-1 text-sm sm:text-base">Final Response</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">Weeks maximum timeline</p>
              </div>
            </div>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Your complaint will usually be handled by one of our highly experienced managers in the first instance and 
                we will aim to resolve the complaint within three working days. However, if the manager is not able to 
                resolve your complaint, we will escalate the matter to our Complaints Team who will formally acknowledge 
                your complaint upon receipt and will confirm the contact details of the person investigating it.
              </p>
              <p>
                If we are still investigating your complaint after four weeks, we will explain to you the reasons why and 
                indicate when you can expect a full and final response.
              </p>
              <p>
                We should have finalised our investigation and issued our final response within a maximum of eight weeks. 
                When we have completed our investigation, we will send you a final response. This response will detail the 
                investigation and our findings. It will also confirm our conclusions and whether the complaint has been 
                upheld, partially upheld, or not upheld. The response will also explain any action being taken, or that 
                has been taken, to correct the situation that led you to complain.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* What We Need */}
        <Card className="backdrop-blur-sm bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <CheckCircle className="w-6 h-6 text-primary" />
              What We Need From You
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              To properly deal with the complaint, we will need you to provide the following:
            </p>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              {[
                'Your full name',
                'Your address and contact telephone number',
                'Full details of your complaint',
                'Your reference number with Peak Insolvency',
                'Other details of what you would like us to investigate',
                'Any further evidence that you feel is relevant'
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-3 sm:p-4 rounded-lg bg-muted/30">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-xs sm:text-sm">{item}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Regulator Details */}
        <Card className="backdrop-blur-sm bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <AlertCircle className="w-6 h-6 text-primary" />
              Regulator Details
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground leading-relaxed">
            <p>
              The Insolvency Practitioners Association (IPA) is the regulatory body for all the Insolvency Practitioners 
              at Peak Insolvency. The IPA promote and maintain high standards throughout the insolvency 
              industry and undertake regular monitoring visits to each member to ensure that all Insolvency Practitioners 
              act in line with the insolvency rules, relevant legislation, the code of ethics and best practice guidelines.
            </p>
          </CardContent>
        </Card>

        {/* Further Escalation */}
        <Card className="backdrop-blur-sm bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <ExternalLink className="w-6 h-6 text-primary" />
              Further Escalation
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground">
              If you are dissatisfied with our final response, or we have not been able to resolve your complaint, 
              or indeed at any time of the process, you can escalate the complaint to the IPA using the Insolvency 
              Complaints Gateway using one of the following methods:
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50">
                <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Telephone</h4>
                  <p className="text-sm text-muted-foreground">
                    Call the Insolvency Service Enquiry Line on <strong>0300 678 0015</strong><br />
                    (Monday to Friday 9 am – 5 pm)
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50">
                <ExternalLink className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Online Form</h4>
                  <a 
                    href="https://www.insolvencydirect.bis.gov.uk/ExternalOnlineForms/InsolvencyPractitionerComplaint.aspx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-glow transition-colors text-sm break-all"
                  >
                    insolvencydirect.bis.gov.uk/ExternalOnlineForms/InsolvencyPractitionerComplaint.aspx
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50">
                <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <a 
                    href="mailto:insolvency.enquiryline@insolvency.gov.uk"
                    className="text-primary hover:text-primary-glow transition-colors text-sm"
                  >
                    insolvency.enquiryline@insolvency.gov.uk
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">By Post</h4>
                  <address className="text-muted-foreground not-italic text-sm leading-relaxed">
                    IP Complaints<br />
                    Insolvency Service<br />
                    3rd Floor, 1 City Walk<br />
                    Leeds, LS11 9DA
                  </address>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center py-8">
          <Button asChild size="lg" className="bg-primary hover:bg-primary-glow">
            <Link to="/">
              Return to Homepage
            </Link>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ComplaintsPolicy;
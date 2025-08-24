import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowLeft, Shield, Lock, Eye, Users, FileText, Database, Globe, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-glow to-primary-light py-12 sm:py-16 lg:py-20 px-4">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-4 leading-tight mt-20">
            Privacy Policy
          </h1>
          <p className="text-lg sm:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Understanding how we protect and use your personal information
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-6 py-8 sm:py-12 space-y-6 sm:space-y-8">
        
        {/* Introduction */}
        <Card className="backdrop-blur-sm bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl sm:text-2xl">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              Introduction
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
            <p>
              Peak Insolvency is committed to preserving and respecting your privacy.
            </p>
            <p>
              The following policy to understand how we use and protect the information that you provide to us.
            </p>
            <p>
              This privacy policy will apply to you if you provide your personal information to us, even if you subsequently decide not to proceed. It is also used by all companies within Peak Insolvency group and our affiliate companies with whom we may share information (see below for further details). This privacy policy sets out how we will use your personal data to provide our services to you.
            </p>
            <p>
              On the basis that you been advised that we have a privacy and data policy and that you have the option not to proceed with our services, you consent to the collection, use and transfer of your information under the terms of this policy.
            </p>
          </CardContent>
        </Card>

        {/* Privacy Promise */}
        <Card className="backdrop-blur-sm bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl sm:text-2xl">
              <Lock className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              Our Privacy Promise
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4 text-sm sm:text-base">We promise:</p>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/5">
                <Lock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1 text-sm sm:text-base">Keep Data Safe</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">To keep your data safe and private</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/5">
                <Shield className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1 text-sm sm:text-base">No Data Sales</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">Not to sell your data</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/5">
                <Eye className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1 text-sm sm:text-base">Full Control</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">To give you ways to manage and review your information at any time</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Information We Collect */}
        <Card className="backdrop-blur-sm bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl sm:text-2xl">
              <Database className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              What Personal Information We Collect
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground text-sm sm:text-base">
              We will only collect information that we need, or where we are required to collect the information to enable us to perform our legal, regulatory, or contractual obligations necessary to provide you with the products or services, or where we have your permission.
            </p>
            <p className="text-muted-foreground mb-4 text-sm sm:text-base">
              The type of information that we may collect will probably include the collection of some or all the following:
            </p>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-3">
              {[
                'Your personal details such as name and date of birth',
                'Your address',
                'Contact details such as phone number and email address',
                'Special personal information such as health information',
                'Details about your family unit and some of their details',
                'Financial information such as details of your income and expenditure',
                'Employment information',
                'Information about your creditors',
                'Information on how you use our website(s) and products and services'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-xs sm:text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* How We Use Information */}
        <Card className="backdrop-blur-sm bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl sm:text-2xl">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              How We Use Your Personal Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground text-sm sm:text-base">
              We can only use your personal information where it falls into one or more of the following categories:
            </p>
            <div className="space-y-3">
              {[
                'It is necessary to enter or fulfil a contract we have with you',
                'You have provided your consent',
                'We have a legal or regulatory obligation to do so',
                'It is necessary to carry out a task that is in the public interest',
                'It is in our legitimate interest to do so, and it is not against your rights'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/20">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-primary font-bold text-xs">{index + 1}</span>
                  </div>
                  <span className="text-xs sm:text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Data Sharing */}
        <Card className="backdrop-blur-sm bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl sm:text-2xl">
              <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              Who We Share Your Information With
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground mb-4 text-sm sm:text-base">
              We may share your information with our Debt Solution Providers/partners. We will only share your information with them if they have agreed to keep it confidential.
            </p>
            <div className="space-y-3">
              {[
                { title: 'Your Creditors', desc: 'Your personal data will be shared with your creditors, their agents, debt collectors, bailiffs and solicitors dealing with the debts.' },
                { title: 'Our Regulators', desc: 'The Information Commissioner\'s Office, or any other regulatory body or authority may request certain information.' },
                { title: 'The Insolvency Service', desc: 'If your IVA is accepted, details will be recorded on the Insolvency Register which is accessible by the public.' },
                { title: 'Credit Reference Agencies', desc: 'To obtain information about your financial history or your credit commitments.' },
                { title: 'Legal Partners', desc: 'Solicitors to assist with the administration of your IVA or legal obligations.' },
                { title: 'Technology Partners', desc: 'Third-party software companies to help manage your data securely.' }
              ].map((item, index) => (
                <div key={index} className="p-4 rounded-lg bg-muted/20 border-l-4 border-primary/20">
                  <h4 className="font-semibold mb-2 text-sm sm:text-base">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Data Storage */}
        <Card className="backdrop-blur-sm bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl sm:text-2xl">
              <Database className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              How Long We Store Your Data
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 rounded-lg bg-primary/5">
                <h4 className="font-semibold mb-2 text-sm sm:text-base">If You Become Our Customer</h4>
                <p className="text-xs sm:text-sm text-muted-foreground mb-2">
                  We keep your information for at least 6 years from when we stop providing services to you.
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Telephone calls are retained for at least 6 years from the date made.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-primary/5">
                <h4 className="font-semibold mb-2 text-sm sm:text-base">If You Don't Proceed</h4>
                <p className="text-xs sm:text-sm text-muted-foreground mb-2">
                  Your information is normally deleted after 2 years (except recorded calls).
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Unless you've consented to receive marketing communications.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Your Rights */}
        <Card className="backdrop-blur-sm bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl sm:text-2xl">
              <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              Your Rights
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4">
              {[
                { title: 'Access Your Information', desc: 'Request a copy of personal information we hold about you (Data Subject Access Request)' },
                { title: 'Correct Your Information', desc: 'Request that we correct any incorrect personal information we hold' },
                { title: 'Limit Processing', desc: 'Request deletion or ask us to stop processing your information' },
                { title: 'Data Portability', desc: 'Request your information in an electronic format for you or another company' }
              ].map((item, index) => (
                <div key={index} className="p-4 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors">
                  <h4 className="font-semibold mb-2 text-sm sm:text-base">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="backdrop-blur-sm bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl sm:text-2xl">
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              Contact Us
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6 text-sm sm:text-base">
              If you have any questions or queries about how we use your personal information you can contact us using the address below:
            </p>
            <div className="p-6 rounded-lg bg-muted/30 border border-border/50">
              <h4 className="font-semibold mb-4 text-sm sm:text-base">Compliance Department</h4>
              <div className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                <div>Peak Insolvency</div>
                <div>Suite 138 Peel House</div>
                <div>30 The Downs</div>
                <div>Altrincham</div>
                <div>Cheshire</div>
                <div className="font-semibold">WA14 2PX</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cookies Section */}
        <Card className="backdrop-blur-sm bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl sm:text-2xl">
              <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              Cookies
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4 text-sm sm:text-base text-muted-foreground">
              <p>
                Cookies are small text files that are placed in your computer or mobile device when you visit a website. These facilitate the processing of your data and enable us to analyse how the website is being used.
              </p>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-primary/5">
                  <h4 className="font-semibold mb-2 text-sm sm:text-base">Temporary Cookies</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">Form part of the security process and expire when you close your web browser</p>
                </div>
                <div className="p-4 rounded-lg bg-primary/5">
                  <h4 className="font-semibold mb-2 text-sm sm:text-base">Permanent Cookies</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">Stay in your device for a longer period or until you manually delete them</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm">
                You can accept or decline cookies by modifying the settings on your browser. Further information on managing cookies can be found at allaboutcookies.org.
              </p>
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

export default PrivacyPolicy;
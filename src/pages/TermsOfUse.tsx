import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { FileText, Shield, Scale, AlertCircle, Users, Mail, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-glow to-primary-light py-12 sm:py-16 lg:py-20 px-4">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors text-sm sm:text-base"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-4 leading-tight">
            Terms of Use
          </h1>
          <p className="text-lg sm:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Please read these terms and conditions carefully before using our website and services
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="bg-card/80 backdrop-blur-sm rounded-3xl shadow-elegant border border-border/50 overflow-hidden">
          <div className="p-6 sm:p-8 lg:p-12">
            <div className="prose prose-lg max-w-none [&>section]:mb-8 sm:[&>section]:mb-12 [&>section>h2]:text-xl sm:[&>section>h2]:text-2xl [&>section>h2]:font-semibold [&>section>h2]:text-foreground [&>section>h2]:mb-4 sm:[&>section>h2]:mb-6 [&>section>h2]:flex [&>section>h2]:items-center [&>section>h2]:gap-3 [&>section>p]:text-muted-foreground [&>section>p]:leading-relaxed [&>section>p]:mb-4 [&>section>p]:text-sm sm:[&>section>p]:text-base [&>section>ul]:text-muted-foreground [&>section>ul]:space-y-2 [&>section>ul>li]:pl-2 [&>section>ul>li]:text-sm sm:[&>section>ul>li]:text-base">
              <section>
                <h2><FileText className="h-6 w-6 text-primary" />Introduction</h2>
                <p className="text-muted-foreground mb-4">
                  Please read these terms and conditions before using this website
                </p>
                <p className="text-muted-foreground mb-4">
                  The terms and conditions of use set out below apply to the website owned, operated, and controlled by The Insolvency Guidance Group at www.theinsolvencyguidancegroup.co.uk ("the Website"). The Website is intended for use by residents of the United Kingdom of Great Britain and Northern Ireland only. By using the Website, users are deemed to have full knowledge of the following terms and conditions and to accept them.
                </p>
              </section>

              <section>
                <h2><Shield className="h-6 w-6 text-primary" />Copyright</h2>
                <p className="text-muted-foreground mb-4">
                  All information on the Website is protected by copyright. Users may view Website pages on screen and may print or download extracts for personal use or for use by others within their organisations. Users may supply a copy of any such extract to any third party provided that:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                  <li>the extract is for their own personal use</li>
                  <li>the extract is not supplied as part of or incorporated in another work, website, or publication</li>
                  <li>the extract is not supplied either directly or indirectly in return for commercial gain</li>
                  <li>the third party is made aware that the source of the copy is this website and that these terms and conditions apply equally to them.</li>
                </ul>
                <p className="text-muted-foreground mb-4">
                  No part of this Website may be reproduced, transmitted to, or stored on any other website or in any other form of electronic medium without the express written consent of The Insolvency Guidance Group.
                </p>
              </section>

              <section>
                <h2><Users className="h-6 w-6 text-primary" />Service Levels</h2>
                <p className="text-muted-foreground mb-4">
                  The Insolvency Guidance Group will use its reasonable endeavours to provide users with a prompt and continuing service. The Insolvency Guidance Group does not, however, warrant that the service it provides will continue uninterrupted or without delay or that it will remain unchanged. The Insolvency Guidance Group reserves the right to remove access to the Website as and when necessary for the purposes of maintenance and/or amendment of content.
                </p>
              </section>

              <section>
                <h2><AlertCircle className="h-6 w-6 text-primary" />Accuracy of Information</h2>
                <p className="text-muted-foreground mb-4">
                  Whilst The Insolvency Guidance Group will use its reasonable endeavours to ensure that the information contained on the Website is correct and reliable, no warranty, either express or implied, is given as to the accuracy or completeness of the information.
                </p>
                <p className="text-muted-foreground mb-4">
                  The Website is intended to provide users with general information relating to The Insolvency Guidance Group, its various products and services, and other financial information, which may be of relevance or interest to users. The Website is not intended to provide exhaustive details in respect of any of the issues or matters referred to on it. Information generated via The Insolvency Guidance Group Analyser tool on the Website is intended to be considered as a high-level indicator only and should be treated by users as non-binding guidance.
                </p>
                <p className="text-muted-foreground mb-4">
                  Prior to making any decision or taking any action which may potentially affect users' personal finances or business, users are urged to take independent advice from suitably qualified advisors.
                </p>
              </section>

              <section>
                <h2><FileText className="h-6 w-6 text-primary" />Links to External Sites</h2>
                <p className="text-muted-foreground mb-4">
                  The Website may from time to time contain hypertext links to several websites owned, operated, and controlled by third parties. The Insolvency Guidance Group has no control over or proprietary interest in any of these websites and, as such, makes no warranties about the quality, security, accuracy, or any other aspect of such sites, and excludes all liability arising from use of the same.
                </p>
              </section>

              <section>
                <h2><Shield className="h-6 w-6 text-primary" />Data Protection</h2>
                <p className="text-muted-foreground mb-4">
                  The Insolvency Guidance Group takes the protection of users' personal data very seriously. The Insolvency Guidance Group does not collect any personal data through the Website without the user's consent. Where users of the Website provide personal information The Insolvency Guidance Group shall always process and utilise such personal information in accordance with the Data Protection Act 2018 and the General Data Protection Regulations. Only authorised employees, under appropriate confidentiality obligations will have access to user's personal information.
                </p>
                <p className="text-muted-foreground mb-4">
                  If users who have provided The Insolvency Guidance Group with personal information would like to alter their details or check its accuracy, please email us at compliance@theinsolvencyguidancegroup.co.uk When accessing the Website, information is occasionally collected automatically (i.e., not through a registration), whereby this information cannot be assigned to a specific person (e.g., Internet browser and operating system used; domain name of the website from where users arrived; number of visits; average dwell time; pages called up). United Insolvency uses this information to determine the activity of the Website and improve its content. When users visit the Website, information may be saved on users' computers as a "cookie" which is then automatically recognised on the next visit to the Website.
                </p>
                <p className="text-muted-foreground mb-4">
                  Users who do not want The Insolvency Guidance Group to recognise their computers should set their Internet Browsers so that they delete cookies from the computer hard disk, block all cookies or warn users before saving a cookie. Please see the Privacy Policy on the Website for full information and further explanations.
                </p>
              </section>

              <section>
                <h2><Mail className="h-6 w-6 text-primary" />Enquiries</h2>
                <p className="text-muted-foreground mb-4">
                  Whilst every effort is made to ensure that any enquiries submitted are dealt with promptly, The Insolvency Guidance Group cannot guarantee that queries will always be dealt with within the timescale users may require. The Insolvency Guidance Group cannot always guarantee complete confidentiality for data transmitted via the internet or other electronic communications and would therefore recommend that users carefully consider sending sensitive information in this way.
                </p>
              </section>

              <section>
                <h2><AlertCircle className="h-6 w-6 text-primary" />Disclaimer</h2>
                <p className="text-muted-foreground mb-4">
                  The Insolvency Guidance Group shall not be liable for any third-party claims or losses of any nature, including, but not limited to, loss of profits, indirect or consequential loss or loss due to circumstances beyond its reasonable control. The Insolvency Guidance Group does not accept any liability for any acts or omissions resulting from users' decisions or opinions formed based on use of the Website. The Insolvency Guidance Group may, at any time, change, modify, add to, or remove, part or all these terms and conditions. Users should therefore check these terms and conditions and the Website content periodically to see if any information has changed.
                </p>
                <p className="text-muted-foreground mb-4">
                  Continued use of this Website following any change in the terms and conditions will be deemed to constitute the users' acceptance of those changes. The Insolvency Guidance Group makes every effort to ensure that the information and data contained on the Website is correct. The Insolvency Guidance Group, however, accepts no liability and does not guarantee that the information and data provided is up to date, correct and complete. This also applies for all other websites referred to by means of a hyperlink from time to time. The Insolvency Guidance Group is not responsible for the contents of such websites reached by means of such a link and reserves the right to modify or supplement the information or data provided without prior notice.
                </p>
              </section>

              <section>
                <h2><Scale className="h-6 w-6 text-primary" />General</h2>
                <p className="text-muted-foreground mb-4">
                  These Terms and Conditions are governed by and shall be construed in accordance with English law. Disputes in connection with the Website shall be subject to the jurisdiction of English Courts.
                </p>
              </section>

              <section>
                <h2><Mail className="h-6 w-6 text-primary" />Feedback</h2>
                <p className="text-muted-foreground mb-4">
                  We hope that users will find the Website informative and easy to use. We should be grateful to receive any comments or queries concerning the Website, or any suggestions as to how it could be improved. Please e-mail us at compliance@theinsolvencyguidancegroup.co.uk.
                </p>
              </section>
            </div>
          </div>
        </div>
        
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
  )
}
export default TermsOfUse
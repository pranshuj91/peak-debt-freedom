import moneyhelperLogo from "@/assets/moneyhelper-logo.png";
import { ExternalLink } from "lucide-react";

const MoneyHelperSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 via-white to-purple-50 dark:from-blue-950/20 dark:via-background dark:to-purple-950/20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100/40 to-purple-100/40 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-purple-100/40 to-blue-100/40 dark:from-purple-900/20 dark:to-blue-900/20 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/80 dark:bg-background/80 backdrop-blur-sm rounded-3xl border border-border/50 shadow-lg hover:shadow-xl transition-all duration-500 p-8 md:p-12">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              {/* Logo section */}
              <div className="flex-shrink-0">
                <div className="bg-white dark:bg-background rounded-2xl p-6 shadow-md border border-border/30 hover:shadow-lg transition-all duration-300 group">
                  <img
                    src={moneyhelperLogo}
                    alt="MoneyHelper logo"
                    className="h-16 md:h-20 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              
              {/* Content section */}
              <div className="flex-1 text-center lg:text-left">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Free Financial Guidance
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
                    Get Expert Money Management Advice
                  </h2>
                </div>
                
                <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-2xl">
                  To find out more about managing your money and getting free advice, visit Money Helper, 
                  independent service set up to help people manage their money.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a
                    href="https://www.moneyhelper.org.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group"
                  >
                    Visit MoneyHelper
                    <ExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                  </a>
                  <div className="inline-flex items-center gap-2 text-sm text-muted-foreground px-4 py-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Independent & Free Service
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoneyHelperSection;
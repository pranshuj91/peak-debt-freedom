import { AlertTriangle, Shield, FileText } from 'lucide-react';

const DisclaimerSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0, 0, 0, 0.1) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      ></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-200 to-purple-200 dark:from-blue-800 dark:to-purple-800 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-indigo-200 to-cyan-200 dark:from-indigo-800 dark:to-cyan-800 rounded-full blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mb-6 shadow-lg">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
            Important Information
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Please read the following disclaimer carefully before proceeding
          </p>
        </div>

        {/* Disclaimer Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Fee Information */}
          <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-white/20 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mr-3">
                <FileText className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Fee Structure</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The Insolvency Guidance Group will not charge you a fee for initial information and signposting. If you proceed with a recommended debt solution where fees are applicable, full details will be provided before setting up.
            </p>
          </div>

          {/* Service Information */}
          <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-white/20 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mr-3">
                <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Our Services</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The Insolvency Guidance Group proposes and administers Individual Voluntary Arrangements (IVAs). Advice is provided on the basis of reasonable contemplation of an insolvency appointment when an IVA is likely to be the most appropriate debt solution.
            </p>
          </div>

          {/* Qualification Requirements */}
          <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-white/20 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mr-3">
                <AlertTriangle className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Qualification</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              To qualify for an IVA, you must have a minimum of £6,000 of qualifying unsecured debt owed to two or more creditors. Services only apply to residents of England and Wales.
            </p>
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border border-amber-200 dark:border-amber-800/50 rounded-2xl p-8 shadow-lg">
          <div className="flex items-start">
            <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
              <AlertTriangle className="w-6 h-6 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Debt Write-off Information
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                There is potentially a debt write-off in some IVAs. However, the amount of debt written off differs for each customer depending upon their individual financial circumstances and is subject to the approval of their creditors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisclaimerSection;
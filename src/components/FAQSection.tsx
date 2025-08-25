import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Is an IVA suitable for me?",
      answer: "An Individual Voluntary Arrangement (IVA) is a formal debt solution that creates a legally binding agreement between you and the people you owe money to. You may decide to enter an IVA if you're struggling to repay the total amount of unsecured debt you currently have but can repay some."
    },
    {
      question: "Can an IVA affect my credit rating?",
      answer: "Yes, an IVA will have an impact on your credit rating as it will show on your credit report for six years after it has been approved. However, it's important to note this is the case for most debt solutions and your credit score will likely already have been affected by being in debt in the first place.\n\nOnce your IVA is complete you will be offered a fresh start to begin rebuilding your credit rating."
    },
    {
      question: "Will entering into an IVA affect my job?",
      answer: "In most cases entering an IVA won't affect employment. However, in certain professions, such as accountants and solicitors, having an IVA may mean that you can no longer practice or you may only be able to practice under certain conditions."
    },
    {
      question: "Can creditors still contact me when I'm in an IVA?",
      answer: "Once you enter an IVA, creditors can take no further action against you and can't contact you directly."
    },
    {
      question: "How can an IVA change my life?",
      answer: "An IVA can be a positive way to manage unaffordable unsecured debt and allow you to better manage your monthly finances.\n\nIn an IVA a single monthly payment is agreed with your current financial situation taken into consideration – this payment is then divided between the people you owe money to. During the course of your plan all interest and fees associated with your debts are frozen.\n\nAt the end of the IVA the remaining debts are written off and you can begin your debt-free future."
    },
    {
      question: "What are the disadvantages of an IVA?",
      answer: "When you're considering entering an IVA, it's important to be aware of the following:\n\n• If you are a homeowner and your property has equity in it, you'll need to try to re-mortgage which could result in an increased interest rate.\n• Your credit rating will be affected.\n• Only the unsecured debts included in your IVA will be written off at the end of the agreement.\n• Your IVA will be recorded on a public register."
    },
    {
      question: "What services do you offer?",
      answer: "We offer free debt advice tailored to your circumstances. We'll find out more about your current financial situation and your lifestyle to advise on the best solution for you. Although we offer advice on all debt help solutions available, we specialise in Individual Voluntary Arrangements (IVAs), Trust Deeds and the Debt Arrangement Scheme (DAS)."
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-foreground mb-4 sm:mb-6">
            Frequently Asked <span className="text-accent">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Get answers to common questions about IVAs and our services
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-background border border-border/50 rounded-lg px-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:border-primary/30 hover:scale-[1.02] group"
            >
              <AccordionTrigger className="text-left text-foreground hover:text-primary font-semibold transition-all duration-200 group-hover:translate-x-1">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed whitespace-pre-line animate-fade-in">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
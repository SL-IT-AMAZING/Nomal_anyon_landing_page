import { useTranslation } from 'react-i18next';
import { AnimatedSection } from '../shared/AnimatedSection';
import { useState } from 'react';
import { trackFaqToggle } from '../../hooks/useAnalytics';

interface FAQItem {
  question: string;
  answer: string;
}

function FAQAccordion({ question, answer, index }: FAQItem & { index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AnimatedSection delay={index * 50}>
      <div className="border border-border rounded-xl overflow-hidden bg-surface hover:border-brand-primary/50 transition-all">
        <button
          onClick={() => {
            const newIsOpen = !isOpen;
            setIsOpen(newIsOpen);
            trackFaqToggle(question, newIsOpen);
          }}
          className="w-full px-4 py-4 sm:px-6 sm:py-5 text-left flex items-center justify-between gap-3 sm:gap-4 hover:bg-surface/50 transition-colors"
        >
          <span className="text-base sm:text-lg font-semibold text-foreground">{question}</span>
          <svg
            className={`w-4 h-4 sm:w-5 sm:h-5 text-muted transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {isOpen && (
          <div className="px-4 pb-4 pt-0 sm:px-6 sm:pb-5">
            <p className="text-sm sm:text-base text-muted leading-relaxed">{answer}</p>
          </div>
        )}
      </div>
    </AnimatedSection>
  );
}

export function FAQ() {
  const { t } = useTranslation();
  const faqs = t('faq.items', { returnObjects: true }) as FAQItem[];

  return (
    <section id="faq" className="relative py-20 sm:py-24 md:py-32 px-4 sm:px-6 bg-background overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4">
            {t('faq.title')}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted text-center mb-12 sm:mb-16">
            {t('faq.subtitle')}
          </p>
        </AnimatedSection>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <FAQAccordion key={index} {...faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

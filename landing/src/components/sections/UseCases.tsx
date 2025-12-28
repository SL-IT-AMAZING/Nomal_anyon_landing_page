import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatedSection } from '../shared/AnimatedSection';
import LiquidEther from '../LiquidEther';

interface UseCase {
  title: string;
  description: string;
  problem: string;
  solution: string;
  results: string[];
}

// Mobile Accordion Component
function UseCaseAccordion({ title, description, problem, solution, results, index }: UseCase & { index: number }) {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AnimatedSection delay={index * 50}>
      <div className="border border-border rounded-xl overflow-hidden bg-surface hover:border-brand-primary/50 transition-all">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-4 py-4 sm:px-5 sm:py-5 text-left flex items-center justify-between gap-3 hover:bg-surface/50 transition-colors"
        >
          <div className="flex-1">
            <h3 className="text-base sm:text-lg font-bold text-foreground mb-1">{title}</h3>
            <p className="text-xs sm:text-sm text-muted">{description}</p>
          </div>
          <svg
            className={`w-5 h-5 text-muted transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {isOpen && (
          <div className="px-4 pb-4 pt-0 sm:px-5 sm:pb-5">
            <div className="space-y-4">
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-brand-primary mb-2">{t('useCases.labels.problem')}</h4>
                <p className="text-xs sm:text-sm text-muted">{problem}</p>
              </div>

              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-success mb-2">{t('useCases.labels.solution')}</h4>
                <p className="text-xs sm:text-sm text-foreground">{solution}</p>
              </div>

              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-foreground mb-2">{t('useCases.labels.results')}</h4>
                <ul className="space-y-2">
                  {results.map((result, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-success flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-xs sm:text-sm text-foreground">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </AnimatedSection>
  );
}

// Desktop Card Component
function UseCaseCard({ title, description, problem, solution, results, index }: UseCase & { index: number }) {
  const { t } = useTranslation();

  return (
    <AnimatedSection delay={index * 100}>
      <div className="bg-surface rounded-2xl border border-border p-6 sm:p-8 hover:border-brand-primary/50 transition-all h-full flex flex-col">
        <div className="mb-5 sm:mb-6">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">{title}</h3>
          <p className="text-sm sm:text-base text-muted">{description}</p>
        </div>

        <div className="mb-4 flex-grow">
          <div className="mb-4">
            <h4 className="text-xs sm:text-sm font-semibold text-brand-primary mb-2">{t('useCases.labels.problem')}</h4>
            <p className="text-xs sm:text-sm text-muted">{problem}</p>
          </div>

          <div className="mb-4">
            <h4 className="text-xs sm:text-sm font-semibold text-success mb-2">{t('useCases.labels.solution')}</h4>
            <p className="text-xs sm:text-sm text-foreground">{solution}</p>
          </div>
        </div>

        <div>
          <h4 className="text-xs sm:text-sm font-semibold text-foreground mb-3">{t('useCases.labels.results')}</h4>
          <ul className="space-y-2">
            {results.map((result, i) => (
              <li key={i} className="flex items-start gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-success flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-xs sm:text-sm text-foreground">{result}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </AnimatedSection>
  );
}

export function UseCases() {
  const { t } = useTranslation();
  const useCases = t('useCases.items', { returnObjects: true }) as UseCase[];

  return (
    <section id="use-cases" className="relative py-20 sm:py-24 md:py-32 px-4 sm:px-6 bg-background overflow-hidden">
      {/* LiquidEther Background */}
      <div className="absolute inset-0 opacity-15">
        <LiquidEther
          colors={['#B8C5D0', '#C8D5E0', '#D4DDE5']}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          resolution={0.5}
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4">
            {t('useCases.title')}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted text-center mb-12 sm:mb-16">
            {t('useCases.subtitle')}
          </p>
        </AnimatedSection>

        {/* Mobile Accordion Layout */}
        <div className="md:hidden space-y-3 sm:space-y-4">
          {useCases.map((useCase, index) => (
            <UseCaseAccordion key={index} {...useCase} index={index} />
          ))}
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {useCases.map((useCase, index) => (
            <UseCaseCard key={index} {...useCase} index={index} />
          ))}
        </div>

        <AnimatedSection delay={600}>
          <div className="mt-12 sm:mt-16 text-center">
            <p className="text-base sm:text-lg text-muted mb-5 sm:mb-6">
              {t('useCases.cta.description')}
            </p>
            <button className="px-8 py-3 sm:px-10 sm:py-4 bg-brand-primary hover:bg-brand-primary-hover text-black font-bold rounded-xl transition-all transform hover:scale-105 shadow-xl shadow-brand-primary/30 text-sm sm:text-base">
              {t('useCases.cta.button')}
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

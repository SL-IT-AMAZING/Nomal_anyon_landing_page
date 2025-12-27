import { useTranslation } from 'react-i18next';
import { AnimatedSection } from '../shared/AnimatedSection';
import LiquidEther from '../LiquidEther';

interface Step {
  step: number;
  title: string;
  description: string;
  easyPoint: string;
  icon: string;
}

function StepCard({ step, title, description, easyPoint, index, totalSteps }: Step & { index: number; totalSteps: number }) {
  const { t } = useTranslation();

  return (
    <AnimatedSection delay={index * 100}>
      <div className="relative bg-surface border border-border rounded-2xl p-4 sm:p-6 hover:border-brand-primary/50 transition-all hover:shadow-xl hover:shadow-brand-primary/10 group h-full">
        {/* Step Number Badge */}
        <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-primary text-white flex items-center justify-center text-lg sm:text-xl font-bold shadow-lg z-10">
          {step}
        </div>

        {/* Title & Description */}
        <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 text-center">{title}</h3>
        <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 text-center">{description}</p>

        {/* Easy Point Badge */}
        <div className="p-2 sm:p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
          <div>
            <p className="text-xs font-semibold text-green-600 dark:text-green-400 mb-1">{t('workflow.easyPointLabel')}</p>
            <p className="text-xs sm:text-sm text-foreground">{easyPoint}</p>
          </div>
        </div>

        {/* Arrow Connector (except for last step) */}
        {step < totalSteps && (
          <div className="hidden lg:block absolute -right-8 top-1/2 -translate-y-1/2 z-0">
            <svg className="w-16 h-16 text-brand-primary/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        )}
      </div>
    </AnimatedSection>
  );
}

export function Workflow() {
  const { t } = useTranslation();

  const steps: Step[] = [
    {
      step: 1,
      title: t('workflow.steps.step1.title'),
      description: t('workflow.steps.step1.description'),
      easyPoint: t('workflow.steps.step1.easyPoint'),
      icon: '',
    },
    {
      step: 2,
      title: t('workflow.steps.step2.title'),
      description: t('workflow.steps.step2.description'),
      easyPoint: t('workflow.steps.step2.easyPoint'),
      icon: '',
    },
    {
      step: 3,
      title: t('workflow.steps.step3.title'),
      description: t('workflow.steps.step3.description'),
      easyPoint: t('workflow.steps.step3.easyPoint'),
      icon: '',
    },
    {
      step: 4,
      title: t('workflow.steps.step4.title'),
      description: t('workflow.steps.step4.description'),
      easyPoint: t('workflow.steps.step4.easyPoint'),
      icon: '',
    },
    {
      step: 5,
      title: t('workflow.steps.step5.title'),
      description: t('workflow.steps.step5.description'),
      easyPoint: t('workflow.steps.step5.easyPoint'),
      icon: '',
    },
  ];

  return (
    <section id="workflow" className="relative py-16 sm:py-20 px-4 sm:px-6 bg-background overflow-hidden">
      {/* LiquidEther Background */}
      <div className="absolute inset-0 opacity-15">
        <LiquidEther
          colors={['#FF8C42', '#FFB380', '#FFCC99']}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          resolution={0.5}
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4">
            {t('workflow.title')}
          </h2>
          <p
            className="text-lg sm:text-xl text-center mb-2 sm:mb-3"
            dangerouslySetInnerHTML={{ __html: t('workflow.subtitle') }}
          />
          <p className="text-sm sm:text-base text-muted-foreground text-center mb-12 sm:mb-16">
            {t('workflow.description')}
          </p>
        </AnimatedSection>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-4 mb-12 sm:mb-16 relative">
          {steps.map((stepData, index) => (
            <StepCard key={stepData.step} {...stepData} index={index} totalSteps={steps.length} />
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection delay={500}>
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 border border-brand-primary/20 rounded-2xl p-6 sm:p-8 text-center">
            <h3
              className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3"
              dangerouslySetInnerHTML={{ __html: t('workflow.cta.title') }}
            />
            <p
              className="text-sm sm:text-base text-muted-foreground mb-5 sm:mb-6"
              dangerouslySetInnerHTML={{ __html: t('workflow.cta.stats') }}
            />
            <button className="px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-4 bg-brand-primary hover:bg-brand-primary-hover text-white font-bold rounded-xl transition-all transform hover:scale-105 shadow-xl shadow-brand-primary/30 text-sm sm:text-base">
              {t('workflow.cta.button')}
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

import { useTranslation } from 'react-i18next';
import { AnimatedSection } from '../shared/AnimatedSection';
import LiquidEther from '../LiquidEther';
import { scrollToBetaForm } from '../../utils/scroll';

export function CTA() {
  const { t } = useTranslation();

  return (
    <section className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-br from-brand-primary/20 via-brand-secondary/10 to-background relative overflow-hidden">
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
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-brand-primary)_0%,_transparent_70%)] opacity-10" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6">
            {t('cta.title')}
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted mb-8 sm:mb-12 max-w-2xl mx-auto">
            {t('cta.description')}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="flex justify-center">
            <button
              onClick={scrollToBetaForm}
              className="px-8 py-4 sm:px-10 sm:py-5 bg-brand-primary hover:bg-brand-primary-hover text-black font-bold text-base sm:text-lg rounded-xl transition-all transform hover:scale-105 shadow-xl shadow-brand-primary/30"
            >
              {t('common.betaCTA')}
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

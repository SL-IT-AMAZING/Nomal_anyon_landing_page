import { useTranslation } from 'react-i18next';
import { AnimatedSection } from '../shared/AnimatedSection';
import { InteractiveDemo } from './InteractiveDemo';
import DotGrid from '../DotGrid';

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20 pb-10 overflow-hidden">
      {/* DotGrid Background */}
      <div className="absolute inset-0 opacity-15">
        <DotGrid
          dotSize={4}
          gap={35}
          baseColor="#FFB380"
          activeColor="#FF8C42"
          proximity={200}
          speedTrigger={80}
          shockRadius={300}
          shockStrength={10}
        />
      </div>
      {/* Content Layer */}
      <div className="relative z-10 max-w-5xl mx-auto text-center w-full">
        <AnimatedSection>
          <div className="flex justify-center mb-6 sm:mb-8">
            <img src="/logos/logo-anyon.png" alt="ANYON" className="h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 brightness-0 invert" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight px-2">
            <span className="brand-gradient">{t('hero.title1')}</span>
            <br />
            <span className="brand-gradient">{t('hero.title2')}</span>
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted mt-6 sm:mt-8 max-w-3xl mx-auto leading-relaxed px-4"
            dangerouslySetInnerHTML={{ __html: t('hero.description') }}
          />
        </AnimatedSection>

        <AnimatedSection delay={250}>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 justify-center px-4">
            <button className="px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-brand-primary hover:bg-brand-primary-hover text-white text-base sm:text-lg font-bold rounded-xl transition-all transform hover:scale-105 shadow-xl shadow-brand-primary/30 w-full sm:w-auto">
              {t('hero.ctaPrimary')}
            </button>
            <button
              onClick={() => alert(t('hero.demoAlert'))}
              className="px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-surface hover:bg-surface/80 text-foreground text-base sm:text-lg font-semibold rounded-xl border border-border hover:border-brand-primary/50 transition-all w-full sm:w-auto"
            >
              {t('hero.ctaSecondary')}
            </button>
          </div>
        </AnimatedSection>


        <AnimatedSection delay={500}>
          <div className="mt-12 sm:mt-16">
            <InteractiveDemo />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

import { useTranslation } from 'react-i18next';
import { AnimatedSection } from '../shared/AnimatedSection';
import DotGrid from '../DotGrid';
import { scrollToBetaForm } from '../../utils/scroll';
import { trackButtonClick, trackVideoPlay } from '../../hooks/useAnalytics';

export function Hero() {
  const { t } = useTranslation();

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-32 sm:pt-36 md:pt-40 pb-10 overflow-hidden">
      {/* DotGrid Background */}
      <div className="absolute inset-0 opacity-15">
        <DotGrid
          dotSize={4}
          gap={35}
          baseColor="#C8D5E0"
          activeColor="#B8C5D0"
          proximity={200}
          speedTrigger={80}
          shockRadius={300}
          shockStrength={10}
        />
      </div>
      {/* Content Layer */}
      <div className="relative z-10 max-w-5xl mx-auto text-center w-full">
        <AnimatedSection>
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
            <button
              onClick={() => {
                trackButtonClick('hero_beta');
                scrollToBetaForm();
              }}
              className="px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-brand-primary hover:bg-brand-primary-hover text-black text-base sm:text-lg font-bold rounded-xl transition-all transform hover:scale-105 shadow-xl shadow-brand-primary/30 w-full sm:w-auto"
            >
              {t('common.betaCTA')}
            </button>
          </div>
        </AnimatedSection>


        <AnimatedSection delay={500}>
          <div className="mt-12 sm:mt-16 w-full max-w-5xl mx-auto">
            <video
              className="w-full h-auto rounded-2xl sm:rounded-3xl shadow-2xl border border-border"
              controls
              loop
              playsInline
              onPlay={() => trackVideoPlay('hero_demo')}
            >
              <source src="/mp4/ANYON%20demo%20video%204.mp4" type="video/mp4" />
              {t('hero.videoNotSupported', 'Your browser does not support the video tag.')}
            </video>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

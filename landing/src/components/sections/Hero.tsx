import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatedSection } from '../shared/AnimatedSection';
import { InteractiveDemo } from './InteractiveDemo';
import DotGrid from '../DotGrid';

export function Hero() {
  const { t } = useTranslation();
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDownloadOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-32 sm:pt-36 md:pt-40 pb-10 overflow-hidden">
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
            <div className="relative w-full sm:w-auto" ref={dropdownRef}>
              <button
                onClick={() => setIsDownloadOpen(!isDownloadOpen)}
                className="px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-brand-primary hover:bg-brand-primary-hover text-black text-base sm:text-lg font-bold rounded-xl transition-all transform hover:scale-105 shadow-xl shadow-brand-primary/30 w-full sm:w-auto flex items-center justify-center gap-2"
              >
                {t('hero.ctaPrimary')}
                <svg
                  className={`w-4 h-4 transition-transform ${isDownloadOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isDownloadOpen && (
                <div className="absolute top-full left-0 right-0 sm:left-auto sm:right-auto mt-2 bg-surface border border-border rounded-xl shadow-xl overflow-hidden z-50 min-w-full sm:min-w-[200px]">
                  <a
                    href="#"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-brand-primary/10 transition-colors text-foreground"
                    onClick={() => setIsDownloadOpen(false)}
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    {t('hero.downloadOptions.mac')}
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-brand-primary/10 transition-colors text-foreground"
                    onClick={() => setIsDownloadOpen(false)}
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 5.557l7.357-1.002v7.082H3V5.557zm0 12.886l7.357 1.002v-7.082H3v6.08zm8.146 1.122L21 21v-8.637h-9.854v7.202zm0-14.13v7.202H21V3l-9.854 1.435z"/>
                    </svg>
                    {t('hero.downloadOptions.windows')}
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-brand-primary/10 transition-colors text-foreground"
                    onClick={() => setIsDownloadOpen(false)}
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.504 0c-.155 0-.311.001-.465.003-.653.014-1.304.055-1.95.162-.645.107-1.277.281-1.878.524-.601.243-1.17.548-1.694.91-.524.361-1.002.784-1.423 1.257-.421.473-.782.997-1.07 1.559-.288.562-.5 1.16-.629 1.78-.129.62-.175 1.25-.138 1.879.037.63.155 1.252.352 1.856.197.604.472 1.185.818 1.729.346.544.762 1.048 1.239 1.5.476.452 1.01.85 1.586 1.18.576.331 1.19.595 1.83.778.64.183 1.303.285 1.973.305.67.02 1.34-.041 1.998-.18.658-.139 1.298-.358 1.905-.654.607-.296 1.178-.667 1.698-1.105.52-.437.987-.94 1.389-1.496.402-.556.736-1.163.992-1.808.256-.645.433-1.323.522-2.017.089-.694.089-1.396 0-2.09-.089-.694-.266-1.372-.522-2.017-.256-.645-.59-1.252-.992-1.808-.402-.556-.869-1.059-1.389-1.496-.52-.437-1.091-.808-1.698-1.105-.607-.296-1.247-.515-1.905-.654-.658-.139-1.328-.2-1.998-.18-.67.02-1.333.122-1.973.305-.64.183-1.254.447-1.83.778-.576.33-1.11.728-1.586 1.18-.477.452-.893.956-1.239 1.5-.346.544-.621 1.125-.818 1.729-.197.604-.315 1.226-.352 1.856-.037.629.009 1.259.138 1.879.129.62.341 1.218.629 1.78.288.562.649 1.086 1.07 1.559.421.473.899.896 1.423 1.257.524.362 1.093.667 1.694.91.601.243 1.233.417 1.878.524.646.107 1.297.148 1.95.162.154.002.31.003.465.003.155 0 .311-.001.465-.003.653-.014 1.304-.055 1.95-.162.645-.107 1.277-.281 1.878-.524.601-.243 1.17-.548 1.694-.91.524-.361 1.002-.784 1.423-1.257.421-.473.782-.997 1.07-1.559.288-.562.5-1.16.629-1.78.129-.62.175-1.25.138-1.879-.037-.63-.155-1.252-.352-1.856-.197-.604-.472-1.185-.818-1.729-.346-.544-.762-1.048-1.239-1.5-.476-.452-1.01-.85-1.586-1.18-.576-.331-1.19-.595-1.83-.778-.64-.183-1.303-.285-1.973-.305-.67-.02-1.34.041-1.998.18-.658.139-1.298.358-1.905.654-.607.296-1.178.667-1.698 1.105-.52.437-.987.94-1.389 1.496-.402.556-.736 1.163-.992 1.808-.256.645-.433 1.323-.522 2.017-.089.694-.089 1.396 0 2.09.089.694.266 1.372.522 2.017.256.645.59 1.252.992 1.808.402.556.869 1.059 1.389 1.496.52.437 1.091.808 1.698 1.105.607.296 1.247.515 1.905.654.658.139 1.328.2 1.998.18.67-.02 1.333-.122 1.973-.305.64-.183 1.254-.447 1.83-.778.576-.33 1.11-.728 1.586-1.18.477-.452.893-.956 1.239-1.5.346-.544.621-1.125.818-1.729.197-.604.315-1.226.352-1.856.037-.629-.009-1.259-.138-1.879-.129-.62-.341-1.218-.629-1.78-.288-.562-.649-1.086-1.07-1.559-.421-.473-.899-.896-1.423-1.257-.524-.362-1.093-.667-1.694-.91-.601-.243-1.233-.417-1.878-.524-.646-.107-1.297-.148-1.95-.162-.154-.002-.31-.003-.465-.003z"/>
                    </svg>
                    {t('hero.downloadOptions.linux')}
                  </a>
                </div>
              )}
            </div>
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

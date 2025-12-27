import { useTranslation } from 'react-i18next';
import { AnimatedSection } from '../shared/AnimatedSection';

interface ComparisonRow {
  feature: string;
  traditional: string;
  anyon: string;
}

export function Comparison() {
  const { t } = useTranslation();
  const comparisons = t('comparison.items', { returnObjects: true }) as ComparisonRow[];

  return (
    <section id="comparison" className="py-12 sm:py-16 px-4 sm:px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4"
            dangerouslySetInnerHTML={{ __html: t('comparison.title') }}
          />
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground text-center mb-8 sm:mb-12">
            {t('comparison.subtitle')}
          </p>
        </AnimatedSection>

        {/* Mobile Card Layout */}
        <div className="md:hidden space-y-4">
          {comparisons.map((row, index) => (
            <div key={index} className="bg-[#1a1a1a] rounded-lg p-4 border border-[rgba(247,247,244,0.1)]">
              <h3 className="text-sm font-bold mb-3" style={{ color: '#f7f7f4' }}>{row.feature}</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">{t('comparison.tableHeaders.traditional')}</p>
                  <p className="text-sm" style={{ color: 'rgba(247, 247, 244, 0.8)' }}>{row.traditional}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">{t('comparison.tableHeaders.anyon')}</p>
                  <p className="text-sm font-bold" style={{ color: '#d97757' }}>{row.anyon}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Table Layout */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse table-fixed rounded-xl overflow-hidden shadow-lg" style={{ backgroundColor: '#1a1a1a' }}>
            <thead>
              <tr className="border-b-2" style={{ borderColor: 'rgba(247, 247, 244, 0.1)', backgroundColor: '#0a0a0a' }}>
                <th className="text-left py-3 px-4 md:py-5 md:px-6 text-sm md:text-base lg:text-lg font-bold w-1/4" style={{ color: '#f7f7f4' }}>
                  {t('comparison.tableHeaders.feature')}
                </th>
                <th className="text-center py-3 px-4 md:py-5 md:px-6 text-sm md:text-base lg:text-lg font-bold w-[37.5%] border-l" style={{ color: 'rgba(247, 247, 244, 0.8)', borderColor: 'rgba(247, 247, 244, 0.3)' }}>
                  {t('comparison.tableHeaders.traditional')}
                </th>
                <th className="text-center py-3 px-4 md:py-5 md:px-6 text-sm md:text-base lg:text-lg font-bold w-[37.5%] border-l" style={{ color: '#f7f7f4', borderColor: 'rgba(247, 247, 244, 0.3)' }}>
                  <span className="brand-gradient">{t('comparison.tableHeaders.anyon')}</span>
                </th>
              </tr>
            </thead>
            <tbody style={{ backgroundColor: '#1a1a1a' }}>
              {comparisons.map((row, index) => (
                <tr key={index} className="border-b hover:bg-background/30 transition-colors" style={{ borderColor: 'rgba(247, 247, 244, 0.1)' }}>
                  <td className="py-3 px-4 md:py-5 md:px-6 font-bold text-sm md:text-base" style={{ color: '#f7f7f4' }}>{row.feature}</td>
                  <td className="py-3 px-4 md:py-5 md:px-6 text-center text-sm md:text-base border-l" style={{ color: 'rgba(247, 247, 244, 0.8)', borderColor: 'rgba(247, 247, 244, 0.3)' }}>{row.traditional}</td>
                  <td className="py-3 px-4 md:py-5 md:px-6 text-center border-l text-sm md:text-base" style={{ borderColor: 'rgba(247, 247, 244, 0.3)' }}>
                    <span className="font-bold" style={{ color: '#d97757' }}>{row.anyon}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <AnimatedSection delay={400}>
          <div className="mt-8 sm:mt-12 p-4 sm:p-6 bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 rounded-2xl border border-brand-primary/20">
            <div className="text-center">
              <h3
                className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3"
                dangerouslySetInnerHTML={{ __html: t('comparison.cta.title') }}
              />
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-5">
                {t('comparison.cta.description')}
              </p>
              <button className="px-6 py-2.5 sm:px-8 sm:py-3 bg-brand-primary hover:bg-brand-primary-hover text-white font-bold rounded-xl transition-all transform hover:scale-105 shadow-xl shadow-brand-primary/30 text-sm sm:text-base">
                {t('comparison.cta.button')}
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

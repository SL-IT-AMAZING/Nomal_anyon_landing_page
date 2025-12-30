import { useTranslation } from 'react-i18next';
import { AnimatedSection } from '../shared/AnimatedSection';
import { scrollToBetaForm } from '../../utils/scroll';

interface ComparisonRow {
  feature: string;
  traditional: string;
  anyon: string;
}

export function Comparison() {
  const { t } = useTranslation();
  const comparisons = t('comparison.items', { returnObjects: true }) as ComparisonRow[];

  // Keywords to highlight in red
  const highlightKeywords = (text: string): JSX.Element => {
    const redKeywords = ['3일', '무료', '혼자', '불필요', '자동 생성', '즉시', '직접', '원클릭'];

    let result: (string | JSX.Element)[] = [text];

    redKeywords.forEach((keyword) => {
      const newResult: (string | JSX.Element)[] = [];
      result.forEach((part, idx) => {
        if (typeof part === 'string') {
          const parts = part.split(keyword);
          parts.forEach((p, i) => {
            if (i > 0) {
              newResult.push(<span key={`${idx}-${i}`} style={{ color: '#ef4444', fontWeight: 'bold' }}>{keyword}</span>);
            }
            if (p) newResult.push(p);
          });
        } else {
          newResult.push(part);
        }
      });
      result = newResult;
    });

    return <>{result}</>;
  };

  return (
    <section id="comparison" className="relative py-12 sm:py-16 px-4 sm:px-6 bg-surface overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">
        <AnimatedSection>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4"
            dangerouslySetInnerHTML={{ __html: t('comparison.title') }}
          />
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground text-center mb-8 sm:mb-12">
            {t('comparison.subtitle')}
          </p>
        </AnimatedSection>

        {/* Table Layout for all screen sizes */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse rounded-xl overflow-hidden shadow-lg" style={{ backgroundColor: '#1a1a1a' }}>
            <thead>
              <tr className="border-b-2" style={{ borderColor: 'rgba(247, 247, 244, 0.1)', backgroundColor: '#0a0a0a' }}>
                <th className="text-left py-2 px-2 sm:py-3 sm:px-4 md:py-5 md:px-6 text-xs sm:text-sm md:text-base lg:text-lg font-bold" style={{ color: '#f7f7f4' }}>
                  {t('comparison.tableHeaders.feature')}
                </th>
                <th className="text-center py-2 px-2 sm:py-3 sm:px-4 md:py-5 md:px-6 text-xs sm:text-sm md:text-base lg:text-lg font-bold border-l" style={{ color: 'rgba(247, 247, 244, 0.8)', borderColor: 'rgba(247, 247, 244, 0.3)' }}>
                  {t('comparison.tableHeaders.traditional')}
                </th>
                <th className="text-center py-2 px-2 sm:py-3 sm:px-4 md:py-5 md:px-6 text-xs sm:text-sm md:text-base lg:text-lg font-bold border-l" style={{ color: '#f7f7f4', borderColor: 'rgba(247, 247, 244, 0.3)' }}>
                  <span className="brand-gradient">{t('comparison.tableHeaders.anyon')}</span>
                </th>
              </tr>
            </thead>
            <tbody style={{ backgroundColor: '#1a1a1a' }}>
              {comparisons.map((row, index) => (
                <tr key={index} className="border-b hover:bg-background/30 transition-colors" style={{ borderColor: 'rgba(247, 247, 244, 0.1)' }}>
                  <td className="py-2 px-2 sm:py-3 sm:px-4 md:py-5 md:px-6 font-bold text-xs sm:text-sm md:text-base" style={{ color: '#f7f7f4' }}>{row.feature}</td>
                  <td className="py-2 px-2 sm:py-3 sm:px-4 md:py-5 md:px-6 text-center text-xs sm:text-sm md:text-base border-l" style={{ color: 'rgba(247, 247, 244, 0.8)', borderColor: 'rgba(247, 247, 244, 0.3)' }}>{row.traditional}</td>
                  <td className="py-2 px-2 sm:py-3 sm:px-4 md:py-5 md:px-6 text-center border-l text-xs sm:text-sm md:text-base" style={{ borderColor: 'rgba(247, 247, 244, 0.3)' }}>
                    <span className="font-bold" style={{ color: '#B8C5D0' }}>{highlightKeywords(row.anyon)}</span>
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
              <button
                onClick={scrollToBetaForm}
                className="px-6 py-2.5 sm:px-8 sm:py-3 bg-brand-primary hover:bg-brand-primary-hover text-black font-bold rounded-xl transition-all transform hover:scale-105 shadow-xl shadow-brand-primary/30 text-sm sm:text-base"
              >
                {t('common.betaCTA')}
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

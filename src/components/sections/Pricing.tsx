import { useTranslation } from 'react-i18next';
import { AnimatedSection } from '../shared/AnimatedSection';
import DotGrid from '../DotGrid';
import { scrollToBetaForm } from '../../utils/scroll';
import { trackPricingClick, trackOutboundClick } from '../../hooks/useAnalytics';

interface PricingTier {
  name: string;
  price: string;
  originalPrice?: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
  badge?: string;
}

function PricingCard({ name, price, originalPrice, period, description, features, cta, highlighted, badge, index }: PricingTier & { index: number }) {
  return (
    <AnimatedSection delay={index * 150}>
      <div
        className={`rounded-2xl border p-6 sm:p-8 h-full flex flex-col relative ${
          highlighted
            ? 'border-brand-primary bg-gradient-to-b from-brand-primary/5 to-transparent md:scale-105 shadow-2xl shadow-brand-primary/20'
            : 'border-border bg-surface hover:border-brand-primary/50'
        } transition-all`}
      >
        {badge && (
          <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 px-3 py-1 sm:px-4 bg-brand-primary text-white text-xs sm:text-sm font-bold rounded-full">
            {badge}
          </div>
        )}

        <div className="mb-5 sm:mb-6">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">{name}</h3>
          {originalPrice && <p className="text-xs sm:text-sm text-muted mb-2">{originalPrice}</p>}
          <div className="flex items-baseline gap-2 mb-2 sm:mb-3">
            <span className="text-4xl sm:text-5xl font-bold brand-gradient">{price}</span>
            <span className="text-sm sm:text-base text-muted">{period}</span>
          </div>
          <p className="text-sm sm:text-base text-muted">{description}</p>
        </div>

        <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 flex-grow">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2 sm:gap-3">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-success flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-xs sm:text-sm text-foreground">{feature}</span>
            </li>
          ))}
        </ul>

        <button
          onClick={() => {
            trackPricingClick(name);
            scrollToBetaForm();
          }}
          className={`w-full py-3 sm:py-4 rounded-xl font-bold transition-all transform hover:scale-105 text-sm sm:text-base ${
            highlighted
              ? 'bg-brand-primary hover:bg-brand-primary-hover text-black shadow-xl shadow-brand-primary/30'
              : 'bg-surface hover:bg-surface/80 text-black border border-border hover:border-brand-primary/50'
          }`}
        >
          {cta}
        </button>
      </div>
    </AnimatedSection>
  );
}

export function Pricing() {
  const { t } = useTranslation();

  const pricingTiers: PricingTier[] = [
    {
      name: t('pricing.tiers.free.name'),
      price: t('pricing.tiers.free.price'),
      period: t('pricing.period'),
      description: t('pricing.tiers.free.description'),
      badge: t('pricing.tiers.free.badge'),
      features: t('pricing.tiers.free.features', { returnObjects: true }) as string[],
      cta: t('pricing.tiers.free.cta'),
      highlighted: true,
    },
    {
      name: t('pricing.tiers.basic.name'),
      price: t('pricing.tiers.basic.price'),
      originalPrice: t('pricing.tiers.basic.originalPrice'),
      period: t('pricing.period'),
      description: t('pricing.tiers.basic.description'),
      features: t('pricing.tiers.basic.features', { returnObjects: true }) as string[],
      cta: t('pricing.tiers.basic.cta'),
    },
    {
      name: t('pricing.tiers.pro.name'),
      price: t('pricing.tiers.pro.price'),
      originalPrice: t('pricing.tiers.pro.originalPrice'),
      period: t('pricing.period'),
      description: t('pricing.tiers.pro.description'),
      badge: t('pricing.tiers.pro.badge'),
      features: t('pricing.tiers.pro.features', { returnObjects: true }) as string[],
      cta: t('pricing.tiers.pro.cta'),
    },
  ];

  return (
    <section id="pricing" className="relative py-20 sm:py-24 md:py-32 px-4 sm:px-6 bg-background overflow-hidden">
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
      <div className="relative z-10 max-w-7xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4">
            {t('pricing.title')}
          </h2>
          <p
            className="text-base sm:text-lg md:text-xl text-muted text-center mb-3 sm:mb-4"
            dangerouslySetInnerHTML={{ __html: t('pricing.subtitle') }}
          />
          <p className="text-xs sm:text-sm text-muted text-center mb-12 sm:mb-16">
            {t('pricing.description')}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {pricingTiers.map((tier, index) => (
            <PricingCard key={index} {...tier} index={index} />
          ))}
        </div>

        <AnimatedSection delay={450}>
          <div className="max-w-3xl mx-auto">
            <div className="bg-surface border border-border rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-6">
                {t('pricing.enterprise.title')}
              </h3>
              <p className="text-sm sm:text-base text-center text-muted mb-5 sm:mb-6">
                {t('pricing.enterprise.description')}
              </p>
              <div className="flex justify-center">
                <a
                  href="https://any-on.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackOutboundClick('https://any-on.dev/')}
                  className="px-8 py-3 bg-brand-primary hover:bg-brand-primary-hover text-black font-semibold rounded-lg transition-colors inline-block text-center"
                >
                  {t('pricing.enterprise.cta')}
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

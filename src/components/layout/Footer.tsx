import { useTranslation } from 'react-i18next';
import { trackNavClick } from '../../hooks/useAnalytics';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-10 md:mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <img src="/logos/logo2.png" alt="ANYON" className="h-24 sm:h-28 md:h-32 brightness-0 invert" />
            </div>
            <p className="text-xs sm:text-sm text-muted leading-relaxed mb-3 sm:mb-4">
              {t('footer.brandDescription')}
            </p>
            <p className="text-xs text-muted/60">
              {t('footer.brandTagline')}
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t('footer.sections.product.title')}</h3>
            <ul className="space-y-3">
              <li>
                <a href="#features" onClick={() => trackNavClick('footer_features')} className="text-sm text-muted hover:text-brand-primary transition-colors">
                  {t('footer.sections.product.links.features')}
                </a>
              </li>
              <li>
                <a href="#comparison" onClick={() => trackNavClick('footer_comparison')} className="text-sm text-muted hover:text-brand-primary transition-colors">
                  {t('footer.sections.product.links.comparison')}
                </a>
              </li>
              <li>
                <a href="#workflow" onClick={() => trackNavClick('footer_workflow')} className="text-sm text-muted hover:text-brand-primary transition-colors">
                  {t('footer.sections.product.links.workflow')}
                </a>
              </li>
              <li>
                <a href="#pricing" onClick={() => trackNavClick('footer_pricing')} className="text-sm text-muted hover:text-brand-primary transition-colors">
                  {t('footer.sections.product.links.pricing')}
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t('footer.sections.resources.title')}</h3>
            <ul className="space-y-3">
              <li>
                <a href="#faq" onClick={() => trackNavClick('footer_faq')} className="text-sm text-muted hover:text-brand-primary transition-colors">
                  {t('footer.sections.resources.links.faq')}
                </a>
              </li>
              <li>
                <a href="#" onClick={() => trackNavClick('footer_docs')} className="text-sm text-muted hover:text-brand-primary transition-colors">
                  {t('footer.sections.resources.links.docs')}
                </a>
              </li>
              <li>
                <a href="#" onClick={() => trackNavClick('footer_blog')} className="text-sm text-muted hover:text-brand-primary transition-colors">
                  {t('footer.sections.resources.links.blog')}
                </a>
              </li>
              <li>
                <a href="#" onClick={() => trackNavClick('footer_support')} className="text-sm text-muted hover:text-brand-primary transition-colors">
                  {t('footer.sections.resources.links.support')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}

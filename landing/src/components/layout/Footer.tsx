import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-10 md:mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <img src="/logos/logo-anyon.png" alt="ANYON" className="h-6 w-6 sm:h-8 sm:w-8 brightness-0 invert" />
              <span className="text-xl sm:text-2xl font-bold text-white">ANYON</span>
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
                <a href="#features" className="text-sm text-muted hover:text-brand-primary transition-colors">
                  {t('footer.sections.product.links.features')}
                </a>
              </li>
              <li>
                <a href="#comparison" className="text-sm text-muted hover:text-brand-primary transition-colors">
                  {t('footer.sections.product.links.comparison')}
                </a>
              </li>
              <li>
                <a href="#workflow" className="text-sm text-muted hover:text-brand-primary transition-colors">
                  {t('footer.sections.product.links.workflow')}
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sm text-muted hover:text-brand-primary transition-colors">
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
                <a href="#faq" className="text-sm text-muted hover:text-brand-primary transition-colors">
                  {t('footer.sections.resources.links.faq')}
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted hover:text-brand-primary transition-colors">
                  {t('footer.sections.resources.links.docs')}
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted hover:text-brand-primary transition-colors">
                  {t('footer.sections.resources.links.blog')}
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted hover:text-brand-primary transition-colors">
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

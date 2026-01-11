import { useTranslation } from 'react-i18next';
import { trackLanguageChange } from '../../hooks/useAnalytics';

export function LanguageToggle() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ko' ? 'en' : 'ko';
    i18n.changeLanguage(newLang);
    trackLanguageChange(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1.5 text-sm font-medium text-foreground/80 hover:text-foreground border border-border hover:border-brand-primary/50 rounded-lg transition-all"
      aria-label="Toggle language"
    >
      {i18n.language === 'ko' ? 'EN' : 'KO'}
    </button>
  );
}

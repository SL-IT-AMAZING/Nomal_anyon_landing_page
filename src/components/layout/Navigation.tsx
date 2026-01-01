import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageToggle } from '../shared/LanguageToggle';

export function Navigation() {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#features', label: t('nav.features') },
    { href: '#comparison', label: t('nav.comparison') },
    { href: '#workflow', label: t('nav.workflow') },
    { href: '#pricing', label: t('nav.pricing') },
    { href: '#faq', label: t('nav.faq') },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/logos/logo1.png"
              alt="ANYON"
              className="h-6 sm:h-8 brightness-0 invert"
            />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Side - CTA Button & Language Toggle */}
          <div className="flex items-center gap-2 sm:gap-4">
            <LanguageToggle />
            <a href="#beta-signup" className="hidden sm:block px-4 py-2 sm:px-6 sm:py-2.5 bg-brand-primary hover:bg-brand-primary-hover text-black font-medium rounded-lg transition-colors text-sm sm:text-base">
              {t('nav.cta')}
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-foreground hover:text-white transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-surface border-t border-border">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="block py-2 text-foreground/80 hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a href="#beta-signup" onClick={handleLinkClick} className="block w-full mt-4 px-6 py-3 bg-brand-primary hover:bg-brand-primary-hover text-black font-medium rounded-lg transition-colors text-center">
              {t('nav.cta')}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

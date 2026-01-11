import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatedSection } from '../shared/AnimatedSection';
import DotGrid from '../DotGrid';
import { trackFormSubmit } from '../../hooks/useAnalytics';

interface FormState {
  email: string;
  status: 'idle' | 'submitting' | 'success' | 'error';
  errorMessage?: string;
}

export function BetaSignup() {
  const { t } = useTranslation();
  const [formState, setFormState] = useState<FormState>({
    email: '',
    status: 'idle'
  });

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(formState.email)) {
      setFormState(prev => ({
        ...prev,
        status: 'error',
        errorMessage: t('betaSignup.invalidEmail')
      }));
      return;
    }

    setFormState(prev => ({ ...prev, status: 'submitting' }));

    try {
      const response = await fetch('/api/beta-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formState.email })
      });

      if (!response.ok) throw new Error('Signup failed');

      setFormState({ email: '', status: 'success' });
      trackFormSubmit('beta_signup');

      setTimeout(() => {
        setFormState(prev => ({ ...prev, status: 'idle' }));
      }, 5000);
    } catch (error) {
      setFormState(prev => ({
        ...prev,
        status: 'error',
        errorMessage: t('betaSignup.errorMessage')
      }));
    }
  };

  return (
    <section
      id="beta-signup"
      className="relative py-20 sm:py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-br from-brand-primary/20 via-brand-secondary/10 to-background overflow-hidden"
    >
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

      <div className="relative z-10 max-w-2xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 sm:mb-6">
            {t('betaSignup.title')}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted text-center mb-8 sm:mb-12">
            {t('betaSignup.subtitle')}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <form onSubmit={handleSubmit} className="bg-surface border border-border rounded-2xl p-6 sm:p-8 shadow-2xl">
            {formState.status === 'success' ? (
              <div className="text-center py-6">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {t('betaSignup.successTitle')}
                </h3>
                <p className="text-muted">
                  {t('betaSignup.successMessage')}
                </p>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState(prev => ({
                      ...prev,
                      email: e.target.value,
                      status: 'idle',
                      errorMessage: undefined
                    }))}
                    placeholder={t('betaSignup.emailPlaceholder')}
                    className={`w-full px-4 py-4 rounded-xl border ${
                      formState.status === 'error'
                        ? 'border-red-500'
                        : 'border-border'
                    } bg-background text-foreground placeholder:text-muted focus:outline-none focus:border-brand-primary transition-colors text-base sm:text-lg`}
                    disabled={formState.status === 'submitting'}
                  />
                  {formState.status === 'error' && formState.errorMessage && (
                    <p className="text-red-500 text-sm mt-2">
                      {formState.errorMessage}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={formState.status === 'submitting'}
                  className="w-full px-8 py-4 bg-brand-primary hover:bg-brand-primary-hover text-black font-bold text-base sm:text-lg rounded-xl transition-all transform hover:scale-105 shadow-xl shadow-brand-primary/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {formState.status === 'submitting'
                    ? t('betaSignup.submitting')
                    : t('betaSignup.submitButton')
                  }
                </button>
              </>
            )}
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
}

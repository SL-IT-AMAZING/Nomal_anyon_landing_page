import { AnimatedSection } from '../shared/AnimatedSection';

export function CTA() {
  return (
    <section className="py-32 px-6 bg-gradient-to-br from-brand-primary/20 via-brand-secondary/10 to-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-brand-primary)_0%,_transparent_70%)] opacity-10" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <AnimatedSection>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            지금 시작하세요
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <p className="text-xl md:text-2xl text-muted mb-12 max-w-2xl mx-auto">
            비개발자를 위한 AI 개발 플랫폼. 무료로 시작하고, 아이디어를 제품으로 만드세요.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="px-10 py-5 bg-brand-primary hover:bg-brand-primary-hover text-white font-bold text-lg rounded-xl transition-all transform hover:scale-105 shadow-xl shadow-brand-primary/30">
              무료로 시작하기
            </button>
            <button className="px-10 py-5 bg-surface hover:bg-surface/80 text-foreground font-bold text-lg rounded-xl border border-border hover:border-brand-primary/50 transition-all">
              GitHub에서 보기
            </button>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <div className="flex items-center justify-center gap-8 text-sm text-muted flex-wrap">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>신용카드 불필요</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>즉시 사용 가능</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>언제든 취소 가능</span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

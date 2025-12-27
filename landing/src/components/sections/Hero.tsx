import { AnimatedSection } from '../shared/AnimatedSection';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary/10 border border-brand-primary/20 rounded-full text-sm text-brand-primary mb-8">
            <span>비개발자를 위한 AI 개발 플랫폼</span>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
            코딩 없이
            <br />
            <span className="brand-gradient">전문가급 제품 개발</span>
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <p className="text-xl md:text-2xl text-muted mt-8 max-w-2xl mx-auto leading-relaxed">
            대화만으로 설계부터 개발까지. AI가 비개발자의 아이디어를 실제 제품으로 만듭니다.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <div className="flex flex-col sm:flex-row gap-4 mt-12 justify-center">
            <button className="px-8 py-4 bg-brand-primary hover:bg-brand-primary-hover text-white font-semibold rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-brand-primary/20">
              무료로 시작하기
            </button>
            <button className="px-8 py-4 bg-surface hover:bg-surface/80 text-foreground font-semibold rounded-xl border border-border hover:border-brand-primary/50 transition-all">
              작동 방식 보기
            </button>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <div className="mt-16 text-sm text-muted flex items-center justify-center gap-6 flex-wrap">
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

        <AnimatedSection delay={500}>
          <div className="mt-16 max-w-4xl mx-auto">
            <img
              src="/screenshots/hero.png"
              alt="ANYON 시작 화면"
              className="w-full rounded-2xl shadow-2xl border border-border/30"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

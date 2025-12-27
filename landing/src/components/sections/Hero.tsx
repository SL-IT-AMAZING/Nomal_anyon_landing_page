import { AnimatedSection } from '../shared/AnimatedSection';
import { InteractiveDemo } from './InteractiveDemo';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-5xl mx-auto text-center">
        <AnimatedSection>
          <div className="flex justify-center mb-8">
            <img src="/logos/logo-anyon.png" alt="ANYON" className="h-32 w-32 brightness-0 invert" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="brand-gradient">3일 만에 MVP 출시</span>
            <br />
            코딩 없이 가능합니다
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <p className="text-xl md:text-2xl text-muted mt-8 max-w-3xl mx-auto leading-relaxed">
            PRD부터 ERD까지 <strong className="text-foreground">6개 전문 문서 자동 생성</strong> + 실제 코드까지.
            <br />
            비개발자도 대화만으로 전문가급 제품을 만듭니다.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={250}>
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
            <button className="px-10 py-5 bg-brand-primary hover:bg-brand-primary-hover text-white text-lg font-bold rounded-xl transition-all transform hover:scale-105 shadow-xl shadow-brand-primary/30">
              무료로 시작하기 →
            </button>
            <button
              onClick={() => alert('데모는 아직 준비 중입니다. 곧 만나보실 수 있습니다!')}
              className="px-10 py-5 bg-surface hover:bg-surface/80 text-foreground text-lg font-semibold rounded-xl border border-border hover:border-brand-primary/50 transition-all"
            >
              데모 보기
            </button>
          </div>
        </AnimatedSection>


        <AnimatedSection delay={500}>
          <div className="mt-16">
            <InteractiveDemo />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

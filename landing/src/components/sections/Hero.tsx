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
            <span className="brand-gradient">코딩을 처음 시작해도</span>
            <br />
            <span className="brand-gradient">3일이면 무엇이든 완성</span>
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <p className="text-xl md:text-2xl text-muted mt-8 max-w-3xl mx-auto leading-relaxed">
            PRD, UX, UI, TRD, 아키텍처, ERD까지 <strong className="text-foreground">6개 설계 문서 자동 생성</strong>
            <br />
            대화만으로 완성하는 체계적인 개발 프로세스
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

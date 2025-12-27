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
          <div className="flex justify-center">
            <button className="px-10 py-5 bg-brand-primary hover:bg-brand-primary-hover text-white font-bold text-lg rounded-xl transition-all transform hover:scale-105 shadow-xl shadow-brand-primary/30">
              무료로 시작하기
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

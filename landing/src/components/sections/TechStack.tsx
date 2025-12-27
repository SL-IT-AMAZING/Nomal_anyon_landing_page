import { AnimatedSection } from '../shared/AnimatedSection';

const technologies = [
  { name: 'Tauri', icon: '⚡' },
  { name: 'React', icon: '⚛️' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'Vite', icon: '⚡' },
  { name: 'Rust', icon: '🦀' },
  { name: 'Node.js', icon: '🟢' },
];

export function TechStack() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4">
            Powered by Industry Leaders
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <p className="text-sm sm:text-base text-muted text-center mb-8 sm:mb-12">
            최신 기술 스택으로 안정적이고 빠른 제품을 만듭니다
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <AnimatedSection key={tech.name} delay={index * 50}>
              <div className="text-center group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-brand-primary/5 hover:bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-2 sm:mb-3 transition-all transform group-hover:scale-110 border border-border group-hover:border-brand-primary/30">
                  <span className="text-3xl sm:text-4xl">{tech.icon}</span>
                </div>
                <p className="text-xs sm:text-sm font-medium text-foreground">{tech.name}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

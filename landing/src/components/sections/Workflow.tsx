import { AnimatedSection } from '../shared/AnimatedSection';

interface Step {
  step: number;
  title: string;
  description: string;
}

const steps: Step[] = [
  { step: 1, title: '대화로 시작', description: 'AI와 채팅으로 아이디어 공유' },
  { step: 2, title: '자동 설계', description: 'PRD와 스펙 자동 생성' },
  { step: 3, title: 'AI 개발', description: '코드 작성과 테스트 자동화' },
  { step: 4, title: '실시간 확인', description: '프리뷰에서 즉시 확인' },
  { step: 5, title: '배포', description: '완성된 제품 즉시 배포' },
];

export function Workflow() {
  return (
    <section id="workflow" className="py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-6">
            어떻게 작동하나요?
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <p className="text-xl text-muted text-center mb-16">
            5단계로 완성하는 제품 개발
          </p>
        </AnimatedSection>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 max-w-6xl mx-auto">
          {steps.map(({ step, title, description }, index) => (
            <div key={step} className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
              <AnimatedSection delay={index * 100}>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-brand-primary/10 border-2 border-brand-primary text-brand-primary flex items-center justify-center text-2xl font-bold flex-shrink-0">
                    {step}
                  </div>
                  <div className="text-center lg:text-left">
                    <h3 className="font-semibold text-lg text-foreground">{title}</h3>
                    <p className="text-sm text-muted">{description}</p>
                  </div>
                </div>
              </AnimatedSection>

              {step < steps.length && (
                <svg
                  className="hidden lg:block w-8 h-8 text-muted flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

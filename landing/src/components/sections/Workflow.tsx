import { AnimatedSection } from '../shared/AnimatedSection';

interface Step {
  step: number;
  title: string;
  description: string;
  easyPoint: string;
  qualityPoint: string;
  icon: string;
}

const steps: Step[] = [
  {
    step: 1,
    title: '대화로 시작',
    description: 'AI와 채팅으로 진행',
    easyPoint: '카톡하듯 편하게 대화만 하면 됩니다',
    qualityPoint: 'PRD, UX, UI, TRD, 아키텍처, ERD 자동 작성',
    icon: '',
  },
  {
    step: 2,
    title: '자동 설계',
    description: '6개의 설계문서 작성',
    easyPoint: '대화만 하면 문서가 자동으로 완성',
    qualityPoint: '체계적인 문서 구조와 상세한 기술 스펙',
    icon: '',
  },
  {
    step: 3,
    title: 'AI 개발',
    description: '코드 작성과 테스트 자동화',
    easyPoint: '코드 한 줄 몰라도 괜찮아요',
    qualityPoint: '모든 언어와 프레임워크 지원',
    icon: '',
  },
  {
    step: 4,
    title: '실시간 확인',
    description: '프리뷰에서 즉시 확인',
    easyPoint: '수정사항도 대화로 즉시 반영',
    qualityPoint: '실시간 프리뷰로 결과 확인',
    icon: '',
  },
  {
    step: 5,
    title: '배포',
    description: '완성된 제품 즉시 배포',
    easyPoint: '버튼 하나로 전세계에 공개',
    qualityPoint: '클라우드 인프라 자동 구성',
    icon: '',
  },
];

function StepCard({ step, title, description, easyPoint, qualityPoint, icon, index }: Step & { index: number }) {
  return (
    <AnimatedSection delay={index * 100}>
      <div className="relative bg-surface border border-border rounded-2xl p-6 hover:border-brand-primary/50 transition-all hover:shadow-xl hover:shadow-brand-primary/10 group h-full">
        {/* Step Number Badge */}
        <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center text-xl font-bold shadow-lg z-10">
          {step}
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-bold text-foreground mb-2 text-center">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4 text-center">{description}</p>

        {/* Easy Point Badge */}
        <div className="mb-3 p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
          <div>
            <p className="text-xs font-semibold text-green-600 dark:text-green-400 mb-1">쉬운 점</p>
            <p className="text-sm text-foreground">{easyPoint}</p>
          </div>
        </div>

        {/* Quality Point Badge */}
        <div className="p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg">
          <div>
            <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-1">결과물 품질</p>
            <p className="text-sm text-foreground">{qualityPoint}</p>
          </div>
        </div>

        {/* Arrow Connector (except for last step) */}
        {step < steps.length && (
          <div className="hidden lg:block absolute -right-8 top-1/2 -translate-y-1/2 z-0">
            <svg className="w-16 h-16 text-brand-primary/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        )}
      </div>
    </AnimatedSection>
  );
}

export function Workflow() {
  return (
    <section id="workflow" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            어떻게 작동하나요?
          </h2>
          <p className="text-xl text-center mb-3">
            <span className="brand-gradient font-semibold">비개발자도 쉽게 시작</span>, 전문가급 결과물
          </p>
          <p className="text-base text-muted-foreground text-center mb-16">
            5단계로 완성하는 제품 개발
          </p>
        </AnimatedSection>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 mb-16 relative">
          {steps.map((stepData, index) => (
            <StepCard key={stepData.step} {...stepData} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection delay={500}>
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 border border-brand-primary/20 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-3">
              복잡해 보이나요? <span className="brand-gradient">전혀 그렇지 않습니다.</span>
            </h3>
            <p className="text-base text-muted-foreground mb-6">
              평균 사용 시간: <strong className="text-foreground">첫 MVP까지 3일</strong> | 만족도: <strong className="text-foreground">98%</strong>
            </p>
            <button className="px-10 py-4 bg-brand-primary hover:bg-brand-primary-hover text-white font-bold rounded-xl transition-all transform hover:scale-105 shadow-xl shadow-brand-primary/30">
              3분 만에 체험하기 →
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

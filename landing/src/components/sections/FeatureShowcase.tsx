import { AnimatedSection } from '../shared/AnimatedSection';

interface Feature {
  title: string;
  description: string;
  imageSrc: string;
  highlights: string[];
}

const features: Feature[] = [
  {
    title: '1. PRD 작성',
    description: 'AI와 대화만으로 전문가급 요구사항 문서(PRD)를 자동 생성합니다.',
    imageSrc: '/screenshots/prd.png',
    highlights: ['제품 목표 정의', '기능 요구사항 분석', '우선순위 설정'],
  },
  {
    title: '2. UX 디자인',
    description: '사용자 경험 설계와 와이어프레임을 AI가 자동 생성합니다.',
    imageSrc: '/screenshots/ux-design.png',
    highlights: ['사용자 플로우', '화면 구성', '인터랙션 설계'],
  },
  {
    title: '3. UI 디자인',
    description: '디자인 시스템과 컴포넌트 가이드를 체계적으로 구성합니다.',
    imageSrc: '/screenshots/ui-design.png',
    highlights: ['컬러 시스템', '타이포그래피', '컴포넌트 라이브러리'],
  },
  {
    title: '4. TRD 작성',
    description: '기술 요구사항 문서(TRD)를 자동으로 생성합니다.',
    imageSrc: '/screenshots/trd.png',
    highlights: ['기술 스택 선정', '시스템 요구사항', 'API 명세'],
  },
  {
    title: '5. 아키텍처',
    description: '시스템 아키텍처를 설계하고 다이어그램을 생성합니다.',
    imageSrc: '/screenshots/architecture.png',
    highlights: ['시스템 구조도', '컴포넌트 설계', '배포 아키텍처'],
  },
  {
    title: '6. ERD 작성',
    description: '데이터베이스 스키마와 ERD를 자동 생성합니다.',
    imageSrc: '/screenshots/erd.png',
    highlights: ['테이블 설계', '관계 정의', '인덱스 최적화'],
  },
];

function FeatureCard({ title, description, imageSrc, highlights, index }: Feature & { index: number }) {
  return (
    <AnimatedSection delay={index * 100}>
      <div className="flex-shrink-0 w-80 bg-surface rounded-2xl border border-border p-6 hover:border-brand-primary/50 transition-all">
        {/* Image */}
        <div className="mb-4">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-48 object-cover rounded-xl"
          />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>

        {/* Description */}
        <p className="text-sm text-muted leading-relaxed mb-4">{description}</p>

        {/* Highlights */}
        <ul className="space-y-2">
          {highlights.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <svg className="w-4 h-4 text-success flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm text-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </AnimatedSection>
  );
}

export function FeatureShowcase() {
  return (
    <section id="features" className="py-32 px-6 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            AI가 자동으로 생성하는
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="brand-gradient">6단계 개발 문서</span>
          </h2>
        </AnimatedSection>

        {/* Horizontal Scroll Container */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} index={index} />
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="text-center mt-8 text-sm text-muted">
            좌우로 스크롤하여 모든 문서를 확인하세요 →
          </div>
        </div>
      </div>
    </section>
  );
}

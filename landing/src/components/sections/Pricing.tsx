import { AnimatedSection } from '../shared/AnimatedSection';

interface PricingTier {
  name: string;
  price: string;
  originalPrice?: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
  badge?: string;
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Free (Early Access)',
    price: '$0',
    period: '/ 월',
    description: '지금 가입하면 얼리 액세스 기간 동안 모든 기능 무료',
    badge: '현재 무료!',
    features: [
      '6개 문서 자동 생성 (PRD, UX, UI, TRD, 아키텍처, ERD)',
      '실제 코드 생성 (React + TypeScript)',
      '무제한 프로젝트',
      '원클릭 배포',
      '커뮤니티 지원',
      '정식 출시 후 특별 할인 혜택',
    ],
    cta: '지금 무료로 시작하기',
    highlighted: true,
  },
  {
    name: 'Basic',
    price: '$20',
    originalPrice: '정식 출시 후',
    period: '/ 월',
    description: '개인 개발자와 소규모 프로젝트에 적합',
    features: [
      'Free 플랜의 모든 기능',
      '프리미엄 템플릿 라이브러리',
      '고급 커스터마이징 옵션',
      '우선 지원 (48시간 이내 응답)',
      '프로젝트 협업 (최대 3명)',
      '월간 20개 프로젝트',
    ],
    cta: '출시 알림 받기',
  },
  {
    name: 'Pro',
    price: '$100',
    originalPrice: '정식 출시 후',
    period: '/ 월',
    description: '팀과 에이전시를 위한 프로페셔널 플랜',
    badge: '추천',
    features: [
      'Basic 플랜의 모든 기능',
      '무제한 프로젝트',
      '무제한 팀 멤버',
      '우선 지원 (24시간 이내 응답)',
      '1:1 온보딩 컨설팅',
      '화이트 라벨링 옵션',
      '커스텀 통합 및 API',
      '전용 계정 매니저',
    ],
    cta: '출시 알림 받기',
  },
];

function PricingCard({ name, price, originalPrice, period, description, features, cta, highlighted, badge, index }: PricingTier & { index: number }) {
  return (
    <AnimatedSection delay={index * 150}>
      <div
        className={`rounded-2xl border p-8 h-full flex flex-col relative ${
          highlighted
            ? 'border-brand-primary bg-gradient-to-b from-brand-primary/5 to-transparent scale-105 shadow-2xl shadow-brand-primary/20'
            : 'border-border bg-surface hover:border-brand-primary/50'
        } transition-all`}
      >
        {badge && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-primary text-white text-sm font-bold rounded-full">
            {badge}
          </div>
        )}

        <div className="mb-6">
          <h3 className="text-2xl font-bold text-foreground mb-2">{name}</h3>
          {originalPrice && <p className="text-sm text-muted mb-2">{originalPrice}</p>}
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-5xl font-bold brand-gradient">{price}</span>
            <span className="text-muted">{period}</span>
          </div>
          <p className="text-muted">{description}</p>
        </div>

        <ul className="space-y-3 mb-8 flex-grow">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <svg className="w-5 h-5 text-success flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm text-foreground">{feature}</span>
            </li>
          ))}
        </ul>

        <button
          className={`w-full py-4 rounded-xl font-bold transition-all transform hover:scale-105 ${
            highlighted
              ? 'bg-brand-primary hover:bg-brand-primary-hover text-white shadow-xl shadow-brand-primary/30'
              : 'bg-surface hover:bg-surface/80 text-foreground border border-border hover:border-brand-primary/50'
          }`}
        >
          {cta}
        </button>
      </div>
    </AnimatedSection>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            간단하고 투명한 가격
          </h2>
          <p className="text-xl text-muted text-center mb-4">
            지금 가입하면 얼리 액세스 기간 동안 <strong className="text-brand-primary">완전 무료</strong>
          </p>
          <p className="text-sm text-muted text-center mb-16">
            정식 출시 후에도 얼리 액세스 사용자에게는 특별 할인이 적용됩니다
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier, index) => (
            <PricingCard key={index} {...tier} index={index} />
          ))}
        </div>

        <AnimatedSection delay={450}>
          <div className="max-w-3xl mx-auto">
            <div className="bg-surface border border-border rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-center mb-6">
                Enterprise 플랜이 필요하신가요?
              </h3>
              <p className="text-center text-muted mb-6">
                대규모 팀, 커스텀 요구사항, 온프레미스 배포 등이 필요하시다면 별도로 문의주세요.
              </p>
              <div className="flex justify-center">
                <a
                  href="https://any-on.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-brand-primary hover:bg-brand-primary-hover text-white font-semibold rounded-lg transition-colors inline-block text-center"
                >
                  영업팀 문의하기
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

import { AnimatedSection } from '../shared/AnimatedSection';

interface UseCase {
  title: string;
  description: string;
  persona: string;
  problem: string;
  solution: string;
  results: string[];
}

const useCases: UseCase[] = [
  {
    title: '스타트업 창업자',
    description: '빠른 MVP 검증이 필요한 초기 스타트업',
    persona: '아이디어는 있지만 개발팀이 없는 비기술 창업자',
    problem: '외주 개발 비용 부담, 긴 개발 기간, 요구사항 소통의 어려움',
    solution: 'ANYON으로 3일 만에 MVP 출시하고 시장 반응 테스트',
    results: [
      '개발 비용 99% 절감 (수천만원 → 월 $20)',
      'MVP 출시 기간 3-6개월 → 3일',
      '투자자 미팅용 프로토타입 즉시 확보',
    ],
  },
  {
    title: '프리랜서 & 1인 기업',
    description: '다양한 클라이언트 프로젝트를 혼자 수행',
    persona: '디자이너, 마케터, 기획자 등 비개발 전문가',
    problem: '개발 외주 비용이 프로젝트 수익을 감소시킴',
    solution: 'ANYON으로 직접 개발하여 마진 극대화',
    results: [
      '클라이언트에게 더 저렴한 가격 제공',
      '프로젝트 마진 200-300% 증가',
      '개발 의존도 제로, 완전한 독립성',
    ],
  },
  {
    title: '중소기업 & SMB',
    description: '사내 업무 자동화 및 맞춤형 솔루션 필요',
    persona: 'IT 부서가 없거나 작은 중소기업 경영진',
    problem: '비싼 ERP/CRM 구독료, 우리에게 맞지 않는 기성 솔루션',
    solution: '회사 맞춤형 관리 시스템을 ANYON으로 직접 구축',
    results: [
      '연간 SaaS 구독료 수천만원 절감',
      '우리 비즈니스에 완벽히 맞는 맞춤형 시스템',
      '사내 IT 인력 채용 없이 시스템 구축',
    ],
  },
  {
    title: '이커머스 & 온라인 비즈니스',
    description: '온라인 스토어, 마켓플레이스 운영자',
    persona: '쇼피파이/카페24 한계를 느끼는 온라인 셀러',
    problem: '플랫폼 수수료 부담, 커스터마이징 불가능',
    solution: '독립적인 자체 쇼핑몰 플랫폼을 ANYON으로 구축',
    results: [
      '플랫폼 수수료 제로 (월 매출의 5-10% 절약)',
      '원하는 대로 커스터마이징 가능',
      '고객 데이터 100% 소유',
    ],
  },
  {
    title: '디지털 에이전시',
    description: '클라이언트 웹/앱 개발 프로젝트 수행',
    persona: '디자인/마케팅 에이전시에서 개발 서비스 추가',
    problem: '외주 개발사와 협업의 어려움, 납기 지연, 마진 감소',
    solution: 'ANYON으로 in-house 개발 역량 확보',
    results: [
      '프로젝트당 마진 300-500% 증가',
      '납기 단축으로 고객 만족도 향상',
      '개발 서비스 라인업 추가로 비즈니스 확장',
    ],
  },
  {
    title: '교육 & 비영리',
    description: '학교, 교육 기관, 비영리 단체',
    persona: '제한된 예산으로 IT 시스템이 필요한 조직',
    problem: '개발 예산 부족, IT 전문 인력 없음',
    solution: 'ANYON으로 무료/저비용으로 필요한 시스템 구축',
    results: [
      '제한된 예산으로 맞춤형 시스템 확보',
      '학생 관리, 출석, 성적 시스템 등 자유롭게 구축',
      '비영리 할인으로 더욱 저렴하게',
    ],
  },
];

function UseCaseCard({ title, description, problem, solution, results, index }: UseCase & { index: number }) {
  return (
    <AnimatedSection delay={index * 100}>
      <div className="bg-surface rounded-2xl border border-border p-8 hover:border-brand-primary/50 transition-all h-full flex flex-col">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-foreground mb-2">{title}</h3>
          <p className="text-muted">{description}</p>
        </div>

        <div className="mb-4 flex-grow">
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-brand-primary mb-2">문제점</h4>
            <p className="text-sm text-muted">{problem}</p>
          </div>

          <div className="mb-4">
            <h4 className="text-sm font-semibold text-success mb-2">ANYON 솔루션</h4>
            <p className="text-sm text-foreground">{solution}</p>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3">기대 효과</h4>
          <ul className="space-y-2">
            {results.map((result, i) => (
              <li key={i} className="flex items-start gap-2">
                <svg className="w-5 h-5 text-success flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-foreground">{result}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </AnimatedSection>
  );
}

export function UseCases() {
  return (
    <section id="use-cases" className="py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            누구를 위한 서비스인가요?
          </h2>
          <p className="text-xl text-muted text-center mb-16">
            ANYON은 이런 분들에게 완벽합니다
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <UseCaseCard key={index} {...useCase} index={index} />
          ))}
        </div>

        <AnimatedSection delay={600}>
          <div className="mt-16 text-center">
            <p className="text-lg text-muted mb-6">
              당신의 상황에 맞는지 확실하지 않나요? 무료로 시작해보세요.
            </p>
            <button className="px-10 py-4 bg-brand-primary hover:bg-brand-primary-hover text-white font-bold rounded-xl transition-all transform hover:scale-105 shadow-xl shadow-brand-primary/30">
              무료로 시작하기 →
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

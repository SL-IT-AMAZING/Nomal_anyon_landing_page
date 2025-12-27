import { AnimatedSection } from '../shared/AnimatedSection';

interface ComparisonRow {
  feature: string;
  traditional: string;
  anyon: string;
}

const comparisons: ComparisonRow[] = [
  {
    feature: '개발 기간',
    traditional: '3-6개월',
    anyon: '3일',
  },
  {
    feature: '개발 비용',
    traditional: '₩30,000,000 ~ ₩100,000,000',
    anyon: '월 $20 (현재 무료)',
  },
  {
    feature: '필요한 인력',
    traditional: 'PM, 디자이너, 프론트엔드, 백엔드, DevOps',
    anyon: '혼자',
  },
  {
    feature: '기술 지식',
    traditional: '전문 개발팀 필수',
    anyon: '코딩 지식 불필요',
  },
  {
    feature: '문서화',
    traditional: '수동 작성 (수주 소요)',
    anyon: 'PRD, UX, UI, TRD, 아키텍처, ERD 자동 생성',
  },
  {
    feature: '수정 및 반복',
    traditional: '추가 비용 및 시간 소요',
    anyon: '즉시 대화로 수정',
  },
  {
    feature: '코드 품질',
    traditional: '팀 역량에 따라 다름',
    anyon: '산업 표준 준수 보장',
  },
  {
    feature: '배포',
    traditional: '복잡한 DevOps 설정',
    anyon: '원클릭 배포',
  },
];

export function Comparison() {
  return (
    <section id="comparison" className="py-16 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            왜 <span className="brand-gradient">ANYON</span>인가요?
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12">
            전통적인 외주 개발과 비교해보세요
          </p>
        </AnimatedSection>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse table-fixed rounded-xl overflow-hidden shadow-lg" style={{ backgroundColor: '#1a1a1a' }}>
            <thead>
              <tr className="border-b-2" style={{ borderColor: 'rgba(247, 247, 244, 0.1)', backgroundColor: '#0a0a0a' }}>
                <th className="text-left py-5 px-6 text-lg font-bold w-1/4" style={{ color: '#f7f7f4' }}>비교 항목</th>
                <th className="text-center py-5 px-6 text-lg font-bold w-[37.5%] border-l" style={{ color: 'rgba(247, 247, 244, 0.8)', borderColor: 'rgba(247, 247, 244, 0.3)' }}>전통적인 외주 개발</th>
                <th className="text-center py-5 px-6 text-lg font-bold w-[37.5%] border-l" style={{ color: '#f7f7f4', borderColor: 'rgba(247, 247, 244, 0.3)' }}>
                  <span className="brand-gradient">ANYON</span>
                </th>
              </tr>
            </thead>
            <tbody style={{ backgroundColor: '#1a1a1a' }}>
              {comparisons.map((row, index) => (
                <tr key={index} className="border-b hover:bg-background/30 transition-colors" style={{ borderColor: 'rgba(247, 247, 244, 0.1)' }}>
                  <td className="py-5 px-6 font-bold text-base" style={{ color: '#f7f7f4' }}>{row.feature}</td>
                  <td className="py-5 px-6 text-center text-base border-l" style={{ color: 'rgba(247, 247, 244, 0.8)', borderColor: 'rgba(247, 247, 244, 0.3)' }}>{row.traditional}</td>
                  <td className="py-5 px-6 text-center border-l text-base" style={{ borderColor: 'rgba(247, 247, 244, 0.3)' }}>
                    <span className="font-bold" style={{ color: '#d97757' }}>{row.anyon}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <AnimatedSection delay={400}>
          <div className="mt-12 p-6 bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 rounded-2xl border border-brand-primary/20">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-3">
                <span className="brand-gradient">99% 비용 절감</span>, 100배 빠른 개발
              </h3>
              <p className="text-base text-muted-foreground mb-5">
                외주 개발에 수천만원을 쓰기 전에, ANYON을 먼저 시도해보세요.
              </p>
              <button className="px-8 py-3 bg-brand-primary hover:bg-brand-primary-hover text-white font-bold rounded-xl transition-all transform hover:scale-105 shadow-xl shadow-brand-primary/30">
                지금 시작하기 →
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

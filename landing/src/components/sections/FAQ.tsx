import { AnimatedSection } from '../shared/AnimatedSection';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: '정말 코딩 몰라도 사용할 수 있나요?',
    answer: '네! ANYON은 비개발자를 위해 설계되었습니다. AI와 대화만으로 PRD, UX/UI 디자인, 아키텍처, ERD까지 모든 문서를 자동 생성하고 실제 코드로 구현합니다. 개발 지식이 전혀 없어도 전문가급 제품을 만들 수 있습니다.',
  },
  {
    question: '어떤 종류의 앱을 만들 수 있나요?',
    answer: '웹 애플리케이션, 모바일 앱, SaaS 제품, 이커머스 플랫폼, 관리자 대시보드 등 다양한 제품을 만들 수 있습니다. React, TypeScript, Node.js 기반의 현대적인 스택으로 개발되며, 실제 프로덕션 환경에 바로 배포 가능합니다.',
  },
  {
    question: '가격은 어떻게 되나요?',
    answer: '현재 얼리 액세스 기간 동안 완전 무료로 제공됩니다. 정식 출시 후에는 Basic 플랜($20/월)과 Pro 플랜($100/월)으로 운영될 예정이며, 지금 가입하시면 특별 할인 혜택을 받으실 수 있습니다.',
  },
  {
    question: '생성된 코드의 품질은 어떤가요?',
    answer: '산업 표준을 따르는 고품질 코드를 생성합니다. TypeScript로 타입 안정성을 보장하고, 모던 React 패턴을 사용하며, 보안과 성능을 고려한 아키텍처로 구성됩니다. 생성된 코드는 완전히 커스터마이징 가능합니다.',
  },
  {
    question: '배포는 어떻게 하나요?',
    answer: 'Vercel, Netlify, AWS 등 주요 플랫폼에 원클릭 배포를 지원합니다. 생성된 프로젝트는 표준 구조로 되어 있어 원하는 호스팅 서비스에 자유롭게 배포할 수 있습니다.',
  },
  {
    question: '개발 후 수정이 가능한가요?',
    answer: '물론입니다! 생성된 코드는 100% 소유권이 있으며, 언제든지 직접 수정하거나 개발자를 고용해 커스터마이징할 수 있습니다. AI를 통해 추가 기능을 계속 개발할 수도 있습니다.',
  },
  {
    question: '고객 지원은 어떻게 받나요?',
    answer: 'Discord 커뮤니티, 이메일 지원, 그리고 상세한 문서를 제공합니다. Pro 플랜 사용자는 우선 지원과 1:1 컨설팅을 받으실 수 있습니다.',
  },
  {
    question: '데이터 보안은 어떻게 되나요?',
    answer: '모든 데이터는 암호화되어 안전하게 저장됩니다. 생성된 코드와 프로젝트는 완전히 사용자 소유이며, 원하시면 언제든지 내보내기가 가능합니다. GDPR 및 주요 보안 표준을 준수합니다.',
  },
];

function FAQAccordion({ question, answer, index }: FAQItem & { index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AnimatedSection delay={index * 50}>
      <div className="border border-border rounded-xl overflow-hidden bg-surface hover:border-brand-primary/50 transition-all">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-surface/50 transition-colors"
        >
          <span className="text-lg font-semibold text-foreground">{question}</span>
          <svg
            className={`w-5 h-5 text-muted transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {isOpen && (
          <div className="px-6 pb-5 pt-0">
            <p className="text-muted leading-relaxed">{answer}</p>
          </div>
        )}
      </div>
    </AnimatedSection>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="py-32 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            자주 묻는 질문
          </h2>
          <p className="text-xl text-muted text-center mb-16">
            ANYON에 대해 궁금한 점을 확인해보세요
          </p>
        </AnimatedSection>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQAccordion key={index} {...faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

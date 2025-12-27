import { AnimatedSection } from '../shared/AnimatedSection';
import { useEffect, useRef, useState } from 'react';

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
    imageSrc: '/icons/prd-icon.png',
    highlights: ['제품 목표 정의', '기능 요구사항 분석', '우선순위 설정'],
  },
  {
    title: '2. UX 디자인',
    description: '사용자 경험 설계와 와이어프레임을 AI가 자동 생성합니다.',
    imageSrc: '/icons/uiux-icon.png',
    highlights: ['사용자 플로우', '화면 구성', '인터랙션 설계'],
  },
  {
    title: '3. UI 디자인',
    description: '디자인 시스템과 컴포넌트 가이드를 체계적으로 구성합니다.',
    imageSrc: '/icons/design-icon.png',
    highlights: ['컬러 시스템', '타이포그래피', '컴포넌트 라이브러리'],
  },
  {
    title: '4. TRD 작성',
    description: '기술 요구사항 문서(TRD)를 자동으로 생성합니다.',
    imageSrc: '/icons/trd-icon.png',
    highlights: ['기술 스택 선정', '시스템 요구사항', 'API 명세'],
  },
  {
    title: '5. 아키텍처',
    description: '시스템 아키텍처를 설계하고 다이어그램을 생성합니다.',
    imageSrc: '/icons/architecture-icon.png',
    highlights: ['시스템 구조도', '컴포넌트 설계', '배포 아키텍처'],
  },
  {
    title: '6. ERD 작성',
    description: '데이터베이스 스키마와 ERD를 자동 생성합니다.',
    imageSrc: '/icons/erd-icon.png',
    highlights: ['테이블 설계', '관계 정의', '인덱스 최적화'],
  },
];

function FeatureCard({ title, description, imageSrc, highlights, index }: Feature & { index: number }) {
  return (
    <AnimatedSection delay={index * 100}>
      <div className="flex-shrink-0 w-80 bg-surface rounded-2xl border border-border p-6 hover:border-brand-primary/50 transition-all">
        {/* Image */}
        <div className="mb-4 flex items-center justify-center">
          <img
            src={imageSrc}
            alt={title}
            className="w-32 h-32 object-contain brightness-0 invert"
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
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    const scrollSpeed = 0.8; // 픽셀/프레임

    const animate = () => {
      if (!isPaused && !isDragging && scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed;

        // 스크롤이 끝에 도달하면 처음으로 되돌림
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isPaused, isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    setIsDragging(true);
    setStartX(e.pageX - scrollContainer.offsetLeft);
    setScrollLeft(scrollContainer.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    e.preventDefault();
    const x = e.pageX - scrollContainer.offsetLeft;
    const walk = (x - startX) * 2; // 스크롤 속도 조절
    scrollContainer.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
    }
    setIsPaused(false);
  };

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
          <div
            ref={scrollContainerRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            className={`flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory ${
              isDragging ? 'cursor-grabbing select-none' : 'cursor-grab'
            }`}
          >
            {/* 카드를 2번 반복하여 무한 스크롤 효과 */}
            {[...features, ...features].map((feature, index) => (
              <FeatureCard key={index} {...feature} index={index % features.length} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { useTranslation } from 'react-i18next';
import { AnimatedSection } from '../shared/AnimatedSection';
import { useEffect, useRef, useState } from 'react';
import DotGrid from '../DotGrid';

interface Feature {
  title: string;
  description: string;
  imageSrc: string;
  highlights: string[];
}

function FeatureCard({ title, description, imageSrc, highlights, index }: Feature & { index: number }) {
  return (
    <AnimatedSection delay={index * 100}>
      <div className="flex-shrink-0 w-72 sm:w-80 bg-surface rounded-2xl border border-border p-4 sm:p-6 hover:border-brand-primary/50 transition-all">
        {/* Image */}
        <div className="mb-3 sm:mb-4 flex items-center justify-center">
          <img
            src={imageSrc}
            alt={title}
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 object-contain brightness-0 invert"
          />
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">{title}</h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-muted leading-relaxed mb-3 sm:mb-4">{description}</p>

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
  const { t } = useTranslation();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const features: Feature[] = [
    {
      title: t('features.items.prd.title'),
      description: t('features.items.prd.description'),
      imageSrc: '/icons/prd-icon.png',
      highlights: t('features.items.prd.highlights', { returnObjects: true }) as string[],
    },
    {
      title: t('features.items.ux.title'),
      description: t('features.items.ux.description'),
      imageSrc: '/icons/uiux-icon.png',
      highlights: t('features.items.ux.highlights', { returnObjects: true }) as string[],
    },
    {
      title: t('features.items.ui.title'),
      description: t('features.items.ui.description'),
      imageSrc: '/icons/design-icon.png',
      highlights: t('features.items.ui.highlights', { returnObjects: true }) as string[],
    },
    {
      title: t('features.items.trd.title'),
      description: t('features.items.trd.description'),
      imageSrc: '/icons/trd-icon.png',
      highlights: t('features.items.trd.highlights', { returnObjects: true }) as string[],
    },
    {
      title: t('features.items.architecture.title'),
      description: t('features.items.architecture.description'),
      imageSrc: '/icons/architecture-icon.png',
      highlights: t('features.items.architecture.highlights', { returnObjects: true }) as string[],
    },
    {
      title: t('features.items.erd.title'),
      description: t('features.items.erd.description'),
      imageSrc: '/icons/erd-icon.png',
      highlights: t('features.items.erd.highlights', { returnObjects: true }) as string[],
    },
  ];

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    // 일시정지 또는 드래그 중이면 RAF를 시작하지 않음
    if (isPaused || isDragging) return;

    let animationFrameId: number;
    const scrollSpeed = 0.8;

    const animate = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed;

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
    <section id="features" className="relative py-20 sm:py-24 md:py-32 px-4 sm:px-6 bg-background overflow-hidden">
      {/* DotGrid Background */}
      <div className="absolute inset-0 opacity-15">
        <DotGrid
          dotSize={4}
          gap={35}
          baseColor="#C8D5E0"
          activeColor="#B8C5D0"
          proximity={200}
          speedTrigger={80}
          shockRadius={300}
          shockStrength={10}
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4">
            {t('features.title')}
          </h2>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16">
            <span className="brand-gradient">{t('features.subtitle')}</span>
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

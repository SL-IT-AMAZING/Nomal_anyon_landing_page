import { useTranslation } from 'react-i18next';
import { AnimatedSection } from '../shared/AnimatedSection';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar: string;
  rating: number;
}

function TestimonialCard({
  quote,
  author,
  role,
  avatar,
  rating,
  delay,
}: Testimonial & { delay: number }) {
  return (
    <AnimatedSection delay={delay}>
      <div className="bg-surface border border-border rounded-2xl p-6 sm:p-8 hover:border-brand-primary/50 transition-all h-full flex flex-col">
        {/* Rating Stars */}
        <div className="flex gap-1 mb-3 sm:mb-4">
          {[...Array(rating)].map((_, i) => (
            <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        {/* Quote */}
        <blockquote className="text-base sm:text-lg italic text-foreground mb-5 sm:mb-6 flex-grow">
          "{quote}"
        </blockquote>

        {/* Author */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-surface border-2 border-border flex items-center justify-center text-xl sm:text-2xl">
            {avatar}
          </div>
          <div>
            <p className="text-sm sm:text-base font-semibold text-foreground">{author}</p>
            <p className="text-xs sm:text-sm text-muted">{role}</p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

export function Testimonials() {
  const { t } = useTranslation();
  const testimonials = t('testimonials.items', { returnObjects: true }) as Testimonial[];

  return (
    <section id="testimonials" className="relative py-20 sm:py-24 md:py-32 px-4 sm:px-6 bg-surface overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 sm:mb-6">
            {t('testimonials.title')}
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <p className="text-base sm:text-lg md:text-xl text-muted text-center mb-12 sm:mb-16">
            {t('testimonials.subtitle')}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}

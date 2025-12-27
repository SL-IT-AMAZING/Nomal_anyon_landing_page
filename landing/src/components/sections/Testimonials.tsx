import { AnimatedSection } from '../shared/AnimatedSection';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    quote: 'ANYON 덕분에 3일 만에 MVP를 배포했습니다. 외주 견적의 1/100 비용으로!',
    author: '김철수',
    role: 'Startup Founder',
    avatar: 'https://i.pravatar.cc/150?img=12',
    rating: 5,
  },
  {
    quote: '코딩을 전혀 모르지만 실제로 작동하는 앱을 만들 수 있었어요. 놀라워요!',
    author: '박영희',
    role: 'Product Manager',
    avatar: 'https://i.pravatar.cc/150?img=5',
    rating: 5,
  },
  {
    quote: '설계부터 제대로 해주니 나중에 유지보수가 너무 편합니다.',
    author: '이민수',
    role: 'Solo Developer',
    avatar: 'https://i.pravatar.cc/150?img=33',
    rating: 5,
  },
  {
    quote: 'AI가 개발하는 속도가 정말 빨라서 1주일이면 충분했습니다.',
    author: '정수진',
    role: 'E-commerce Owner',
    avatar: 'https://i.pravatar.cc/150?img=9',
    rating: 5,
  },
  {
    quote: '기술 스펙을 자동으로 만들어주니 개발자와 소통이 훨씬 쉬워졌어요.',
    author: '최동욱',
    role: 'Project Manager',
    avatar: 'https://i.pravatar.cc/150?img=52',
    rating: 5,
  },
  {
    quote: '프리뷰 기능 덕분에 고객에게 빠르게 시연할 수 있었습니다.',
    author: '한지원',
    role: 'Marketing Lead',
    avatar: 'https://i.pravatar.cc/150?img=16',
    rating: 5,
  },
];

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
      <div className="bg-surface border border-border rounded-2xl p-8 hover:border-brand-primary/50 transition-all h-full flex flex-col">
        {/* Rating Stars */}
        <div className="flex gap-1 mb-4">
          {[...Array(rating)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        {/* Quote */}
        <blockquote className="text-lg italic text-foreground mb-6 flex-grow">
          "{quote}"
        </blockquote>

        {/* Author */}
        <div className="flex items-center gap-4">
          <img
            src={avatar}
            alt={author}
            className="w-12 h-12 rounded-full border-2 border-border"
          />
          <div>
            <p className="font-semibold text-foreground">{author}</p>
            <p className="text-sm text-muted">{role}</p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="py-32 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-6">
            사용자들의 이야기
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <p className="text-xl text-muted text-center mb-16">
            실제 사용자들의 경험을 들어보세요
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Portfolio3() {
  const shortTestimonials = [
    { text: '3일만에 MVP 완성!', author: '창업자 김OO', emoji: '🚀' },
    { text: '개발자 없이 서비스 런칭', author: '기획자 박OO', emoji: '🎉' },
    { text: 'AI 활용법 배우는 최고의 도구', author: '개발자 이OO', emoji: '🤖' },
    { text: '예약 시스템 무료로 만들었어요', author: '요가원 최OO', emoji: '🧘' },
    { text: '외주 비용 3000만원 절약', author: '스타트업 정OO', emoji: '💰' },
    { text: '코딩 몰라도 진짜 앱 만들어짐', author: '기획자 강OO', emoji: '✨' },
    { text: '야근 없이 칼퇴!', author: '개발자 조OO', emoji: '🏃' },
    { text: '투자 프레젠테이션용으로 최고', author: 'PM 윤OO', emoji: '📊' },
    { text: '매출 2배 증가했습니다', author: '소상공인 한OO', emoji: '📈' },
    { text: '개발 생산성 5배 향상', author: '풀스택 서OO', emoji: '⚡' },
    { text: '비개발자도 쉽게 쓸 수 있어요', author: '마케터 오OO', emoji: '👍' },
    { text: '시간 절약 끝판왕', author: '프리랜서 황OO', emoji: '⏰' },
    { text: '진작 알았으면 좋았을 텐데', author: '창업자 임OO', emoji: '😭' },
    { text: 'AI 시대 필수 도구', author: '기획자 노OO', emoji: '🌟' },
    { text: '자동화 구축 완료!', author: '개발자 구OO', emoji: '⚙️' },
    { text: '완전 무료라서 더 좋아요', author: '학생 송OO', emoji: '🆓' }
  ]

  return (
    <section className="py-32 px-5 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Headline */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            매일 증가하는<br />
            <span className="gradient-orange-pink text-gradient">실사용자 후기</span>
          </h2>
          <p className="text-xl text-muted">
            다양한 분야에서 ANYON을 활용하고 있습니다
          </p>
        </div>

        {/* Grid of Short Testimonials */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {shortTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="scroll-reveal bg-surface border border-border rounded-xl p-6 hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="text-4xl mb-3">{testimonial.emoji}</div>
              <p className="font-medium mb-2 text-foreground">"{testimonial.text}"</p>
              <p className="text-sm text-subtle">- {testimonial.author}</p>
            </div>
          ))}
        </div>


        {/* Social Proof - Heuristic Effect */}
        <div className="text-center mt-12 scroll-reveal">
          <p className="text-lg text-muted">
            ✨ 이 많은 사람들이 <strong className="text-foreground">이미 성공</strong>했습니다.<br />
            다음은 <strong className="gradient-orange-pink text-gradient">당신 차례</strong>입니다.
          </p>
        </div>
      </div>
    </section>
  )
}

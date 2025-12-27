export default function Portfolio2() {
  const testimonials = [
    {
      name: '김준혁',
      role: '스타트업 창업자',
      company: 'AI 에듀테크 스타트업',
      avatar: '👨‍💼',
      rating: 5,
      title: '외주 3,000만원 아끼고 직접 배포했습니다',
      content: `
        교육 플랫폼 MVP를 만들려고 외주 업체 3곳에 견적을 받았는데, 평균 3,000만원에 3개월이 걸린다고 하더라고요.
        예산도 부족하고 시간도 없어서 고민하던 중 ANYON을 알게 되었습니다.

        처음엔 반신반의했는데, 실제로 써보니 충격적이었어요. AI와 대화하듯이 기능을 설명하면
        실제로 동작하는 코드가 나오더라구요. 3일 만에 핵심 기능이 다 구현되고,
        일주일 만에 베타 서비스를 오픈했습니다.

        지금은 실제 유저 200명이 사용 중이고, 피드백 받아서 바로바로 수정하고 있어요.
        외주 맡겼으면 아직도 기획서 수정하고 있었을 겁니다. 정말 감사합니다!
      `,
      impact: '비용 3,000만원 절감 · 시간 2.5개월 단축'
    },
    {
      name: '박지은',
      role: '서비스 기획자',
      company: '핀테크 스타트업 PM',
      avatar: '👩‍💻',
      rating: 5,
      title: '코드 몰라도 프로토타입 만들어서 투자 받았어요',
      content: `
        기획자로 일하면서 항상 아쉬웠던 게, 아이디어를 직접 구현해볼 수 없다는 거였어요.
        개발팀에 요청하면 우선순위 밀리고, 외주는 비싸고... 그냥 피그마로 그림만 그리다가 포기하곤 했죠.

        ANYON은 게임 체인저였습니다. 제가 상상한 기능을 바로 만들어볼 수 있으니까
        기획 퀄리티가 완전히 달라졌어요. 실제로 동작하는 프로토타입을 만들어서
        투자자 미팅에 가니까 반응이 확실히 다르더라고요.

        덕분에 시드 투자 2억 유치에 성공했고, 지금은 본격적으로 서비스 개발 중입니다.
        기획자라면 무조건 써보세요. 진짜 역량이 10배 올라갑니다.
      `,
      impact: '시드 투자 2억 유치 · 기획 역량 10배 향상'
    },
    {
      name: '이태양',
      role: '풀스택 개발자',
      company: 'B2B SaaS 스타트업',
      avatar: '👨‍💻',
      rating: 5,
      title: '반복 작업 자동화하고 핵심 업무에 집중합니다',
      content: `
        개발자인데도 ANYON을 쓰는 이유가 있어요.
        CRUD 같은 반복적인 작업은 AI한테 맡기고, 저는 핵심 로직이나 아키텍처 설계에만 집중할 수 있거든요.

        특히 어드민 페이지, 대시보드, RESTful API 같은 건 ANYON이 제 손보다 빠르고 깔끔하게 만들어줘요.
        제가 직접 짜면 2-3일 걸릴 걸 1시간 만에 끝내니까 생산성이 엄청 올랐습니다.

        코드 퀄리티도 좋아요. TypeScript, 테스트 코드까지 자동으로 생성해주고,
        제가 원하는 아키텍처 패턴도 잘 따라와요.

        이제 야근 안 하고 칼퇴합니다. 개발자 삶의 질이 정말 좋아졌어요 ㅎㅎ
      `,
      impact: '개발 생산성 5배 향상 · 야근 → 칼퇴'
    },
    {
      name: '최민수',
      role: '소상공인',
      company: '요가원 운영',
      avatar: '🧘',
      rating: 5,
      title: '예약 시스템 직접 만들어서 매출 2배 증가',
      content: `
        요가원을 운영하는데 예약 관리가 너무 복잡했어요.
        카톡으로 예약 받다가 놓치기도 하고, 엑셀로 관리하니까 실수도 많고...

        예약 시스템 외주 견적 받아보니 500만원이라길래 포기했는데,
        ANYON으로 직접 만들었습니다. 완전 무료로!

        이제 회원들이 스마호폰으로 직접 수업 예약하고, 결제까지 할 수 있어요.
        노쇼도 줄었고, 관리 시간도 절반으로 줄었습니다.

        덕분에 수업에만 집중할 수 있게 되어서 회원 만족도가 올라갔고,
        입소문 타서 회원이 2배로 늘었어요. 매출도 2배 증가했구요!

        비개발자도 이렇게 쉽게 만들 수 있다니, 정말 놀랍습니다.
      `,
      impact: '매출 2배 증가 · 관리 시간 50% 절감'
    }
  ]

  return (
    <section className="py-32 px-5 bg-surface">
      <div className="max-w-6xl mx-auto">
        {/* Headline */}
        <div className="text-center mb-16 scroll-reveal">
          <span className="inline-block px-4 py-2 rounded-full bg-success/10 border border-success/30 text-success text-sm font-medium mb-4">
            실제 사용자 후기
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            이미 <span className="gradient-orange-pink text-gradient">1,000+</span> 명이<br />
            ANYON으로 성공했습니다
          </h2>
          <p className="text-xl text-muted">
            창업자, 기획자, 개발자, 소상공인까지. 각자의 방식으로 ANYON을 활용하고 있습니다.
          </p>
        </div>

        {/* Detailed Testimonials */}
        <div className="space-y-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="scroll-reveal bg-background border border-border rounded-2xl p-8 md:p-10 hover:border-primary/50 transition-all duration-300"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="text-5xl">{testimonial.avatar}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl font-bold">{testimonial.name}</h3>
                    <span className="text-sm text-muted">·</span>
                    <span className="text-sm text-muted">{testimonial.role}</span>
                  </div>
                  <p className="text-sm text-subtle">{testimonial.company}</p>
                  <div className="flex gap-1 mt-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-warning">⭐</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Title */}
              <h4 className="text-2xl font-bold mb-4 text-primary">
                "{testimonial.title}"
              </h4>

              {/* Content */}
              <div className="prose prose-invert max-w-none mb-6">
                {testimonial.content.trim().split('\n\n').map((paragraph, i) => (
                  <p key={i} className="text-muted leading-relaxed mb-6 text-base">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>

              {/* Impact */}
              <div className="bg-success/10 border border-success/30 rounded-lg p-4">
                <p className="text-sm text-subtle mb-1">성과</p>
                <p className="text-lg font-bold text-success">{testimonial.impact}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 scroll-reveal">
          <p className="text-xl text-muted mb-6">
            다음 성공 사례의 주인공은 <strong className="text-foreground">당신</strong>입니다
          </p>
          <button className="px-8 py-4 bg-primary hover:bg-primary-hover text-white font-bold rounded-full text-lg transition-all duration-200 hover:scale-105 shadow-lg">
            무료로 시작하기 →
          </button>
        </div>
      </div>
    </section>
  )
}

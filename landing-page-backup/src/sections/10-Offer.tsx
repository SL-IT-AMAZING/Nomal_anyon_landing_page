export default function Offer() {
  const targetAudiences = [
    {
      icon: '💡',
      title: '아이디어는 있는데 개발자가 없는 창업자',
      description: 'MVP로 시장 검증이 필요하지만 외주 비용이 부담되나요? ANYON으로 직접 만드세요.',
      benefit: '3,000만원+ 절약하고 3일 만에 배포'
    },
    {
      icon: '📋',
      title: '빠른 MVP로 시장 검증이 필요한 기획자',
      description: '프로토타입을 넘어 실제 동작하는 서비스로 투자자를 설득하세요.',
      benefit: '기획 역량 10배 향상, 투자 유치 확률 UP'
    },
    {
      icon: '👨‍💻',
      title: '반복 작업을 자동화하고 싶은 개발자',
      description: 'CRUD, 어드민, API는 AI에게 맡기고 핵심 로직에만 집중하세요.',
      benefit: '생산성 5배 향상, 야근 → 칼퇴'
    },
    {
      icon: '🏢',
      title: 'AI 시대에 뒤처지기 싫은 비즈니스 오너',
      description: '디지털 전환이 늦어질수록 경쟁에서 밀립니다. 지금 시작하세요.',
      benefit: '매출 증대, 업무 자동화, 경쟁력 확보'
    },
    {
      icon: '🎓',
      title: '코딩 배우지 않고 서비스 만들고 싶은 일반인',
      description: '프로그래밍 없이 아이디어를 현실로. 누구나 크리에이터가 될 수 있습니다.',
      benefit: 'AI 역량 극대화, 부업/창업 기회 확보'
    }
  ]

  return (
    <section className="py-32 px-5 bg-surface">
      <div className="max-w-6xl mx-auto">
        {/* Headline - OFFER (Target Naming) */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-orange-pink text-gradient">이런 분들께</span> 딱입니다
          </h2>
          <p className="text-xl text-muted">
            "어, 이거 나한테 필요한 건데?" 👈 바로 당신입니다!
          </p>
        </div>

        {/* Target Audience Cards */}
        <div className="space-y-6">
          {targetAudiences.map((audience, index) => (
            <div
              key={index}
              className="scroll-reveal bg-background border-2 border-border rounded-2xl p-8 hover:border-primary transition-all duration-300 cursor-pointer"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Icon */}
                <div className="shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center text-3xl">
                    {audience.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 flex items-start gap-2">
                    <span className="text-success shrink-0">✅</span>
                    <span>{audience.title}</span>
                  </h3>
                  <p className="text-muted mb-4 leading-relaxed">{audience.description}</p>
                  <div className="bg-success/10 border border-success/30 rounded-lg p-4">
                    <p className="text-sm text-subtle mb-1">ANYON으로 얻는 것</p>
                    <p className="font-bold text-success">{audience.benefit}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Tease */}
        <div className="text-center mt-16 scroll-reveal bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30 rounded-2xl p-12">
          <p className="text-2xl font-bold mb-4">
            당신의 상황이 위 목록에 있나요?
          </p>
          <p className="text-lg text-muted mb-6">
            그렇다면 <strong className="text-foreground">ANYON이 당신을 위한 도구</strong>입니다.
          </p>
          <button className="px-8 py-4 bg-primary hover:bg-primary-hover text-white font-bold rounded-full text-lg transition-all duration-200 hover:scale-105 shadow-lg">
            지금 바로 시작하기 →
          </button>
        </div>
      </div>
    </section>
  )
}

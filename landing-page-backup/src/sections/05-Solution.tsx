export default function Solution() {
  const steps = [
    {
      number: '01',
      title: '자연어로 아이디어 설명',
      description: '복잡한 기술 용어 필요 없이, 평소 말하듯이 만들고 싶은 서비스를 설명하세요.',
      icon: '💬',
      example: '"온라인 예약 시스템을 만들고 싶어. 고객이 날짜 선택하고 결제할 수 있어야 해"'
    },
    {
      number: '02',
      title: 'AI가 기획→설계→개발 자동 진행',
      description: 'ANYON의 SDD(스펙주도개발) 엔진이 요구사항을 분석하고, 아키텍처를 설계하고, 실제 코드를 생성합니다.',
      icon: '🤖',
      example: 'PRD 작성 → Architecture 설계 → Epic & Story 분해 → 자동 개발'
    },
    {
      number: '03',
      title: '실제 배포 가능한 앱 완성',
      description: '프로토타입이 아닌 프로덕션급 앱. 즉시 배포하고 실제 사용자에게 서비스할 수 있습니다.',
      icon: '🚀',
      example: 'macOS/Windows/Web/Mobile 앱 즉시 빌드 & 배포'
    }
  ]

  return (
    <section className="py-32 px-5 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Headline - SOLUTION */}
        <div className="text-center mb-16 scroll-reveal">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4">
            ANYON의 해결책
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-orange-pink text-gradient">스펙주도개발(SDD)</span><br />
            자동화로 모든 장벽 제거
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            기획부터 개발까지 전 과정을 AI가 자동화.<br />
            당신은 <strong className="text-foreground">아이디어만 설명</strong>하면 됩니다.
          </p>
        </div>

        {/* 3-Step Flow */}
        <div className="space-y-8 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="scroll-reveal flex flex-col md:flex-row gap-8 items-center bg-surface border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Number Badge */}
              <div className="shrink-0">
                <div className="w-20 h-20 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">{step.number}</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-4xl">{step.icon}</span>
                  <h3 className="text-2xl font-bold">{step.title}</h3>
                </div>
                <p className="text-muted mb-4 leading-relaxed">{step.description}</p>
                <div className="bg-background border border-border rounded-lg p-4">
                  <p className="text-sm text-subtle mb-1">예시</p>
                  <p className="text-foreground font-mono text-sm">{step.example}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* AI Conversation Screenshot Placeholder */}
        <div className="scroll-reveal mb-12">
          <div className="aspect-video bg-surface rounded-xl border border-border shadow-xl overflow-hidden relative">
            {/* Glow */}
            <div className="absolute -inset-1 bg-gradient-purple-pink opacity-20 blur-2xl -z-10"></div>

            <div className="w-full h-full flex items-center justify-center text-muted">
              <div className="text-center">
                <div className="text-6xl mb-4">💬</div>
                <p className="text-lg">AI 대화 인터페이스 스크린샷</p>
                <p className="text-sm text-subtle mt-2">(실제 제품 스크린샷으로 교체 예정)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Impact Statement */}
        <div className="scroll-reveal text-center bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30 rounded-xl p-12">
          <p className="text-2xl md:text-3xl font-bold mb-4">
            개발자 없이도<br />
            <span className="gradient-orange-pink text-gradient">실제 서비스를 배포</span>할 수 있습니다
          </p>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            코딩, Git, 터미널, 배포 환경... 모든 기술적 장벽을 ANYON이 해결합니다.
          </p>
        </div>
      </div>
    </section>
  )
}

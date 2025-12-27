export default function Problem() {
  const problems = [
    {
      icon: '💡',
      title: '아이디어만 있고 검증 못하는 창업자',
      description: '훌륭한 아이디어가 있어도 기술팀이 없어서 시작조차 못하는 창업자들. 외주 견적 받다가 포기하는 사람들이 얼마나 많은지 아시나요?'
    },
    {
      icon: '🏢',
      title: '개발팀 없어서 기회 놓치는 기업',
      description: '디지털 전환이 필수인 시대. 하지만 개발자 채용은 어렵고, 외주는 비싸고, 내부 역량은 부족합니다. 그사이 경쟁사는 앞서갑니다.'
    },
    {
      icon: '🤖',
      title: 'AI 시대에 뒤처지는 비즈니스',
      description: 'ChatGPT, Claude, Copilot... AI 도구는 많지만 실제로 업무에 적용하지 못하는 기업들. AI 역량이 곧 경쟁력인 시대, 지금 시작하지 않으면 영원히 따라잡을 수 없습니다.'
    }
  ]

  return (
    <section className="py-32 px-5 bg-surface relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Headline - DEEPER PROBLEM */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            진짜 문제는<br />
            <span className="gradient-orange-pink text-gradient">'개발 비용'이 아닙니다</span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            더 큰 문제는 <strong className="text-foreground">기회를 놓치는 것</strong>입니다.<br />
            지금 이 순간에도 경쟁자는 AI로 10배 빠르게 움직입니다.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="scroll-reveal bg-background border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-5xl mb-4">{problem.icon}</div>
              <h3 className="text-xl font-bold mb-3">{problem.title}</h3>
              <p className="text-muted leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>

        {/* Amplification - Loss Aversion */}
        <div className="scroll-reveal bg-gradient-to-r from-error/10 to-warning/10 border border-error/30 rounded-xl p-12 text-center">
          <p className="text-2xl md:text-3xl font-bold mb-4">
            ⚠️ 지금 이 순간에도<br />
            경쟁자는 AI로 <span className="text-error">10배 빠르게</span> 움직입니다
          </p>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            1년 후, 당신의 아이디어는 이미 누군가 만들어서 시장을 선점했을 수 있습니다.
            <br className="hidden md:block" />
            <strong className="text-foreground">기회는 지금 이 순간에만 있습니다.</strong>
          </p>
        </div>

        {/* Transition to Solution */}
        <div className="text-center mt-16 scroll-reveal">
          <p className="text-xl text-muted">
            이 모든 문제의 근본 원인은 하나,<br />
            <strong className="text-2xl font-bold gradient-orange-pink text-gradient">
              '개발'이라는 장벽
            </strong>
          </p>
          <div className="mt-8 text-6xl">↓</div>
        </div>
      </div>
    </section>
  )
}

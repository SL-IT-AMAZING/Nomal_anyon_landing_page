export default function Threat() {
  const threats = [
    {
      icon: '💸',
      before: '개발자 고용 비용',
      beforeDetail: '연간 1억원+',
      after: 'ANYON 사용',
      afterDetail: '완전 무료',
      impact: '1억원 절약'
    },
    {
      icon: '⏳',
      before: '개발 기간',
      beforeDetail: '3-6개월 대기',
      after: 'ANYON 사용',
      afterDetail: '3일 배포',
      impact: '60배 빠름'
    },
    {
      icon: '🔧',
      before: '기술 장벽',
      beforeDetail: 'npm, Git, 터미널',
      after: 'ANYON 사용',
      afterDetail: '대화만으로',
      impact: '진입장벽 0'
    },
    {
      icon: '🐛',
      before: '끝없는 디버깅',
      beforeDetail: 'Stack Overflow 순례',
      after: 'ANYON 사용',
      afterDetail: 'AI가 해결',
      impact: '스트레스 0'
    }
  ]

  return (
    <section className="py-32 px-5 bg-surface">
      <div className="max-w-6xl mx-auto">
        {/* Headline - THREAT */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            아직도 개발자 연봉 1억에<br />
            3개월 기다리시나요?
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            당신이 준비하는 동안, 경쟁자는 이미 AI로 서비스를 런칭했습니다.
          </p>
        </div>

        {/* Threat Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {threats.map((threat, index) => (
            <div
              key={index}
              className="scroll-reveal bg-background border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-5xl mb-4">{threat.icon}</div>

              {/* Before / After Comparison */}
              <div className="space-y-6">
                {/* Before */}
                <div>
                  <h3 className="text-lg font-semibold text-error mb-2">
                    ❌ {threat.before}
                  </h3>
                  <p className="text-2xl font-bold text-muted line-through">
                    {threat.beforeDetail}
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex items-center text-muted">
                  <div className="flex-1 h-px bg-border"></div>
                  <span className="px-3 text-sm">→</span>
                  <div className="flex-1 h-px bg-border"></div>
                </div>

                {/* After */}
                <div>
                  <h3 className="text-lg font-semibold text-success mb-2">
                    ✅ {threat.after}
                  </h3>
                  <p className="text-2xl font-bold text-primary">
                    {threat.afterDetail}
                  </p>
                </div>

                {/* Impact */}
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-subtle">절감 효과</p>
                  <p className="text-xl font-bold gradient-orange-pink text-gradient">
                    {threat.impact}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Tease */}
        <div className="text-center mt-16 scroll-reveal">
          <p className="text-lg text-muted">
            이 모든 문제를 <strong className="text-foreground">ANYON 하나로</strong> 해결하세요
          </p>
        </div>
      </div>
    </section>
  )
}

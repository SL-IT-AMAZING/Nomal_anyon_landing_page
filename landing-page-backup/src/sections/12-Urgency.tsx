export default function Urgency() {
  return (
    <section className="py-32 px-5 bg-surface relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-warning/20 rounded-full blur-3xl opacity-30"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Headline - BENEFIT */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ⚡ 얼리 어답터<br />
            <span className="gradient-orange-pink text-gradient">특별 혜택</span>
          </h2>
          <p className="text-xl text-muted">
            지금 시작하시면 추가 혜택을 받으실 수 있습니다.
          </p>
        </div>

        {/* Scarcity Triggers */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Time-Limited Benefit */}
          <div className="scroll-reveal bg-background border-2 border-warning/50 rounded-2xl p-8 text-center">
            <div className="text-6xl mb-4">🎁</div>
            <h3 className="text-2xl font-bold mb-4">
              얼리 어답터 전용<br />
              무료 튜토리얼 제공
            </h3>
            <p className="text-muted mb-6">
              ANYON 활용법부터 실전 배포까지<br />
              A-Z 가이드 (100만원 상당)
            </p>
            <div className="bg-warning/10 border border-warning/30 rounded-lg p-4">
              <p className="text-sm text-subtle mb-1">한정 인원</p>
              <p className="text-3xl font-bold text-warning">선착순 1,000명</p>
              <p className="text-sm text-muted mt-2">현재 <strong className="text-foreground">327명</strong> 신청 완료</p>
            </div>
          </div>

          {/* Price-Limited */}
          <div className="scroll-reveal bg-background border-2 border-primary/50 rounded-2xl p-8 text-center">
            <div className="text-6xl mb-4">💎</div>
            <h3 className="text-2xl font-bold mb-4">
              영원히 무료 사용권<br />
              지금 확보하세요
            </h3>
            <p className="text-muted mb-6">
              현재 완전 무료이지만,<br />
              향후 프리미엄 기능 유료 전환 예정
            </p>
            <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
              <p className="text-sm text-subtle mb-1">얼리 어답터 혜택</p>
              <p className="text-3xl font-bold gradient-orange-pink text-gradient">평생 무료</p>
              <p className="text-sm text-muted mt-2">지금 다운로드 시 영구 적용</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 scroll-reveal">
          <p className="text-xl text-muted mb-6">
            ANYON과 함께 AI 시대를 선도하세요
          </p>
          <button className="px-8 py-4 bg-primary hover:bg-primary-hover text-white font-bold rounded-full text-lg transition-all duration-200 hover:scale-105 shadow-lg">
            지금 무료로 시작하기 →
          </button>
        </div>
      </div>
    </section>
  )
}

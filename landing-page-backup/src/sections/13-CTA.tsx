export default function FinalCTA() {
  return (
    <section className="py-32 px-5 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl opacity-20"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Final Headline - EMOTIONAL CTA */}
        <div className="scroll-reveal">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            당신의 아이디어,<br />
            <span className="gradient-orange-pink text-gradient">
              오늘 당장 현실로 만드세요
            </span>
          </h2>
        </div>

        {/* Emotional Copy */}
        <div className="scroll-reveal mb-12 space-y-4 text-xl md:text-2xl text-muted max-w-3xl mx-auto">
          <p>
            더 이상 <strong className="text-foreground">개발자를 기다리지 마세요</strong>
          </p>
          <p>
            더 이상 <strong className="text-foreground">비싼 외주비에 좌절하지 마세요</strong>
          </p>
          <p>
            더 이상 <strong className="text-foreground">기술 부족을 핑계대지 마세요</strong>
          </p>
          <p className="text-2xl md:text-3xl font-bold text-foreground mt-8">
            AI가 당신의 개발팀이 되어드립니다
          </p>
        </div>

        {/* Download CTA Buttons */}
        <div className="scroll-reveal mb-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <button className="px-10 py-5 bg-primary hover:bg-primary-hover text-white font-bold rounded-full text-xl transition-all duration-300 hover:scale-105 shadow-xl min-w-[240px]">
              macOS 다운로드
            </button>

            <button className="px-10 py-5 bg-primary hover:bg-primary-hover text-white font-bold rounded-full text-xl transition-all duration-300 hover:scale-105 shadow-xl min-w-[240px]">
              Windows 다운로드
            </button>
          </div>

          <button className="px-8 py-3 bg-surface hover:bg-surface-hover text-foreground font-medium rounded-full text-lg border border-border transition-all duration-300 hover:scale-105">
            모바일 버전 알림 받기
          </button>
        </div>

        {/* Trust Signals */}
        <div className="scroll-reveal space-y-4 text-sm text-muted">
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <span className="flex items-center gap-2">
              ✅ 완전 무료
            </span>
            <span className="flex items-center gap-2">
              ✅ 설치 30초
            </span>
            <span className="flex items-center gap-2">
              ✅ 신용카드 불필요
            </span>
            <span className="flex items-center gap-2">
              ✅ 데이터 안전
            </span>
          </div>
          <p className="text-xs text-subtle">
            MIT 오픈소스 라이선스 · macOS 10.15+, Windows 10+ 지원
          </p>
        </div>

        {/* Final Emotional Push */}
        <div className="scroll-reveal mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30 rounded-2xl p-12">
          <p className="text-3xl md:text-4xl font-bold mb-4">
            미래는 <span className="gradient-orange-pink text-gradient">지금 시작</span>하는 사람의 것입니다
          </p>
          <p className="text-lg text-muted">
            1년 후, 오늘을 후회하지 않으려면<br />
            <strong className="text-foreground">지금 바로 다운로드하세요</strong>
          </p>
        </div>

        {/* Social Proof Reminder */}
        <div className="scroll-reveal mt-12">
          <p className="text-muted">
            ✨ 이미 <strong className="text-foreground">1,000+</strong> 명이 ANYON으로 성공했습니다
          </p>
        </div>
      </div>
    </section>
  )
}

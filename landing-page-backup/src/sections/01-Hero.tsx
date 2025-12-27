export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background px-5 py-20">
      {/* Gradient Blobs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple/20 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-pink/20 rounded-full blur-3xl opacity-25 animate-pulse delay-1000"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Eyebrow */}
        <div className="mb-6 animate-fade-in">
          <span className="inline-block px-4 py-2 rounded-full bg-surface border border-border text-sm font-medium text-muted">
            완전 무료 오픈소스 AI 개발 플랫폼
          </span>
        </div>

        {/* Main Headline - HOOKING */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
          <span className="block mb-2">AI로 실제 서비스 만들고</span>
          <span className="block gradient-orange-pink text-gradient">
            매출 발생시키기
          </span>
        </h1>

        {/* Subheading - Value Props */}
        <p className="text-lg md:text-2xl text-muted max-w-4xl mx-auto mb-12 animate-slide-up delay-200">
          코딩 없이 대화만으로 <strong className="text-foreground">진짜 앱 배포</strong> ·
          <strong className="text-foreground"> 자동화 구축</strong>으로 시간 확보 ·
          <strong className="text-foreground"> AI 역량 극대화</strong>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-slide-up delay-300">
          <button className="px-8 py-4 bg-primary hover:bg-primary-hover text-white font-bold rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg min-w-[200px]">
            무료 다운로드
          </button>
          <button className="px-8 py-4 bg-surface hover:bg-surface-hover text-foreground font-medium rounded-full text-lg border border-border transition-all duration-300 hover:scale-105 min-w-[200px]">
            데모 영상 보기
          </button>
        </div>

        {/* Screenshot Placeholder */}
        <div className="relative animate-slide-up delay-500">
          <div className="aspect-video bg-surface rounded-xl border border-border shadow-2xl overflow-hidden">
            <div className="w-full h-full flex items-center justify-center text-muted">
              <div className="text-center">
                <div className="text-6xl mb-4">🖥️</div>
                <p className="text-lg">메인 대시보드 스크린샷</p>
                <p className="text-sm text-subtle mt-2">(실제 제품 스크린샷으로 교체 예정)</p>
              </div>
            </div>
          </div>
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-orange-pink opacity-10 blur-2xl -z-10"></div>
        </div>

        {/* Social Proof Tease */}
        <div className="mt-12 text-subtle text-sm animate-fade-in delay-700">
          <p>✨ 이미 <strong className="text-foreground">1,000+</strong> 명의 개발자, 창업자, 기획자가 사용 중</p>
        </div>
      </div>
    </section>
  )
}

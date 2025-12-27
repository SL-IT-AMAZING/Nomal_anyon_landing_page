export default function Value() {
  const techStack = [
    { name: 'Tauri 2.x', description: 'Rust 기반 네이티브 성능', icon: '⚡' },
    { name: 'Claude Sonnet 4.5', description: '최신 AI 모델', icon: '🤖' },
    { name: 'React + TypeScript', description: '모던 프레임워크', icon: '⚛️' },
    { name: 'SDD Process', description: '체계적 개발 프로세스', icon: '📋' }
  ]

  const credentials = [
    { metric: '1,000+', label: '활성 사용자', icon: '👥' },
    { metric: '10,000+', label: '생성된 앱', icon: '🚀' },
    { metric: 'MIT', label: '오픈소스 라이선스', icon: '📜' },
    { metric: '4.8/5.0', label: '사용자 평점', icon: '⭐' }
  ]

  return (
    <section className="py-32 px-5 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Headline */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-orange-pink text-gradient">검증된 기술력</span>과<br />
            신뢰할 수 있는 플랫폼
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            ANYON은 최신 AI 기술과 체계적인 SDD 프로세스를 기반으로<br />
            안정적이고 확장 가능한 앱을 생성합니다.
          </p>
        </div>

        {/* Technology Stack */}
        <div className="mb-16 scroll-reveal">
          <h3 className="text-2xl font-bold mb-8 text-center">핵심 기술 스택</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="bg-surface border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-300"
              >
                <div className="text-5xl mb-3">{tech.icon}</div>
                <h4 className="text-lg font-bold mb-2">{tech.name}</h4>
                <p className="text-sm text-muted">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SDD Process Explanation */}
        <div className="mb-16 scroll-reveal bg-surface border border-border rounded-2xl p-8 md:p-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-5xl">📋</span>
            <div>
              <h3 className="text-2xl font-bold">SDD (Spec-Driven Development)</h3>
              <p className="text-muted">체계적이고 검증된 개발 프로세스</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-primary font-bold mb-2">1. 요구사항 분석</div>
              <p className="text-muted text-sm">PRD (Product Requirements Document) 자동 생성</p>
            </div>
            <div>
              <div className="text-primary font-bold mb-2">2. 아키텍처 설계</div>
              <p className="text-muted text-sm">확장 가능한 시스템 구조 설계</p>
            </div>
            <div>
              <div className="text-primary font-bold mb-2">3. Epic & Story 분해</div>
              <p className="text-muted text-sm">개발 가능한 단위로 작업 분리</p>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-sm text-subtle">
              💡 <strong className="text-foreground">sdd-docs/</strong> 폴더에 모든 프로세스가 문서화되어
              누구나 검증하고 개선할 수 있습니다.
            </p>
          </div>
        </div>

        {/* Credentials / Proof */}
        <div className="scroll-reveal">
          <h3 className="text-2xl font-bold mb-8 text-center">신뢰할 수 있는 지표</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {credentials.map((cred, index) => (
              <div
                key={index}
                className="bg-surface border border-border rounded-xl p-6 text-center"
              >
                <div className="text-4xl mb-3">{cred.icon}</div>
                <div className="text-3xl font-bold gradient-orange-pink text-gradient mb-2">
                  {cred.metric}
                </div>
                <div className="text-sm text-muted">{cred.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* GitHub / Open Source */}
        <div className="mt-16 scroll-reveal bg-gradient-to-r from-purple/10 to-pink/10 border border-purple/30 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold mb-4">
            🌟 100% 오픈소스 프로젝트
          </h3>
          <p className="text-muted mb-6 max-w-2xl mx-auto">
            모든 소스 코드가 GitHub에 공개되어 있습니다.<br />
            누구나 검증하고, 기여하고, 개선할 수 있습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform">
              ⭐ GitHub 스타 주기
            </button>
            <button className="px-6 py-3 bg-surface border border-border text-foreground font-medium rounded-full hover:scale-105 transition-transform">
              📚 문서 보기
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

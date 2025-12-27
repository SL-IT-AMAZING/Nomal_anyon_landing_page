export default function Features() {
  const features = [
    { label: '지원 OS', value: 'macOS, Windows (Linux 예정)' },
    { label: '라이선스', value: 'MIT 오픈소스' },
    { label: '시스템 요구사항', value: '8GB RAM, 10GB 디스크' },
    { label: '지원 언어', value: '한국어, 영어' },
    { label: '생성 가능 앱', value: 'Web, Desktop, Mobile (React Native)' },
    { label: '통합', value: 'GitHub, VS Code, Claude API' },
    { label: '배포', value: 'Vercel, Netlify, AWS 등' },
    { label: '버전 관리', value: 'Git 자동 커밋' }
  ]

  const faqs = [
    {
      question: '정말 코딩 몰라도 되나요?',
      answer: '네! 자연어로 대화하듯이 설명하면 AI가 알아서 코드를 생성합니다. npm, Git, 터미널 등 기술 지식이 전혀 없어도 사용할 수 있습니다.'
    },
    {
      question: '어떤 앱까지 만들 수 있나요?',
      answer: '웹 서비스, 데스크톱 앱, 모바일 앱(React Native)까지 모두 가능합니다. 예약 시스템, 관리자 대시보드, SaaS 서비스, E-commerce 등 거의 모든 종류의 앱을 만들 수 있습니다.'
    },
    {
      question: '비용이 정말 무료인가요?',
      answer: '네, 완전히 무료입니다. MIT 오픈소스 라이선스로 상업적 이용도 가능하고, 숨겨진 비용이나 월 구독료가 전혀 없습니다. 영원히 무료로 사용하세요.'
    },
    {
      question: '생성된 코드의 소유권은 누구에게 있나요?',
      answer: '100% 당신의 것입니다. 생성된 모든 코드는 당신의 완전한 소유이며, 자유롭게 수정, 배포, 판매할 수 있습니다.'
    },
    {
      question: '기술 지원은 받을 수 있나요?',
      answer: 'GitHub Issues, Discord 커뮤니티를 통해 무료로 지원받을 수 있습니다. 오픈소스 커뮤니티가 함께 도와드립니다.'
    },
    {
      question: '기존 프로젝트에도 사용할 수 있나요?',
      answer: '물론입니다! 새 프로젝트뿐만 아니라 기존 코드베이스에 기능을 추가하거나 리팩토링할 때도 사용할 수 있습니다.'
    }
  ]

  return (
    <section className="py-32 px-5 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Headline */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-orange-pink text-gradient">모든 정보</span>를<br />
            투명하게 공개합니다
          </h2>
          <p className="text-xl text-muted">
            궁금한 점이 있다면 먼저 확인하세요. 귀찮은 문의가 줄어듭니다.
          </p>
        </div>

        {/* Feature List */}
        <div className="mb-16 scroll-reveal">
          <h3 className="text-2xl font-bold mb-8">📋 상세 스펙</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-surface border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300"
              >
                <span className="font-medium text-muted">{feature.label}</span>
                <span className="font-bold text-foreground text-right">{feature.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="scroll-reveal">
          <h3 className="text-2xl font-bold mb-8">❓ 자주 묻는 질문 (FAQ)</h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-surface border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300"
              >
                <summary className="cursor-pointer px-6 py-4 font-bold text-lg flex justify-between items-center">
                  <span>{faq.question}</span>
                  <span className="text-muted group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-6 pb-4 text-muted border-t border-border pt-4">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* System Requirements Note */}
        <div className="mt-12 scroll-reveal bg-gradient-to-r from-purple/10 to-pink/10 border border-purple/30 rounded-xl p-8 text-center">
          <p className="text-lg">
            💡 <strong className="text-foreground">더 궁금한 점이 있나요?</strong>
          </p>
          <p className="text-muted mt-2">
            GitHub Issues나 Discord에서 질문하시면<br />
            커뮤니티가 함께 답변드립니다.
          </p>
          <div className="flex gap-4 justify-center mt-6">
            <button className="px-6 py-3 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform">
              GitHub →
            </button>
            <button className="px-6 py-3 bg-surface border border-border text-foreground font-medium rounded-full hover:scale-105 transition-transform">
              Discord →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

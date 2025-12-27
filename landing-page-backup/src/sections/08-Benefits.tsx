export default function Benefits() {
  const benefits = [
    {
      icon: '🆓',
      title: '완전 무료',
      description: 'MIT 오픈소스 라이선스. 숨겨진 비용 없이 영원히 무료로 사용하세요.',
      details: [
        '라이선스 비용 0원',
        '월 구독료 0원',
        '사용량 제한 없음',
        '상업적 이용 가능'
      ]
    },
    {
      icon: '🔒',
      title: '로컬 실행',
      description: '모든 데이터가 내 컴퓨터에 저장됩니다. 인터넷 없이도 작동하고, 보안 걱정 제로.',
      details: [
        '데이터 외부 유출 없음',
        '오프라인 작업 가능',
        '완전한 프라이버시',
        '기업 보안 정책 준수'
      ]
    },
    {
      icon: '🚀',
      title: '실제 배포',
      description: '프로토타입이 아닌 프로덕션급 앱. 즉시 실제 사용자에게 서비스할 수 있습니다.',
      details: [
        'macOS/Windows 네이티브 앱',
        '웹 앱 배포 지원',
        'Mobile 앱 (React Native)',
        '프로덕션 레디 코드'
      ]
    },
    {
      icon: '⚙️',
      title: '자동화 지원',
      description: '반복 작업을 스크립트화하고 워크플로우를 자동화하여 시간을 확보하세요.',
      details: [
        'CI/CD 파이프라인 생성',
        '테스트 자동화',
        '배포 자동화',
        '워크플로우 커스터마이징'
      ]
    }
  ]

  return (
    <section className="py-32 px-5 bg-surface">
      <div className="max-w-6xl mx-auto">
        {/* Headline */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            왜 <span className="gradient-orange-pink text-gradient">ANYON</span>인가?
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            다른 AI 코딩 도구들과 ANYON의 결정적인 차이점
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="scroll-reveal bg-background border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon & Title */}
              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl">{benefit.icon}</div>
                <h3 className="text-2xl font-bold">{benefit.title}</h3>
              </div>

              {/* Description */}
              <p className="text-muted mb-6 leading-relaxed">
                {benefit.description}
              </p>

              {/* Details List */}
              <div className="space-y-2">
                {benefit.details.map((detail, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-success">✓</span>
                    <span className="text-sm text-foreground">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="scroll-reveal overflow-x-auto -mx-5 px-5">
          <table className="w-full min-w-[600px] border border-border rounded-xl overflow-hidden">
            <thead className="bg-surface">
              <tr>
                <th className="px-6 py-4 text-left">기능</th>
                <th className="px-6 py-4 text-center bg-primary/10">
                  <div className="font-bold text-primary">ANYON</div>
                </th>
                <th className="px-6 py-4 text-center text-muted">타 AI 도구</th>
              </tr>
            </thead>
            <tbody className="bg-background">
              <tr className="border-t border-border">
                <td className="px-6 py-4">비용</td>
                <td className="px-6 py-4 text-center">
                  <span className="text-success font-bold">무료</span>
                </td>
                <td className="px-6 py-4 text-center text-muted">$20-100/월</td>
              </tr>
              <tr className="border-t border-border">
                <td className="px-6 py-4">데이터 보안</td>
                <td className="px-6 py-4 text-center">
                  <span className="text-success font-bold">로컬 저장</span>
                </td>
                <td className="px-6 py-4 text-center text-muted">클라우드 업로드</td>
              </tr>
              <tr className="border-t border-border">
                <td className="px-6 py-4">배포 가능성</td>
                <td className="px-6 py-4 text-center">
                  <span className="text-success font-bold">즉시 배포</span>
                </td>
                <td className="px-6 py-4 text-center text-muted">프로토타입만</td>
              </tr>
              <tr className="border-t border-border">
                <td className="px-6 py-4">SDD 프로세스</td>
                <td className="px-6 py-4 text-center">
                  <span className="text-success font-bold">체계적</span>
                </td>
                <td className="px-6 py-4 text-center text-muted">단순 코드 생성</td>
              </tr>
              <tr className="border-t border-border">
                <td className="px-6 py-4">자동화</td>
                <td className="px-6 py-4 text-center">
                  <span className="text-success font-bold">Full Stack</span>
                </td>
                <td className="px-6 py-4 text-center text-muted">부분 지원</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Bottom Statement */}
        <div className="text-center mt-16 scroll-reveal">
          <p className="text-2xl font-bold mb-4">
            선택이 아닌 <span className="gradient-orange-pink text-gradient">필수</span>입니다
          </p>
          <p className="text-muted">
            AI 시대, 개발 민주화의 시작. ANYON과 함께하세요.
          </p>
        </div>
      </div>
    </section>
  )
}

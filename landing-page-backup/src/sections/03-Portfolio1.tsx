export default function Portfolio1() {
  return (
    <section className="py-32 px-5 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Headline */}
        <div className="text-center mb-16 scroll-reveal">
          <span className="inline-block px-4 py-2 rounded-full bg-success/10 border border-success/30 text-success text-sm font-medium mb-4">
            실제 성공 사례
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            창업자가 3일 만에<br />
            <span className="gradient-orange-pink text-gradient">SaaS 배포한 사례</span>
          </h2>
          <p className="text-xl text-muted">
            코딩 한 줄 모르던 비개발자가 ANYON으로 실제 서비스를 만들어 첫 매출을 발생시킨 이야기
          </p>
        </div>

        {/* Before / After Comparison */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* BEFORE */}
          <div className="scroll-reveal bg-surface border-2 border-error/30 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">😰</span>
              <div>
                <h3 className="text-2xl font-bold text-error">BEFORE</h3>
                <p className="text-muted">외주 개발 의뢰 전</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-error mt-1">❌</span>
                <div>
                  <p className="font-semibold">외주 견적</p>
                  <p className="text-2xl font-bold text-error">3,000만원</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-error mt-1">❌</span>
                <div>
                  <p className="font-semibold">개발 기간</p>
                  <p className="text-2xl font-bold text-error">3개월 예상</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-error mt-1">❌</span>
                <div>
                  <p className="font-semibold">커뮤니케이션</p>
                  <p className="text-muted">기획 변경 시마다 추가 비용</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-error mt-1">❌</span>
                <div>
                  <p className="font-semibold">유지보수</p>
                  <p className="text-muted">매달 200만원+ 추가 지출</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-error mt-1">❌</span>
                <div>
                  <p className="font-semibold">MVP 검증</p>
                  <p className="text-muted">론칭 전까지 피드백 불가</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-error/30">
              <p className="text-sm text-subtle">총 예상 비용 (6개월)</p>
              <p className="text-3xl font-bold text-error">4,200만원+</p>
            </div>
          </div>

          {/* AFTER */}
          <div className="scroll-reveal bg-surface border-2 border-success/30 rounded-xl p-8 relative overflow-hidden">
            {/* Glow Effect */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-success/20 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">🚀</span>
                <div>
                  <h3 className="text-2xl font-bold text-success">AFTER</h3>
                  <p className="text-muted">ANYON 사용 후</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-success mt-1">✅</span>
                  <div>
                    <p className="font-semibold">개발 비용</p>
                    <p className="text-2xl font-bold text-success">0원</p>
                    <p className="text-xs text-success/70">(오픈소스 무료)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-success mt-1">✅</span>
                  <div>
                    <p className="font-semibold">실제 개발 기간</p>
                    <p className="text-2xl font-bold text-success">72시간</p>
                    <p className="text-xs text-success/70">(3일 만에 MVP 배포)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-success mt-1">✅</span>
                  <div>
                    <p className="font-semibold">즉각적인 수정</p>
                    <p className="text-muted">AI와 대화로 실시간 반영</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-success mt-1">✅</span>
                  <div>
                    <p className="font-semibold">완전한 소유권</p>
                    <p className="text-muted">직접 수정/배포/유지보수 가능</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-success mt-1">✅</span>
                  <div>
                    <p className="font-semibold">빠른 시장 검증</p>
                    <p className="text-muted">즉시 베타 유저 확보</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-success/30">
                <p className="text-sm text-subtle">첫 매출 발생</p>
                <p className="text-3xl font-bold gradient-orange-pink text-gradient">배포 7일 후</p>
              </div>
            </div>
          </div>
        </div>

        {/* Screenshot Placeholder */}
        <div className="scroll-reveal">
          <div className="aspect-video bg-surface rounded-xl border border-border shadow-xl overflow-hidden">
            <div className="w-full h-full flex items-center justify-center text-muted">
              <div className="text-center">
                <div className="text-6xl mb-4">📊</div>
                <p className="text-lg">Before / After 비교 스크린샷</p>
                <p className="text-sm text-subtle mt-2">(실제 사례 스크린샷으로 교체 예정)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-3 gap-6 mt-12 scroll-reveal">
          <div className="text-center p-6 bg-surface rounded-xl border border-border">
            <p className="text-4xl font-bold gradient-orange-pink text-gradient mb-2">60배</p>
            <p className="text-muted">빠른 개발 속도</p>
          </div>
          <div className="text-center p-6 bg-surface rounded-xl border border-border">
            <p className="text-4xl font-bold gradient-orange-pink text-gradient mb-2">100%</p>
            <p className="text-muted">비용 절감</p>
          </div>
          <div className="text-center p-6 bg-surface rounded-xl border border-border">
            <p className="text-4xl font-bold gradient-orange-pink text-gradient mb-2">7일</p>
            <p className="text-muted">첫 매출까지</p>
          </div>
        </div>
      </div>
    </section>
  )
}

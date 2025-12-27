export function Footer() {
  return (
    <footer className="py-12 px-6 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <img src="/logos/logo-anyon.png" alt="ANYON" className="h-8 w-8 brightness-0 invert" />
              <span className="text-2xl font-bold text-white">ANYON</span>
            </div>
            <p className="text-sm text-muted leading-relaxed mb-4">
              비개발자를 위한 AI 기반 개발 플랫폼. 대화만으로 만드는 전문가급 제품.
            </p>
            <p className="text-xs text-muted/60">
              최신 AI 기술로 누구나 3일 만에 MVP를 출시할 수 있습니다.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-sm text-muted hover:text-brand-primary transition-colors">
                  기능
                </a>
              </li>
              <li>
                <a href="#comparison" className="text-sm text-muted hover:text-brand-primary transition-colors">
                  비교
                </a>
              </li>
              <li>
                <a href="#workflow" className="text-sm text-muted hover:text-brand-primary transition-colors">
                  작동 방식
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sm text-muted hover:text-brand-primary transition-colors">
                  가격
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#faq" className="text-sm text-muted hover:text-brand-primary transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted hover:text-brand-primary transition-colors">
                  문서
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted hover:text-brand-primary transition-colors">
                  블로그
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted hover:text-brand-primary transition-colors">
                  지원
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted">© 2025 ANYON. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

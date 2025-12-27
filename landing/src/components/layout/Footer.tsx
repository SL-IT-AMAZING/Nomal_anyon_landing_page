export function Footer() {
  return (
    <footer className="py-12 px-6 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold mb-3">
              <span className="brand-gradient">ANYON</span>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              비개발자를 위한 AI 기반 개발 플랫폼. 대화만으로 만드는 전문가급 제품.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-muted hover:text-brand-primary transition-colors">
                  기능
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-muted hover:text-brand-primary transition-colors">
                  사용자 후기
                </a>
              </li>
              <li>
                <a href="#workflow" className="text-muted hover:text-brand-primary transition-colors">
                  작동 방식
                </a>
              </li>
              <li>
                <a href="/pricing" className="text-muted hover:text-brand-primary transition-colors">
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
                <a href="/docs" className="text-muted hover:text-brand-primary transition-colors">
                  문서
                </a>
              </li>
              <li>
                <a href="/blog" className="text-muted hover:text-brand-primary transition-colors">
                  블로그
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/anyon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-brand-primary transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a href="/support" className="text-muted hover:text-brand-primary transition-colors">
                  고객 지원
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="/about" className="text-muted hover:text-brand-primary transition-colors">
                  회사 소개
                </a>
              </li>
              <li>
                <a href="/careers" className="text-muted hover:text-brand-primary transition-colors">
                  채용
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-muted hover:text-brand-primary transition-colors">
                  개인정보처리방침
                </a>
              </li>
              <li>
                <a href="/terms" className="text-muted hover:text-brand-primary transition-colors">
                  이용약관
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted">© 2025 ANYON. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/anyon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-brand-primary transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://twitter.com/anyon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-brand-primary transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Footer() {
  const links = {
    product: [
      { name: '다운로드', href: '#' },
      { name: '기능', href: '#features' },
      { name: '가격', href: '#pricing' },
      { name: '후기', href: '#testimonials' }
    ],
    resources: [
      { name: 'GitHub', href: 'https://github.com' },
      { name: '문서', href: '#docs' },
      { name: '튜토리얼', href: '#tutorial' },
      { name: 'API', href: '#api' }
    ],
    company: [
      { name: '소개', href: '#about' },
      { name: '블로그', href: '#blog' },
      { name: '문의하기', href: '#contact' },
      { name: '채용', href: '#careers' }
    ],
    legal: [
      { name: '이용약관', href: '#terms' },
      { name: '개인정보처리방침', href: '#privacy' },
      { name: '라이선스', href: '#license' }
    ]
  }

  const socials = [
    { name: 'GitHub', icon: '⭐', href: 'https://github.com' },
    { name: 'Discord', icon: '💬', href: '#' },
    { name: 'Twitter', icon: '🐦', href: '#' },
    { name: 'YouTube', icon: '📺', href: '#' }
  ]

  return (
    <footer className="bg-surface border-t border-border py-16 px-5">
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-xl">
                A
              </div>
              <span className="text-xl font-bold">ANYON</span>
            </div>
            <p className="text-sm text-muted mb-4">
              AI로 실제 서비스 만들고<br />
              매출 발생시키기
            </p>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center hover:border-primary transition-colors text-xl"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-bold mb-4">제품</h3>
            <ul className="space-y-2">
              {links.product.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-bold mb-4">리소스</h3>
            <ul className="space-y-2">
              {links.resources.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold mb-4">회사</h3>
            <ul className="space-y-2">
              {links.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-bold mb-4">법률</h3>
            <ul className="space-y-2">
              {links.legal.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted">
          <p>
            © 2025 ANYON. All rights reserved.
          </p>
          <p className="flex items-center gap-2">
            Made with <span className="text-error">❤️</span> and <span className="text-primary">AI</span>
          </p>
          <p>
            <a href="#" className="hover:text-primary transition-colors">한국어</a>
            {' · '}
            <a href="#" className="hover:text-primary transition-colors">English</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

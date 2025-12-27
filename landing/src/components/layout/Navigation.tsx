export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <span className="brand-gradient">ANYON</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-foreground/80 hover:text-foreground transition-colors">
              기능
            </a>
            <a href="#testimonials" className="text-foreground/80 hover:text-foreground transition-colors">
              사용자 후기
            </a>
            <a href="#workflow" className="text-foreground/80 hover:text-foreground transition-colors">
              작동 방식
            </a>
            <a
              href="https://github.com/anyon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              GitHub
            </a>
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <button className="px-6 py-2.5 bg-brand-primary hover:bg-brand-primary-hover text-white font-medium rounded-lg transition-colors">
              무료 시작
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

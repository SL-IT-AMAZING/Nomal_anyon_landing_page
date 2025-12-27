export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src="/logos/logo-anyon.png"
              alt="ANYON"
              className="h-8 w-8 brightness-0 invert"
            />
            <span className="text-3xl font-bold text-white">ANYON</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-foreground/80 hover:text-foreground transition-colors">
              기능
            </a>
            <a href="#comparison" className="text-foreground/80 hover:text-foreground transition-colors">
              비교
            </a>
            <a href="#workflow" className="text-foreground/80 hover:text-foreground transition-colors">
              작동 방식
            </a>
            <a href="#pricing" className="text-foreground/80 hover:text-foreground transition-colors">
              가격
            </a>
            <a href="#faq" className="text-foreground/80 hover:text-foreground transition-colors">
              FAQ
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

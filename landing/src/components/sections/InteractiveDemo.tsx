import { useState } from 'react';

interface ChoiceCard {
  title: string;
  description: string;
  iconSrc: string;
}

const choices: ChoiceCard[] = [
  {
    title: 'MVP Development',
    description: 'Build new features with AI-assisted planning and documentation',
    iconSrc: '/icons/mvp-icon.png',
  },
  {
    title: 'Maintenance',
    description: 'Fix bugs, refactor code, and maintain existing features',
    iconSrc: '/icons/maintain-icon.png',
  },
];

export function InteractiveDemo() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="w-full max-w-5xl mx-auto bg-background border border-border rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
      {/* App Header */}
      <div className="bg-surface border-b border-border px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="flex items-center gap-1 sm:gap-2">
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <img src="/logos/logo-anyon.png" alt="ANYON" className="h-4 w-4 sm:h-5 sm:w-5 brightness-0 invert" />
            <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
              <span className="text-white font-semibold">ANYON</span>
              <span className="text-muted">/</span>
              <span className="text-white font-semibold">test1</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar + Main Content */}
      <div className="flex" style={{ minHeight: '400px' }}>
        {/* Sidebar - Hidden on mobile */}
        <div className="hidden sm:flex w-12 sm:w-16 bg-surface border-r border-border flex-col items-center py-4 sm:py-6">
          <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary hover:bg-brand-primary/20 transition-colors">
            <img src="/logos/logo-anyon.png" alt="" className="w-5 h-5 sm:w-6 sm:h-6 brightness-0 invert opacity-80" />
          </button>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-4 sm:p-6 md:p-8 lg:p-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-foreground mb-6 sm:mb-8 md:mb-12">
            What would you like to do?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {choices.map((choice, index) => (
              <button
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border-2 transition-all duration-300 text-center ${
                  hoveredCard === index
                    ? 'border-brand-primary bg-brand-primary/5 transform scale-105 shadow-xl shadow-brand-primary/20'
                    : 'border-border bg-surface hover:border-border/50'
                }`}
              >
                {/* Icon */}
                <div className="mb-4 sm:mb-6 flex justify-center">
                  <img
                    src={choice.iconSrc}
                    alt={choice.title}
                    className={`w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 object-contain brightness-0 invert transition-transform duration-300 ${
                      hoveredCard === index ? 'scale-110 rotate-6' : 'scale-100'
                    }`}
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2 sm:mb-3">
                  {choice.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  {choice.description}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

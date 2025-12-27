import { AnimatedSection } from '../shared/AnimatedSection';
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
    <div className="w-full max-w-5xl mx-auto bg-background border border-border rounded-3xl shadow-2xl overflow-hidden">
      {/* App Header */}
      <div className="bg-surface border-b border-border px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex items-center gap-3">
            <img src="/logos/logo-anyon.png" alt="ANYON" className="h-5 w-5 brightness-0 invert" />
            <div className="flex items-center gap-2 text-sm">
              <span className="text-white font-semibold">ANYON</span>
              <span className="text-muted">/</span>
              <span className="text-white font-semibold">test1</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar + Main Content */}
      <div className="flex" style={{ minHeight: '500px' }}>
        {/* Sidebar */}
        <div className="w-16 bg-surface border-r border-border flex flex-col items-center py-6">
          <button className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary hover:bg-brand-primary/20 transition-colors">
            <img src="/logos/logo-anyon.png" alt="" className="w-6 h-6 brightness-0 invert opacity-80" />
          </button>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-12">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            What would you like to do?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {choices.map((choice, index) => (
              <button
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`p-8 rounded-2xl border-2 transition-all duration-300 text-center ${
                  hoveredCard === index
                    ? 'border-brand-primary bg-brand-primary/5 transform scale-105 shadow-xl shadow-brand-primary/20'
                    : 'border-border bg-surface hover:border-border/50'
                }`}
              >
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <img
                    src={choice.iconSrc}
                    alt={choice.title}
                    className={`w-32 h-32 object-contain brightness-0 invert transition-transform duration-300 ${
                      hoveredCard === index ? 'scale-110 rotate-6' : 'scale-100'
                    }`}
                  />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {choice.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted leading-relaxed">
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

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#d97757',
        'brand-secondary': '#ff9a7a',
        'brand-primary-hover': '#c06646',
        background: '#0a0a0a',
        surface: '#1a1a1a',
        foreground: '#f7f7f4',
        muted: 'rgb(247 247 244 / 0.6)',
        border: 'rgb(247 247 244 / 0.1)',
        'border-hover': 'rgb(217 119 87 / 0.5)',
        success: '#1f8a65',
        warning: '#f54e00',
      },
      fontFamily: {
        heading: ['Playfair Display', 'ui-serif', 'Georgia', 'serif'],
        body: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['ui-monospace', 'SF Mono', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
};

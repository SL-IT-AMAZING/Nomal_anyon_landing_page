/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#B8C5D0',
        'brand-secondary': '#D4DDE5',
        'brand-primary-hover': '#9AABB8',
        background: '#0a0a0a',
        surface: '#1a1a1a',
        foreground: '#f7f7f4',
        muted: 'rgb(247 247 244 / 0.6)',
        border: 'rgb(247 247 244 / 0.1)',
        'border-hover': 'rgb(184 197 208 / 0.5)',
        success: '#1f8a65',
        warning: '#B8C5D0',
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

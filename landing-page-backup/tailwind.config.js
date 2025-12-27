/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Cursor's Primary Colors
        primary: {
          DEFAULT: '#edecec',
          dark: '#26251e',
        },
        secondary: {
          DEFAULT: '#26241e',
          light: '#f7f7f4',
        },
        accent: '#f54e00',

        // Background Colors
        bg: {
          light: '#f7f7f4',
          DEFAULT: '#26251e',
          dark: '#14120b',
        },

        // Text Colors
        text: {
          primary: '#26251e',
          'primary-dark': '#edecec',
          secondary: 'rgb(38, 37, 30, 0.6)',
          'secondary-dark': 'rgb(237, 236, 236, 0.6)',
        },

        // UI Colors
        card: {
          light: '#f7f7f4',
          DEFAULT: '#ebeae5',
          secondary: '#f2f1ed',
          tertiary: '#e6e5e0',
        },

        // Palette Colors (for gradients, illustrations)
        purple: {
          light: '#aaa0fa',
          DEFAULT: '#9e94d5',
          dark: '#6049b3',
        },
        pink: {
          light: '#e394dc',
          DEFAULT: '#aa52a2',
          dark: '#b3003f',
        },
        orange: {
          DEFAULT: '#db704b',
        },
        green: {
          DEFAULT: '#1f8a65',
          light: '#83d6c5',
        },
        yellow: {
          DEFAULT: '#f8c762',
          light: '#ebc88d',
        },
      },

      fontFamily: {
        cursor: ['Inter', 'Pretendard', 'system-ui', 'sans-serif'],
        lato: ['Lato', 'Pretendard', 'sans-serif'],
        sans: ['Pretendard', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },

      fontSize: {
        // Cursor's Typography Scale
        'display': ['72px', { lineHeight: '1.10', letterSpacing: '-2.16px' }],
        'h1': ['36px', { lineHeight: '1.20', letterSpacing: '-0.72px' }],
        'h2': ['26px', { lineHeight: '1.25', letterSpacing: '-0.325px' }],
        'h3': ['22px', { lineHeight: '1.30', letterSpacing: '-0.11px' }],
        'body': ['16px', { lineHeight: '1.50' }],
        'sm': ['14px', { lineHeight: '1.43' }],
        'xs': ['13px', { lineHeight: '1.50' }],
        'xxs': ['12px', { lineHeight: '1.67' }],
      },

      spacing: {
        // Cursor's 8px spacing system
        '0.5': '2px',
        '1': '4px',
        '1.5': '6px',
        '2': '8px',
        '2.5': '10px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '8': '32px',
        '10': '40px',
        '12': '48px',
        '16': '64px',
      },

      borderRadius: {
        'none': '0',
        'sm': '2px',
        'DEFAULT': '4px',
        'md': '6px',
        'lg': '8px',
        'xl': '10px',
        '2xl': '12px',
        'full': '9999px',
      },

      boxShadow: {
        'cursor': 'rgba(0, 0, 0, 0.14) 0px 28px 70px 0px, rgba(0, 0, 0, 0.1) 0px 14px 32px 0px',
        'cursor-focus': 'rgba(0, 0, 0, 0.1) 0px 4px 12px, rgba(0, 0, 0, 0.2) 0px 0px 0px 2px',
        'subtle': 'rgba(0, 0, 0, 0.02) 0px 0px 16px 0px, rgba(0, 0, 0, 0.008) 0px 0px 8px 0px',
      },

      screens: {
        'sm': '600px',
        'md': '900px',
      },
    },
  },
  plugins: [],
}

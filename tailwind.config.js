import {fontFamily, screens} from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./**/*.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Inter'", ...fontFamily.sans],
      },
      screens: {
        xs: '475px',
        ...screens,
      },
      animation: {
        circle: '1.6s linear infinite both spin',
        'svg-circle': '1s ease-in-out infinite both svg-circle',
      },
      keyframes: {
        'svg-circle': {
          ' 0%, 25%': {
            'stroke-dashoffset': 280,
            transform: ' rotate(0)',
          },
          '50%,75%': {
            'stroke-dashoffset': 75,
            transform: 'rotate(45deg)',
          },
          '100%': {
            'stroke-dashoffset': 280,
            transform: 'rotate(360deg)',
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;

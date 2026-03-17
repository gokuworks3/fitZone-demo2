/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'fitzone-red': '#e11d48',
        'fitzone-red-dark': '#be123c',
        'fitzone-dark': '#0a0a0a',
        'fitzone-card': '#1a1a1a',
        brand: {
          black: '#0a0a0a',
          dark: '#111111',
          soft: '#1a1a1a',
          red: '#e11d48',
          redDark: '#be123c',
          redLight: '#fb7185',
          light: '#f8fafc',
          muted: '#c7c7d1',
        },
      },
      fontFamily: {
        heading: ['"Bebas Neue"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 12px 45px rgba(225, 29, 72, 0.28)',
      },
    },
  },
  plugins: [],
}


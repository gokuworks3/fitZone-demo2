/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#050505',
          dark: '#0f0f10',
          soft: '#171719',
          red: '#ff2e2e',
          redDark: '#bf1212',
          redLight: '#ff6b6b',
          light: '#f8f8f8',
          muted: '#b6b6b8',
        },
      },
      fontFamily: {
        heading: ['"Bebas Neue"', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 12px 45px rgba(255, 46, 46, 0.25)',
      },
    },
  },
  plugins: [],
}


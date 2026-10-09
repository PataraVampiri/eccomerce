/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
      colors: {
        accent: '#D87D4A',
        accentHover: '#FBAF85',
        dark: '#101010',
        black: '#000000',
        lightGray: '#F1F1F1',
        veryLightGray: '#FAFAFA',
        white: '#FFFFFF',
      },
      boxShadow: {
        soft: '0 12px 40px rgba(16,16,16,0.06)',
      },
    },
  },
  plugins: [],
}


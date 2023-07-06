/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      Cormorant: ['Noto Serif Makasar', 'sans-serif'],
      OpenSans: ['Open Sans', 'sans-serif'],
      Hero: ['hero', 'sans-serif'],
    },
    extend: {
      colors: {
        black: '#181a1b',
      },
    },
  },
  plugins: [],
};

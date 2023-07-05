/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      Cormorant: ['Noto Serif Makasar', 'sans-serif'],
      Poppins: ['Poppins', 'sans-serif'],
      Hero: ['hero', 'sans-serif'],
    },
    extend: {
      colors: {
        black: '#1e1e1e',
      },
    },
  },
  plugins: [],
};

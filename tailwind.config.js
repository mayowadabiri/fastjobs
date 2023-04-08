/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5D5FEF',
        black: '#1C1D21',
        white: '#FFFFFF',
        grey: '#E6E6E6',
        btn: '#B2BAFF',
        label: '#B3B3B3',
        gray: '#f5f5f5',
        dark: '#363A3D',
      },
      fontFamily: {
        primary: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

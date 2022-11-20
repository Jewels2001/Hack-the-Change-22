/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      navy: '#10569E',
      babyblue: '#78B1EB',
      gold: '#EBB400',
      violet: '#492F9E',
      lavender: '#B5A4EB',
      dgrey: '#111110',
    },
  fontFamily: {
      sans: ['Quicksand', 'serif'],
      heading: ['Rubik Distressed', 'cursive'],
  },
    extend: {
      backgroundImage: {
        'hero': "url('src/assets/bg-newspaper.jpg)"
      }
    },
  },
  plugins: [],
}

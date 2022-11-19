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
      navy: '#10569E',
      babyblue: '#78B1EB',
      gold: '#EBB400',
      violet: '#492F9E',
      lavender: '#B5A4EB',
    },
    extend: {},
  },
  plugins: [],
}

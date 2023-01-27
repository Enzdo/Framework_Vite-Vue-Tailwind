/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'main-font' : ['Poppins', 'sans-serif']
      },
      colors: {
        'color-btn-num' : 'rgba(255, 255, 255, 0.3)',
        'color-secondary' : '#8D4ED8',
        'color-bg-search' : '#F3EDFB',
        'color-bg-footer' : 'rgba(255, 255, 255, 0.18)'
      },
      height: {
        'hero-bg-desktop': '29rem',
        'hero-bg-mobile': '32rem',
      },
      backgroundImage: {
        'hero-desktop': "url('bg-hero-desktop.png')",
        'hero-mobile': "url('bg-hero-mobile.png')",
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        galaxy: "url('/galaxy-background.png')",
        'nlw-gradient': "linear-gradient(89.86deg, #9572FC 3%, #43E7AD 85%, #E1D55D 13%)",
        'game-gradient': "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%);"
      }
    },
  },
  plugins: [],
}

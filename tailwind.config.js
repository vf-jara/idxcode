module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'idx-black': '#03030380',
        'idx-bg-black': '#121313',
        'idx-green': '#00ff00',
        'idx-cinza': '#00FF000D',
      },
      backgroundImage: {
        'split-white-black': 'linear-gradient(to bottom, white 50%, #121313 50%)'
      },
      height: {
        'heroHeight': '80vh'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
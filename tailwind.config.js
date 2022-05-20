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
      height: {
        'heroHeight': '80vh'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
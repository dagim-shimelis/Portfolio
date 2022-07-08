module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryTextWhite:"#fff",
        primaryTextBlack:"#151515",
        primaryTextTheme:"#017ba9",

        primaryBlack:"#151515",
      },
      fontFamily: {
        Montserrat: "'Montserrat', sans-serif",
        Lexend: "'Lexend', sans-serif",
      },
    },
  },
  plugins: [],
}

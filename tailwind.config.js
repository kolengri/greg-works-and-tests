const colors = require("tailwindcss/colors")

module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        yellow: {
          starWars: "#FFE81F",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

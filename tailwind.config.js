const colors = require("tailwindcss/colors")
const plugin = require("tailwindcss/plugin")

module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      plugin: {
        "absolute-center": {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        },
      },
      positions: {
        "absolute-center": {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        },
      },
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
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".font-jedy": {
          "font-family": "Star Jedi",
          "font-weight": "normal",
          "font-style": "normal",
        },
        ".swTransform": {
          "transform-style": "preserve-3d",
          transform: "rotateX(25deg)",
        },
        ".absolute-center": {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        },
      }

      addUtilities(newUtilities)
    }),
  ],
}

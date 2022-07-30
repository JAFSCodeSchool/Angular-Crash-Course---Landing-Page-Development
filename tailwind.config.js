/** @type {import('tailwindcss').Config} */
const AnimateCSS = require('animated-tailwindcss')

module.exports = AnimateCSS({
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
})

/** @type {import('tailwindcss').Config} */
const AnimateCSS = require('animated-tailwindcss')

module.exports = AnimateCSS({
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      animation:{
        upDown:'upDown 3s linear infinite',
        leftRight:'leftRight 3s linear infinite',
      },
      keyframes:{
        upDown:{
          '0%':{paddingTop:'0px'},
          '50%':{paddingTop:'40px'},
          '100%':{paddingTop:'0px'}
        },
        leftRight:{
          '0%':{paddingLeft:'0px'},
          '50%':{paddingLeft:'40px'},
          '100%':{paddingLeft:'0px'}
        }
      }
    },
  },
  plugins: [],
})

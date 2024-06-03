/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      colors:{
        danger: '#ff540',
        info:{
          900: '#234e52',
          800: '#285e61',
        },
      },
    },
    fontFamily: {
      rale: ['Raleway'],
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        
        'CustomFont': ["Custom-Font, 'sans-serif"]
      },
      colors :{
        'teal' : '#008080'
      }
    },
  },
  plugins: [],
}
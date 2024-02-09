/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        figtree: ['Figtree', 'Arial']
      },
      boxShadow: {
        '3xl': '5px 5px black',
      }
    },
  },
  plugins: [],
}


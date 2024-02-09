/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'body': '#f3e5d8',
        'h2': '#804132',
      },
      fontFamily: {
        'outfit': ['Outfit'],
        'youngserif': ['YoungSerif']
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        custom_link: '#3e52a3',
        custom_primary: '#5E2AF8',
        custom_dark_grey: '#1F1F1F',
        custom_off_black: '#141414',
        custom_green: '#bdd474',
        custom_grey: '#333333',
      },
      fontFamily: {
        inter: ['Inter', 'Arial'],
      } 
    },
  },
  plugins: [],
}


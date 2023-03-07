/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors:{
        brand:'#ffb40f',
        channel:'#927534'
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}

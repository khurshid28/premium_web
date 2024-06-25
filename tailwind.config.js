/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
   
  ],
  theme: {
    extend: {
      colors:{
        "primary" :"#BE52F2",
        "secondary":"#E9C5FB",
        "textColor":"#002966",
        "textGrey" :"#667085"
      }
    },
  },
  plugins: [
    require('daisyui'),
  
],
  darkMode: "false"
}
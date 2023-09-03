/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",

    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
      },
      
    },
  },
  plugins: [],
}
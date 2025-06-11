/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F4C81',
        orange: '#F7941D',
        green: '#6FBF73',
        sky: '#51C4D3'
      }
    },
  },
  plugins: [],
}
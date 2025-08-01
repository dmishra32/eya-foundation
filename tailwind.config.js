/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F4C81",
        orange: "#F7941D", 
        green: "#6FBF73",
        sky: "#51C4D3"
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        zoomOut: {
          '0%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1.15)' },
        }
      }
    },
  },
  plugins: [],
};
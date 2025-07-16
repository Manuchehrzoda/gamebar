/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        run: {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(180deg)' },
          '100%': { transform: 'rotate(0deg)' },
        }
      },
      animation: {
        simple: 'run 1s ease infinite'
      },
      colors: {
        'red': '#ff0000',
      }
    },
    screens: {
      'mx': { max: '510px' }
    }
  },
  plugins: [],
}
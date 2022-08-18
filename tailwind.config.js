/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1340px'
    },
    extend: {
      colors: {
        red: '#B81830',
      },
      fontFamily: {
        'noto-sans': ["'Noto Sans', sans-serif", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}

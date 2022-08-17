/** @type {import('tailwindcss').Config} */
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
    },
  },
  plugins: [],
}

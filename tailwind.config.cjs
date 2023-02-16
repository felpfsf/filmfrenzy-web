/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage:{
        posterGradient: 'linear-gradient(to top, #111 10%, transparent 90%)',
        contentPosterGradient: 'linear-gradient(to top, #111 30%, transparent 70%)',
      },
      fontFamily:{
        logo: ['Bebas Neue', 'cursive'],
        main: ['Inter', 'sans-serif'],
      },
      colors:{
        button: '#F40009',
        button_hover: '#A20025',
      }
    }
  },
  plugins: [
    require('tailwindcss-text-fill')
  ]
}

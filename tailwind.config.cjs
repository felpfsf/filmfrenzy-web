/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        posterGradient: 'linear-gradient(to top, #111 10%, transparent 90%)',
        contentPosterGradient:
          'linear-gradient(to top, #111 30%, transparent 70%)'
      },
      fontFamily: {
        logo: ['Bebas Neue', 'cursive'],
        main: ['Inter', 'sans-serif']
      },
      colors: {
        primary: '#F40009',
        secondary: '#A20025',
        accent: '#800000',
        paragraph:'#FAEBD7',
        background: '#171717'
      }
    }
  },
  plugins: [require('tailwindcss-text-fill')]
}

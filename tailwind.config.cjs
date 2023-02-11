/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage:{
        posterGradient: 'linear-gradient(to top, #111 10%, transparent 90%)',
        contentPosterGradient: 'linear-gradient(to top, #111 30%, transparent 70%)',
      }
    }
  },
  plugins: []
}

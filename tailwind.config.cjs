/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        posterGradient: "linear-gradient(to top, #111 10%, transparent 90%)",
        contentPosterGradient:
          "linear-gradient(to top, #111 30%, transparent 70%)",
        movieCardGradient:
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)",
      },
      fontFamily: {
        logo: ["Bebas Neue", "cursive"],
        main: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#F40009",
        secondary: "#A20025",
        accent: "#800000",
        paragraph: "#FAEBD7",
        background: "#171717",
        genreCaption: "#A16207",
      },
    },
  },
  plugins: [
    require("tailwindcss-text-fill"),
    require("tailwind-scrollbar"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1440px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-poster":
          "linear-gradient(to top, #1D1F23 10%, transparent 90%)",
        "gradient-content":
          "linear-gradient(to top, #1D1F23 30%, transparent 70%)",
        "gradient-card":
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)",
      },
      colors: {
        body: "#1D1F23",
        primary: "#151618",
        accent: {
          DEFAULT: "#F6CD46",
          hover: "#E1B72E",
          caption: "#A16207",
        },
      },
      fontFamily: {
        sans: "var(--font-inter)",
        logo: "var(--font-bebas)",
      },
      keyframes: {
        contentShown: {
          from: { opacity: 0, transform: "scale(0.8)" },
          to: { opacity: 1, transform: "scale(1)" },
        },
      },
      animation: {
        contentShown: "contentShown 0.2s ease-in-out",
      },
    },
  },
  plugins: [
    require("prettier-plugin-tailwindcss"),
    require("tailwindcss-text-fill"),
  ],
};

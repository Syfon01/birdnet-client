/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#07875D",
        primary500: "#2CA955",
      },
      fontFamily: {
        moderat: ["Moderat", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "3rem",
          xl: "5rem",
          "2xl": "8rem",
        },
      },
    },
  },
  plugins: [],
};

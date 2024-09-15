/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "auto-fill": "repeat(auto-fill, minmax(90px, 1fr))",
        "auto-fit": "repeat(auto-fit, minmax(90px, 1fr))",
      },
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
      },
      textColor: {
        primary: "#46423f",
        secondary: "#8A817C",
      },
      backgroundColor: {
        primary: "#f9fafb",
        secondary: "#fefefe",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};

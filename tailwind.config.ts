/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        primary: "#46423f",
        secondary: "#55514e",
      },
    },
  },
  plugins: [],
};

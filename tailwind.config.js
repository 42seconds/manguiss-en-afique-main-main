/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#fdfbf3",
        navy: "#14253f",
        navydeep: "#0d1a30",
        gold: "#c8932e",
        golddark: "#a8762a",
        sand: "#f4ead0",
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
      },
      borderRadius: {
        brand: "12px",
      },
      boxShadow: {
        brand: "0px 0.5px 2px 0px rgba(20,37,63,0.14)",
      },
    },
  },
  plugins: [],
};

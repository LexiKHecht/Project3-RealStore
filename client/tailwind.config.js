/** @type {import('tailwindcss').Config} */
export default {

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
    colors: {
      // Universal
      darkGray: "#323336",
      palePurple: "#bbafdb",
      // light Mode colors
      white: "#fff",
      lightGray: "#9d9c9c",
      // Dark mode colors
      offBlack: "#131212",
      offWhite: "#ebebeb",

    },}

  },
  plugins: [],
};


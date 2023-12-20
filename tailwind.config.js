/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        cyan: "#2ab2af",
        brightYellow: "#c0df34",
        lightGray: "#e5eff5",
        grayishBlue: "#98a6bd",
      },
      fontFamily: {
        karla: ["karla", "sans-serif"],
      },
    },
  },
  plugins: [],
};

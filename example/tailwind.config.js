const { addVariablesForColors } = require("@mcansh/tailwind-var");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        custom: {
          DEFAULT: "#1a202c",
          50: "#f7fafc",
        },
      },
    },
  },
  plugins: [addVariablesForColors()],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,njk,css}", "./src/_includes/**/*.{html,njk,css}"],
  theme: {
    extend: {
      fontFamily: {
        "fira-code": ['"Fira Code"', "monospace"],
      },
    },
  },
  plugins: [],
};

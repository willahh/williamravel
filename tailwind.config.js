/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/v1/**/*.{html,njk}", // Inclut tous les fichiers HTML et Nunjucks dans src
  ],
  theme: {
    extend: {
      fontFamily: {
        "fira-code": ['"Fira Code"', "monospace"],
      },
    },
  },
  plugins: [],
};

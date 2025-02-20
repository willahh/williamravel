import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/postcss";
import autoprefixer from "autoprefixer";

export default defineConfig({
  root: "./src/v1", // Racine du projet
  build: {
    outDir: "../../dist", // Sortie dans ./dist
    emptyOutDir: true,
    assetsDir: "", // Pas de sous-dossier assets
    rollupOptions: {
      input: "./src/v1/styles.css", // Chemin explicite
      output: {
        assetFileNames: "styles.css", // Nom forcé
      },
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
});

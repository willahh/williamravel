import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  root: './src/v1',
  build: {
    outDir: '../../dist',
    emptyOutDir: true,
    assetsDir: '',
    rollupOptions: {
      input: './src/styles.css',
      output: {
        entryFileNames: 'styles.css',
        assetFileNames: 'styles.css',
      },
    },
    watch: {
      include: ['src/**/*.{css,html,njk}'], // Surveille les fichiers pertinents
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
});
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

export default defineConfig(({ command }) => ({
  root: './src/v1',
  build: {
    outDir: '../../dist',
    emptyOutDir: true,
    assetsDir: '',
    rollupOptions: {
      input: './src/styles.css',
      output: {
        assetFileNames: 'styles.css',
      },
    },
    ...(command === 'build' &&
      process.argv.includes('--watch') && {
        watch: {
          include: [
            'src/**/*.{css,html,njk}',
            'src/_includes/**/*.{css,html,njk}',
          ],
        },
      }),
  },
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
}));

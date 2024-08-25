import { defineConfig } from 'vite';
import htmlPurge from 'vite-plugin-purgecss';
import { resolve } from 'path';

export default defineConfig({
  root: 'src',
  plugins: [
    htmlPurge(),
  ],
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    assetsInlineLimit: 0, // Disable inline asset embedding for all asset types
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'src/index.html'),
        mainJS: resolve(__dirname, 'src/js/main.js'),
        
      }
    }
  }
});


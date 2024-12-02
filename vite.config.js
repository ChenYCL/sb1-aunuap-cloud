import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    outDir: 'dist',
    copyPublicDir: true
  },
  publicDir: 'static'
});
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000 // o el puerto que desees usar
    base: '/modulo-3-evaluacion-intermedia-Yasmin271091/',
  }
});
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import environment from 'vite-plugin-environment';

export default defineConfig({
  plugins: [
    react(),
    environment({ loadEnvFiles: true }) // Ensure it loads from .env
  ],
  server: {
    host: true,
    port: 5173,
    strictPort: true,
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});



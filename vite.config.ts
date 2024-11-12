import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env,
  },
  build: {
    sourcemap: true, 
  },
  server: {
    port: 3000, 
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/app/components'),
      '@adapters': path.resolve(__dirname, 'src/app/adapters'),
      '@services': path.resolve(__dirname, 'src/app/services'),
      '@domain': path.resolve(__dirname, 'src/app/domain'),
      '@config': path.resolve(__dirname, 'src/config'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@assets': path.resolve(__dirname, 'src/assets'),
    },
  },
});

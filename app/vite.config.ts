import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // resolve: {
  //   alias: [{ find: '@', replacement: path.resolve(__dirname, 'app/src') }],
  // },
  publicDir: './public',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'app/src/main.tsx'),
    },
  },
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { environment } from './src/helpers';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  preview: {
    port: 3001,
  },
});

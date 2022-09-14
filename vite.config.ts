import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { environment } from './src/helpers';

export default defineConfig({
  plugins: [react()],
  server: {
    port: environment.port,
  },
  preview: {
    port: environment.previewPort,
  },
});

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/restaurant-sage-theta/', // Adjust this based on your deployment path
  plugins: [react()],
});

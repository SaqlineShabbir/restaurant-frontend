import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://restaurant-sage-theta.vercel.app/', // Adjust this based on your deployment path
  plugins: [react()],
});

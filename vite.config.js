import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Relative paths
  build: {
    assetsDir: '', // Output assets to root, avoiding subfolder issues
  }
})

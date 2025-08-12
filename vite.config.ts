import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // base: '/zcdonna/tntt-teresa/',
  plugins: [react()],
  server: {
    port: 3000,
  },
})

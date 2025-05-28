import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/taskbeacon/',
  server: {
    port: 3000
  }
})

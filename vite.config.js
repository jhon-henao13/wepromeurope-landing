import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.mp4'] // 👈 Crucial para que React compile tu video de fondo
})

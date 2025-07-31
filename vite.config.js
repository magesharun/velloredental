import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, import.meta.env.MODE)
  return {
    plugins: [react()],
    base: env.VITE_BASE_PATH || '/velloredental',
  }
})

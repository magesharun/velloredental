import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react()],  // ONLY react plugin here
    base: env.VITE_BASE_PATH || '/velloredental',
  }
})

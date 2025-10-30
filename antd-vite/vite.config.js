import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/web-app-styling-2025/antd-vite/',
  plugins: [react()],
})

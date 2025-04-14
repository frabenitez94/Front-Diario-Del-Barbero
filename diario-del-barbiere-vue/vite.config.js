
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    allowedHosts: ['0e6667e6-8b90-4f3b-9651-57548a39b6c2-00-1e5a0224cn5fe.picard.replit.dev', '.replit.dev']
  }
})

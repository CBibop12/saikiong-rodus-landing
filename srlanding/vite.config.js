import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Прокси для всех REST-эндпоинтов бэка
      '/api/auth': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
      '/api/profile': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
      '/api/users': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
      '/api/chats': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
      '/api/games': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
      '/api/heroes': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
})

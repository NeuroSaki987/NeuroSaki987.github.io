import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://neuro-saki.silverwolf-mihoyo.workers.dev/',
        // uncomment the following line to use local server
        // target: 'http://localhost:8787',
        changeOrigin: true,
        autoRewrite: true,
      },
    },
  },
  ssr: { noExternal: true },
})

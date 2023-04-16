import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify';

//https://vitejs.dev/config/
export default defineConfig({
  resolve: { alias: { '@': '/src' } },
  plugins: [
    vue(),
    vuetify({ autoImport: true }), // Enabled by default
  ],
  server: {
    host: true,
    port: 8080
  }
})

//import path from 'upath'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md'
import vuetify from 'vite-plugin-vuetify'
import ViteFonts from 'unplugin-fonts/vite'
import VueI18n from '@intlify/unplugin-vue-i18n/vite'

const resolve = file => fileURLToPath(new URL(file, import.meta.url))

export default defineConfig(({ command, mode, ssrBuild }) => {
  return {
    logLevel: 'info',
    resolve: { 
      alias : [
        { find: '@', replacement: `${resolve('src')}/` },
      ],
      extensions: [".js", ".json", ".jsx", ".mjs", ".ts", ".tsx", ".vue", ".md"],
    },
    define: {
      'process.env.NODE_ENV': mode === 'production' || ssrBuild ? '"production"' : '"development"',
      __INTLIFY_PROD_DEVTOOLS__: 'false',
    },
    //base: process.env.NODE_ENV === 'production' ? '/maboke-client/' : './',
    plugins: [
      vue({ include: [/\.vue$/, /\.md$/],}),
      Markdown({
        headEnabled: true,
        frontmatterDefaults: {
          requireAuth: false,
        },
        style: {
          baseStyle: 'github',
        },
      }),
      VueI18n({
        compositionOnly: true,
        include: [resolve('src/i18n/messages/**')],
      }),
      vuetify({ autoImport: true }), // Enabled by default
      ViteFonts({
        google: {
          families: [{
            name: 'Roboto',
            styles: 'wght@100;300;400;500;700;900',
          }]
        }
      })
    ],
    server: {
      host: true,
      port: 8080
    }
  }
})
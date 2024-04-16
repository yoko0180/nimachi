import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {  VitePWA } from 'vite-plugin-pwa' 

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      },
      manifest: {
        lang: 'ja',
        name: 'nimachi',
        short_name: 'nimachi',
        description: 'My Awesome App description',
        theme_color: '#000000',
        icons: [
          {
            src: 'maskable_icon_x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: "any maskable"
          },
          {
            src: 'maskable_icon.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: "any maskable"
          }
        ]
      }
    })
  ],
})

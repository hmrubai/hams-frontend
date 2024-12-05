
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   build: {
//     chunkSizeWarningLimit: 1600,
//   },
//   server: {
//     host: '0.0.0.0',  // Replace with your IP address
//     port: 3000,
//   },
// })

// ============================================

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1600,
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
    },
  },
  server: {
    host: '0.0.0.0',  // Replace with your IP address
    port: 3000,
  },
})



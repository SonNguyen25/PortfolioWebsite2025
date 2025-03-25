import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          drei: ['@react-three/drei'],
          three: ['three'],
          framer: ['framer-motion'],
        }
      }
    }
  }
})

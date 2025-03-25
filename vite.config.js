import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      algorithm: "brotli",
      ext: ".br",
      deleteOriginFile: false,
    }),
    viteCompression({
      algorithm: "gzip",
      ext: ".gz",
      deleteOriginFile: false,
    }),
  ],

  assetsInclude: ["**/*.glb"],
  build: {
    rollupOptions: {
      output: {
        // manualChunks: {
        //   drei: ['@react-three/drei'],
        //   three: ['three'],
        //   framer: ['framer-motion'],
        // }
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
          if (id.includes("three") || id.includes("drei")) {
            return "three-chunks";
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "framer-motion",
      "three",
      "@react-three/drei",
      "@react-three/fiber",
    ],
  },
});

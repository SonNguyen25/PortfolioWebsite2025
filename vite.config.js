import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";
import imagemin from "vite-plugin-imagemin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // viteCompression({
    //   algorithm: "brotli",
    //   ext: ".br",
    //   deleteOriginFile: false,
    // }),
    // viteCompression({
    //   algorithm: "gzip",
    //   ext: ".gz",
    //   deleteOriginFile: false,
    // }),
    // imagemin({
    //   gifsicle: {
    //     optimizationLevel: 7,
    //     interlaced: false,
    //   },
    //   optipng: {
    //     optimizationLevel: 7,
    //   },
    //   mozjpeg: {
    //     quality: 80,
    //   },
    //   pngquant: {
    //     quality: [0.8, 0.9],
    //     speed: 4,
    //   },
    //   svgo: {
    //     plugins: [
    //       {
    //         name: "removeViewBox",
    //         active: false,
    //       },
    //       {
    //         name: "removeEmptyAttrs",
    //         active: false,
    //       },
    //     ],
    //   },
    //   webp: {
    //     quality: 80,
    //   },
    // }),
  ],

  assetsInclude: ["**/*.glb"],
  build: {
    // minify: 'esbuild',
    // target: 'es2018',
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
          if (id.includes("/fonts/")) {
            return "fonts";
          }
        },
      },
    },
    chunkSizeWarningLimit: 1500,
    assetsInlineLimit: 4096,
  },
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "framer-motion",
      "three",
      "@react-three/drei",
      "@react-three/fiber",
      "react-three-fiber",
      "three-stdlib",
    ],
  },
  resolve: {
    alias: {
      react: "react",
      "react-dom": "react-dom",
      "framer-motion": "framer-motion",
    },
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";
import imagemin from "vite-plugin-imagemin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Optimize React runtime
      babel: {
        plugins: [
          'babel-plugin-transform-react-remove-prop-types',
          '@babel/plugin-transform-runtime'
        ]
      }
    }),
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

  assetsInclude: ["**/*.glb", "**/*.gltf"],
  build: {
    // minify: 'esbuild',
    // target: 'es2018',
    target: 'esnext',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log']
      }
    },
    sourcemap: false,
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
          if (id.includes("framer-motion")) {
            return "motion-chunks";
          }
          if (id.includes("/fonts/")) {
            return "fonts";
          }
        },
      },
    },
    chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
    chunkSizeWarningLimit: 1500,
    assetsInlineLimit: 2048,
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
    exclude: [
      "@testing-library/react",
      "@types/react",
      "jest"
    ]

  },
  resolve: {
    alias: {
      react: "react",
      "react-dom": "react-dom",
      "framer-motion": "framer-motion",
    },
  },
  server: {
    // Reduce memory usage
    warmup: {
      clientFiles: ['./src/main.jsx', './src/App.jsx']
    },
    // Faster startup
    strictPort: true,
    // Optimize for mobile network conditions
    hmr: {
      overlay: false
    }
  },

});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    react(),
    // remove consoles/debuggers
    viteCompression({ algorithm: "gzip" }),
    viteCompression({ algorithm: "brotliCompress", ext: ".br" }),
    // gera relatório interativo do bundle
    visualizer({ open: true, gzipSize: true }),
  ],
  build: {
    target: "es2018",
    outDir: "dist",
    sourcemap: false,
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
      format: {
        comments: false,
      },
    },
    rollupOptions: {
      output: {
        // separa React em vendor chunk
        manualChunks: {
          react: ["react", "react-dom"],
        },
      },
    },
  },
});

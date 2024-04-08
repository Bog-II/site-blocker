import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
  plugins: [svelte()],
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: "./src/main.ts",
        blockedDomains: "./src/blockedDomains.ts",
        blockedQueries: "./src/blockedQueries.ts",
        background: "./src/background.ts",
      },
      output: {
        entryFileNames: "[name].js",
        chunkFileNames: "[name].js",
        assetFileNames: "[name].[ext]",
      },
    },
  },
  define: {
    __DOMAINS_CHROME_STORAGE_ID__: '"domains_chrome_storage_id"',
    __QUERIES_CHROME_STORAGE_ID__: '"queries_chrome_storage_id"',
  },
});

// web-ext run --source-dir ./dist/ --target=chromium

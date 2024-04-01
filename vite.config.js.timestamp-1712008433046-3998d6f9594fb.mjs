// vite.config.js
import { defineConfig } from "file:///C:/Users/bogsa/Desktop/Code/site-blocker/node_modules/vite/dist/node/index.js";
import { svelte } from "file:///C:/Users/bogsa/Desktop/Code/site-blocker/node_modules/@sveltejs/vite-plugin-svelte/src/index.js";
var vite_config_default = defineConfig({
  plugins: [svelte()],
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: "./src/main.js",
        blockedSites: "./src/blockedSites.js",
        blockedQueries: "./src/blockedQueries.js",
        background: "./src/background.ts"
      },
      output: {
        entryFileNames: "[name].js",
        chunkFileNames: "[name].js",
        assetFileNames: "[name].[ext]"
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxib2dzYVxcXFxEZXNrdG9wXFxcXENvZGVcXFxcc2l0ZS1ibG9ja2VyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxib2dzYVxcXFxEZXNrdG9wXFxcXENvZGVcXFxcc2l0ZS1ibG9ja2VyXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9ib2dzYS9EZXNrdG9wL0NvZGUvc2l0ZS1ibG9ja2VyL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHsgc3ZlbHRlIH0gZnJvbSBcIkBzdmVsdGVqcy92aXRlLXBsdWdpbi1zdmVsdGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW3N2ZWx0ZSgpXSxcclxuICBidWlsZDoge1xyXG4gICAgb3V0RGlyOiBcImRpc3RcIixcclxuICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgaW5wdXQ6IHtcclxuICAgICAgICBtYWluOiBcIi4vc3JjL21haW4uanNcIixcclxuICAgICAgICBibG9ja2VkU2l0ZXM6IFwiLi9zcmMvYmxvY2tlZFNpdGVzLmpzXCIsXHJcbiAgICAgICAgYmxvY2tlZFF1ZXJpZXM6IFwiLi9zcmMvYmxvY2tlZFF1ZXJpZXMuanNcIixcclxuICAgICAgICBiYWNrZ3JvdW5kOiBcIi4vc3JjL2JhY2tncm91bmQudHNcIixcclxuICAgICAgfSxcclxuICAgICAgb3V0cHV0OiB7XHJcbiAgICAgICAgZW50cnlGaWxlTmFtZXM6IFwiW25hbWVdLmpzXCIsXHJcbiAgICAgICAgY2h1bmtGaWxlTmFtZXM6IFwiW25hbWVdLmpzXCIsXHJcbiAgICAgICAgYXNzZXRGaWxlTmFtZXM6IFwiW25hbWVdLltleHRdXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXNULFNBQVMsb0JBQW9CO0FBQ25WLFNBQVMsY0FBYztBQUV2QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsT0FBTyxDQUFDO0FBQUEsRUFDbEIsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLElBQ1IsZUFBZTtBQUFBLE1BQ2IsT0FBTztBQUFBLFFBQ0wsTUFBTTtBQUFBLFFBQ04sY0FBYztBQUFBLFFBQ2QsZ0JBQWdCO0FBQUEsUUFDaEIsWUFBWTtBQUFBLE1BQ2Q7QUFBQSxNQUNBLFFBQVE7QUFBQSxRQUNOLGdCQUFnQjtBQUFBLFFBQ2hCLGdCQUFnQjtBQUFBLFFBQ2hCLGdCQUFnQjtBQUFBLE1BQ2xCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=

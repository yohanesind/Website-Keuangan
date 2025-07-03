import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// Cara impor yang benar untuk plugin sitemap
import sitemap from "vite-plugin-sitemap";

export default defineConfig({
  plugins: [
    vue(),
    sitemap({
      hostname: "https://hello.yohanesindra.com", // Pastikan ini domain Anda
      // Secara otomatis akan membaca rute dari vue-router Anda
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});

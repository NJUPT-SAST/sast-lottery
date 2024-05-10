import { URL, fileURLToPath } from "node:url";

import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from "vite";
import purgeCss from "@fullhuman/postcss-purgecss";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      manifest: {
        name: "SAST 抽奖系统",
        icons: [
          {
            src: "pwa-64x64.png",
            sizes: "64x64",
            type: "image/png",
          },
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "maskable-icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
        lang: "zh-cn",
      },
    }),
  ],
  css: {
    postcss: {
      plugins: [
        purgeCss({
          content: ["./index.html", "./src/**/*.vue"],
        }),
      ],
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});

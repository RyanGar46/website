import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: "@import '@/assets/style/global/global.scss';",
        },
      },
    },
  },
  target: "server",
  router: {
    base: "/website/"
  },
  build: {
    publicPath: "/website/_nuxt/"
  }
});

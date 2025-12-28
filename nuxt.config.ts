// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from "vite-plugin-vuetify";
export default defineNuxtConfig({
  app: {
    head: {
      title: "Sudiova Website",
      meta: [{ name: "description", content: "Sudiova Website" }],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["vuetify/styles", "@mdi/font/css/materialdesignicons.min.css"],
  modules: ["@nuxt/ui"],
  plugins: ["~/plugins/vuetify.ts"],
  components: true,
  build: {
    transpile: ["vuetify"],
  },
});

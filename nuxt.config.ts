// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@nuxt/icon"],
  icon: {
    customCollections: [
      {
        prefix: "i",
        dir: "./app/assets/my-icons",
        // if you want to include all the icons in nested directories:
        // recursive: true,
      },
    ],
  },
});

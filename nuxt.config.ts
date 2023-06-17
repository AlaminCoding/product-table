// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {},
  },
  runtimeConfig: {
    public: {
      apiBase: "https://dummyjson.com",
    },
  },
  routeRules: {
    "/": { redirect: "/products?page=1" },
  },

  googleFonts: {
    families: {
      Cabin: true,
    },
  },

  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "nuxt-icon"],
});

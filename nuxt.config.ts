// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Pacific Profit",
      meta: [
        { name: "description", content: "My amazing site." },
        { name: "keywords", content: "nuxt, typescript, tailwind" },
        { name: "author", content: "PacificProfit" },
        { name: "og:title", content: "PacificProfit" },
        { name: "og:description", content: "My amazing site." },
        { name: "og:image", content: "https://pacificprofit.com/og-image.png" },
        { name: "og:url", content: "https://pacificprofit.com" },
        { name: "og:site_name", content: "PacificProfit" },
        { name: "og:type", content: "website" },
        { name: "og:locale", content: "en_US" },
      ],
    },
  },
  imports: {
    dirs: ["stores"],
  },
  css: [
    "@/assets/css/tailwind.css",
    "@/assets/css/main.scss",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  ssr: false,
  modules: [
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", ["defineStore", "definePiniaStore"]],
      },
    ],
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});

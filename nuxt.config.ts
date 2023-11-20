// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "src",
  devtools: { enabled: true },
  modules: [
    "@nuxt/content",
    ["@unocss/nuxt", { autoImport: false }],
    "nuxt-icon",
    "nuxt-monaco-editor",
    "@nuxt/image",
  ],
  content: {
    highlight: {
      theme: "github-dark",
      preload: ["json", "kotlin", "http", "js", "ts", "md", "shell"],
    },
  },
});

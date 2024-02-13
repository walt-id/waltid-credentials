// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    srcDir: "src",

    devtools: { enabled: true },

    modules: [
        "@nuxt/content",
        ["@unocss/nuxt", { autoImport: false }],
        "nuxt-icon",
        // "nuxt-monaco-editor", // not used right now
        "@nuxt/image",
        "@vueuse/nuxt",
        "nuxt-security"
    ],

    security: {
        corsHandler: {
            origin: "*",
            methods: "*"
        },
        rateLimiter: false
    },


    content: {
        highlight: {
            theme: "github-dark",
            preload: ["json", "kotlin", "http", "js", "ts", "md", "shell"]
        }
    },


    router: {
        options: {
            scrollBehaviorType: "smooth"
        }
    }
});

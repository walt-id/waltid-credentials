import { serverQueryContent } from "#content/server";
import { ParsedContent } from "@nuxt/content/dist/runtime/types";

export default defineEventHandler(async (event) => {
    const name = getRouterParam(event, 'name')
    if (name === undefined) return "No name set!"

    const contentQuery = await serverQueryContent(event).find()

    const matchedContent = contentQuery.find((content) => {return content.title === name})

    if (matchedContent === undefined) {
        const n = contentQuery.map((content) => {return content.title})

        return `not found: ${name}, available: ${n}`
    }

    return JSON.parse(matchedContent.body.children.find((elem) => {return elem.tag === "pre" && elem.props?.language === "json"})
        ?.props?.code)
})

import { serverQueryContent } from "#content/server";

export default defineEventHandler(async (event) => {
    const contentQuery = await serverQueryContent(event).find();
    return contentQuery.filter((page) => page._path?.startsWith("/credentials/") && page.body?.children.find((elem) => elem.tag === "pre" && elem.props?.language === "json") != undefined).map((elem) => elem.title);
});

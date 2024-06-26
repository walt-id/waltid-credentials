import { serverQueryContent } from "#content/server";

export default defineEventHandler(async (event) => {
    const name = getRouterParam(event, "name");
    if (name === undefined) {
        setResponseStatus(event, 400);
        return "error: No name set!";
    }

    const contentQuery = await serverQueryContent(event).find();

    const matchedContent = contentQuery.find((content) => {
        return content._path?.startsWith("/credentials/") && content.title === name;
    });

    if (matchedContent === undefined) {
        const n = contentQuery
            .filter((content) => {
                return content.navigation === undefined;
            })
            .map((content) => {
                return content.title;
            });

        setResponseStatus(event, 400);
        return `error: No credential found named: \"${name}\". Available credentials: ${n.join(", ")}`;
    }

    const codeblocksAndTitles = matchedContent.body?.children.filter((elem) => {
        return (elem.tag === "pre" && elem.props?.language === "json") || elem.tag === "h2";
    });

    if (!codeblocksAndTitles) {
        setResponseStatus(event, 400);
        return "error: no-credential";
    }

    let manifestInTitle = false;
    for (const codeblockOrTitle of codeblocksAndTitles) {
        if (
            codeblockOrTitle.tag === "h2" &&
            codeblockOrTitle?.children
                ?.find((c) => c.type === "text")
                ?.value?.toLowerCase()
                ?.includes("manifest") === true
        ) {
            manifestInTitle = true;
            continue;
        }

        if (manifestInTitle && codeblockOrTitle.tag === "pre" && codeblockOrTitle.props?.language === "json") {
            return JSON.parse(codeblockOrTitle.props.code);
        }
    }

    setResponseStatus(event, 400);
    return "error: no-mapping";
});

import { serverQueryContent } from "#content/server";

export default defineEventHandler(async (event) => {
    const name = getRouterParam(event, "name");
    if (name === undefined) return "No name set!";

    const contentQuery = await serverQueryContent(event).find();

    const matchedContent = contentQuery.find((content) => {
        return content.title === name;
    });

    if (matchedContent === undefined) {
        const n = contentQuery
            .filter((content) => {
                return content.navigation === undefined;
            })
            .map((content) => {
                return content.title;
            });

        return `error: No credential found named: \"${name}\". Available credentials: ${n.join(", ")}`;
    }

    console.log("MATCHED: ", matchedContent.body.children);

    const codeblocksAndTitles = matchedContent.body.children.filter((elem) => {
        return (elem.tag === "pre" && elem.props?.language === "json") || elem.tag === "h2";
    });

    let mappingInTitle = false;
    for (const codeblockOrTitle of codeblocksAndTitles) {
        console.log("ITERATING: ", codeblockOrTitle);

        if (
            codeblockOrTitle.tag === "h2" &&
            codeblockOrTitle?.children
                ?.find((c) => c.type === "text")
                ?.value?.toLowerCase()
                ?.includes("mapping") === true
        ) {
            mappingInTitle = true;
            continue;
        }

        if (mappingInTitle && codeblockOrTitle.tag === "pre" && codeblockOrTitle.props?.language === "json") {
            return JSON.parse(codeblockOrTitle.props.code);
        }
    }

    return "error: no-mapping";
});

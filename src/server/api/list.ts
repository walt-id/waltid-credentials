import { serverQueryContent } from "#content/server";

export default defineEventHandler(async (event) => {
    const contentQuery = await serverQueryContent(event).find();

    return contentQuery
        .filter(
            (page) =>
                page.body.children.find((elem) => {
                    {
                        return elem.tag === "pre" && elem.props?.language === "json";
                    }
                }) != undefined
        )
        .map((elem) => elem.title);

    //.map()
    //.filter((elem) => {return elem.tag === "pre" && elem.props?.language === "json"})

    //return //JSON.parse(
    /*
        .filter((elem) => {return elem.tag === "pre" && elem.props?.language === "json"})
        .map((elem) => {return elem?.props?.code})
        .filter((elem) => { return elem != null })*/
    //)
});

import SERIE from "../models/SERIE";
import CHAPTER from "../models/CHAPTER";
import { createGraphQLError } from "graphql-yoga";
import { _Chapter, _Seasons } from "../libs/models";

declare interface _Chapter_Res{
    chapter:_Chapter,
    season:_Seasons | null
}

export default class {
    async get_serie(root, {id}){
        try {
            const serieFound = await SERIE.findById(id);
            serieFound.updateOne({views: (serieFound.views + 1)});
            return serieFound;
        } catch {
            createGraphQLError('Serie not Found');
        }
    }

    async get_chapter(root, {id, seasons}){
        try {
            let res:_Chapter_Res = {chapter:await CHAPTER.findById(id), season:null}
            if(seasons){
                seasons = (await SERIE.findById(res.chapter.serie)).seasons;
            }
            return res;
        } catch {
            createGraphQLError('Chapter not Found');
        }
    }
}
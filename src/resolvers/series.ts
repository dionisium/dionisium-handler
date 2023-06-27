import SERIE from "../models/SERIE";
import COVERS from "../models/SERIE_COVER";
import SEASON from "../models/SEASON";
import CHAPTER from "../models/CHAPTER";


export default class {
    async get_serie(root, {id}){
        const coverFound = await COVERS.findById(id);
        return coverFound;
    }

    async get_season(root, {id}){
        const seasonFound = await SEASON.findById(id);
        return seasonFound;
    }

    async get_chapter(root, {id}){
        const chapterFound = await CHAPTER.findById(id);
        return chapterFound;
    }
}
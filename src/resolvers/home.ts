// MODELS
import CHAPTER from "../models/CHAPTER";
import SERIE from "../models/SERIE";

// MODULES
import { createGraphQLError } from "graphql-yoga";
import DataLocal, {_LocalData} from "../libs/datalocal";
import { _Serie } from "../libs/models";

export default class {
    async get_series_list(root, {type, mode, to, limit}){
        if(type == 'none'){
            const res = DataLocal.get(`${type}-${mode}-${to}`);
            if(res){return res;}
        }

        if(to > 1 || to < -1){
            return createGraphQLError('the input "to" is invalid');
        }
        if(mode != 'score' && mode != 'createdAt' && mode != "views"){
            return createGraphQLError('the input "mode" is invalid');
        }
        
        let sort = {}; Object.defineProperty(sort, mode, {value:to});
        const series:_Serie[] = type!='none'
            ? await SERIE.find({type}).sort(sort).limit(limit)
            : await SERIE.find().sort(sort).limit(limit);

        const list:_LocalData = {type:`${type}-${mode}-${to}`, _object:series};

        if(type == 'none'){
            DataLocal.next(list);
        }

        return list;
    }

    async get_recomendations(root, {limit, type}){
        const res = DataLocal.get(type);
        if(res != undefined){
            return res._object.slice(0, limit);
        }
        return createGraphQLError('error internal, data is empty');
    }

    async search(root, {series, chapters, search}){
        const serieFound = await SERIE.find({name:RegExp(search)}).limit(series);
        const chaptersFound = await CHAPTER.find({name:RegExp(search)}).limit(chapters);
        return {serie:serieFound, chapters:chaptersFound};
    }
}
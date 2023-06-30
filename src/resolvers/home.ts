// MODELS
import USERS from "../models/USERS";
import COVERS from "../models/SERIE_COVER";
import CHAPTER from "../models/CHAPTER";

// MODULES
import { createGraphQLError } from "graphql-yoga";
import jwt_libs from "../libs/jsonwebtoken_config";
import { redis } from "../redis";

export default class {
    async get_covers_list(root, {type, mode, to, limit}){
        if(type == 'shonen' || type == 'isekai'){
            const res = await redis.get(`${type}-${mode}-${to}`);
            if(res != null){
                return JSON.parse(res);
            }
        }
        if(to > 1 || to < -1){
            return createGraphQLError('the input "to" is invalid');
        }
        if(mode != 'score' && mode != 'createdAt' && mode != "views"){
            return createGraphQLError('the input "mode" is invalid');
        }
        let order:any = [mode, to];
        let map = new Map([order]);
        let sort = Object.fromEntries(map);
        const cover = await COVERS.find({type}).sort(sort).limit(limit);
        const list = {name:`${type}-${mode}-${to}`, section:cover};

        if(type == 'shonen' || type == 'isekai'){
            redis.set(list.name, JSON.stringify(list), {EX:(60*60*24)});
        }
        return list;
    }

    async get_recomendations(root, {limit, type}){
        const res = await redis.get(type);
        if(res != null){
            const data:Array<any> = JSON.parse(res);
            return data.slice(0, limit);
        }
        else{
            const res = await redis.get('forYou');
            if(res != null){
                return JSON.parse(res);
            }
        }
    }

    async search(root, {series, chapters, search}){
        const serieFound = await COVERS.find({name:RegExp(search)}).limit(series);
        const chaptersFound = await CHAPTER.find({name:RegExp(search)}).limit(chapters);
        return {serie:serieFound, chapters:chaptersFound};
    }

    async get_viewing(root, {token}){
        const decoded = await jwt_libs.decoded(token);
        if(decoded == 'error unexpected'){return []}
        const userFound = await USERS.findById(decoded?.["_id"]);
        return userFound.viewing.slice(0, 3);
    }
}
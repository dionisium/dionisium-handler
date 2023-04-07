import serie_cover_model from "./models/SERIE_COVER";
import serie_model from "./models/SERIE";
import language_model from "./models/LANGUAGE";
import season_model from "./models/SEASON";
import chapter_model from "./models/CHAPTER";
import user_model from "./models/USERS";
import jwt_libs from "./libs/jsonwebtoken_config";
import { redis } from "./redis";

export default {
    Query:{
        async get_cover(root, {type, limit}){
            const res = await redis.get('covers');
            if(res != null){
                return JSON.parse(res);
            }

            const types:Array<Function> = [
                async function(){return await serie_cover_model.find().sort({dateMs:-1}).limit(limit);},
                async function(){return await serie_cover_model.find().sort({views:-1}).limit(limit);},
                async function(){return await serie_cover_model.find().sort({seasons:-1}).limit(limit);},
                async function(){return await serie_cover_model.find({gender:'shonen'}).sort({views:-1}).limit(limit);},
                async function(){return await serie_cover_model.find({gender:'seinen'}).sort({views:-1}).limit(limit);},
                async function(){return await serie_cover_model.find({languages:'español'}).sort({views:-1}).limit(limit);}
            ];
            const names:Array<string> = ['popular', 'nuevo', 'shonen', 'seinen', 'dobladas', 'largas'];
            const covers:Array<object> = [];
            for (let x = 0; x < type.length; x++) {
                covers.push({section:await types[type[x]](), name:names[type[x]]});
            }
            redis.set('covers', JSON.stringify(covers));
            return covers;
        },

        async get_series(root, {id}){
            const serieCoverFound = await serie_cover_model.findById(id);
            const serieFound = await serie_model.findById(serieCoverFound.serie);
            return serieFound;
        },

        async get_language(root, {id}){
            const languageFound = await language_model.findById(id);
            return languageFound;
        },

        async get_season(root, {id}){
            const seasonFound = await season_model.findById(id);
            return seasonFound;
        },

        async get_chapter(root, {id}){
            const chapterFound = await chapter_model.findById(id);
            return chapterFound;
        },

        async search(root, {series, chapters, search}){
            const serieFound = await serie_cover_model.find({name:RegExp(search)}).limit(series);
            const chaptersFound = await chapter_model.find({name:RegExp(search)}).limit(chapters);
            return {serie:serieFound, chapters:chaptersFound};
        },

        async get_viewing(root, {token}){
            const decoded = await jwt_libs.decoded(token);
            if(decoded == 'error unexpected'){return []}
            const userFound = await user_model.findById(decoded?.["_id"]);
            return userFound.viewing.slice(0, 3);
        }
    },
}
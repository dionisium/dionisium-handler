import serie_cover_model from "./models/SERIE_COVER";
import serie_model from "./models/SERIE";
import language_model from "./models/LANGUAGE";
import season_model from "./models/SEASON";
import chapter_model from "./models/CHAPTER";
import user_model from "./models/USERS";
import jwt_libs from "./libs/jsonwebtoken_config";

export default {
    Query:{
        async get_cover(root, {order, type, limit}){
            const sort:any = [{dateMs:-1}, {views:-1}, {seasons:-1}];
            const find:any = [{},{gender:'shonen'}, {gender:'seinen'}, {languages:'español'}];
            if(type.length == 1){
                let _value:object = find[type[0]];
                if(type[0] == 0){_value = {_value:Object.keys(sort[order])}};
                return {section:await serie_cover_model.find(find[type[0]]).sort(sort[order]).limit(limit), name:Object.values(_value).toString()};
            }
            const covers:Array<object> = [];
            for (let x = 0; x < type.length; x++) {
                let _value:object = find[type[x]];
                if(type[x] == 0){_value = {_value:Object.keys(sort[order])}};
                covers.push({section:await serie_cover_model.find(find[type[x]]).sort(sort[order]).limit(limit), name:Object.values(_value).toString()});
            }
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
            const userFound = await user_model.findById(decoded._id);
            return userFound.viewing.slice(0, 3);
        }
    },
}
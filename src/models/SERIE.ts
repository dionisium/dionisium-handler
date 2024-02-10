import { Schema, model } from 'mongoose' ;

const season_chapters = new Schema({
    name:{type:String, required:true},
    thumnail:{type:String, required:true},
    duration:{type:String, required:true},
    chapter:{type:Schema.Types.ObjectId, ref:'chapter', required:true}
});

const seasons = new Schema({
    number:{type:Number, required:true},
    chapters:{type:[season_chapters]}
});

const serie_schema = new Schema({
    // COVER
    name:{type:String, required:true, unique:true},
    PCCover:{type:String, required:true},
    MovileCover:{type:String, required:true},
    date:{type:String, required:true}, 

    // SORT
    dateMs:{type:Number, default:Date.now()},
    views:{type:Number, default:0},
    type:{type:String, required:true},
    score:{type:Number, default:0},

    // SERIE
    description:{type:String, required:true},
    seasons:{type:[seasons]},
    user:{type:Schema.Types.ObjectId, ref:'admins', required:true},
}, {timestamps:true});

export default model('serie', serie_schema);
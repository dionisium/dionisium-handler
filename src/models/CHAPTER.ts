import { Schema, model } from 'mongoose' ;

const chapter_schema = new Schema({
    // CHAPTER
    name:{type:String, required:true},
    secure_url:{type:String, required:true},
    description:{type:String, required:true},

    // CLASIFICACION
    score:{type:Number, default:0},
    number:{type:Number, required:true},
    duration:{type:String, required:true},

    // COVER
    thumnail:{type:String, required:true},
    serie:{type:String, required:true},
    season:{type:Schema.Types.ObjectId, required:true, ref:'season'},
});

export default model('chapter', chapter_schema);
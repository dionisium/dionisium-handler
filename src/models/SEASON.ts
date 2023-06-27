import { Schema, model } from 'mongoose' ;

const season_chapters_schema = new Schema({
    name:{type:String, required:true},
    thumb:{type:String, required:true},
    duration:{type:String, required:true},
    number:{type:Number, required:true},
    chapter:{type:Schema.Types.ObjectId, required:true, ref:'chapter'}
});

const season_schema = new Schema({
    name:{type:String, required:true},
    number:{type:Number, required:true},
    chapters:{type:[season_chapters_schema]}
});

export default model('season', season_schema);
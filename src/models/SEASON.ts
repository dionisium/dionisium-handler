import { Schema, model } from 'mongoose' ;

const season_schema = new Schema({
    name:{type:String, required:true},
    number:{type:Number, required:true},
    chapters:[{type:Object, ref:'chapter'}]
});

export default model('season', season_schema);
import { Schema, model } from 'mongoose' ;

const language_schema = new Schema({
    name:{type:String, required:true},
    seasons:[{type:Object, ref:'season'}],
    seasonsN:{type:Number, default:0}
});

export default model('language', language_schema);
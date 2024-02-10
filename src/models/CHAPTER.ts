import { Schema, model } from 'mongoose' ;

const urls_screma = new Schema({
    spanish:{type:String},
    english:{type:String},
    japanese:{type:String}
});

const chapter_schema = new Schema({
    // CHAPTER
    name:{type:String, required:true},
    secures_urls:{type:urls_screma, required:true},
    description:{type:String, required:true},

    // CLASIFICACION
    number:{type:Number, required:true},

    // COVER
    serie:{type:Schema.Types.ObjectId, required:true, ref:'serie'},
});


export default model('chapter', chapter_schema);
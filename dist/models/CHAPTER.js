"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const chapter_schema = new mongoose_1.Schema({
    // CHAPTER
    name: { type: String, required: true },
    secure_url: { type: String, required: true },
    description: { type: String, required: true },
    // CLASIFICACION
    score: { type: Number, default: 0 },
    number: { type: Number, required: true },
    duration: { type: String, required: true },
    // COVER
    thumnail: { type: String, required: true },
    serie: { type: String, required: true },
    season: { type: mongoose_1.Schema.Types.ObjectId, required: true, ref: 'season' },
});
exports.default = (0, mongoose_1.model)('chapter', chapter_schema);
//# sourceMappingURL=CHAPTER.js.map
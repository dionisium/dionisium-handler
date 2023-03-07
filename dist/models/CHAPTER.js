"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const chapter_schema = new mongoose_1.Schema({
    name: { type: String, required: true },
    number: { type: Number, required: true },
    description: { type: String, required: true },
    secure_url: { type: String, required: true },
    thumnail: { type: String, required: true },
    duration: { type: Number, required: true },
    season: { type: mongoose_1.Schema.Types.ObjectId, required: true, ref: 'season' },
    serie: { type: String, required: true }
});
exports.default = (0, mongoose_1.model)('chapter', chapter_schema);
//# sourceMappingURL=CHAPTER.js.map
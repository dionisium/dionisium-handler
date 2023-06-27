"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const season_chapters_schema = new mongoose_1.Schema({
    name: { type: String, required: true },
    thumb: { type: String, required: true },
    duration: { type: String, required: true },
    number: { type: Number, required: true },
    chapter: { type: mongoose_1.Schema.Types.ObjectId, required: true, ref: 'chapter' }
});
const season_schema = new mongoose_1.Schema({
    name: { type: String, required: true },
    number: { type: Number, required: true },
    chapters: { type: [season_chapters_schema] }
});
exports.default = (0, mongoose_1.model)('season', season_schema);
//# sourceMappingURL=SEASON.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const season_schema = new mongoose_1.Schema({
    name: { type: String, required: true },
    number: { type: Number, required: true },
    chapters: [{ type: Object, ref: 'chapter' }]
});
exports.default = (0, mongoose_1.model)('season', season_schema);
//# sourceMappingURL=SEASON.js.map
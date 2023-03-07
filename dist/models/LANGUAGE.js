"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const language_schema = new mongoose_1.Schema({
    name: { type: String, required: true },
    seasons: [{ type: Object, ref: 'season' }],
    seasonsN: { type: Number, default: 0 }
});
exports.default = (0, mongoose_1.model)('language', language_schema);
//# sourceMappingURL=LANGUAGE.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chapters_1 = __importDefault(require("./chapters"));
const cover_1 = __importDefault(require("./cover"));
const language_1 = __importDefault(require("./language"));
const seasons_1 = __importDefault(require("./seasons"));
const series_1 = __importDefault(require("./series"));
// QUERY
exports.default = `
    type Query {
        get_cover(type: [Int!], limit: Int!): [cover_object]
        get_series(id: String!): Serie
        get_language(id: String!): Language
        get_season(id: String!): Seasons
        get_chapter(id: String!): Chapters
        search(series: Int!, chapters: Int!, search: String!): Search
        get_viewing(token: String!): [Viewing]
    }
    type Search {
        serie: [Serie]
        chapters: [Chapters]
    }
    type cover_object {
        section: [Cover]
        name: String
    }

    ${cover_1.default}
    ${series_1.default}
    ${language_1.default}
    ${seasons_1.default}
    ${chapters_1.default}
`;
//# sourceMappingURL=index.js.map
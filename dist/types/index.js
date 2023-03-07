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
exports.default = `
    type Query {
        get_cover(order: Int!, type: [Int!], limit: Int!): [cover_object]
        get_series(id: ID!): Serie
        get_language(id: ID!): Language
        get_season(id: ID!): Seasons
        get_chapter(id: ID!): Chapters
        search(series: Int!, chapters: Int!, search: String!): Search
        get_viewing(token: ID!): [Viewing]
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
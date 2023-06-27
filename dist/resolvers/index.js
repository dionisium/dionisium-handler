"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// CLASS
const home_1 = __importDefault(require("./home"));
const series_1 = __importDefault(require("./series"));
// IMPLEMENTS
const home = new home_1.default();
const series = new series_1.default();
class default_1 {
    constructor() {
        this.resolver = {
            Query: {
                // HOME
                get_covers_list: home.get_covers_list,
                get_viewing: home.get_viewing,
                get_recomendations: home.get_recomendations,
                // SERIE
                get_serie: series.get_serie,
                // PLAYER
                get_season: series.get_season,
                get_chapter: series.get_chapter,
                // SEARCHER
                search: home.search,
            }
        };
    }
}
exports.default = default_1;
//# sourceMappingURL=index.js.map
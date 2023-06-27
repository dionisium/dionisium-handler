"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SERIE_1 = __importDefault(require("../models/SERIE"));
const SERIE_COVER_1 = __importDefault(require("../models/SERIE_COVER"));
const LANGUAGE_1 = __importDefault(require("../models/LANGUAGE"));
const SEASON_1 = __importDefault(require("../models/SEASON"));
const CHAPTER_1 = __importDefault(require("../models/CHAPTER"));
class default_1 {
    get_series(root, { id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const coverFound = yield SERIE_COVER_1.default.findById(id);
            const serieFound = yield SERIE_1.default.findById(coverFound.serie);
            return serieFound;
        });
    }
    get_language(root, { id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const languageFound = yield LANGUAGE_1.default.findById(id);
            return languageFound;
        });
    }
    get_season(root, { id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const seasonFound = yield SEASON_1.default.findById(id);
            return seasonFound;
        });
    }
    get_chapter(root, { id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const chapterFound = yield CHAPTER_1.default.findById(id);
            return chapterFound;
        });
    }
}
exports.default = default_1;
//# sourceMappingURL=series.js.map
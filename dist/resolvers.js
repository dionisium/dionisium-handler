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
const SERIE_COVER_1 = __importDefault(require("./models/SERIE_COVER"));
const SERIE_1 = __importDefault(require("./models/SERIE"));
const LANGUAGE_1 = __importDefault(require("./models/LANGUAGE"));
const SEASON_1 = __importDefault(require("./models/SEASON"));
const CHAPTER_1 = __importDefault(require("./models/CHAPTER"));
const USERS_1 = __importDefault(require("./models/USERS"));
const jsonwebtoken_config_1 = __importDefault(require("./libs/jsonwebtoken_config"));
exports.default = {
    Query: {
        get_cover(root, { order, type, limit }) {
            return __awaiter(this, void 0, void 0, function* () {
                const sort = [{ dateMs: -1 }, { views: -1 }, { seasons: -1 }];
                const find = [{}, { gender: 'shonen' }, { gender: 'seinen' }, { languages: 'español' }];
                if (type.length == 1) {
                    let _value = find[type[0]];
                    if (type[0] == 0) {
                        _value = { _value: Object.keys(sort[order]) };
                    }
                    ;
                    return { section: yield SERIE_COVER_1.default.find(find[type[0]]).sort(sort[order]).limit(limit), name: Object.values(_value).toString() };
                }
                const covers = [];
                for (let x = 0; x < type.length; x++) {
                    let _value = find[type[x]];
                    if (type[x] == 0) {
                        _value = { _value: Object.keys(sort[order]) };
                    }
                    ;
                    covers.push({ section: yield SERIE_COVER_1.default.find(find[type[x]]).sort(sort[order]).limit(limit), name: Object.values(_value).toString() });
                }
                return covers;
            });
        },
        get_series(root, { id }) {
            return __awaiter(this, void 0, void 0, function* () {
                const serieCoverFound = yield SERIE_COVER_1.default.findById(id);
                const serieFound = yield SERIE_1.default.findById(serieCoverFound.serie);
                return serieFound;
            });
        },
        get_language(root, { id }) {
            return __awaiter(this, void 0, void 0, function* () {
                const languageFound = yield LANGUAGE_1.default.findById(id);
                return languageFound;
            });
        },
        get_season(root, { id }) {
            return __awaiter(this, void 0, void 0, function* () {
                const seasonFound = yield SEASON_1.default.findById(id);
                return seasonFound;
            });
        },
        get_chapter(root, { id }) {
            return __awaiter(this, void 0, void 0, function* () {
                const chapterFound = yield CHAPTER_1.default.findById(id);
                return chapterFound;
            });
        },
        search(root, { series, chapters, search }) {
            return __awaiter(this, void 0, void 0, function* () {
                const serieFound = yield SERIE_COVER_1.default.find({ name: RegExp(search) }).limit(series);
                const chaptersFound = yield CHAPTER_1.default.find({ name: RegExp(search) }).limit(chapters);
                return { serie: serieFound, chapters: chaptersFound };
            });
        },
        get_viewing(root, { token }) {
            return __awaiter(this, void 0, void 0, function* () {
                const decoded = yield jsonwebtoken_config_1.default.decoded(token);
                if (decoded == 'error unexpected') {
                    return [];
                }
                const userFound = yield USERS_1.default.findById(decoded._id);
                return userFound.viewing.slice(0, 3);
            });
        }
    },
};
//# sourceMappingURL=resolvers.js.map
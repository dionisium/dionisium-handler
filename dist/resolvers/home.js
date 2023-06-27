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
// MODELS
const USERS_1 = __importDefault(require("../models/USERS"));
const SERIE_COVER_1 = __importDefault(require("../models/SERIE_COVER"));
const CHAPTER_1 = __importDefault(require("../models/CHAPTER"));
// MODULES
const jsonwebtoken_config_1 = __importDefault(require("../libs/jsonwebtoken_config"));
const redis_1 = require("../redis");
class default_1 {
    get_cover(root, { type, limit }) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield redis_1.redis.get('covers');
            if (res != null) {
                return JSON.parse(res);
            }
            const types = [
                function () {
                    return __awaiter(this, void 0, void 0, function* () { return yield SERIE_COVER_1.default.find().sort({ dateMs: -1 }).limit(limit); });
                },
                function () {
                    return __awaiter(this, void 0, void 0, function* () { return yield SERIE_COVER_1.default.find().sort({ views: -1 }).limit(limit); });
                },
                function () {
                    return __awaiter(this, void 0, void 0, function* () { return yield SERIE_COVER_1.default.find().sort({ seasons: -1 }).limit(limit); });
                },
                function () {
                    return __awaiter(this, void 0, void 0, function* () { return yield SERIE_COVER_1.default.find({ gender: 'shonen' }).sort({ views: -1 }).limit(limit); });
                },
                function () {
                    return __awaiter(this, void 0, void 0, function* () { return yield SERIE_COVER_1.default.find({ gender: 'seinen' }).sort({ views: -1 }).limit(limit); });
                },
                function () {
                    return __awaiter(this, void 0, void 0, function* () { return yield SERIE_COVER_1.default.find({ languages: 'español' }).sort({ views: -1 }).limit(limit); });
                }
            ];
            const names = ['popular', 'nuevo', 'shonen', 'seinen', 'dobladas', 'largas'];
            const covers = [];
            for (let x = 0; x < type.length; x++) {
                covers.push({ section: yield types[type[x]](), name: names[type[x]] });
            }
            redis_1.redis.set('covers', JSON.stringify(covers), { EX: (60 * 60) });
            return covers;
        });
    }
    search(root, { series, chapters, search }) {
        return __awaiter(this, void 0, void 0, function* () {
            const serieFound = yield SERIE_COVER_1.default.find({ name: RegExp(search) }).limit(series);
            const chaptersFound = yield CHAPTER_1.default.find({ name: RegExp(search) }).limit(chapters);
            return { serie: serieFound, chapters: chaptersFound };
        });
    }
    get_viewing(root, { token }) {
        return __awaiter(this, void 0, void 0, function* () {
            const decoded = yield jsonwebtoken_config_1.default.decoded(token);
            if (decoded == 'error unexpected') {
                return [];
            }
            const userFound = yield USERS_1.default.findById(decoded === null || decoded === void 0 ? void 0 : decoded["_id"]);
            return userFound.viewing.slice(0, 3);
        });
    }
}
exports.default = default_1;
//# sourceMappingURL=home.js.map
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
const graphql_yoga_1 = require("graphql-yoga");
const jsonwebtoken_config_1 = __importDefault(require("../libs/jsonwebtoken_config"));
const redis_1 = require("../redis");
class default_1 {
    get_covers_list(root, { type, mode, to, limit }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (type == 'shonen' || type == 'isekai') {
                const res = yield redis_1.redis.get(`${type}-${mode}-${to}`);
                if (res != null) {
                    return JSON.parse(res);
                }
            }
            if (to > 1 || to < -1) {
                return (0, graphql_yoga_1.createGraphQLError)('the input "to" is invalid');
            }
            if (mode != 'score' && mode != 'createdAt' && mode != "views") {
                return (0, graphql_yoga_1.createGraphQLError)('the input "mode" is invalid');
            }
            let order = [mode, to];
            let map = new Map([order]);
            let sort = Object.fromEntries(map);
            const cover = yield SERIE_COVER_1.default.find({ type }).sort(sort).limit(limit);
            const list = { name: `${type}-${mode}-${to}`, section: cover };
            if (type == 'shonen' || type == 'isekai') {
                redis_1.redis.set(list.name, JSON.stringify(list), { EX: (60 * 60 * 24) });
            }
            return list;
        });
    }
    get_recomendations(root, { limit, type }) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield redis_1.redis.get(type);
            if (res != null) {
                const data = JSON.parse(res);
                return data.slice(0, limit);
            }
            else {
                const res = yield redis_1.redis.get('forYou');
                if (res != null) {
                    return JSON.parse(res);
                }
            }
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
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// RESOLVERS
const home_1 = __importDefault(require("./home"));
exports.default = {
    Query: {
        // HOME
        get_products: home_1.default.get_products,
        get_shells: home_1.default.get_shells,
        get_shells_product: home_1.default.get_shells_product,
        new_product: home_1.default.new_product,
        new_shell: home_1.default.new_shell,
        update_product: home_1.default.update_product,
        search_product: home_1.default.search_product,
    }
};

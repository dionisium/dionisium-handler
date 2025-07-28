"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const product_schema = new mongoose_1.Schema({
    name: { type: String, required: true },
    stock: { type: Number, required: true },
    price: { type: Number, required: true },
    cost: { type: Number, required: true },
    shells: { type: [String] },
    category: { type: String, required: true },
    page: { type: String, required: true },
    datems: { type: Number, default: Date.now() },
    image: { type: String, default: '' }
});
exports.default = (0, mongoose_1.model)('product', product_schema);

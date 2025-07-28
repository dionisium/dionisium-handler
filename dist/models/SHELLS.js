"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const shell_interface = new mongoose_1.Schema({
    date: { type: String, required: true },
    first_quote: { type: Number, required: true },
    description: { type: String, required: true },
    quantity: { type: Number, required: true },
    datems: { type: Number, default: Date.now() }
});
exports.default = (0, mongoose_1.model)('shell', shell_interface);

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
// DOTENV
const PROD = process.env.PRODUCTION || false;
if (PROD == false) {
    const { config } = require('dotenv');
    config();
}
// IMPORTS
const fastify_1 = __importDefault(require("fastify"));
const cors_1 = __importDefault(require("@fastify/cors"));
const server_1 = __importDefault(require("./server"));
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = (0, fastify_1.default)({ logger: true });
        yield app.register(cors_1.default);
        // DATABASE
        require('./database');
        require('./redis');
        // GRAPHQL SERVER
        app.setDefaultRoute((0, server_1.default)());
        // SERVER
        const PORT = process.env.PORT || 4560;
        app.listen(PORT, () => {
            console.log('server on port:' + PORT);
        });
    });
}
function restart() {
    runServer();
}
function runServer() {
    start()
        .then(server => { console.log('on connection'); })
        .catch((err) => {
        console.log(err);
        restart();
        return;
    });
}
runServer();
//# sourceMappingURL=index.js.map
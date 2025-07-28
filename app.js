'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// DOTENV
const PROD = process.env.PRODUCTION || false;
const dotenv_1 = require("dotenv");
if (PROD == false) {
    (0, dotenv_1.config)();
}
const fastify_1 = __importDefault(require("fastify"));
const graphql_1 = __importDefault(require("./server/graphql"));
async function start() {
    const app = (0, fastify_1.default)({ logger: true });
    // DATABASE
    require('./server/database');
    // GRAPHQL SERVER
    app.register(graphql_1.default);
    // SERVER
    const PORT = typeof process.env.PORT == 'number' ? process.env.PORT : Number(process.env.PORT) ? Number(process.env.PORT) : 3000;
    const HOST = process.env.HOST || 'localhost';
    app.listen({ port: PORT, host: HOST }, (_err, _address) => {
        console.info(_address);
        console.log(`Sever run in ${HOST}:${PORT}`);
        console.error(_err);
    });
}
;
start();

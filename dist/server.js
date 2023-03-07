"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tools_1 = require("graphql-tools");
const graphql_yoga_1 = require("graphql-yoga");
const index_1 = __importDefault(require("./types/index"));
const resolvers_1 = __importDefault(require("./resolvers"));
function default_1() {
    return (0, graphql_yoga_1.createYoga)({
        schema: (0, graphql_tools_1.makeExecutableSchema)({
            resolvers: [resolvers_1.default],
            typeDefs: [index_1.default]
        }),
        landingPage: false,
        graphqlEndpoint: '/',
    });
}
exports.default = default_1;
//# sourceMappingURL=server.js.map
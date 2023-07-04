"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// MODULES
const graphql_tools_1 = require("graphql-tools");
const graphql_yoga_1 = require("graphql-yoga");
// TYPES
const index_1 = __importDefault(require("./types/index"));
// RESOLVER
const index_2 = __importDefault(require("./resolvers/index"));
const resolver = new index_2.default().resolver;
function default_1() {
    return (0, graphql_yoga_1.createYoga)({
        schema: (0, graphql_tools_1.makeExecutableSchema)({
            resolvers: [resolver],
            typeDefs: [index_1.default]
        }),
        landingPage: false,
        graphqlEndpoint: '/',
    });
    // return makeExecutableSchema({
    //     resolvers: [resolver],
    //     typeDefs: [types]
    // });
}
exports.default = default_1;
//# sourceMappingURL=server.js.map
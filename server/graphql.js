"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const graphql_yoga_1 = require("graphql-yoga");
// TYPES
const index_1 = __importDefault(require("../types/index"));
// RESOLVER
const index_2 = __importDefault(require("../resolvers/index"));
function default_1(fastify, options, done) {
    const yoga = (0, graphql_yoga_1.createYoga)({
        schema: (0, graphql_yoga_1.createSchema)({
            resolvers: [index_2.default],
            typeDefs: [index_1.default]
        }),
        landingPage: false,
        graphqlEndpoint: '/',
        logging: {
            debug: (...args) => args.forEach(arg => fastify.log.debug(arg)),
            info: (...args) => args.forEach(arg => fastify.log.info(arg)),
            warn: (...args) => args.forEach(arg => fastify.log.warn(arg)),
            error: (...args) => args.forEach(arg => fastify.log.error(arg))
        },
        parserAndValidationCache: true,
        plugins: [
        // useResponseCache({
        //     session: () => null,
        //     ttl: 3600_000,
        // })
        ],
        batching: true
    });
    fastify.route({
        url: yoga.graphqlEndpoint,
        method: ['GET', 'POST', 'OPTIONS'],
        handler: async (req, reply) => {
            const response = await yoga.handleNodeRequestAndResponse(req, reply);
            // DEPRECATED
            // const response = await yoga.handleNodeRequest(req, {req,reply});
            response.headers.forEach((value, key) => {
                reply.header(key, value);
            });
            reply.status(response.status);
            reply.send(response.body);
            return reply;
        }
    });
    done();
}

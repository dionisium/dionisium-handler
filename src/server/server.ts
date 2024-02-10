// MODULES
import { FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest } from 'fastify';
import { makeExecutableSchema } from 'graphql-tools';
import { createYoga } from 'graphql-yoga';

// TYPES
import types from '../types/index';

// RESOLVER
import Resolver from '../resolvers/index';

export default function(fastify:FastifyInstance, options:FastifyPluginOptions, done:Function){
    const resolver = new Resolver().resolver;
    const yoga = createYoga<{req:FastifyRequest, reply:FastifyReply}>({
        schema:makeExecutableSchema({
            resolvers: [resolver],
            typeDefs: [types]
        }),
        landingPage:false,
        graphqlEndpoint:'/',
        logging: {
            debug: (...args) => args.forEach(arg => fastify.log.debug(arg)),
            info: (...args) => args.forEach(arg => fastify.log.info(arg)),
            warn: (...args) => args.forEach(arg => fastify.log.warn(arg)),
            error: (...args) => args.forEach(arg => fastify.log.error(arg))
          }
    });
    fastify.route({
        url: yoga.graphqlEndpoint,
        method:['GET', 'POST', 'OPTIONS'],
        handler: async (req, reply) => {
            const response = await yoga.handleNodeRequest(req, {req,reply});
            response.headers.forEach((value, key) => {
                reply.header(key, value)
            });
            reply.status(response.status);
            reply.send(response.body);
            return reply;
        }
    });
    done();
}
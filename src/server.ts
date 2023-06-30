// MODULES
import { makeExecutableSchema } from 'graphql-tools';
import { createYoga } from 'graphql-yoga';

// TYPES
import types from './types/index';

// RESOLVER
import Resolver from './resolvers/index';
const resolver = new Resolver().resolver;

export default function(){
    return createYoga({
        schema:makeExecutableSchema({
            resolvers: [resolver],
            typeDefs: [types]
        }),
        landingPage:false,
        graphqlEndpoint:'/api/',
    });
}
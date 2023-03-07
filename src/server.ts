import { makeExecutableSchema } from 'graphql-tools';
import { createYoga } from 'graphql-yoga';
import types from './types/index';
import resolver from './resolvers';

export default function(){
    return createYoga({
        schema:makeExecutableSchema({
            resolvers: [resolver],
            typeDefs: [types]
        }),
        landingPage:false,
        graphqlEndpoint:'/',
    });
}
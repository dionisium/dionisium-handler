// DOTENV
const PROD = process.env.PRODUCTION || false;
if(PROD == false){
    const {config} = require('dotenv');
    config();
}

// IMPORTS
import fastify from 'fastify';
import cors from '@fastify/cors';
import MOD from 'method-override';
import graphql_server from './server';

async function start():Promise<void>{
    const app = fastify({logger:true});
    await app.register(cors);

    // DATABASE
    require('./database');
    require('./redis');
    
    // GRAPHQL SERVER
    app.setDefaultRoute(graphql_server());

    // SERVER
    const PORT = process.env.PORT || 4560;
    app.listen(PORT, ()=>{
        console.log('server on port:' + PORT);
    });
}

start()
    .then(server => {console.log('on connection');})
    .catch((err)=>{
        console.log(err);
        start();
        return;
    });
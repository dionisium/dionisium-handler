import { createClient } from "redis";

export const redis = createClient({
    password: '47njoeXULMpjyxryrVqfdTL7NN9CRq9j',
    socket: {
        host: 'redis-16011.c85.us-east-1-2.ec2.cloud.redislabs.com',
        port: 16011
    }
});

function connect():void{
    try{
        redis.connect()
            .then(reply => console.log('redis on connection'))
            .catch(err => {
                console.log(err);
            });
    }catch(err){
        connect();
    }
}
connect();
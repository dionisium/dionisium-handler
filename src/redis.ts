import { createClient } from "redis";

export const redis = createClient({
    password:'rXVsVQe2w4UdnbmgmUik7p0v3AMXEuVa',
    socket:{
        host: 'redis-11473.c280.us-central1-2.gce.cloud.redislabs.com',
        port: 11473
    }
});

redis.connect()
    .then(reply => console.log('redis on connection'))
    .catch(err => console.error(err));
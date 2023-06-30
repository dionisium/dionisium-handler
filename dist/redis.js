"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redis = void 0;
const redis_1 = require("redis");
exports.redis = (0, redis_1.createClient)({
    password: '47njoeXULMpjyxryrVqfdTL7NN9CRq9j',
    socket: {
        host: 'redis-16011.c85.us-east-1-2.ec2.cloud.redislabs.com',
        port: 16011
    }
});
exports.redis.connect()
    .then(reply => console.log('redis on connection'))
    .catch(err => {
    console.log(err);
});
//# sourceMappingURL=redis.js.map
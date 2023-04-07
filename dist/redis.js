"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redis = void 0;
const redis_1 = require("redis");
exports.redis = (0, redis_1.createClient)({
    password: 'rXVsVQe2w4UdnbmgmUik7p0v3AMXEuVa',
    socket: {
        host: 'redis-11473.c280.us-central1-2.gce.cloud.redislabs.com',
        port: 11473
    }
});
exports.redis.connect()
    .then(reply => console.log('redis on connection'))
    .catch(err => console.error(err));
//# sourceMappingURL=redis.js.map
import { createRedisCache } from '@envelop/response-cache-redis';
import type { UseResponseCacheParameter } from '@graphql-yoga/plugin-response-cache';
import { Redis } from 'ioredis';

const redis = new Redis({
  port: 6382,
});

export const cache = createRedisCache({ redis }) as UseResponseCacheParameter['cache'];

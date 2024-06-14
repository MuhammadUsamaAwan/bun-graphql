import { Redis } from 'ioredis';

export const connection = new Redis({
  port: 6382,
  maxRetriesPerRequest: null,
});

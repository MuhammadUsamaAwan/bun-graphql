import { createRedisEventTarget } from '@graphql-yoga/redis-event-target';
import { createPubSub } from 'graphql-yoga';
import { Redis } from 'ioredis';
import superjson from 'superjson';

import type { TodoSubscription } from '~/schema/types.generated';

const publishClient = new Redis({
  port: 6382,
});
const subscribeClient = new Redis({
  port: 6382,
});

const eventTarget = createRedisEventTarget({
  publishClient,
  subscribeClient,
  serializer: superjson,
});

export const pubSub = createPubSub<{
  todo: [TodoSubscription];
}>({ eventTarget });

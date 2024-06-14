import { Queue, Worker } from 'bullmq';
import { Redis } from 'ioredis';

import { TOPICS } from '~/config/constants';
import { pubSub } from '~/lib/pubsub';
import type { TodoSubscription } from '~/schema/types.generated';

const connection = new Redis({
  port: 6382,
  maxRetriesPerRequest: null,
});

export const todoQueue = new Queue<TodoSubscription['data'], unknown, TodoSubscription['action']>(TOPICS.TODO, {
  connection,
});

export const todoWorker = new Worker<TodoSubscription['data'], unknown, TodoSubscription['action']>(
  TOPICS.TODO,
  async job => {
    pubSub.publish('todo', {
      action: job.name,
      data: job.data,
    });
  },
  { connection }
);

import { Queue, Worker } from 'bullmq';

import { TOPICS } from '~/config/constants';
import { pubSub } from '~/lib/pubsub';
import { connection } from '~/lib/redis';
import type { TodoSubscription } from '~/schema/types.generated';

export const todoQueue = new Queue<TodoSubscription['data'], void, TodoSubscription['action']>(TOPICS.TODO, {
  connection,
});

export const todoWorker = new Worker<TodoSubscription['data'], void, TodoSubscription['action']>(
  TOPICS.TODO,
  async job => {
    pubSub.publish(TOPICS.TODO, {
      action: job.name,
      data: job.data,
    });
  },
  { connection }
);

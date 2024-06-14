import { pubSub } from '~/lib/pubsub';

import type { SubscriptionResolvers, TodoSubscription } from './../../../types.generated';

export const todoSubscriptions: NonNullable<SubscriptionResolvers['todoSubscriptions']> = {
  subscribe: async (_parent, _arg, _ctx) => {
    return pubSub.subscribe('todo');
  },
  resolve: (payload: TodoSubscription) => {
    return payload;
  },
};

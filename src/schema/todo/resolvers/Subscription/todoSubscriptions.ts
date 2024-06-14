import { pubSub } from '~/lib/pubsub';

import { SUBSCRIPTION_TOPICS } from '~/config/constants';

import type { SubscriptionResolvers, TodoSubscription } from './../../../types.generated';

export const todoSubscriptions: NonNullable<SubscriptionResolvers['todoSubscriptions']> = {
  subscribe: async (_parent, _arg, _ctx) => {
    return pubSub.subscribe(SUBSCRIPTION_TOPICS.TODO);
  },
  resolve: (payload: TodoSubscription) => {
    return payload;
  },
};

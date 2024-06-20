import { filter, pipe } from 'graphql-yoga';

import { TOPICS } from '~/config/constants';
import { getUserOrThrow } from '~/lib/auth';
import { pubSub } from '~/lib/pubsub';

import type { SubscriptionResolvers, TodoSubscription } from './../../../types.generated';

export const todoSubscriptions: NonNullable<SubscriptionResolvers['todoSubscriptions']> = {
  subscribe: async (_parent, _arg, _ctx) => {
    const user = await getUserOrThrow(_ctx);
    return pipe(
      pubSub.subscribe(TOPICS.TODO),
      filter(payload => user.sub === payload.data.userId)
    );
  },
  resolve: (payload: TodoSubscription) => {
    return payload;
  },
};

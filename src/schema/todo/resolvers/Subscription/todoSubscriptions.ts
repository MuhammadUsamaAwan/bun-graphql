import { filter, pipe } from 'graphql-yoga';

import { getUserOrThrow } from '~/lib/auth';
import { pubSub } from '~/lib/pubSub';

import type { SubscriptionResolvers, TodoSubscription } from './../../../types.generated';

export const todoSubscriptions: NonNullable<SubscriptionResolvers['todoSubscriptions']> = {
  subscribe: async (_parent, _arg, _ctx) => {
    const user = await getUserOrThrow(_ctx);
    return pipe(
      pubSub.subscribe('todo'),
      filter(payload => user.sub === payload.data.userId)
    );
  },
  resolve: (payload: TodoSubscription) => {
    return payload;
  },
};

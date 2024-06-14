import { pubSub } from '~/lib/pubsub';
import { getUser } from '~/utils';

import { ACTION, SUBSCRIPTION_TOPICS } from '~/config/constants';
import { db } from '~/db';
import { todosSchema } from '~/db/schema';

import type { MutationResolvers } from './../../../types.generated';

export const createTodo: NonNullable<MutationResolvers['createTodo']> = async (_parent, _arg, _ctx) => {
  const user = getUser(_ctx);

  const [todo] = await db
    .insert(todosSchema)
    .values({
      text: _arg.input.text,
      completed: _arg.input.completed ?? false,
      userId: user.sub,
    })
    .returning();

  pubSub.publish(SUBSCRIPTION_TOPICS.TODO, {
    action: ACTION.CREATE,
    data: todo,
  });

  return todo;
};

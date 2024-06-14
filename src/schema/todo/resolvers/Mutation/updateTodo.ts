import { pubSub } from '~/lib/pubsub';
import { getUser } from '~/utils';
import { and, eq } from 'drizzle-orm';

import { ACTION, SUBSCRIPTION_TOPICS } from '~/config/constants';
import { db } from '~/db';
import { todosSchema } from '~/db/schema';

import type { MutationResolvers } from './../../../types.generated';

export const updateTodo: NonNullable<MutationResolvers['updateTodo']> = async (_parent, _arg, _ctx) => {
  const user = getUser(_ctx);

  const [todo] = await db
    .update(todosSchema)
    .set({
      text: _arg.input.text,
      completed: _arg.input.completed ?? undefined,
    })
    .where(and(eq(todosSchema.id, _arg.id), eq(todosSchema.userId, user.sub)))
    .returning();

  pubSub.publish(SUBSCRIPTION_TOPICS.TODO, {
    action: ACTION.UPDATE,
    data: todo,
  });

  return todo;
};

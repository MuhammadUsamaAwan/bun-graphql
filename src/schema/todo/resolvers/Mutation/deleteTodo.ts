import { and, eq } from 'drizzle-orm';

import { db } from '~/db';
import { todosSchema } from '~/db/schema';
import { getUserOrThrow } from '~/lib/auth';
import { pubSub } from '~/lib/pubSub';

import type { MutationResolvers } from './../../../types.generated';

export const deleteTodo: NonNullable<MutationResolvers['deleteTodo']> = async (_parent, _arg, _ctx) => {
  const user = await getUserOrThrow(_ctx);

  const [todo] = await db
    .delete(todosSchema)
    .where(and(eq(todosSchema.id, _arg.id), eq(todosSchema.userId, user.sub)))
    .returning();

  pubSub.publish('todo', {
    action: 'delete',
    data: todo,
  });

  return todo;
};

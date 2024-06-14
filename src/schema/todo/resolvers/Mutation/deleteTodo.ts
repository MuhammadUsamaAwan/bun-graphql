import { getUser } from '~/utils';
import { and, eq } from 'drizzle-orm';

import { db } from '~/db';
import { todosSchema } from '~/db/schema';

import type { MutationResolvers } from './../../../types.generated';

export const deleteTodo: NonNullable<MutationResolvers['deleteTodo']> = async (_parent, _arg, _ctx) => {
  const user = getUser(_ctx);

  const [todo] = await db
    .delete(todosSchema)
    .where(and(eq(todosSchema.id, _arg.id), eq(todosSchema.userId, user.sub)))
    .returning();

  return todo;
};

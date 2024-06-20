import { and, eq } from 'drizzle-orm';

import { db } from '~/db';
import { todosSchema } from '~/db/schema';
import { getUserOrThrow } from '~/lib/auth';

import { todoQueue } from '../TodoJobs';
import type { MutationResolvers } from './../../../types.generated';

export const updateTodo: NonNullable<MutationResolvers['updateTodo']> = async (_parent, _arg, _ctx) => {
  const user = await getUserOrThrow(_ctx);

  const [todo] = await db
    .update(todosSchema)
    .set({
      text: _arg.input.text,
      completed: _arg.input.completed ?? undefined,
    })
    .where(and(eq(todosSchema.id, _arg.id), eq(todosSchema.userId, user.sub)))
    .returning();

  await todoQueue.add('delete', todo);

  return todo;
};

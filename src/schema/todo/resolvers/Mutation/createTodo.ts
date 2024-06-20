import { db } from '~/db';
import { todosSchema } from '~/db/schema';
import { getUserOrThrow } from '~/lib/auth';

import { todoQueue } from '../TodoJobs';
import type { MutationResolvers } from './../../../types.generated';

export const createTodo: NonNullable<MutationResolvers['createTodo']> = async (_parent, _arg, _ctx) => {
  const user = await getUserOrThrow(_ctx);

  const [todo] = await db
    .insert(todosSchema)
    .values({
      text: _arg.input.text,
      completed: _arg.input.completed ?? false,
      userId: user.sub,
    })
    .returning();

  await todoQueue.add('create', todo);

  return todo;
};

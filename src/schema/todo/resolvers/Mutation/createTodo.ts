import { db } from '~/db';
import { todosSchema } from '~/db/schema';
import { getUserOrThrow } from '~/lib/auth';
import { pubSub } from '~/lib/pubSub';

import type { MutationResolvers } from './../../../types.generated';

export const createTodo: NonNullable<MutationResolvers['createTodo']> = async (_parent, _arg, _ctx) => {
  const user = await getUserOrThrow(_ctx);

  const [todo] = await db
    .insert(todosSchema)
    .values({
      text: _arg.input.text,
      completed: _arg.input.completed ?? false,
      userId: user.id,
    })
    .returning();

  pubSub.publish('todo', {
    action: 'create',
    data: todo,
  });

  return todo;
};

import { eq } from 'drizzle-orm';

import { db } from '~/db';
import { todosSchema } from '~/db/schema';
import { getUserOrThrow } from '~/lib/auth';

import type { QueryResolvers } from './../../../types.generated';

export const todos: NonNullable<QueryResolvers['todos']> = async (_parent, _arg, _ctx) => {
  const user = await getUserOrThrow(_ctx);
  return db.select().from(todosSchema).where(eq(todosSchema.userId, user.sub));
};

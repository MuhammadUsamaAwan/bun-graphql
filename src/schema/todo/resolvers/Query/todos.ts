import { eq } from 'drizzle-orm';

import { db } from '~/db';
import { todosSchema } from '~/db/schema';

import type { QueryResolvers } from './../../../types.generated';

export const todos: NonNullable<QueryResolvers['todos']> = async (_parent, _arg, _ctx) => {
  if (!_ctx.user?.sub) {
    return [];
  }
  return db.select().from(todosSchema).where(eq(todosSchema.userId, _ctx.user?.sub));
};

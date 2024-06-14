import { eq } from 'drizzle-orm';

import { db } from '~/db';
import { users } from '~/db/schema';

import type { QueryResolvers } from './../../../types.generated';

export const me: NonNullable<QueryResolvers['me']> = async (_parent, _arg, _ctx) => {
  if (!_ctx.user?.sub) {
    return null;
  }
  const [user] = await db.select().from(users).where(eq(users.id, _ctx.user?.sub));
  return user;
};

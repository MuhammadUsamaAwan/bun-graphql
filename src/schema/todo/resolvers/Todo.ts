import { eq } from 'drizzle-orm';

import { db } from '~/db';
import { usersSchema } from '~/db/schema';

import type { TodoResolvers } from './../../types.generated';

export const Todo: TodoResolvers = {
  user: async (parent, _args, _ctx) => {
    const [res] = await db.select().from(usersSchema).where(eq(usersSchema.id, parent.userId));
    return res;
  },
};

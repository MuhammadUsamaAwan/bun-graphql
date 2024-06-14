import { usersSchema } from '~/db/schema';
import { getLoader } from '~/lib/loader';

import type { TodoResolvers } from './../../types.generated';

export const Todo: TodoResolvers = {
  user: async (parent, _args, _ctx) => {
    const usersLoader = getLoader(usersSchema, usersSchema.id);
    return usersLoader.load(parent.userId);
  },
};

import { createSchema, createYoga } from 'graphql-yoga';
import { jwtVerify } from 'jose';

import { env } from '~/config/env';
import { resolvers } from '~/schema/resolvers.generated';
import { typeDefs } from '~/schema/typeDefs.generated';

export const schema = createSchema({ typeDefs, resolvers });

export const yoga = createYoga({
  schema,
  healthCheckEndpoint: '/health',
  context: async ({ request }) => {
    const token = request.headers.get('authorization')?.split(' ')[1];
    if (!token) return {};
    const user = await jwtVerify(token, new TextEncoder().encode(env.JWT_SECRET));
    return { user: user.payload };
  },
});

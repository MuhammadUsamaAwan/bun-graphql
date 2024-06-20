import { createSchema, createYoga } from 'graphql-yoga';

import { allowedOrigins } from '~/config/constants';
import { resolvers } from '~/schema/resolvers.generated';
import { typeDefs } from '~/schema/typeDefs.generated';

export const schema = createSchema({ typeDefs, resolvers });

export const yoga = createYoga({
  schema,
  healthCheckEndpoint: '/health',
  cors: {
    origin: allowedOrigins,
  },
  logging: 'debug',
});

import { createSchema, createYoga, useLogger } from 'graphql-yoga';

import { allowedOrigins } from '~/config/constants';
import { logger } from '~/lib/logger';
import { resolvers } from '~/schema/resolvers.generated';
import { typeDefs } from '~/schema/typeDefs.generated';

export const schema = createSchema({ typeDefs, resolvers });

export const yoga = createYoga({
  schema,
  healthCheckEndpoint: '/health',
  cors: {
    origin: allowedOrigins,
  },
  plugins: [
    useLogger({
      logFn: (eventName, args) => {
        logger(eventName, args);
      },
      skipIntrospection: true,
    }),
  ],
});

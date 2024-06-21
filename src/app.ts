import type { GraphQLFormattedError } from 'graphql';
import { createSchema, createYoga, useLogger } from 'graphql-yoga';

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
  plugins: [
    useLogger({
      logFn: (eventName, args) => {
        const timestamp = new Date().toISOString();
        const host = args?.args?.contextValue?.hostname;
        const body = args?.args?.document?.loc?.source.body?.replace(/\n/g, '');
        const error = args?.result?.errors;
        const errorMessage = args?.result?.errors?.map((e: GraphQLFormattedError) => e?.message)?.join(', ');
        console.debug(
          `[${timestamp}] ${eventName} [Client: ${host}] [Body: ${body}] ${error ? `[Error: ${errorMessage}]` : '[Success]'}`
        );
      },
      skipIntrospection: true,
    }),
  ],
});

import { createSchema, createYoga } from 'graphql-yoga';

import { resolvers } from '~/schema/resolvers.generated';
import { typeDefs } from '~/schema/typeDefs.generated';

export const schema = createSchema({ typeDefs, resolvers });

export const yoga = createYoga({ schema, healthCheckEndpoint: '/health' });

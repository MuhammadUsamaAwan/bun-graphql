import { GraphQLError } from 'graphql';
import { SignJWT } from 'jose';

import { env } from '~/config/env';
import type { GraphQLContext, JWTPayload } from '~/types';

export function signJWT(payload: JWTPayload) {
  return new SignJWT()
    .setProtectedHeader({ alg: env.JWT_ALGORITHM })
    .setIssuedAt()
    .setSubject(payload.sub)
    .setIssuer(env.JWT_ISSUER)
    .setExpirationTime(env.JWT_EXPIRES_IN)
    .sign(new TextEncoder().encode(env.JWT_SECRET));
}

export function getUser(context: GraphQLContext) {
  const user = context.user;
  if (!user) {
    throw new GraphQLError('Not authenticated', {
      extensions: {
        http: {
          status: 401,
        },
      },
    });
  }
  return user;
}

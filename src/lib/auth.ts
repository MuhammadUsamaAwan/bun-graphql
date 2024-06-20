import { GraphQLError } from 'graphql';
import type { YogaInitialContext } from 'graphql-yoga';
import { jwtVerify, SignJWT } from 'jose';

import { env } from '~/config/env';
import type { JWTPayload } from '~/types';

export function signJWT(payload: JWTPayload) {
  return new SignJWT()
    .setProtectedHeader({ alg: env.JWT_ALGORITHM })
    .setIssuedAt()
    .setSubject(payload.sub)
    .setIssuer(env.JWT_ISSUER)
    .setExpirationTime(env.JWT_EXPIRES_IN)
    .sign(new TextEncoder().encode(env.JWT_SECRET));
}

export async function getUser(context: YogaInitialContext) {
  const token = context.request.headers.get('authorization')?.split(' ')[1];
  if (!token) {
    return null;
  }
  try {
    const { payload } = await jwtVerify(token, new TextEncoder().encode(env.JWT_SECRET));
    return payload as JWTPayload;
  } catch (error) {
    return null;
  }
}

export async function getUserOrThrow(context: YogaInitialContext) {
  const token = context.request.headers.get('authorization')?.split(' ')[1];
  if (!token) {
    throw new GraphQLError('Unauthorized', {
      extensions: {
        http: {
          status: 401,
        },
      },
    });
  }
  try {
    const { payload } = await jwtVerify(token, new TextEncoder().encode(env.JWT_SECRET));
    return payload as JWTPayload;
  } catch (error) {
    throw new GraphQLError('Invalid token', {
      extensions: {
        http: {
          status: 403,
        },
      },
    });
  }
}

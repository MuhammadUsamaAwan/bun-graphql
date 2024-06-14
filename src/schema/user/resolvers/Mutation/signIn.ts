import { eq } from 'drizzle-orm';
import { SignJWT } from 'jose';

import { env } from '~/config/env';
import { db } from '~/db';
import { users } from '~/db/schema';

import type { MutationResolvers } from './../../../types.generated';

export const signIn: NonNullable<MutationResolvers['signIn']> = async (_parent, _arg, _ctx) => {
  const [user] = await db.select().from(users).where(eq(users.email, _arg.input.email));

  if (!user) {
    throw new Error('Email or password is incorrect');
  }

  const isPasswordCorrect = await Bun.password.verify(_arg.input.password, user.password);

  if (!isPasswordCorrect) {
    throw new Error('Email or password is incorrect');
  }

  const token = await new SignJWT()
    .setProtectedHeader({ alg: env.JWT_ALGORITHM })
    .setIssuedAt()
    .setSubject(user.id)
    .setIssuer(env.JWT_ISSUER)
    .setExpirationTime(env.JWT_EXPIRES_IN)
    .sign(new TextEncoder().encode(env.JWT_SECRET));

  return { token, user };
};

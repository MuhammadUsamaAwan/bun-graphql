import { eq } from 'drizzle-orm';
import { SignJWT } from 'jose';

import { env } from '~/config/env';
import { db } from '~/db';
import { users } from '~/db/schema';

import type { MutationResolvers } from './../../../types.generated';

export const signUp: NonNullable<MutationResolvers['signUp']> = async (_parent, _arg, _ctx) => {
  const [user] = await db.select().from(users).where(eq(users.email, _arg.input.email));

  if (user) {
    throw new Error('User already exists');
  }

  const hash = await Bun.password.hash(_arg.input.password);

  const [newUser] = await db
    .insert(users)
    .values({
      email: _arg.input.email,
      password: hash,
    })
    .returning();

  const token = await new SignJWT()
    .setProtectedHeader({ alg: env.JWT_ALGORITHM })
    .setIssuedAt()
    .setSubject(newUser.id)
    .setIssuer(env.JWT_ISSUER)
    .setExpirationTime(env.JWT_EXPIRES_IN)
    .sign(new TextEncoder().encode(env.JWT_SECRET));

  return { token, user: newUser };
};

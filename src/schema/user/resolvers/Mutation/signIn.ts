import { eq } from 'drizzle-orm';

import { db } from '~/db';
import { usersSchema } from '~/db/schema';
import { signJWT } from '~/lib/auth';

import type { MutationResolvers } from './../../../types.generated';

export const signIn: NonNullable<MutationResolvers['signIn']> = async (_parent, _arg, _ctx) => {
  const [user] = await db.select().from(usersSchema).where(eq(usersSchema.email, _arg.input.email));

  if (!user) {
    throw new Error('Email or password is incorrect');
  }

  const isPasswordCorrect = await Bun.password.verify(_arg.input.password, user.password);

  if (!isPasswordCorrect) {
    throw new Error('Email or password is incorrect');
  }

  const token = await signJWT({ sub: user.id });

  return { token, user };
};

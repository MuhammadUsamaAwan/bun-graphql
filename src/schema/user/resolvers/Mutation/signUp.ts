import { eq } from 'drizzle-orm';

import { db } from '~/db';
import { usersSchema } from '~/db/schema';
import { signJWT } from '~/lib/auth';

import type { MutationResolvers } from './../../../types.generated';

export const signUp: NonNullable<MutationResolvers['signUp']> = async (_parent, _arg, _ctx) => {
  const [user] = await db.select().from(usersSchema).where(eq(usersSchema.email, _arg.input.email));

  if (user) {
    throw new Error('User already exists');
  }

  const hash = await Bun.password.hash(_arg.input.password);

  const [newUser] = await db
    .insert(usersSchema)
    .values({
      email: _arg.input.email,
      password: hash,
    })
    .returning();

  const token = await signJWT({ id: newUser.id });

  return { token, user: newUser };
};

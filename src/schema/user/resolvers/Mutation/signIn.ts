import { eq } from 'drizzle-orm';
import { GraphQLError } from 'graphql';

import { db } from '~/db';
import { usersSchema } from '~/db/schema';
import { signJWT } from '~/lib/auth';

import type { MutationResolvers } from './../../../types.generated';

export const signIn: NonNullable<MutationResolvers['signIn']> = async (_parent, _arg, _ctx) => {
  const [user] = await db.select().from(usersSchema).where(eq(usersSchema.email, _arg.input.email));

  if (!user) {
    throw new GraphQLError('Email or password is incorrect', {
      extensions: {
        http: {
          status: 400,
        },
      },
    });
  }

  const isPasswordCorrect = await Bun.password.verify(_arg.input.password, user.password);

  if (!isPasswordCorrect) {
    throw new GraphQLError('Email or password is incorrect', {
      extensions: {
        http: {
          status: 400,
        },
      },
    });
  }

  const token = await signJWT({ id: user.id });

  return { token, user };
};

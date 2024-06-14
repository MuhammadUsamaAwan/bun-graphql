import { createEnv } from '@t3-oss/env-core';
import { z } from 'zod';

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().url(),
    JWT_SECRET: z.string(),
    JWT_ISSUER: z.string(),
    JWT_EXPIRES_IN: z.string(),
    JWT_ALGORITHM: z.enum([
      'HS256',
      'HS384',
      'HS512',
      'RS256',
      'RS384',
      'RS512',
      'ES256',
      'ES384',
      'ES512',
      'PS256',
      'PS384',
      'PS512',
      'none',
    ]),
  },
  runtimeEnv: process.env,
  emptyStringAsUndefined: true,
});

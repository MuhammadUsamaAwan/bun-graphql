import { createEnv } from '@t3-oss/env-core';
import { z } from 'zod';

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().url(),
    JWT_SECRET: z.string(),
    JWT_ISSUER: z.string(),
    JWT_EXPIRES_IN: z.string(),
  },
  runtimeEnv: process.env,
  emptyStringAsUndefined: true,
});

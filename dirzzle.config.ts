import { defineConfig } from 'drizzle-kit';

import { env } from '~/config/env';

export default defineConfig({
  schema: './src/db/schema.ts',
  dialect: 'postgresql',
  out: './migrations',
  dbCredentials: {
    url: env.DATABASE_URL,
  },
});

import { sql } from 'drizzle-orm';
import { boolean, pgTable, text, timestamp, uniqueIndex, uuid } from 'drizzle-orm/pg-core';

export const users = pgTable(
  'users',
  {
    id: uuid('id')
      .primaryKey()
      .default(sql`gen_random_uuid()`),
    email: text('email').notNull().unique(),
    password: text('password').notNull(),
    createdAt: timestamp('created_at')
      .notNull()
      .default(sql`now()`),
    updatedAt: timestamp('updated_at')
      .notNull()
      .default(sql`now()`),
    deletedAt: timestamp('deleted_at'),
  },
  table => ({
    emailIdx: uniqueIndex('email_idx').on(table.email),
  })
);

export const todos = pgTable('todos', {
  id: uuid('id')
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  userId: uuid('user_id')
    .notNull()
    .references(() => users.id),
  text: text('text').notNull(),
  completed: boolean('completed').notNull(),
  createdAt: timestamp('created_at')
    .notNull()
    .default(sql`now()`),
  updatedAt: timestamp('updated_at')
    .notNull()
    .default(sql`now()`),
  deletedAt: timestamp('deleted_at'),
});

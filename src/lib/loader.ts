import DataLoader from 'dataloader';
import { inArray } from 'drizzle-orm';
import type { PgColumn, PgTable } from 'drizzle-orm/pg-core';

import { db } from '~/db';

const loaders = new Map();

export function getLoader<Table extends PgTable>(table: Table, column: PgColumn) {
  if (loaders.has(table)) {
    return loaders.get(table) as never;
  }

  const loader = new DataLoader(
    async (ids: readonly string[]) => {
      const data = await db
        .select()
        .from(table)
        .where(inArray(column, ids as string[]));
      const dataMap = new Map(data.map(item => [item[column.name], item]));
      // @ts-expect-error - This is a bug in the type definition
      return ids.map(id => dataMap.get(id));
    },
    { batchScheduleFn: callback => setTimeout(callback, 100) }
  );

  loaders.set(table, loader);

  return loader;
}

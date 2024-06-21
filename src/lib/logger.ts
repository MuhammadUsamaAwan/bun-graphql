import chalk from 'chalk';
import type { GraphQLFormattedError } from 'graphql';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const logger = (eventName: string, args: any) => {
  const timestamp = chalk.dim(`[${new Date().toISOString()}]`);
  const event = chalk.blue(eventName);
  const host = chalk.dim(`${args?.args?.contextValue?.hostname}`);
  const body = `${args?.args?.document?.loc?.source.body?.replace(/\n/g, '')}`;
  const error = args?.result?.errors;
  const errorMessage = args?.result?.errors?.map((e: GraphQLFormattedError) => e?.message)?.join(', ');
  const result = error ? chalk.red(`Error: ${errorMessage}`) : chalk.green('Success');
  console.debug(`${timestamp} ${event} ${host} ${body} ${result}`);
};

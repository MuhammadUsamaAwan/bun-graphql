import { yoga } from '~/app';

const server = Bun.serve({
  fetch: yoga,
});

console.info(
  `Server is running on ${new URL(yoga.graphqlEndpoint, `http://${server.hostname}:${server.port}`).toString()}`
);

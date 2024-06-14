import { defineConfig } from '@eddeee888/gcg-typescript-resolver-files';
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'src/schema/**/*.graphql',
  generates: {
    'src/schema': defineConfig({
      typesPluginsConfig: {
        contextType: 'src/types/index#GraphQLContext',
      },
    }),
  },
};
export default config;

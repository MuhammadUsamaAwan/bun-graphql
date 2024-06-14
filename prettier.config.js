/** @type {import('prettier').Config & import('@ianvs/prettier-plugin-sort-imports').PluginConfig } */
const config = {
  useTabs: false,
  semi: true,
  trailingComma: 'es5',
  singleQuote: true,
  printWidth: 120,
  tabWidth: 2,
  arrowParens: 'avoid',
  jsxSingleQuote: true,
  importOrder: [
    '<THIRD_PARTY_MODULES>',
    '',
    '^~/env$',
    '^~/config/(.*)$',
    '^~/types/(.*)$|^~/types$',
    '^~/db/(.*)$|^~/db$',
    '^~/schema/(.*)$|^~/db$',
    '',
    '^[./]',
  ],
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
};

export default config;

import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

/** @type {import('typescript-eslint').ConfigArray} */
export const baseEslintConfig = [
  eslintPluginPrettierRecommended,
  {
    rules: {
      'prettier/prettier': /** @type {const} */ ([
        'error',
        { endOfLine: 'auto' },
      ]),
    },
  },
];

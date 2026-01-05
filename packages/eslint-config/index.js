import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export const prettierConfig = [
  eslintPluginPrettierRecommended,
  {
    rules: {
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
    },
  },
];

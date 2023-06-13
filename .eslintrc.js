module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript', 'plugin:i18next/recommended', 'prettier'],
  globals: {
    __IS_DEV__: true,
    __API__: true,
    __PROJECT__: true,
  },
  overrides: [
    {
      files: ['**/src/**/*.test.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', 'cypress/tsconfig.json'],
  },
  plugins: ['react', 'i18next', 'fsd-arch-plugin', 'unused-imports', 'import'],
  rules: {
    'unused-imports/no-unused-imports': 'error',
    '@typescript-eslint/explicit-function-return-type': ['off'],
    '@typescript-eslint/strict-boolean-expressions': ['off'],
    '@typescript-eslint/prefer-nullish-coalescing': ['off'],
    '@typescript-eslint/no-unused-vars': ['warn'],
    '@typescript-eslint/comma-dangle': [2, 'always-multiline'],
    'comma-dangle': [2, 'always-multiline'],
    '@typescript-eslint/promise-function-async': ['off'],
    '@typescript-eslint/no-misused-promises': ['off'],
    'react/react-in-jsx-scope': ['off'],
    '@typescript-eslint/naming-convention': ['off'],
    '@typescript-eslint/consistent-type-assertions': ['off'],
    '@typescript-eslint/no-floating-promises': 'off',
    'react/display-name': 'off',
    '@typescript-eslint/prefer-includes': 'off',
    'i18next/no-literal-string': 'off',
    'promise/param-names': 'off',
    '@typescript-eslint/no-dynamic-delete': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-invalid-void-type': 'off',
    'n/no-callback-literal': 'off',
    'fsd-arch-plugin/path-checker': ['error', { alias: '@' }],
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/method-signature-style': 'off',
    'fsd-arch-plugin/public-api-imports': [
      'error',
      {
        alias: '@',
        testFilesPatterns: ['**/*.test.*', '**/*.story.*', '**/StoreDecorator.tsx'],
      },
    ],
    'fsd-arch-plugin/layer-imports': [
      'error',
      {
        alias: '@',
        ignoreImportPatterns: ['**/StoreProvider', '**/testing', '**/StateSchema'],
      },
    ],
    '@typescript-eslint/await-thenable': 'off',
    '@typescript-eslint/no-confusing-void-expression': 'off',
    'react/jsx-max-props-per-line': ['error', { maximum: 4 }],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@/**',
            group: 'external',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
};

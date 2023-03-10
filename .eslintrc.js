module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:i18next/recommended',
  ],
  globals: {
    __IS_DEV__: true,
    __API__: true,
    __PROJECT__: true,
  },
  overrides: [{
    files: ['**/src/**/*.test.{ts,tsx}'],
    rules: {
      'i18next/no-literal-string': 'off',
    },
  }],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  plugins: [
    'react',
    'i18next',
  ],
  rules: {
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
    'max-len': ['error', { code: 120, ignoreComments: true }],
    '@typescript-eslint/no-floating-promises': 'off',
    'react/display-name': 'off',
    '@typescript-eslint/prefer-includes': 'off',
    'i18next/no-literal-string': 'off',
    'promise/param-names': 'off',
    '@typescript-eslint/no-dynamic-delete': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-invalid-void-type': 'off',
  },
}

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:i18next/recommended',
  ],
  overrides: [
  ],
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
    'comma-dangle': ['warn', 'always-multiline'],
    '@typescript-eslint/promise-function-async': ['off'],
    '@typescript-eslint/no-misused-promises': ['off'],
    'react/react-in-jsx-scope': ['off'],
    '@typescript-eslint/naming-convention': ['off'],
    '@typescript-eslint/consistent-type-assertions': ['off'],
    'i18next/no-literal-string': ['error', { markupOnly: true }],
  },
}

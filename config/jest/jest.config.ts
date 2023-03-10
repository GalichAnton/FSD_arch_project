import path from 'path'

export default {
  globals: {
    __IS_DEV__: true,
    __API__: '',
    __PROJECT__: 'jest',
  },
  rootDir: '../../',
  clearMocks: true,
  coveragePathIgnorePatterns: [
    '\\\\node_modules\\\\',
  ],
  testEnvironment: 'jsdom',
  moduleDirectories: [
    'node_modules',
    'src',
  ],
  moduleFileExtensions: [
    'js',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node',
  ],
  testMatch: [
    '<rootDir>/src/**/*(*.)@(test|spec).(js|jsx|ts|tsx)',
  ],
  preset: 'ts-jest',
  moduleNameMapper: {
    '\\.(scss|sass|css)$': 'identity-obj-proxy',
    '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
  },
}

module.exports = {
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      babelConfig: true,
      tsconfig: {
        jsx: 'react',
      },
    },
  },
  testURL: 'http://localhost',
  testEnvironment: 'jsdom',
  modulePaths: ['<rootDir>/src/'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleDirectories: ['node_modules', 'src'],
  testPathIgnorePatterns: ['./.docz/', './node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  coverageDirectory: 'reports/jest',
  coverageReporters: ['cobertura', 'text-summary', 'html'],
  collectCoverageFrom: [
    'src/@(components|utils|styles)/**/*.{js,ts,tsx}',
    '!src/@(components|utils|styles)/**/index.{js,ts,tsx}',
    '!src/utils/test-utils.tsx',
    '!src/@(types)/*.ts',
    '!src/@(docs)/*.mdx',
    '!**/*.d.ts',
    '!.jest/**',
    '!**/node_modules/**',
  ],
  snapshotSerializers: ['@emotion/jest/serializer'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};

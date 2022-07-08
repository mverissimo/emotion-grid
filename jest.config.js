module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)$': [
      '@swc/jest',
      {
        sourceMaps: true,
        jsc: {
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
        },
      },
    ],
  },
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    url: 'http://localhost',
  },
  testPathIgnorePatterns: ['./.docz/', './node_modules/'],
  snapshotSerializers: ['@emotion/jest/serializer'],
  modulePaths: ['<rootDir>/src/'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleDirectories: ['node_modules', 'src'],
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
};

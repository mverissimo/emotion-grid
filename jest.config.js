module.exports = {
  preset: 'ts-jest',
  coverageDirectory: 'reports/jest',
  rootDir: '.',
  roots: ['src'],
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  collectCoverageFrom: [
    'src/@(components|utils|styles)/**/*.{js,ts,tsx}',
    '!src/@(components|utils|styles)/**/index.{js,ts,tsx}',
    '!src/@(types)/*.ts',
    '!src/@(docs)/*.mdx',
    '!**/node_modules/**',
  ],
  moduleDirectories: ['node_modules', 'src'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  globals: {
    'ts-jest': {
      tsConfig: {
        jsx: 'react',
      },
    },
  },
};

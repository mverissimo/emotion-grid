import { createSerializer } from '@emotion/jest';

/**
 * Custom matchers
 */
expect.addSnapshotSerializer(
  createSerializer({
    classNameReplacer(className, index) {
      return `grid-${index}`;
    },
  })
);

/**
 * Mocks
 */
Object.defineProperty(window, 'matchMedia', {
  value: jest.fn(() => {
    return {
      matches: true,
      addListener: jest.fn(),
      removeListener: jest.fn(),
    };
  }),
});

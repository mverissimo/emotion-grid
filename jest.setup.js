import { createSerializer } from 'jest-emotion';

expect.addSnapshotSerializer(
  createSerializer({
    classNameReplacer(className, index) {
      return `grid-${index}`;
    },
  })
);

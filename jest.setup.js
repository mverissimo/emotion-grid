import { createSerializer } from '@emotion/jest';

expect.addSnapshotSerializer(
  createSerializer({
    classNameReplacer(className, index) {
      return `grid-${index}`;
    },
  })
);

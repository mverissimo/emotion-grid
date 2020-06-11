import { createSerializer } from 'jest-emotion';
import mediaQuery from 'css-mediaquery';

expect.addSnapshotSerializer(
  createSerializer({
    classNameReplacer(className, index) {
      return `grid-${index}`;
    },
  })
);

global.createMatchMedia = (width) => (query) => ({
  matches: mediaQuery.match(query, { width }),
});

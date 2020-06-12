import React from 'react';
import mediaQuery from 'css-mediaquery';
import { render } from '@testing-library/react';

import { config } from '../../config';
import { ScreenClass } from '.';

const createMatchMedia = (width: number) => (query: string) => ({
  matches: mediaQuery.match(query, { width }),
});

describe('ScreenClass', () => {
  it.each(Object.values(config().breakpoints))(
    'should render with current screen %s',
    (breakpoint) => {
      // @ts-ignore
      window.matchMedia = createMatchMedia(breakpoint * 16);

      const { container } = render(
        <ScreenClass
          render={(screen) => {
            return <div>{screen}</div>;
          }}
        />
      );

      expect(container.firstChild).toMatchSnapshot();
    }
  );
});

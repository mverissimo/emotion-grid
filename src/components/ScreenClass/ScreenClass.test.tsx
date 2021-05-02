import React from 'react';
import { render } from '@testing-library/react';

import { ScreenClass } from '.';

describe('ScreenClass', () => {
  it('should render with current screen %s', () => {
    const {
      container: { firstChild },
    } = render(
      <ScreenClass
        render={(screen) => {
          return <div>{screen}</div>;
        }}
      />
    );

    expect(firstChild).toMatchSnapshot();
  });
});

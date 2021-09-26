import { render } from '@testing-library/react';

import { Col } from '.';
import { Breakpoints } from '../../types/emotion';

describe('Col', () => {
  it('should render with default styles', () => {
    const {
      container: { firstChild },
    } = render(<Col>Col</Col>);

    expect(firstChild).toMatchSnapshot();
  });

  it.each([
    {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4,
      xl: 5,
    },
  ] as Record<Breakpoints, number>[])(
    'should render with size styles on breakpoint %s',
    (size) => {
      const {
        container: { firstChild },
      } = render(<Col {...size}>Col</Col>);

      expect(firstChild).toMatchSnapshot();
    }
  );

  it.each([
    {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4,
      xl: 5,
    },
  ] as Record<Breakpoints, number>[])(
    'should render with offset styles on breakpoint %s',
    (offset) => {
      const {
        container: { firstChild },
      } = render(<Col {...offset}>Col</Col>);

      expect(firstChild).toMatchSnapshot();
    }
  );
});

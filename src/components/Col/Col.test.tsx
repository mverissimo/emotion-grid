import { render } from '@testing-library/react';

import { Col } from '.';
import { Breakpoints } from '../../types/emotion';

describe('Col', () => {
  it('should render with default styles on media %s', () => {
    const { container } = render(<Col>Col</Col>);

    expect(container.firstChild).toMatchSnapshot();
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
    'should render with width styles on media %s',
    (size) => {
      const { container } = render(<Col {...size}>Col</Col>);

      expect(container.firstChild).toMatchSnapshot();
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
    'should render with offset styles on media %s',
    (size) => {
      const { container } = render(<Col offset={size}>Col</Col>);

      expect(container.firstChild).toMatchSnapshot();
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
    'should handle with offset styles on media %s',
    (offset) => {
      const { container } = render(
        <Col md={8} offset={offset}>
          Col
        </Col>
      );

      expect(container.firstChild).toMatchSnapshot();
    }
  );
});

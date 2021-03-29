import React from 'react';
import { render } from '@testing-library/react';

import { Col } from './Col';
import { Breakpoints } from '../../types/types';

describe('Col', () => {
  it('should render with default styles', () => {
    const { container } = render(<Col>Col</Col>);

    expect(container.firstChild).toMatchSnapshot();
  });

  const sizes = [
    {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4,
      xl: 5,
    },
  ] as const;

  it.each(sizes)('should render with width styles for media %s', (size) => {
    const { container } = render(<Col {...size}>Col</Col>);

    expect(container.firstChild).toMatchSnapshot();
  });

  it.each(sizes)('should render with offset styles', (size) => {
    const { container } = render(<Col offset={size}>Col</Col>);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should handle 0 offset styles', () => {
    const offsets = { xs: 0, lg: 9 } as Record<Breakpoints, number>;
    const { container } = render(
      <Col md={8} offset={offsets}>
        Col
      </Col>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});

import React from 'react';
import { render } from '@testing-library/react';

import { Col } from './Col';

describe('Col', () => {
  it('should render with default styles', () => {
    const { container } = render(<Col />);

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
    const { container } = render(<Col {...size} />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it.each(sizes)('should render with offset styles', (size) => {
    const { container } = render(<Col offset={size} />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it.each(sizes)('should render with offset styles for media %s', (size) => {
    const { container } = render(<Col offset={size} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

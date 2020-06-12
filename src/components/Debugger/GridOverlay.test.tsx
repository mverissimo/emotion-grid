import React from 'react';
import { render } from '@testing-library/react';

import { GridOverlay } from './GridOverlay';

describe('Grid Overlay', () => {
  it('should render with default styles', () => {
    const { container } = render(<GridOverlay />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with visible styles when passed the visible prop', () => {
    const { container } = render(<GridOverlay visible />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

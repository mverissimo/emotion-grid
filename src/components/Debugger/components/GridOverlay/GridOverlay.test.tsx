import React from 'react';
import { render } from '@testing-library/react';

import { GridOverlay } from '.';

describe('Grid Overlay', () => {
  it('should render with default styles', () => {
    const {
      container: { firstChild },
    } = render(<GridOverlay />);

    expect(firstChild).toMatchSnapshot();
  });

  it('should render with visible styles when passed the visible prop', () => {
    const {
      container: { firstChild },
    } = render(<GridOverlay visible />);

    expect(firstChild).toMatchSnapshot();
  });
});

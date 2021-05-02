import { render } from '@testing-library/react';

import { Debugger } from '.';

describe('Debugger', () => {
  it('should render with current screen %s', () => {
    const {
      container: { firstChild },
    } = render(<Debugger />);

    expect(firstChild).toMatchSnapshot();
  });
});

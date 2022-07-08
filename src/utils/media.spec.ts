import { responsive } from './media';

import { config } from '../config';

describe('responsive', () => {
  it('should return the for each breakpoint', () => {
    const result = responsive(
      config()?.grid?.breakpoints,
      () => `
        background: red;
      `
    );

    expect(result).toMatchSnapshot();
  });
});

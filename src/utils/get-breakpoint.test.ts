import { getBreakpoint } from './get-breakpoint';

describe('Get breakpoint', () => {
  it('should return the current breakpoint', () => {
    const result = getBreakpoint({
      xs: 1,
      sm: 36,
      md: 48,
      lg: 62,
      xl: 75,
    } as any);

    expect(result).toMatchSnapshot();
  });
});

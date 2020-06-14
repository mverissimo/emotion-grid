import { config, constants } from '../config';
import { Types } from '../types';

export function getBreakpoint(props: Types.Theme = {}): Types.Breakpoints {
  let screen;

  if (typeof window !== 'undefined' && window.matchMedia) {
    Object.values(config(props).breakpoints).map(
      (breakpoint, index) =>
        window.matchMedia(`(min-width: ${breakpoint}em)`).matches &&
        (screen = constants.BREAKPOINTS[index])
    );
  }

  return screen;
}

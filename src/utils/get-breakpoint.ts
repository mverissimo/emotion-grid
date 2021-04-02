import { config, BREAKPOINTS } from '../config';
import { ThemeBase, Breakpoints } from '../types/emotion';

export function getBreakpoint(props: ThemeBase = {}): Breakpoints {
  let screen;

  if (typeof window !== 'undefined' && window.matchMedia) {
    Object.values(config(props).grid.breakpoints).map(
      (breakpoint, index) =>
        window.matchMedia(`(min-width: ${breakpoint}em)`).matches &&
        (screen = BREAKPOINTS[index])
    );
  }

  return screen;
}

import { config } from '../config';

import { Breakpoints } from '../types/emotion';

export function media(breakpoint: Breakpoints): string {
  const breakpoints = config().grid.breakpoints;

  if (!Object.keys(breakpoints).includes(breakpoint)) {
    throw new Error(`Breakpoint '${breakpoint}' not found`);
  }

  return `@media (min-width: ${breakpoints[breakpoint]}em)`;
}

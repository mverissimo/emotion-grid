import { Types } from '../types';
import { config } from '../config';

export function media(breakpoint: Types.Breakpoints) {
  const breakpoints = config().breakpoints;

  if (!Object.keys(breakpoints).includes(breakpoint)) {
    throw new Error(`Breakpoint '${breakpoint}' not found`);
  }

  return `@media (min-width: ${breakpoints[breakpoint]}em)`;
}

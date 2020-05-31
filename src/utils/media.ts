import { Breakpoints } from '../types';
import config from '../config';

export function media(breakpoint: Breakpoints) {
  const breakpoints = config().breakpoints;

  return `@media (min-width: ${breakpoints[breakpoint]}em)`;
}

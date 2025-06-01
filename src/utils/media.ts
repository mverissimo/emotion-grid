import { css, SerializedStyles } from '@emotion/react';

import { config } from '../config';

import { Breakpoints, DefaultTheme } from '../types/emotion';

export function media(breakpoint: Breakpoints): string {
  const breakpoints = config().grid.breakpoints;

  if (!Object.keys(breakpoints).includes(breakpoint)) {
    throw new Error(`Breakpoint '${breakpoint}' not found`);
  }

  return `@media (min-width: ${breakpoints[breakpoint]}em)`;
}

export function responsive(
  breakpoints: DefaultTheme['grid']['breakpoints'] | Array<Breakpoints>,
  mapper: (value: any) => any
) {
  if (Array.isArray(breakpoints)) {
    return breakpoints.map(
      (breakpoint): SerializedStyles => css`
        ${media(breakpoint)} {
          ${mapper(breakpoint)}
        }
      `
    );
  }

  return Object.keys(breakpoints).map(
    (breakpoint): SerializedStyles => css`
      ${media(breakpoint as Breakpoints)} {
        ${mapper(breakpoint)}
      }
    `
  );
}

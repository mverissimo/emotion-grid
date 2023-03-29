import { css, SerializedStyles } from '@emotion/react';

import { config } from '../config';

import { Breakpoints, DefaultTheme } from '../types/emotion';

export function media(breakpoint: Breakpoints, theme: DefaultTheme): string {
  const breakpoints = config(theme).grid.breakpoints;

  if (!Object.keys(breakpoints).includes(breakpoint)) {
    throw new Error(`Breakpoint '${breakpoint}' not found`);
  }

  return `@media (min-width: ${breakpoints[breakpoint]}em)`;
}

export function responsive(
  breakpoints: DefaultTheme['grid']['breakpoints'] | Array<Breakpoints>,
  mapper: (value: any) => any,
  theme?: DefaultTheme
) {
  if (Array.isArray(breakpoints)) {
    return breakpoints.map(
      (breakpoint): SerializedStyles => css`
        ${media(breakpoint, theme)} {
          ${mapper(breakpoint)}
        }
      `
    );
  }

  return Object.keys(breakpoints).map(
    (breakpoint): SerializedStyles => css`
      ${media(breakpoint as Breakpoints, theme)} {
        ${mapper(breakpoint)}
      }
    `
  );
}

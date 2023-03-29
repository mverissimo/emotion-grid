import { css } from '@emotion/react';

import { config } from '../../config';
import { responsive } from '../../utils';

import { ContainerProps } from '.';
import type { DefaultTheme, StyleProps } from '../../types/emotion';

export const base = ({ theme }: StyleProps) => css`
  label: container;

  width: 100%;
  max-width: 100%;

  margin-right: auto;
  margin-left: auto;

  box-sizing: border-box;

  ${responsive(
    config(theme).grid.breakpoints,
    (breakpoint: keyof DefaultTheme['grid']['breakpoints']) => `
    padding-left: ${config(theme).grid.padding[breakpoint] / 2}rem;
    padding-right: ${config(theme).grid.padding[breakpoint] / 2}rem;
`,
    theme
  )}
`;

export const fluid = ({ theme, fluid }: ContainerProps & StyleProps) =>
  !fluid &&
  responsive(
    config(theme).grid.breakpoints,
    (breakpoint: keyof DefaultTheme['grid']['breakpoints']) =>
      typeof config(theme).grid.container[breakpoint] === 'number' &&
      `
      label: container--fluid;
      max-width: ${config(theme).grid.container[breakpoint]}rem;
    `,
    theme
  );

export const debug = ({ theme, debug }: ContainerProps & StyleProps) => {
  return (
    debug &&
    css`
      .EmotionGrid-Row {
        label: row--debug;
        background: ${config(theme).grid.colors.blue}0D;
      }

      .EmotionGrid-Col {
        label: col--debug;
        background: ${config(theme).grid.colors.blue}0D;
        border: 1px solid ${config(theme).grid.colors.blue};
      }
    `
  );
};

import { css } from '@emotion/react';

import { config } from '../../config';
import { responsive } from '../../utils';

import type { ColProps } from '.';
import type { DefaultTheme, StyleProps } from '../../types/emotion';

export const base = ({ theme }: StyleProps) => css`
  label: col;

  position: relative;
  flex: 1 0 0%;

  width: 100%;
  max-width: 100%;

  box-sizing: border-box;

  ${responsive(
    config(theme).grid.breakpoints,
    (breakpoint: keyof DefaultTheme['grid']['breakpoints']) => `
      padding-left: ${config(theme).grid.gutter[breakpoint] / 2}rem;
      padding-right: ${config(theme).grid.gutter[breakpoint] / 2}rem;
    `
  )};
`;

export const size = (props: ColProps & StyleProps) =>
  responsive(
    config(props.theme).grid.breakpoints,
    (breakpoint: keyof DefaultTheme['grid']['breakpoints']) =>
      props[breakpoint] &&
      `
        label: col--size;
        flex: 0 0 ${
          (props[breakpoint] / config(props.theme).grid.columns[breakpoint]) *
          100
        }%;
        max-width: ${
          (props[breakpoint] / config(props.theme).grid.columns[breakpoint]) *
          100
        }%;
    `
  );

export const offset = ({ theme, offset }: ColProps & StyleProps) =>
  offset &&
  responsive(
    config(theme).grid.breakpoints,
    (breakpoint: keyof DefaultTheme['grid']['breakpoints']) =>
      offset[breakpoint] &&
      `
        label: col--offset;
        margin-left: ${
          offset[breakpoint] >= 0
            ? (offset[breakpoint] / config(theme).grid.columns[breakpoint]) *
              100
            : 0
        }%;
    `
  );

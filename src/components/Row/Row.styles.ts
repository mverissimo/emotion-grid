import { css } from '@emotion/react';

import { config } from '../../config';
import { responsive } from '../../utils';

import type { RowProps } from '.';
import { DefaultTheme, StyleProps } from '../../types/emotion';

export const base = ({ theme }: StyleProps) => css`
  label: row;

  display: flex;
  flex-wrap: wrap;

  box-sizing: border-box;

  ${responsive(
    config(theme).grid.breakpoints,
    (breakpoint: keyof DefaultTheme['grid']['breakpoints']) => `
      margin-left: -${config(theme).grid.gutter[breakpoint] / 2}rem;
      margin-right: -${config(theme).grid.gutter[breakpoint] / 2}rem;
    `,
    theme
  )};
`;

export const align = ({ theme, align }: RowProps & StyleProps) =>
  typeof align === 'object'
    ? responsive(
        config(theme).grid.breakpoints,
        (breakpoint: keyof DefaultTheme['grid']['breakpoints']) =>
          align[breakpoint] &&
          `
            label: row--align;
            align-items: ${align[breakpoint]};
          `,
        theme
      )
    : css`
        label: row--align;
        align-items: ${align};
      `;

export const justify = ({ theme, justify }: RowProps & StyleProps) =>
  typeof justify === 'object'
    ? responsive(
        config(theme).grid.breakpoints,
        (breakpoint: keyof DefaultTheme['grid']['breakpoints']) =>
          justify[breakpoint] &&
          `
            label: row--justify;
            justify-content: ${justify[breakpoint]};
          `,
        theme
      )
    : css`
        label: row--justify;
        justify-content: ${justify};
      `;

export const reverse = ({ theme, reverse }: RowProps & StyleProps) =>
  reverse &&
  (Array.isArray(reverse)
    ? responsive(
        config(theme).grid.breakpoints,
        (breakpoint: keyof DefaultTheme['grid']['breakpoints']) => `
          label: row--reverse;
          flex-direction: ${
            reverse.includes(breakpoint) ? 'row-reverse' : 'row'
          };
        `,
        theme
      )
    : css`
        label: row--reverse;
        flex-direction: row-reverse;
      `);

export const noGutter = ({ noGutters }: RowProps) =>
  noGutters &&
  css`
    .EmotionGrid-Col {
      label: col--no-gutters;
      padding-left: 0;
      padding-right: 0;
    }
  `;

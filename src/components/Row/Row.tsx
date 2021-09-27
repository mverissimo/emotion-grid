import { ReactNode } from 'react';

import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { config } from '../../config';
import { responsive } from '../../utils';

import { Col } from '../Col';

import {
  Align,
  AlignProps,
  Justify,
  JustifyProps,
  DefaultTheme,
  StyleProps,
} from '../../types/emotion';

export interface RowProps {
  /**
   * The CSS `align-items` property
   */
  align?: Align | AlignProps;

  /**
   * The CSS `justify-content` property
   */
  justify?: Justify | JustifyProps;

  /**
   * The CSS `flex-direction` property
   */
  reverse?: Array<keyof DefaultTheme['grid']['breakpoints']> | boolean;

  /**
   * Remove the gutter(padding) from `Cols`
   */
  noGutters?: boolean;

  /**
   * The children nodes
   */
  children: ReactNode;
}

const baseStyle = ({ theme }: StyleProps) => css`
  label: row;

  display: flex;
  flex-wrap: wrap;

  box-sizing: border-box;

  ${responsive(
    config(theme).grid.breakpoints,
    (breakpoint: keyof DefaultTheme['grid']['breakpoints']) => `
      margin-left: -${config(theme).grid.gutter[breakpoint] / 2}rem;
      margin-right: -${config(theme).grid.gutter[breakpoint] / 2}rem;
    `
  )};
`;

const alignStyle = ({ theme, align }: RowProps & StyleProps) =>
  typeof align === 'object'
    ? responsive(
        config(theme).grid.breakpoints,
        (breakpoint: keyof DefaultTheme['grid']['breakpoints']) =>
          align[breakpoint] &&
          `
            label: row--align;
            align-items: ${align[breakpoint]};
          `
      )
    : css`
        label: row--align;
        align-items: ${align};
      `;

const justifyStyle = ({ theme, justify }: RowProps & StyleProps) =>
  typeof justify === 'object'
    ? responsive(
        config(theme).grid.breakpoints,
        (breakpoint: keyof DefaultTheme['grid']['breakpoints']) =>
          justify[breakpoint] &&
          `
            label: row--justify;
            justify-content: ${justify[breakpoint]};
          `
      )
    : css`
        label: row--justify;
        justify-content: ${justify};
      `;

const reverseStyle = ({ theme, reverse }: RowProps & StyleProps) =>
  reverse &&
  (Array.isArray(reverse)
    ? responsive(
        config(theme).grid.breakpoints,
        (breakpoint: keyof DefaultTheme['grid']['breakpoints']) => `
          label: row--reverse;
          flex-direction: ${
            reverse.includes(breakpoint) ? 'row-reverse' : 'row'
          };
        `
      )
    : css`
        label: row--reverse;
        flex-direction: row-reverse;
      `);

const noGutterStyle = ({ noGutters }: RowProps) =>
  noGutters &&
  css`
    ${Col} {
      label: col--no-gutters;
      padding-left: 0;
      padding-right: 0;
    }
  `;

const Row = styled('div')<RowProps>(
  baseStyle,
  alignStyle,
  justifyStyle,
  reverseStyle,
  noGutterStyle
);

export default Row;

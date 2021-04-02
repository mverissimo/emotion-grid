import { CSSProperties, ReactNode } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { config, BREAKPOINTS } from '../../config';
import { media } from '../../utils';

import { Col } from '../Col';

import {
  Align,
  AlignProps,
  Justify,
  JustifyProps,
  Breakpoints,
  StyleProps,
} from '../../types/emotion';

export interface RowProps {
  align?: AlignProps | Align;
  justify?: JustifyProps | Justify;
  reverse?: Array<Breakpoints> | boolean;
  noGutters?: boolean;
  style?: CSSProperties;
  className?: string;
  children: ReactNode;
}

const baseStyle = ({ theme }: StyleProps) => css`
  label: row;

  display: flex;
  flex-wrap: wrap;

  box-sizing: border-box;

  ${BREAKPOINTS.map(
    (breakpoint) => css`
      ${media(breakpoint)} {
        margin-left: -${config(theme).grid.gutter[breakpoint] / 2}rem;
        margin-right: -${config(theme).grid.gutter[breakpoint] / 2}rem;
      }
    `
  )}
`;

const alignStyle = ({ align }: RowProps) =>
  align &&
  (typeof align === 'object'
    ? BREAKPOINTS.map(
        (breakpoint) =>
          align[breakpoint] &&
          css`
            ${media(breakpoint)} {
              align-items: ${align[breakpoint]};
            }
          `
      )
    : css`
        align-items: ${align};
      `);

const justifyStyle = ({ justify }: RowProps) =>
  justify &&
  (typeof justify === 'object'
    ? BREAKPOINTS.map(
        (breakpoint) =>
          justify[breakpoint] &&
          css`
            ${media(breakpoint)} {
              justify-content: ${justify[breakpoint]};
            }
          `
      )
    : css`
        justify-content: ${justify};
      `);

const reverseStyle = ({ reverse }: RowProps) =>
  reverse &&
  (Array.isArray(reverse)
    ? BREAKPOINTS.map(
        (breakpoint) => css`
          ${media(breakpoint)} {
            flex-direction: ${reverse.includes(breakpoint)
              ? 'row-reverse'
              : 'row'};
          }
        `
      )
    : css`
        flex-direction: row-reverse;
      `);

const noGutterStyle = ({ noGutters }: RowProps) =>
  noGutters &&
  css`
    ${Col} {
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

import { CSSProperties, ReactNode } from 'react';

import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { config, BREAKPOINTS } from '../../config';
import { media } from '../../utils';

import { Breakpoints, StyleProps } from '../../types/emotion';

export interface ColProps {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  offset?: Record<Breakpoints, number>;
  style?: CSSProperties;
  className?: string;
  children: ReactNode;
}

const baseStyle = ({ theme }: StyleProps) => css`
  label: col;

  position: relative;
  flex: 1 0 0%;

  width: 100%;
  max-width: 100%;

  box-sizing: border-box;

  ${BREAKPOINTS.map(
    (breakpoint) =>
      css`
        ${media(breakpoint)} {
          padding-left: ${config(theme).grid.gutter[breakpoint] / 2}rem;
          padding-right: ${config(theme).grid.gutter[breakpoint] / 2}rem;
        }
      `
  )}
`;

const sizeStyle = (props: ColProps & StyleProps) => {
  const { theme } = props;

  return css`
    ${BREAKPOINTS.map(
      (breakpoint) =>
        props[breakpoint] &&
        css`
          ${media(breakpoint)} {
            flex: 0 0
              ${(props[breakpoint] / config(theme).grid.columns[breakpoint]) *
              100}%;
            max-width: ${(props[breakpoint] /
              config(theme).grid.columns[breakpoint]) *
            100}%;
          }
        `
    )}
  `;
};

const offsetStyle = ({ theme, offset }: ColProps & StyleProps) =>
  offset &&
  typeof offset === 'object' &&
  BREAKPOINTS.filter((breakpoint) => offset[breakpoint]).map(
    (breakpoint) =>
      offset[breakpoint] &&
      css`
        ${media(breakpoint)} {
          margin-left: ${offset[breakpoint] >= 0
            ? (offset[breakpoint] / config(theme).grid.columns[breakpoint]) *
              100
            : 0}%;
        }
      `
  );

const Col = styled('div')<ColProps>(baseStyle, sizeStyle, offsetStyle);

export default Col;

import { CSSProperties, ReactNode } from 'react';

import styled from '@emotion/styled';
import { css } from '@emotion/react';
import isPropValid from '@emotion/is-prop-valid';

import { config } from '../../config';
import { responsive } from '../../utils';

import { DefaultTheme, StyleProps } from '../../types/emotion';

export interface ColProps {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  offset?: DefaultTheme['grid']['breakpoints'];
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

  ${responsive(
    config(theme).grid.breakpoints,
    (breakpoint: keyof DefaultTheme['grid']['breakpoints']) => `
      padding-left: ${config(theme).grid.gutter[breakpoint] / 2}rem;
      padding-right: ${config(theme).grid.gutter[breakpoint] / 2}rem;
    `
  )};
`;

const sizeStyle = (props: ColProps & StyleProps) =>
  responsive(
    config(props.theme).grid.breakpoints,
    (breakpoint: keyof DefaultTheme['grid']['breakpoints']) =>
      props[breakpoint] &&
      `
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

const offsetStyle = ({ theme, offset }: ColProps & StyleProps) =>
  offset &&
  responsive(
    config(theme).grid.breakpoints,
    (breakpoint: keyof DefaultTheme['grid']['breakpoints']) =>
      offset[breakpoint] &&
      `
        margin-left: ${
          offset[breakpoint] >= 0
            ? (offset[breakpoint] / config(theme).grid.columns[breakpoint]) *
              100
            : 0
        }%;
    `
  );

const Col = styled('div', {
  shouldForwardProp: (prop) => isPropValid(prop) && prop !== 'offset',
})<ColProps>(baseStyle, sizeStyle, offsetStyle);

export default Col;

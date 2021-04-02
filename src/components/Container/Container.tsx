import { CSSProperties, ReactNode } from 'react';

import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { config, BREAKPOINTS } from '../../config';
import { media } from '../../utils';

import { Row } from '../Row';
import { Col } from '../Col';

import { StyleProps } from '../../types/emotion';

export interface ContainerProps {
  fluid?: boolean;
  debug?: boolean;
  style?: CSSProperties;
  className?: string;
  children: ReactNode;
}

const baseStyle = ({ theme }: StyleProps) => css`
  label: container;

  width: 100%;
  max-width: 100%;

  margin-right: auto;
  margin-left: auto;

  box-sizing: border-box;

  ${BREAKPOINTS.map(
    (breakpoint) => css`
      ${media(breakpoint)} {
        padding-left: ${config(theme).grid.padding[breakpoint] / 2}rem;
        padding-right: ${config(theme).grid.padding[breakpoint] / 2}rem;
      }
    `
  )}
`;

const fluidStyle = ({ theme, fluid }: ContainerProps & StyleProps) =>
  !fluid &&
  BREAKPOINTS.map(
    (breakpoint) => css`
      ${media(breakpoint)} {
        ${typeof config(theme).grid.container[breakpoint] === 'number' &&
        `
          max-width: ${config(theme).grid.container[breakpoint]}rem;
        `}
      }
    `
  );

const debugStyle = ({ theme, debug }: ContainerProps & StyleProps) => {
  return (
    debug &&
    css`
      ${Row} {
        background: ${config(theme).grid.colors.blue}0D;
      }

      ${Col} {
        background: ${config(theme).grid.colors.blue}0D;
        border: 1px solid ${config(theme).grid.colors.blue};
      }
    `
  );
};

const Container = styled('div')<ContainerProps>(
  baseStyle,
  fluidStyle,
  debugStyle
);

export default Container;

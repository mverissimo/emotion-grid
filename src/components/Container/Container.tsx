import { ReactNode } from 'react';

import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { config } from '../../config';
import { responsive } from '../../utils';

import { Row } from '../Row';
import { Col } from '../Col';

import { DefaultTheme, StyleProps } from '../../types/emotion';

export interface ContainerProps {
  /**
   * Set the container `max-width`
   */
  fluid?: boolean;

  /**
   * Set a visual background
   */
  debug?: boolean;

  /**
   * The children nodes
   */
  children: ReactNode;
}

const baseStyle = ({ theme }: StyleProps) => css`
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
  `
  )}
`;

const fluidStyle = ({ theme, fluid }: ContainerProps & StyleProps) =>
  !fluid &&
  responsive(
    config(theme).grid.breakpoints,
    (breakpoint: keyof DefaultTheme['grid']['breakpoints']) =>
      typeof config(theme).grid.container[breakpoint] === 'number' &&
      `
        label: container--fluid;
        max-width: ${config(theme).grid.container[breakpoint]}rem;
      `
  );

const debugStyle = ({ theme, debug }: ContainerProps & StyleProps) => {
  return (
    debug &&
    css`
      ${Row} {
        label: row--debug;
        background: ${config(theme).grid.colors.blue}0D;
      }

      ${Col} {
        label: col--debug;
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

import { FC, ReactElement } from 'react';

import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { config, constants } from '../../config';
import { media } from '../../utils';

export interface ContainerProps {
  debug?: boolean;
  fluid?: Boolean;
  children?: ReactElement;
}

const baseStyle = () => css`
  label: container;

  max-width: 100%;

  margin-right: auto;
  margin-left: auto;

  box-sizing: border-box;

  ${constants.BREAKPOINTS.map(
    (breakpoint) => css`
      ${media(breakpoint)} {
        padding-left: ${config().padding[breakpoint]}em;
        padding-right: ${config().padding[breakpoint]}em;
      }
    `
  )}
`;

const fluidStyle = ({ fluid = false }: ContainerProps) =>
  fluid &&
  constants.BREAKPOINTS.map(
    (breakpoint) => css`
      ${media(breakpoint)} {
        ${typeof config().container[breakpoint] === 'number'
          ? `width: ${config().container[breakpoint]}em;`
          : `width: 100%;`}
      }
    `
  );

const debugStyle = ({ debug = false }: ContainerProps) =>
  debug &&
  css`
    label: debug;

    outline: solid 2px ${config().debug.outlineColor};
    background: ${config().debug.backgroundColor};
  `;

export const Container: FC<ContainerProps> = styled('div')<ContainerProps>(
  baseStyle,
  fluidStyle,
  debugStyle
);

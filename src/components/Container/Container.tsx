import { FC, ReactElement } from 'react';

import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { config, constants } from '../../config';
import { media } from '../../utils';
import { Types } from '../../types';

export interface ContainerProps {
  debug?: boolean;
  fluid?: Boolean;
  children?: ReactElement;
}

const baseStyle = ({ theme }: Types.StyleProps) => css`
  label: container;

  max-width: 100%;

  margin-right: auto;
  margin-left: auto;

  box-sizing: border-box;

  ${constants.BREAKPOINTS.map(
    (breakpoint) => css`
      ${media(breakpoint)} {
        padding-left: ${config(theme).padding[breakpoint]}em;
        padding-right: ${config(theme).padding[breakpoint]}em;
      }
    `
  )}
`;

const fluidStyle = ({ theme, fluid }: Types.StyleProps & ContainerProps) =>
  fluid &&
  constants.BREAKPOINTS.map(
    (breakpoint) => css`
      ${media(breakpoint)} {
        ${typeof config(theme).container[breakpoint] === 'number'
          ? `width: ${config(theme).container[breakpoint]}em;`
          : `width: 100%;`}
      }
    `
  );

const debugStyle = ({ theme, debug }: Types.StyleProps & ContainerProps) =>
  debug &&
  css`
    label: debug;

    outline: solid 2px ${config(theme).debug.outlineColor};
    background: ${config(theme).debug.backgroundColor};
  `;

export const Container: FC<ContainerProps> = styled('div')<ContainerProps>(
  baseStyle,
  fluidStyle,
  debugStyle
);

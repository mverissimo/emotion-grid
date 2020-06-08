import { FC } from 'react';

import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { config, constants } from '../../config';
import { media } from '../../utils';
import { Types } from '../../types';

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

const fluidStyle = ({
  theme,
  fluid,
}: Types.StyleProps & Types.ContainerProps) =>
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

const debugStyle = ({
  theme,
  debug,
}: Types.StyleProps & Types.ContainerProps) =>
  debug &&
  css`
    background: ${config(theme).debug.backgroundColor};
  `;

export const Container: FC<Types.ContainerProps> = styled('div')<
  Types.ContainerProps
>(baseStyle, fluidStyle, debugStyle);

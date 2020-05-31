import { FC, ReactElement } from 'react';

import styled from '@emotion/styled';
import { css } from '@emotion/core';

import config, { BREAKPOINTS } from '../../config';
import { media } from '../../utils';
import { debugStyle } from '../../styles';

export interface ContainerProps {
  debug: boolean;
  fluid: Boolean;
  children: ReactElement;
}

const baseStyle = () => css`
  label: container;
  max-width: 100%;

  margin-right: auto;
  margin-left: auto;

  padding-bottom: 40px;
  background: red;
  box-sizing: border-box;

  ${BREAKPOINTS.map(
    (breakpoint) => css`
      ${media(breakpoint)} {
        padding-left: ${config().padding[breakpoint]}em;
        padding-right: ${config().padding[breakpoint]}em;
      }
    `
  )}
`;

const fluidStyle = ({ fluid }: ContainerProps) =>
  !fluid &&
  BREAKPOINTS.map(
    (breakpoint) => css`
      ${media(breakpoint)} {
        ${typeof config().container[breakpoint] === 'number'
          ? `width: ${config().container[breakpoint]}em;`
          : `width: 100%;`}
      }
    `
  );

export const Container: FC<ContainerProps> = styled('div')<ContainerProps>(
  baseStyle,
  debugStyle,
  fluidStyle
);

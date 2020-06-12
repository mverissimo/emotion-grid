/** @jsx jsx */
import { FC } from 'react';

import styled from '@emotion/styled';
import { jsx, css } from '@emotion/core';

import { config, constants } from '../../config';
import { media } from '../../utils';
import { Types } from '../../types';

import { Col } from '../Col';

const baseStyle = ({ theme }: Types.StyleProps) => css`
  label: container;

  max-width: 100%;

  margin-right: auto;
  margin-left: auto;

  box-sizing: border-box;

  ${constants.BREAKPOINTS.map(
    (breakpoint) => css`
      ${media(breakpoint)} {
        padding-left: ${config(theme).padding[breakpoint]}rem;
        padding-right: ${config(theme).padding[breakpoint]}rem;
      }
    `
  )}
`;

const fluidStyle = ({
  theme,
  fluid,
}: Types.StyleProps & Types.ContainerProps) =>
  !fluid &&
  constants.BREAKPOINTS.map(
    (breakpoint) => css`
      ${media(breakpoint)} {
        ${typeof config(theme).container[breakpoint] === 'number'
          ? `width: ${config(theme).container[breakpoint]}rem;`
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
    ${Col} {
      background: rgba(${config(theme).debug.color}, 0.05);
      border: 1px solid rgb(${config(theme).debug.color});
    }
  `;

const BaseContainer: FC<Types.ContainerProps> = ({ className, children }) => (
  <div className={className}>{children}</div>
);

export const Container = styled(BaseContainer)<Types.ContainerProps>(
  baseStyle,
  fluidStyle,
  debugStyle
);

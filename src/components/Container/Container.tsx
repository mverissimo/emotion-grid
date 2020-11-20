import React, { FC } from 'react';

import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { config, constants } from '../../config';
import { media } from '../../utils';
import { Types } from '../../types';

import { Row } from '../Row';
import { Col } from '../Col';

const baseStyle = ({ theme }: Types.StyleProps) => css`
  label: container;

  width: 100%;
  max-width: 100%;

  margin-right: auto;
  margin-left: auto;

  box-sizing: border-box;

  ${constants.BREAKPOINTS.map(
    (breakpoint) => css`
      ${media(breakpoint)} {
        padding-left: ${config(theme).padding[breakpoint] / 2}rem;
        padding-right: ${config(theme).padding[breakpoint] / 2}rem;
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
        ${typeof config(theme).container[breakpoint] === 'number' &&
        `
          max-width: ${config(theme).container[breakpoint]}rem;
        `}
      }
    `
  );

const debugStyle = ({
  theme,
  debug,
}: Types.StyleProps & Types.ContainerProps) =>
  debug &&
  css`
    ${Row} {
      background: ${config(theme).debug.color}0D;
    }

    ${Col} {
      background: ${config(theme).debug.color}0D;
      border: 1px solid ${config(theme).debug.color};
    }
  `;

const BaseContainer: FC<Types.ContainerProps> = ({
  style,
  className,
  children,
}) => (
  <div style={style} className={className}>
    {children}
  </div>
);

export const Container = styled(BaseContainer)<Types.ContainerProps>(
  baseStyle,
  fluidStyle,
  debugStyle
);

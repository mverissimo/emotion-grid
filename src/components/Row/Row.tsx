import React, { FC } from 'react';

import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { Types } from '../../types';
import { config, constants } from '../../config';
import { media } from '../../utils';

import { Col } from '../Col';

const baseStyle = ({ theme }: Types.StyleProps) => css`
  label: row;

  display: flex;
  flex-wrap: wrap;

  box-sizing: border-box;

  ${constants.BREAKPOINTS.map(
    (breakpoint) => css`
      ${media(breakpoint)} {
        margin-left: -${config(theme).gutter[breakpoint] / 2}rem;
        margin-right: -${config(theme).gutter[breakpoint] / 2}rem;
      }
    `
  )}
`;

const alignStyle = ({ align }: Types.RowProps) =>
  align &&
  (typeof align === 'object'
    ? constants.BREAKPOINTS.map(
        (breakpoint) =>
          align[breakpoint] &&
          css`
            ${media(breakpoint)} {
              align-items: ${align[breakpoint]};
            }
          `
      )
    : css`
        align-items: ${align};
      `);

const justifyStyle = ({ justify }: Types.RowProps) =>
  justify &&
  (typeof justify === 'object'
    ? constants.BREAKPOINTS.map(
        (breakpoint) =>
          justify[breakpoint] &&
          css`
            ${media(breakpoint)} {
              justify-content: ${justify[breakpoint]};
            }
          `
      )
    : css`
        justify-content: ${justify};
      `);

const reverseStyle = ({ reverse }: Types.RowProps) =>
  reverse &&
  (Array.isArray(reverse)
    ? constants.BREAKPOINTS.map(
        (breakpoint) => css`
          ${media(breakpoint)} {
            flex-direction: ${reverse.includes(breakpoint)
              ? 'row-reverse'
              : 'row'};
          }
        `
      )
    : css`
        flex-direction: row-reverse;
      `);

const noGutterStyle = ({ noGutters }: Types.RowProps) =>
  noGutters &&
  css`
    ${Col} {
      padding-left: 0;
      padding-right: 0;
    }
  `;

const BaseRow: FC<Types.RowProps> = ({ style, className, children }) => (
  <div style={style} className={className}>
    {children}
  </div>
);

export const Row = styled(BaseRow)<Types.RowProps>(
  baseStyle,
  alignStyle,
  justifyStyle,
  reverseStyle,
  noGutterStyle
);

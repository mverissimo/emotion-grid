/** @jsx jsx */
import { FC } from 'react';

import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { config } from '../../config';
import { Types } from '../../types';
import { Container } from '../Container';
import { Row } from '../Row';
import { Col } from '../Col';

type GridOverlayProps = {
  visible?: boolean;
  children?: React.ReactNode;
};

const baseStyle = ({
  theme,
  visible,
}: Types.StyleProps & GridOverlayProps) => css`
  label: grid-overlay;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  bottom: 0;
  z-index: 10000;
  overflow: hidden;

  pointer-events: none;
  transform-origin: 50% 0%;

  ${Container} {
    height: 100%;

    opacity: ${visible ? 1 : 0};
    transition: opacity 0.2s;
  }

  ${Row} {
    height: 100%;
    background: ${config(theme).debug.color}0D;
  }

  ${Col} {
    height: 100%;

    & > div {
      position: relative;

      width: 100%;
      height: 100%;

      &::before,
      &::after {
        content: '';

        position: absolute;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;

        background: ${config(theme).debug.color}0D;
      }
    }
  }
`;

export const GridOverlay: FC<GridOverlayProps> = styled('div')<
  GridOverlayProps
>(baseStyle);

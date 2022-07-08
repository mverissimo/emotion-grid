import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { config } from '../../../../config';

import { StyleProps } from '../../../../types/emotion';

type GridOverlayProps = {
  visible?: boolean;
  children?: React.ReactNode;
};

const baseStyle = ({ theme, visible }: GridOverlayProps & StyleProps) => css`
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

  .EmotionGrid-Container {
    height: 100%;

    opacity: ${visible ? 1 : 0};
    transition: opacity 0.2s;
  }

  .EmotionGrid-Row {
    height: 100%;
    background: ${config(theme).grid.colors.blue}0D;
  }

  .EmotionGrid-Col {
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

        background: ${config(theme).grid.colors.blue}0D;
      }
    }
  }
`;

const GridOverlay = styled('div')<GridOverlayProps>(baseStyle);

export default GridOverlay;

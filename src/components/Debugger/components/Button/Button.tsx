import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { config } from '../../../../config';
import { StyleProps } from '../../../../types/emotion';

type ButtonProps = {
  isActive: boolean;
  onClick?: (e: React.MouseEvent) => void;
};

const baseStyle = ({ theme, isActive }: ButtonProps & StyleProps) => css`
  label: button;

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  right: 30px;
  bottom: 30px;

  margin: 0;

  width: 58px;
  height: 58px;

  overflow: hidden;

  padding: 0;
  box-sizing: border-box;

  color: ${isActive ? `${config(theme).grid.colors.blue}` : '#fff'};
  font-size: 14px;
  font-weight: bold;

  text-transform: uppercase;

  cursor: pointer;
  user-select: none;
  pointer-events: auto;
  -webkit-appearance: none;
  transition: background, color 0.2s;

  background: ${isActive
    ? `${config(theme).grid.colors.blue}3D`
    : `${config(theme).grid.colors.blue}`};
  border: 0;
  border-radius: 50%;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.12);
`;

const Button = styled('div')<ButtonProps>(baseStyle);

export default Button;

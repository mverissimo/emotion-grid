/** @jsx jsx */
import { FC } from 'react';

import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { config } from '../../config';
import { Types } from '../../types';

type ButtonProps = {
  isActive: boolean;
  onClick?: (e: React.MouseEvent) => void;
};

const baseStyle = ({ theme, isActive }: Types.StyleProps & ButtonProps) => css`
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

  color: ${isActive ? `rgb(${config(theme).debug.color})` : '#fff'};
  font-size: 14px;
  font-weight: bold;

  text-transform: uppercase;

  cursor: pointer;
  user-select: none;
  pointer-events: auto;
  -webkit-appearance: none;
  transition: background, color 0.2s;

  background: ${isActive
    ? `rgba(${config(theme).debug.color}, 0.25)`
    : `rgb(${config(theme).debug.color})`};
  border: 0;
  border-radius: 50%;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.12);
`;

export const Button: FC<ButtonProps> = styled('div')<ButtonProps>(baseStyle);

import { css } from '@emotion/core';

export interface DebugProps {
  debug: boolean;
}

export const debugStyle = ({ debug }: DebugProps) =>
  debug &&
  css`
    outline: solid 2px #0470f5;
    background: #f9fcff;
  `;

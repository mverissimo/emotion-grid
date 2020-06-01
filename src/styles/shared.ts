import { css } from '@emotion/core';

import config from '../config';
export interface DebugProps {
  debug: boolean;
}

export const debugStyle = ({ debug }: DebugProps) =>
  debug &&
  css`
    outline: solid 2px ${config().debug.outlineColor};
    background: ${config().debug.backgroundColor};
  `;

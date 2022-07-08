import type { ReactNode } from 'react';

import styled from '@emotion/styled';

import * as styles from './GridOverlay.styles';

export interface GridOverlayProps {
  visible?: boolean;
  children?: ReactNode;
}

const GridOverlay = styled('div')<GridOverlayProps>(styles.base);

export default GridOverlay;

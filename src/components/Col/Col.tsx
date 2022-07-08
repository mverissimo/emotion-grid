import React from 'react';
import type { Ref, ReactNode } from 'react';

import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';

import { DefaultTheme } from '../../types/emotion';

import * as styles from './Col.styles';

export interface ColProps {
  /**
   * Controls the column `size`, based on breakpoint
   */
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;

  /**
   * Controls the column `offset`
   */
  offset?: DefaultTheme['grid']['breakpoints'];

  /**
   * The ref to the HTML DOM element
   */
  ref?: Ref<HTMLDivElement>;

  /**
   * The children nodes
   */
  children: ReactNode;
}

const ColEl = styled('div', {
  shouldForwardProp: (prop) => isPropValid(prop) && prop !== 'offset',
})<ColProps>(styles.base, styles.size, styles.offset);

const Col = React.forwardRef((props: ColProps, ref?: ColProps['ref']) => {
  return <ColEl ref={ref} className="EmotionGrid-Col" {...props} />;
});

export default Col;

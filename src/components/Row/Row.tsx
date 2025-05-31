import React from 'react';
import type { Ref, ReactNode, CSSProperties } from 'react';

import styled from '@emotion/styled';

import {
  Align,
  AlignProps,
  Justify,
  JustifyProps,
  DefaultTheme,
} from '../../types/emotion';

import * as styles from './Row.styles';

export interface RowProps {
  /**
   * The CSS `align-items` property
   */
  align?: Align | AlignProps;

  /**
   * The CSS `justify-content` property
   */
  justify?: Justify | JustifyProps;

  /**
   * The CSS `flex-direction` property
   */
  reverse?: Array<keyof DefaultTheme['grid']['breakpoints']> | boolean;

  /**
   * Remove the gutter(padding) from `Cols`
   */
  noGutters?: boolean;

  /**
   * The ref to the HTML DOM element
   */
  ref?: Ref<HTMLDivElement>;

  /**
   * The children nodes
   */
  children: ReactNode;
  
  /**
   * The custom style inline
   */
  style?: CSSProperties;
}

const RowEl = styled('div')<RowProps>(
  styles.base,
  styles.align,
  styles.justify,
  styles.reverse,
  styles.noGutter
);

const Row = React.forwardRef((props: RowProps, ref?: RowProps['ref']) => {
  return <RowEl ref={ref} className="EmotionGrid-Row" {...props} />;
});

export default Row;

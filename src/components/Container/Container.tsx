import React from 'react';
import type { Ref, ReactNode } from 'react';

import styled from '@emotion/styled';

import * as styles from './Container.styles';

export interface ContainerProps {
  /**
   * The CSS `max-width` property
   */
  fluid?: boolean;

  /**
   * Enable a background, to visual debug
   */
  debug?: boolean;

  /**
   * The ref to the HTML DOM element
   */
  ref?: Ref<HTMLDivElement>;

  /**
   * The children nodes
   */
  children: ReactNode;
}

const ContainerEl = styled('div')<ContainerProps>(
  styles.base,
  styles.fluid,
  styles.debug
);

const Container = React.forwardRef(
  (props: ContainerProps, ref?: ContainerProps['ref']) => {
    return (
      <ContainerEl ref={ref} className="EmotionGrid-Container" {...props} />
    );
  }
);

export default Container;

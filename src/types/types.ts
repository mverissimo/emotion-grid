import { ReactNode } from 'react';

export type Breakpoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

/**
 * Flexbox properties
 */
export type Align =
  | 'baseline'
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'stretch';

export type Justify =
  | 'center'
  | 'flex-end'
  | 'flex-start'
  | 'space-around'
  | 'space-between';

export interface AlignProps {
  xs?: Align;
  sm?: Align;
  md?: Align;
  lg?: Align;
  xl?: Align;
}

export interface JustifyProps {
  xs?: Justify;
  sm?: Justify;
  md?: Justify;
  lg?: Justify;
  xl?: Justify;
}

/**
 * Components
 */
export interface ContainerProps {
  fluid?: boolean;
  debug?: boolean;
  children: ReactNode;
}

export interface RowProps {
  align?: AlignProps | Align;
  justify?: JustifyProps | Justify;
  reverse?: boolean | Array<Breakpoints>;
  noGutters?: boolean;
  debug?: boolean;
  children?: ReactNode;
}

/**
 * Grid config
 */
export interface Grid {
  container: Record<Breakpoints, number | string>;
  padding: Record<Breakpoints, number>;
  columns: Record<Breakpoints, number>;
  gutter: Record<Breakpoints, number>;
  breakpoints: Record<Breakpoints, number>;
  debug: {
    backgroundColor: string;
    outlineColor: string;
  };
}

export interface Theme {
  grid?: Partial<Grid>;
}

export type ThemeProps = Theme | { theme: Theme };

export interface StyleProps {
  theme?: any;
}

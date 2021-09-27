import '@emotion/react';

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

export interface DefaultTheme {
  grid?: {
    container: Record<Breakpoints, number | string>;
    padding: Record<Breakpoints, number>;
    columns: Record<Breakpoints, number>;
    gutter: Record<Breakpoints, number>;
    breakpoints: Record<Breakpoints, number>;
    colors: {
      blue: string;
    };
  };
}
export interface StyleProps {
  theme: DefaultTheme;
}

declare module '@emotion/react' {
  export interface Theme extends DefaultTheme {}
}

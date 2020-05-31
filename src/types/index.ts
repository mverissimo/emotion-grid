export type Breakpoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface Grid {
  container: Record<Breakpoints, number | string>;
  padding: Record<Breakpoints, number>;
  columns: Record<Breakpoints, number>;
  gutter: Record<Breakpoints, number>;
  breakpoints: Record<Breakpoints, number>;
}

export interface Theme {
  theme: {
    grid: Partial<Grid>;
  };
}

export interface StyleProps {
  theme: Theme;
}

import { Grid, Breakpoints, Theme } from './types';

export const BREAKPOINTS: Array<Breakpoints> = ['xs', 'sm', 'md', 'lg', 'xl'];

function config(props?: Theme): Grid {
  const base = {
    container: {
      xs: 'full',
      sm: 'full',
      md: 'full',
      lg: 90,
      xl: 90,
    },
    padding: {
      xs: 1,
      sm: 1,
      md: 1.5,
      lg: 1.5,
      xl: 1.5,
    },
    columns: {
      xs: 4,
      sm: 8,
      md: 8,
      lg: 12,
      xl: 12,
    },
    gutter: {
      xs: 1,
      sm: 1,
      md: 1.875,
      lg: 1.875,
      xl: 1.875,
    },
    breakpoints: {
      xs: 0,
      sm: 0,
      md: 48,
      lg: 64,
      xl: 71.25,
    },
  };

  return { ...base, ...props };
}

export default config;

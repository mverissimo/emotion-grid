import { Types } from '../types';

export const BREAKPOINTS: Array<Types.Breakpoints> = [
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
];

export const DEFAULT_CONFIG: Types.Grid = {
  container: {
    xs: 'full',
    sm: 'full',
    md: 45,
    lg: 60,
    xl: 71.25,
  },
  padding: {
    xs: 1.875,
    sm: 1.875,
    md: 1.875,
    lg: 1.875,
    xl: 1.875,
  },
  columns: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 12,
    xl: 12,
  },
  gutter: {
    xs: 1.875,
    sm: 1.875,
    md: 1.875,
    lg: 1.875,
    xl: 1.875,
  },
  breakpoints: {
    xs: 1,
    sm: 33.75,
    md: 48,
    lg: 64,
    xl: 71.25,
  },
  debug: {
    color: '#0470F5',
  },
};

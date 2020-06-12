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
    md: 45.563,
    lg: 60,
    xl: 71.25,
  },
  padding: {
    xs: 0.938,
    sm: 0.938,
    md: 0.938,
    lg: 0.938,
    xl: 0.938,
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
    sm: 33.75,
    md: 48,
    lg: 64,
    xl: 71.25,
  },
  debug: {
    color: '4, 112, 245',
  },
};

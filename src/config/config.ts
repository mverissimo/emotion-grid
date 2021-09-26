import { Theme } from '@emotion/react';
import { DEFAULT_CONFIG } from './constants';
import { DefaultTheme } from '../types/emotion';

type ThemeArgs = DefaultTheme | { theme: DefaultTheme };

function isTheme(args: ThemeArgs): args is Theme {
  return (args as { theme: Theme }).theme === undefined;
}

export const getTheme = (args: ThemeArgs): Theme =>
  isTheme(args) ? args : args.theme;

function config(props: ThemeArgs = {}): DefaultTheme {
  const theme = getTheme(props);

  return {
    ...DEFAULT_CONFIG,
    ...theme,
  };
}

export default config;

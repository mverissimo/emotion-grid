import { Grid, Theme, ThemeProps } from '../types';

function isTheme(props: ThemeProps): props is Theme {
  return (props as { theme: Theme }).theme === undefined;
}

function getTheme(props: ThemeProps): Theme {
  return isTheme(props) ? props : props.theme;
}

export function mergeThemes(standard: Grid, custom: ThemeProps): Grid {
  const theme = getTheme(custom);

  return {
    ...standard,
    ...theme.grid,
  };
}

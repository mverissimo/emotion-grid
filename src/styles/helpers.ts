import { Types } from '../types';

function isTheme(props: Types.ThemeProps): props is Types.Theme {
  return (props as { theme: Types.Theme }).theme === undefined;
}

function getTheme(props: Types.ThemeProps): Types.Theme {
  return isTheme(props) ? props : props.theme;
}

export function mergeThemes(
  standard: Types.Grid,
  custom: Types.ThemeProps
): Types.Grid {
  const theme = getTheme(custom);

  return {
    ...standard,
    ...theme.grid,
  };
}

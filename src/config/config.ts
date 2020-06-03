import { Types } from '../types';
import { DEFAULT_CONFIG } from './constants';

function isTheme(props: Types.ThemeProps): props is Types.Theme {
  return (props as { theme: Types.Theme }).theme === undefined;
}

function getTheme(props: Types.ThemeProps): Types.Theme {
  return isTheme(props) ? props : props.theme;
}

function config(props: Types.Theme = {}): Types.Grid {
  const theme = getTheme(props);

  return {
    ...DEFAULT_CONFIG,
    ...theme.grid,
  };
}

export default config;

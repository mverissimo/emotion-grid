import React from 'react';
import { withTheme } from '@emotion/react';

import { StyleProps } from '../../types/emotion';
import { getBreakpoint } from '../../utils/get-breakpoint';

export interface HiddenProps {
  xs?: boolean;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  xl?: boolean;
  children: React.ReactNode;
}

function Hidden({
  xs,
  sm,
  md,
  lg,
  xl,
  theme,
  children,
}: HiddenProps & StyleProps) {
  const initialState = getBreakpoint();
  const [{ screen }, setState] = React.useState({ screen: initialState });

  React.useEffect(() => {
    const setScreen = () => {
      const currentScreen = getBreakpoint(theme);

      if (currentScreen !== screen) {
        setState({
          screen: currentScreen,
        });
      }
    };

    setScreen();

    //SSR typecheck
    if (typeof window !== 'undefined') {
      window.addEventListener('orientationchange', setScreen, false);
      window.addEventListener('resize', setScreen, false);
    }

    return () => {
      window.removeEventListener('orientationchange', setScreen);
      window.removeEventListener('resize', setScreen);
    };
  }, [theme, screen]);

  const isHidden = () => {
    switch (screen) {
      case 'xs':
        return xs;

      case 'sm':
        return sm;

      case 'md':
        return md;

      case 'lg':
        return lg;

      case 'xl':
        return xl;
    }
  };

  return !isHidden() ? <React.Fragment>{children}</React.Fragment> : null;
}

export default withTheme(Hidden);

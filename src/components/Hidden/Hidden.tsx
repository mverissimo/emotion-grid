import React, { useState, useEffect, Fragment } from 'react';
import { withTheme } from '@emotion/react';

import { Types } from '../../types';
import { getBreakpoint } from '../../utils/getBreakpoint';

function Hidden({
  xs,
  sm,
  md,
  lg,
  xl,
  theme,
  children,
}: Types.StyleProps & Types.HiddenProps) {
  const [{ screen }, setState] = useState({ screen: getBreakpoint() });

  useEffect(() => {
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

  return !isHidden() ? <Fragment>{children}</Fragment> : null;
}

export default withTheme(Hidden);

import { useState, useEffect } from 'react';
import { withTheme } from '@emotion/react';

import { Types } from '../../types';
import { getBreakpoint } from '../../utils/get-breakpoint';

function ScreenClass({
  theme,
  render,
}: Types.StyleProps & Types.ScreenClassProps) {
  const [{ screen }, setState] = useState({ screen: 'xs' });

  useEffect(() => {
    const setScreen = () => {
      let lastScreen = screen;
      const currentScreen = getBreakpoint(theme);

      if (lastScreen !== currentScreen) {
        lastScreen = currentScreen;

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

  return typeof render === 'function' && render(screen);
}

export default withTheme(ScreenClass);

import React, { ReactElement } from 'react';
import { withTheme } from '@emotion/react';

import { getBreakpoint } from '../../utils/get-breakpoint';
import { StyleProps } from '../../types/emotion';

export interface ScreenClassProps {
  render: (screen: string) => ReactElement;
}

function ScreenClass({ theme, render }: ScreenClassProps & StyleProps) {
  const [{ screen }, setState] = React.useState({ screen: 'xs' });

  React.useEffect(() => {
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

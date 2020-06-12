import React, { Fragment, useState, useEffect } from 'react';
import { withTheme } from 'emotion-theming';

import { Container } from '../Container';
import { Row } from '../Row';
import { Col } from '../Col';

import { Types } from '../../types';
import { getBreakpoint } from '../../utils/getBreakpoint';
import { config } from '../../config';

import { Button } from './Button';
import { GridOverlay } from './GridOverlay';

// https://stackoverflow.com/questions/39549424/how-to-create-unique-keys-for-react-elements/51428373
const generateKey = (pre: string | number): string => {
  return `${pre}_${new Date().getTime()}`;
};

function Debugger({ theme }: Types.StyleProps) {
  const [visible, setVisible] = useState(false);
  const [{ screen, columns }, setState] = useState({
    screen: getBreakpoint(theme),
    columns: config(theme).columns[getBreakpoint(theme)],
  });

  const toggleVisible = () => setVisible(!visible);

  useEffect(() => {
    const setScreen = () => {
      let lastScreen = screen;
      const currentScreen = getBreakpoint(theme);

      if (lastScreen !== currentScreen) {
        lastScreen = currentScreen;

        setState({
          screen: currentScreen,
          columns: config(theme).columns[currentScreen],
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

  return (
    <Fragment>
      <GridOverlay visible={visible}>
        <Container>
          <Row>
            {Array(columns)
              .fill('')
              .map((item, index) => (
                <Col key={generateKey(index)}>
                  <div />
                </Col>
              ))}
          </Row>
        </Container>
      </GridOverlay>

      <Button onClick={() => toggleVisible()} isActive={visible}>
        {screen}
      </Button>
    </Fragment>
  );
}

export default withTheme(Debugger);

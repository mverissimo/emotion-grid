import { Fragment, useState, useEffect } from 'react';
import { withTheme } from '@emotion/react';

import { getBreakpoint } from '../../utils/get-breakpoint';
import { config } from '../../config';

import { Container } from '../Container';
import { Row } from '../Row';
import { Col } from '../Col';

import { Button } from './components/Button';
import { GridOverlay } from './components/GridOverlay';

import { StyleProps } from '../../types/emotion';

/**
 * NOTE:
 * https://stackoverflow.com/questions/39549424/how-to-create-unique-keys-for-react-elements/51428373
 */
const generateKey = (pre: string | number): string => {
  return `${pre}_${new Date().getTime()}`;
};

function Debugger({ theme }: StyleProps) {
  const [visible, setVisible] = useState(false);
  const [{ screen, columns }, setState] = useState({
    screen: getBreakpoint(theme),
    columns: config(theme).grid.columns[getBreakpoint(theme)],
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
          columns: config(theme).grid.columns[currentScreen],
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

      <Button onClick={toggleVisible} isActive={visible}>
        {screen}
      </Button>
    </Fragment>
  );
}

export default withTheme(Debugger);

import { render } from '@testing-library/react';

import { Container } from '.';
import { Row } from '../Row';
import { Col } from '../Col';

describe('Container', () => {
  it('should render with default styles for media %s', () => {
    const {
      container: { firstChild },
    } = render(<Container>Container</Container>);

    expect(firstChild).toMatchSnapshot();
  });

  it('should render with fluid styles when passed the fluid prop', () => {
    const {
      container: { firstChild },
    } = render(<Container fluid>Container fluid</Container>);

    expect(firstChild).toMatchSnapshot();
  });

  it('should render with debug styles when passed the debug prop', () => {
    const {
      container: { firstChild },
    } = render(
      <Container debug>
        <Row>
          <Col>Col</Col>
        </Row>
      </Container>
    );

    expect(firstChild).toMatchSnapshot();
  });
});

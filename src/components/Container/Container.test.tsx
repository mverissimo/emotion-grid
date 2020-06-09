import React from 'react';
import { render } from '@testing-library/react';

import { Container } from './Container';
import { Row } from '../Row';
import { Col } from '../Col';

describe('Container', () => {
  it('should render with default styles', () => {
    const { container } = render(<Container />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with fluid styles when passed the fluid prop', () => {
    const { container } = render(<Container fluid />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with debug styles when passed the debug prop', () => {
    const { container } = render(
      <Container debug>
        <Row>
          <Col />
        </Row>
      </Container>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
